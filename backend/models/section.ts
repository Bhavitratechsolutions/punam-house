import mongoose, { Document, Schema } from "mongoose";


export interface ISection extends Document {
    name: string;
    heading: string;
    description: string;
    

}

const SectionSchema: Schema<ISection> = new mongoose.Schema({
    name: {
        type: String,
       
    },
    heading: {
        type: String,
       
    },
    description: {
        type: String,
        
    },

});

// Encrypting password before saving the user


export default mongoose.models.Section ||
    mongoose.model<ISection>("Section", SectionSchema);

