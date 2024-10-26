

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import HomeSlider from "../../../../backend/models/home-slider";
import dbConnect from "../../../../backend/config/dbConnect";
import { uploadFile } from "../../../../backend/utils/cloudinary";






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
  const slider_img = (result as any).secure_url;

  try {
   
    const heading = formData.get('heading')
    await HomeSlider.create({
      heading,
      slider_img
    })


    return NextResponse.json({ success:true,message:' HomeSlider Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};


export async function GET(request: NextRequest){
    dbConnect();
     let list = await HomeSlider.find()
    return NextResponse.json(list)
}




