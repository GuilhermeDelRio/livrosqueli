import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';
import BookService from '../services/bookService';

class BookController {

  async create(req, res) {

    let book = req.body;

    if (Helper.isBodyEmpty(book)) return res.sendStatus(400);

    await BookService.create(book)
      .then(book => Helper.sendResponse(res, HttpStatus.OK, "Livro cadastrado com sucesso!"))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  async get(req, res) {
    
    await BookService.get()
      .then(book => Helper.sendResponse(res, HttpStatus.OK, book))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  async getById(req, res) {

    const _bookId = req.params.id

    try {
     let response = await BookService.getById(_bookId);
     Helper.sendResponse(res, HttpStatus.OK, response);
    } catch(err) {
      Helper.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
    }
      
  }

  async update(req, res) {

    const _bookId = req.params.id
    let book = req.body;

    if (Helper.isBodyEmpty(book)) return res.sendStatus(400);

    try {
      await BookService.update(_bookId, book);
      Helper.sendResponse(res, HttpStatus.OK, "Livro atualizado com sucesso!");
    } catch(err) {
      Helper.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
    }
  }

  async delete(req, res) {
    
    const _bookId = req.params.id

    try {
      await BookService.delete(_bookId);
      Helper.sendResponse(res, HttpStatus.OK, "Livro deletado com sucesso!");
    } catch(err) {
      Helper.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
    }
  }
}

export default new BookController();