"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
const bookService_1 = require("../services/bookService");
class BookController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = req.body;
            if (helper_1.default.isBodyEmpty(book))
                return res.sendStatus(400);
            yield bookService_1.default.create(book)
                .then(book => helper_1.default.sendResponse(res, HttpStatus.OK, "Livro cadastrado com sucesso!"))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bookService_1.default.get()
                .then(book => helper_1.default.sendResponse(res, HttpStatus.OK, book))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _bookId = req.params.id;
            try {
                let response = yield bookService_1.default.getById(_bookId);
                helper_1.default.sendResponse(res, HttpStatus.OK, response);
            }
            catch (err) {
                helper_1.default.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _bookId = req.params.id;
            let book = req.body;
            if (helper_1.default.isBodyEmpty(book))
                return res.sendStatus(400);
            try {
                yield bookService_1.default.update(_bookId, book);
                helper_1.default.sendResponse(res, HttpStatus.OK, "Livro atualizado com sucesso!");
            }
            catch (err) {
                helper_1.default.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const _bookId = req.params.id;
            try {
                yield bookService_1.default.delete(_bookId);
                helper_1.default.sendResponse(res, HttpStatus.OK, "Livro deletado com sucesso!");
            }
            catch (err) {
                helper_1.default.sendResponse(res, HttpStatus.NOT_FOUND, "Livro não encontrado!");
            }
        });
    }
}
exports.default = new BookController();
