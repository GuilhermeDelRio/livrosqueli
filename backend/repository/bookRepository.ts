import * as mongoose from 'mongoose';
import BookSchema from '../models/bookSchema';

export default mongoose.model('books', BookSchema);