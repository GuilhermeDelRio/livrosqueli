"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
let port = process.env.PORT || '3050';
startUp_1.default.app.listen(port, function () {
    console.log(`Running on port ${port}`);
});
