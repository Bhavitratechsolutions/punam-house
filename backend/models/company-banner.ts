
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface ICompanyBanner extends Document {
    company: ICompany;
    title:String,
    heading: string;
    description: string;
    banner_img: String,


}

const CompanyBannerSchema: Schema<ICompanyBanner> = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
      },
    title: {
        type: String,
       
    },
    heading: {
        type: String,
       
    },
    description: {
        type: String,
       
    },
    banner_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.CompanyBanner ||
    mongoose.model<ICompanyBanner>("CompanyBanner", CompanyBannerSchema);
