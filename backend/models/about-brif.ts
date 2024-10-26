import mongoose, { Document, Schema } from "mongoose";



export interface IAboutBrief extends Document {
  title: string;
  heading: string;
  description: string;
  subTitle: string;
  subDesc: string;
  subTitleS: string;
  subDescS: string;
  about_image: String,


}

const AboutBriefSchema: Schema<IAboutBrief> = new mongoose.Schema({

  title: {
    type: String,

  },
  heading: {
    type: String,

  },
  description: {
    type: String,

  },
  subTitle: {
    type: String,

  },
  subDesc: {
    type: String,

  },
  subTitleS: {
    type: String,

  },
  subDescS: {
    type: String,

  },
  about_image: {
    required: false,
    type: String,
  }
});

// Encrypting password before saving the user


export default mongoose.models.AboutBrief ||
  mongoose.model<IAboutBrief>("AboutBrief", AboutBriefSchema);
