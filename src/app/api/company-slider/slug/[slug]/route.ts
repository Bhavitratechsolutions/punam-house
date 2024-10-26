

import { NextRequest, NextResponse } from 'next/server';
import CompanySlider from '../../../../../../backend/models/company-slider';
import Company from '../../../../../../backend/models/company';
import dbConnect from '../../../../../../backend/config/dbConnect';




export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect(); 
const record = await Company.findOne({slug:params.slug},{ name: true });

if(record._id){
   let result = await CompanySlider.find({company:record._id})
    return NextResponse.json(result);
}else{
    return NextResponse.json({message:"No Record fount"});
}
  
}

