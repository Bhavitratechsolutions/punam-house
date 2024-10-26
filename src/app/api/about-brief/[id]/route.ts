

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import AboutBrief from "../../../../../backend/models/about-brif";
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import { uploadFile } from '../../../../../backend/utils/cloudinary';


dbConnect()
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

  const aboutBrief = await AboutBrief.findById(params.id);
  await aboutBrief?.deleteOne();
  return NextResponse.json({
    success: true,
    message: "record Deleted Successfully"
  })

}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  let record = await AboutBrief.findById(params.id);
 
  return NextResponse.json(
    record,
  )
}






export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.formData();

    // Get file from form data (optional)
    const file = data.get('file') as unknown as File | null;

    // Find the existing aboutBrief record
    const aboutBrief = await AboutBrief.findById(params.id);
    if (!aboutBrief) {
      return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
    }

    let about_image =""
    if(file?.name){
      const buffer = Buffer.from(await file.arrayBuffer());

      const result = await uploadFile(buffer, "punam/gallery");
       about_image = (result as any).secure_url;
    }else{
      about_image = aboutBrief.about_image
    }
    



 
  

    // Get description from form data
    const title = data.get('title');
    const heading = data.get('heading');
    const description = data.get('description');
    const subTitle = data.get('subTitle');
    const subDesc = data.get('subDesc');
    const subTitleS = data.get('subTitleS');
    const subDescS = data.get('subDescS');
 


    // Update the aboutBrief with the new description and image filename (if changed)
    const updatedaboutBrief = await AboutBrief.findByIdAndUpdate(
      params.id,
      { $set: { 
        description,
         title,
        heading,
        subTitle,
        subDesc,
        subTitleS,
        subDescS, about_image } },
      { new: true } // Return the updated document
    );

    // Respond with the updated aboutBrief data
    return NextResponse.json({ success: true, aboutBrief: updatedaboutBrief,message:"Record updated sucessfully" });

  } catch (error: any) {
    console.error('Error updating aboutBrief:', error);
    // Handle any errors that occur during the request
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request.', error: error.message },
      { status: 500 }
    );
  }
}


// export async function PUT(request:NextRequest,{params}: {params:{id:string}}) {

//   const data = await request.formData()

//   const file: File | null = data.get('file') as unknown as File

//   if (!file) {
//     return NextResponse.json({ success: false })
//   }

//   const bytes = await file.arrayBuffer()
//   const buffer = Buffer.from(bytes)

//   const path = `public/aboutBrief/${file.name}`
//   await writeFile(path, buffer)
//   console.log(`open ${path} to see the uploaded file`)

//   const filename = file.name


//   const description = data.get("description")



//   const aboutBriefs = await AboutBrief.findByIdAndUpdate(
//     {"_id":params.id},
//     {$set: { "description" : description,"about_image":filename,
    
//   }}
//     )

//   return NextResponse.json({aboutBriefs})
// }



// export async function PATCH(request:NextRequest,{params}: {params:{id:string}}){

//   let body = await request.json();
//   const newFlashData = {
//       heading:body.heading,
//       description:body.description,
//   }
//   const flash = await Flash.findByIdAndUpdate(params.id,newFlashData)
//   return NextResponse.json({
//       success:true,
//       flash
//   })

// }