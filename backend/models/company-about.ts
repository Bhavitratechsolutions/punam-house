
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface ICompanyAbout extends Document {
    company: ICompany;
    title:String,
    description: string;
    otherDesc: string;
    about_img: String,


}

const CompanyAboutSchema: Schema<ICompanyAbout> = new mongoose.Schema({
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
    otherDesc: {
        type: String,
       
    },
    about_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.CompanyAbout ||
    mongoose.model<ICompanyAbout>("CompanyAbout", CompanyAboutSchema);
