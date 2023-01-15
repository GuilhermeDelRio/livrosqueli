"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bookSchema_1 = require("../models/bookSchema");
exports.default = mongoose.model('books', bookSchema_1.default);
