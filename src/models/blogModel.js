const mongoose = require("mongoose");
// const { boolean } = require("webidl-conversions");
  const ObjectId = mongoose.Schema.Types.ObjectId;
// joi.ObjectId = require('joi-Objectid')(Joi)
//  const isValid = ObjectId.isValid
  // isValid = mongoose.Schema.Types.ObjectId.isValid
// var isValid = mongoose.Types.ObjectId.isValid(ObjectId);
// if(isValid == false){
//   return "u are a ";
// }

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
       authorId: {
      type: ObjectId,
     ref:"Author",
      required: true,
    },
    tags:{
        type:[]
    },
    catagory:{
        type:String,
        required:true,
    },
    subcatagory:{
        type:[],
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    publishedAt:{
        type:Number,

    },
    isPublished:{
        type:Boolean,
        default:false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema); //users

// { title: {mandatory}, body: {mandatory}, authorId: {mandatory, refs to author model}, tags: {array of string},
// category: {string, mandatory, examples: [technology, entertainment, life style, food, fashion]},
// subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] },
// createdAt, updatedAt, deletedAt: {when the document is deleted}, isDeleted: {boolean, default: false},
//  publishedAt: {when the blog is published}, isPublished: {boolean, default: false}}
