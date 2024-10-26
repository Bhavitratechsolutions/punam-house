
import mongoose, { Document, Schema } from "mongoose";
import { ICompany } from "./company";

export interface IService extends Document {
    company: ICompany;
    serviceName: String,
    title: String,
    description: string;
    service_img: String,


}

const ServiceSchema: Schema<IService> = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Company",
    },
    serviceName: {
        type: String,

    },
    title: {
        type: String,

    },
    description: {
        type: String,

    },

    service_img: {
        required: false,
        type: String,
    }
});



export default mongoose.models.Service ||
    mongoose.model<IService>("Service", ServiceSchema);
