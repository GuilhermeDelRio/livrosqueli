import * as mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: {type:String},
  author: {type:String},
  img: {type:String},
  genre: {type:String},
  pages: {type:Number},
  review: {type:String},
  rating: {type:Number},
  publishDate: {type:Date},
});

export default BookSchema;