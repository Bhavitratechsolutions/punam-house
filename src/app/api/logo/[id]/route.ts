

import { NextRequest, NextResponse } from 'next/server';
import Logo from '../../../../../backend/models/logo';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'
import { uploadFile } from '../../../../../backend/utils/cloudinary';





export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const slider = await Logo.findById(params.id);
    if (!slider) {
      return NextResponse.json({ success: false, message: "Logo not found" }, { status: 404 });
    }
    // Delete the slider from the database
    await slider?.deleteOne();


    return NextResponse.json({
      success: true,
      message: "Record deleted successfully"
    });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete record"
    }, { status: 500 });
  }
}


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  dbConnect()
  let record = await Logo.findById(params.id);

  return NextResponse.json(
    record,
  )
}





export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();

    // console.log('form data is ====>',   formData)



      // Get file from form data (optional)
      const file = formData.get('file') as unknown as File | null;

      // Find the existing aboutBrief record
      const record = await Logo.findById(params.id);
      if (!record) {
        return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
      }
  
      let logo_img = ""
      if (file?.name) {
        const buffer = Buffer.from(await file.arrayBuffer());
  
        const result = await uploadFile(buffer, "punam/gallery");
        logo_img = (result as any).secure_url;
      } else {
        logo_img = record.logo_img
      }

    const heading = formData.get('heading') as string;
  

    // Update the slider with the new data
    const updatedLogo = await Logo.findByIdAndUpdate(
      params.id,
      { $set: { heading, logo_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'Logo Updated Successfully', updatedLogo });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




