
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface IProduct extends Document {
    company: ICompany;
    title: String,
    description: string;
    product_img: String,


}

const ProductSchema: Schema<IProduct> = new mongoose.Schema({
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

    product_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Product ||
    mongoose.model<IProduct>("Product", ProductSchema);
