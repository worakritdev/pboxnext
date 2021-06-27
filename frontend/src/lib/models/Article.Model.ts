import mongoose from "fastify-mongoose";


const Schema = mongoose.Schema

const articleSchema =new Schema({
    title:String,
    content:String,
    url:String,
    body:String,
    author:String,
    id:mongoose.Types.ObjectId
})