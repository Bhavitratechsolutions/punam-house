
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface ICompanySlider extends Document {
    company: ICompany;
    title: String,
    // description: string;
    slider_img: String,


}

const CompanySliderSchema: Schema<ICompanySlider> = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
    },
  
    title: {
        type: String,

    },
    // description: {
    //     type: String,

    // },

    slider_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.CompanySlider ||
    mongoose.model<ICompanySlider>("CompanySlider", CompanySliderSchema);
