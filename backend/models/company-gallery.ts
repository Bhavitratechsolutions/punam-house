
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface IGallery extends Document {
    company: ICompany;
    title: String,
    description: string;
    gallery_img: String,


}

const GallerySchema: Schema<IGallery> = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
    },
  
    title: {
        type: String,

    },
    description: {
        type: String,

    },

    gallery_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Gallery ||
    mongoose.model<IGallery>("Gallery", GallerySchema);
