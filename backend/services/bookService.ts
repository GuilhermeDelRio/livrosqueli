import BookRepository from "../repository/bookRepository";

class BookService {

	async create(book) {
    return await BookRepository.create(book);
  }

  async get() {
    return await BookRepository.find({});
  }

  async getById(_bookId) {
    let book = await BookRepository.findOne({_id: _bookId});
    return book;
  }

  async update(_bookId, book) {
    let bookUpdated = await BookRepository.findByIdAndUpdate(_bookId, book);
    return bookUpdated;
  }

  async delete(_bookId) {
    let book = await BookRepository.findByIdAndDelete(_bookId);
    return book;
  }
}

export default new BookService();