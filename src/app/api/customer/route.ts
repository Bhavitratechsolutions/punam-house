

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import Customer from '../../../../backend/models/customer'
import dbConnect from "../../../../backend/config/dbConnect";
import { uploadFile } from "../../../../backend/utils/cloudinary";




export async function GET(){
   let list = await Customer.find()
    return NextResponse.json(list)
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
  const customer_img = (result as any).secure_url;

  try {
   
    const heading = formData.get('heading')
    const description = formData.get('description')
    

  
    await Customer.create({
      heading,
      description,
      customer_img
    })


    return NextResponse.json({ success:true,message:' Customer Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};



