

import { NextRequest, NextResponse } from 'next/server';
import CompanyAbout from '../../../../../backend/models/company-about';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'
import { uploadFile } from '../../../../../backend/utils/cloudinary';






export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const banner = await CompanyAbout.findById(params.id);
    if (!banner) {
      return NextResponse.json({ success: false, message: "CompanyAbout not found" }, { status: 404 });
    }
    // Delete the banner from the database
    await banner?.deleteOne();

    // Delete the associated image file
    const bannerDir = path.join(process.cwd(), 'public', 'images', banner.about_img);
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

  const record = await CompanyAbout.findById(params.id); 


  return NextResponse.json(record);
}





export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();

    // console.log('Company form data is =>',formData)

   

     // Get file from form data (optional)
     const file = formData.get('file') as unknown as File | null;

     // Find the existing aboutBrief record
     const aboutBrief = await CompanyAbout.findById(params.id);
     if (!aboutBrief) {
       return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
     }
 
     let about_img = ""
     if(file?.name){
       const buffer = Buffer.from(await file.arrayBuffer());
 
       const result = await uploadFile(buffer, "punam/gallery");
       about_img = (result as any).secure_url;
     }else{
      about_img = aboutBrief.about_img
     }

     const company = formData.get('company') as string;
     const aboutHeading = formData.get('aboutHeading') as string;
    const aboutDesc = formData.get('aboutDesc') as string;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const otherDesc = formData.get('otherDesc') as string;

   

    // Update the banner with the new data
    const updatedCompanyAbout = await CompanyAbout.findByIdAndUpdate(
      params.id,
      { $set: {company,aboutHeading,aboutDesc,title,description,otherDesc, about_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'CompanyAbout Updated Successfully', updatedCompanyAbout });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




