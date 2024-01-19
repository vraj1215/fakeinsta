import mongoose, { Schema, models,model } from "mongoose";

const s=new Schema({
    num:{type:String},
    pass:String
})
const S=models.fi || model('fi',s);
export default S;