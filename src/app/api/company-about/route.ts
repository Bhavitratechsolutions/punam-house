

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

import ComapnyAbout from "../../../../backend/models/company-about";
import dbConnect from "../../../../backend/config/dbConnect";
import { uploadFile } from "../../../../backend/utils/cloudinary";






export async function GET() {

  await dbConnect();




  const list = await ComapnyAbout.find({}).populate({
    path: 'company', // Ensure 'company' is the correct field in the CompanyBanner schema
    select: 'name' // Only select the 'name' field from the Company model
  });

  // Return the populated banners as a JSON response
  return NextResponse.json(list);


}



export const POST = async (req: NextRequest) => {
  dbConnect();
  const formData = await req.formData();


  const file: File | null = formData.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }


  const buffer = Buffer.from(await file.arrayBuffer());

  // Use the reusable upload function
  const result = await uploadFile(buffer, "punam/gallery");
  const about_img = (result as any).secure_url;

  try {

    const company = formData.get('company');
    const title = formData.get('title');
    const otherDesc = formData.get('otherDesc')
    const description = formData.get('description')


    await ComapnyAbout.create({
      company,
      title,
      otherDesc,
      description,
      about_img
    })


    return NextResponse.json({ success: true, message: ' ComapnyAbout Added Successfully' });
  } catch (error: any) {
    console.log("Error occured ", error);
    return NextResponse.json({ success: false, error: error.message });
  }
};






