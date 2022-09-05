"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSchemaComment = exports.validSchemaPost = exports.validSchemaUser = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
const postSchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    authorId: zod_1.z.number(),
    keywords: zod_1.z.string()
});
const commentSchema = zod_1.z.object({
    content: zod_1.z.string(),
    postId: zod_1.z.number(),
    authorId: zod_1.z.number()
});
const validSchemaUser = (req, res, next) => {
    const { name, email } = req.body;
    try {
        userSchema.parse({ name, email });
        next();
    }
    catch (e) {
        res.status(400).json({
            message: 'Error validating user schema'
        });
    }
};
exports.validSchemaUser = validSchemaUser;
const validSchemaPost = (req, res, next) => {
    const { title, content, authorId, keywords } = req.body;
    try {
        postSchema.parse({ title, content, authorId, keywords });
        next();
    }
    catch (e) {
        res.status(400).json({
            message: 'Error validating post schema'
        });
    }
};
exports.validSchemaPost = validSchemaPost;
const validSchemaComment = (req, res, next) => {
    const { content, postId, authorId } = req.body;
    try {
        commentSchema.parse({ content, postId, authorId });
        next();
    }
    catch (e) {
        res.status(400).json({
            message: 'Error validating comment schema'
        });
    }
};
exports.validSchemaComment = validSchemaComment;
//# sourceMappingURL=validSchemas.js.map