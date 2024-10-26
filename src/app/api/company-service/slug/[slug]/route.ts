

import { NextRequest, NextResponse } from 'next/server';
import CompanyService from '../../../../../../backend/models/company-service';
import Company from '../../../../../../backend/models/company';
import dbConnect from '../../../../../../backend/config/dbConnect';





export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect(); // Ensure dbConnect is awaited
// console.log('slug is ==========>',params.slug)
const record = await Company.findOne({slug:params.slug},{ name: true });

if(record._id){
   let result = await CompanyService.find({company:record._id})
    return NextResponse.json(result);
}else{
    return NextResponse.json({message:"No Record fount"});
}


  
}

