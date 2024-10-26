import mongoose, { Document, Schema } from "mongoose";


export interface ISeo extends Document {
    title: string;
    description: string;
    keywords: string; // Cha
    seoPage: string;
    // keywords: string[]; // Cha
    

}

const SeoSchema: Schema<ISeo> = new mongoose.Schema({
    title: {
        type: String,
       
    },
   
    description: {
        type: String,
        
    },
    keywords: {
        type: String,
        
    },
    seoPage:{
        type: String, 
    }

    // keywords: { // Changed from `keyword: []` to `keywords`
    //     type: [String], // Specified that it's an array of strings
    //     default: [], // Added a default value
    // },
});

// Encrypting password before saving the user


export default mongoose.models.Seo ||
    mongoose.model<ISeo>("Seo", SeoSchema);

