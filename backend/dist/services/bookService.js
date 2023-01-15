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
const bookRepository_1 = require("../repository/bookRepository");
class BookService {
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bookRepository_1.default.create(book);
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bookRepository_1.default.find({});
        });
    }
    getById(_bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = yield bookRepository_1.default.findOne({ _id: _bookId });
            return book;
        });
    }
    update(_bookId, book) {
        return __awaiter(this, void 0, void 0, function* () {
            let bookUpdated = yield bookRepository_1.default.findByIdAndUpdate(_bookId, book);
            return bookUpdated;
        });
    }
    delete(_bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = yield bookRepository_1.default.findByIdAndDelete(_bookId);
            return book;
        });
    }
}
exports.default = new BookService();
