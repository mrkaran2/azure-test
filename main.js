"use strict";
exports.__esModule = true;
var module1_1 = require("./module1");
var users = module1_1.getUsers();
document.write.apply(document, users);
