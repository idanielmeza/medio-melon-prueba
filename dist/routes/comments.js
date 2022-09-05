"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/:id/comments', middlewares_1.existsPost, controllers_1.getCommentsbyPostId);
router.post('/:id/comments', [
    middlewares_1.validSchemaComment,
    middlewares_1.existsUser,
    middlewares_1.existsPost
], controllers_1.postComment);
exports.default = router;
//# sourceMappingURL=comments.js.map