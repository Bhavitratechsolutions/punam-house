

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

import Banner from "../../../../backend/models/banner";
import dbConnect from "../../../../backend/config/dbConnect";
import { uploadFile } from "../../../../backend/utils/cloudinary";





export async function GET(){
   let list = await Banner.find()
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
  const banner_img = (result as any).secure_url;


  try {
   
    const heading = formData.get('heading')
    const description = formData.get('description')
  

  
    await Banner.create({
      heading,
      description,
      banner_img
    })


    return NextResponse.json({ success:true,message:' Banner Added Successfully' });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({success:false });
  }
};





// import { NextRequest, NextResponse } from "next/server";
// import { v2 as cloudinary } from 'cloudinary';
// import Banner from "../../../../backend/models/banner";
// import dbConnect from "../../../../backend/config/dbConnect";

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function GET() {
//   let list = await Banner.find();
//   return NextResponse.json(list);
// }

// export const POST = async (req: NextRequest) => {
//   dbConnect();
//   const formData = await req.formData();

//   const file: File | null = formData.get('file') as unknown as File;

//   if (!file) {
//     return NextResponse.json({ error: "No files received." }, { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());

//   try {
//     // Upload image to Cloudinary
//     const uploadResponse = await cloudinary.uploader.upload_stream(
//       { resource_type: 'image' },
//       async (error, result) => {
//         if (error) {
//           console.log("Cloudinary upload error:", error);
//           return NextResponse.json({ success: false, error: 'Upload failed' });
//         }

//         const heading = formData.get('heading');
//         const description = formData.get('description');
//         const banner_img = result.secure_url; // Get the URL from Cloudinary

//         // Save the banner details to the database
//         await Banner.create({
//           heading,
//           description,
//           banner_img,
//         });

//         return NextResponse.json({ success: true, message: 'Banner added successfully' });
//       }
//     );

//     // Pipe the buffer to the upload stream
//     buffer.pipe(uploadResponse);

//   } catch (error) {
//     console.log("Error occurred:", error);
//     return NextResponse.json({ success: false });
//   }
// };

