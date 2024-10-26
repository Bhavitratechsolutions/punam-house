


import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import AboutUs from '../../../../backend/models/about-us';
import dbConnect from "../../../../backend/config/dbConnect";
import { uploadFile } from "../../../../backend/utils/cloudinary";



export const POST = async (req: NextRequest) => {
  await dbConnect();
  const formData = await req.formData();

  const file: File | null = formData.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }


  const buffer = Buffer.from(await file.arrayBuffer());

  // Use the reusable upload function
  const result = await uploadFile(buffer, "punam/gallery");
  const about_img = (result as any).secure_ur
 

  try {
   
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;




    await AboutUs.create({
      title,
      description,
      about_img,

    });

    return NextResponse.json({ success: true, message: 'AboutUs added successfully' });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ success: false, message: 'Failed to add company' }, { status: 500 });
  }
};


export const GET = async (request: NextRequest) => {
  await dbConnect(); // Ensure dbConnect is awaited to complete the connection
  try {
    const list = await AboutUs.find();
    return NextResponse.json(list);
  } catch (error) {
    console.error("Error occurred while fetching companies:", error);
    return NextResponse.json({ success: false, message: 'Failed to fetch companies' }, { status: 500 });
  }
};
