import mongoose, { Document, Schema } from "mongoose";


export interface IContact extends Document {
    firstName: string;
    lastName: string;
    email:String,
    phoneNo:String,
    
    description: string;
    Contact_img: String,


}

const ContactSchema: Schema<IContact> = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    description: {
        type: String,
       
    },
   
});

// Encrypting password before saving the user


export default mongoose.models.Contact ||
    mongoose.model<IContact>("Contact", ContactSchema);
