"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            return res.status(statusCode).json({ result: data });
        };
    }
    isBodyEmpty(body) {
        if (Object.keys(body).length === 0) {
            return true;
        }
    }
}
exports.default = new Helper();
