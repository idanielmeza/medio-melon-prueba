"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validId_1 = require("../middlewares/validId");
const validSchemas_1 = require("../middlewares/validSchemas");
const router = (0, express_1.Router)();
router.post('/', [
    validSchemas_1.validSchemaUser,
    validId_1.existsUserByEmail
], controllers_1.postUser);
exports.default = router;
//# sourceMappingURL=users.js.map