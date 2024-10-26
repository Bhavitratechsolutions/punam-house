import dbConnect from "../../../../backend/config/dbConnect";
import { NextRequest,NextResponse } from "next/server";
import Seo from "../../../../backend/models/seo";

export async function POST(request: NextRequest, ) { 
    dbConnect();
   const body = await request.json();
   const {title, description,keywords } = body;

   const section = await Seo.create({
       title,
       description,
       keywords,
   });

   return NextResponse.json({
       success: true,
       section
   });
  
}

export async function GET(request:NextRequest){
    dbConnect();
         const list = await Seo.find({});
          return NextResponse.json(
           list
        )
}




