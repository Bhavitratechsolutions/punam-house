

import dbConnect from "../../../../backend/config/dbConnect";
import { writeFile } from 'fs/promises'
import { uploadFile } from "../../../../backend/utils/cloudinary";
import { NextRequest, NextResponse } from 'next/server';

import AboutBrif from "../../../../backend/models/about-brif";




export async function POST(request: NextRequest) {

  dbConnect();


  try {
    const data = await request.formData();


    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, message: "Please Uoload file " })
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Use the reusable upload function
    const result = await uploadFile(buffer, "punam/gallery");
    const about_image = (result as any).secure_url;


    const title = data.get('title');
    const heading = data.get('heading');
    const description = data.get('description');
    const subTitle = data.get('subTitle');
    const subDesc = data.get('subDesc');
    const subTitleS = data.get('subTitleS');
    const subDescS = data.get('subDescS');
 




    await AboutBrif.create({
      title,
      heading,
      description,
      subTitle,
      subDesc,
      subTitleS,
      subDescS,
      about_image
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({message:"Please Upload file "})
  }
}



export async function GET(request: NextRequest) {
  const list = await AboutBrif.find()
  return NextResponse.json(list)
}







