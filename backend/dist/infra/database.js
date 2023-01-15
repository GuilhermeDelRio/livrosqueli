"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DB_URL = 'mongodb://localhost:27017/db_books_i_read';
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = DataBase;
