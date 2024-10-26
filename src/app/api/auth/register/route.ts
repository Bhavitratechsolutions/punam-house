
import dbConnect from "../../../../../backend/config/dbConnect";
// import { registerUser } from "../../../../../backend/controllers/authControllers";
// import { createEdgeRouter } from "next-connect";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../../../backend/models/user";



export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await req.json();
    const { name, email, password } = body;

    // Validate the required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the user
    const newUser = await User.create({ name, email, password });

    // Return success response
    return NextResponse.json(
      { success: true, data: newUser },
      { status: 201 }
    );
  } catch (error:any) {
    // Handle specific errors (e.g., validation, database errors)
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    // Generic error handling
    return NextResponse.json(
      { success: false, message: 'Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   dbConnect();

//    const body = await req.json();

//    const { name, email, password } = body;
//   //  console.log('user registration is =======>',body)
//   //  return
 
//    await User.create({
//      name,
//      email,
//      password,
//    });
 
//    return NextResponse.json({
//      success: true,
//    });

// }
