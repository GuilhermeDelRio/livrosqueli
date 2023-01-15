"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const database_1 = require("./infra/database");
const bookController_1 = require("./controller/bookController");
class StartUp {
    constructor() {
        this.app = express();
        this._database = new database_1.default();
        this._database.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        // Book
        this.app.route('/api/v1/book/').post(bookController_1.default.create);
        this.app.route('/api/v1/book/').get(bookController_1.default.get);
        this.app.route('/api/v1/book/:id').get(bookController_1.default.getById);
        this.app.route('/api/v1/book/:id').put(bookController_1.default.update);
        this.app.route('/api/v1/book/:id').delete(bookController_1.default.delete);
    }
}
exports.default = new StartUp();
