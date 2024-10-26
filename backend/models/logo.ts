import mongoose, { Document, Schema } from "mongoose";



export interface ILogo extends Document {
    heading: string;
    logo_img: String,


}

const LogoSchema: Schema<ILogo> = new mongoose.Schema({
    heading: {
        type: String,
       
    },
    logo_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Logo ||
    mongoose.model<ILogo>("Logo", LogoSchema);
