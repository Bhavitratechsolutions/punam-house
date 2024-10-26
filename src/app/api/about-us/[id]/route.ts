


import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import AboutUs from '../../../../../backend/models/about-us';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises';
import { uploadFile } from '../../../../../backend/utils/cloudinary';



export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // Await the database connection

    const about = await AboutUs.findById(params.id);
    if (!about) {
      return NextResponse.json({ success: false, message: "AboutUs not found" }, { status: 404 });
    }

    // Delete the about from the database
    await about.deleteOne();

    // Delete the associated image file
    const aboutDir = path.join(process.cwd(), 'public', 'images', about.about_img);
    try {
      await fs.unlink(aboutDir); // Delete image from file system
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
  await dbConnect(); // Await the database connection
  const record = await AboutUs.findById(params.id);

  return NextResponse.json(record);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
   
    
      // Get file from form data (optional)
      const file = formData.get('file') as unknown as File | null;

      // Find the existing aboutBrief record
      const record = await AboutUs.findById(params.id);
      if (!record) {
        return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
      }
  
      let about_img = ""
      if (file?.name) {
        const buffer = Buffer.from(await file.arrayBuffer());
  
        const result = await uploadFile(buffer, "punam/gallery");
        about_img = (result as any).secure_url;
      } else {
        about_img = record.about_img
      }


    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    // Create a unique slug based on the name


    // Update the about with the new data
    const updatedAboutUs = await AboutUs.findByIdAndUpdate(
      params.id,
      { $set: { title, description, about_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'AboutUs Updated Successfully', updatedAboutUs });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" }, { status: 500 });
  }
}

