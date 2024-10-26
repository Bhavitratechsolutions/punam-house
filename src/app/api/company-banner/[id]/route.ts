

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import CompanyBanner from '../../../../../backend/models/company-banner';

import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'
import { uploadFile } from '../../../../../backend/utils/cloudinary';






export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const banner = await CompanyBanner.findById(params.id);
    if (!banner) {
      return NextResponse.json({ success: false, message: "CompanyBanner not found" }, { status: 404 });
    }
    // Delete the banner from the database
    await banner?.deleteOne();

    // Delete the associated image file
    const bannerDir = path.join(process.cwd(), 'public', 'images', banner.banner_img);
    try {
      await fs.unlink(bannerDir); // Delete image from file system
    } catch (err) {
      console.error('Error deleting image:', err);
    }

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
  await dbConnect(); // Ensure dbConnect is awaited

  const record = await CompanyBanner.findById(params.id); 


  return NextResponse.json(record);
}





export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();

      // Get file from form data (optional)
      const file = formData.get('file') as unknown as File | null;

      // Find the existing aboutBrief record
      const record = await CompanyBanner.findById(params.id);
      if (!record) {
        return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
      }
  
      let banner_img =""
      if(file?.name){
        const buffer = Buffer.from(await file.arrayBuffer());
  
        const result = await uploadFile(buffer, "punam/gallery");
        banner_img = (result as any).secure_url;
      }else{
        banner_img = record.banner_img
      }
      


    const title = formData.get('title') as string;
    const company = formData.get('company') as string;
    const heading = formData.get('heading') as string;
    const description = formData.get('description') as string;

    // Update the banner with the new data
    const updatedCompanyBanner = await CompanyBanner.findByIdAndUpdate(
      params.id,
      { $set: {title,company, heading, description, banner_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'CompanyBanner Updated Successfully', updatedCompanyBanner });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




