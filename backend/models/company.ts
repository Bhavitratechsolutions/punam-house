import mongoose, { Document, Schema } from "mongoose";



export interface ICompany extends Document {
    name: string;
    description: string;
    metaTitle: string;
    metaDesc: string;
    metaKeyword: string;
    company_img: String,
    slug: String,


}

const CompanySchema: Schema<ICompany> = new mongoose.Schema({
    name: {
        type: String,
        unique:true,
       required: [true, "Please enter Company Name"],
    },
    description: {
        type: String,
        unique: false,
       
    },

    metaTitle: {
        type: String,
        unique: false,
       
    },
    metaDesc: {
        type: String,
        unique: false,
       
    },
    metaKeyword: {
        type: String,
        unique: false,
       
    },
    company_img: {
        required: false,
        type: String,
    },

    slug:{
        type:String,
        unique:true,
        lowercase:true,
        index:true
       }
});

// Encrypting password before saving the user


export default mongoose.models.Company ||
    mongoose.model<ICompany>("Company", CompanySchema);
