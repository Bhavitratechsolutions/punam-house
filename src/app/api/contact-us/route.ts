
import { NextRequest, NextResponse } from "next/server";
import Contact from '../../../../backend/models/contact';
import dbConnect from "../../../../backend/config/dbConnect";


export const POST = async (req: NextRequest) => {
    dbConnect();
    let body = await req.json();

    try {

        const { firstName, lastName, description, email, phoneNo } = body;

        await Contact.create({
            firstName,
            lastName,
            email,
            phoneNo,
            description,

        })

        return NextResponse.json({ success: true, message: 'Form submitted successfully, we will contact you soon' });
    } catch (error) {
        console.log("Error occured ", error);
        return NextResponse.json({ success: false, message: error });
    }
};

export async function GET(request: NextRequest) {
    dbConnect();
    const list = await Contact.find().sort({ _id: -1 }); 
    return NextResponse.json(list)
}

