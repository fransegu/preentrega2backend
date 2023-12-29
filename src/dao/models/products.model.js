import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: String,
    },
    code:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        default: 0
    },
    category:{
        type: String,
        required: true
    },
    statues:{
        type: Boolean,
        default: true,
        required: true
    }
});

productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model("Products", productsSchema);