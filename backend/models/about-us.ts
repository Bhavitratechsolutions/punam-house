import mongoose, { Document, Schema } from "mongoose";



export interface IAboutUs extends Document {
    title: string;
    description: string;
    about_img: String,


}

const AboutUsSchema: Schema<IAboutUs> = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        unique: false,
       
    },
    about_img: {
        required: false,
        type: String,
    },

   
});

// Encrypting password before saving the user


export default mongoose.models.AboutUs ||
    mongoose.model<IAboutUs>("AboutUs", AboutUsSchema);
