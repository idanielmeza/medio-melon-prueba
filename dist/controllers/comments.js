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
exports.postComment = exports.getCommentsbyPostId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getCommentsbyPostId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const comments = yield prisma.comment.findMany({
            where: {
                postId: Number(id)
            },
            include: {
                author: {
                    select: {
                        id: true,
                        email: true,
                        name: true
                    }
                }
            }
        });
        res.status(200).json({
            comments
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error getting comments',
        });
    }
});
exports.getCommentsbyPostId = getCommentsbyPostId;
const postComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, userId } = req.body;
    const { id } = req.params;
    try {
        const comment = yield prisma.comment.create({
            data: {
                content,
                authorId: Number(userId),
                postId: Number(id)
            }
        });
        res.status(200).json({
            comment
        });
    }
    catch (e) {
        res.status(500).json({
            message: 'Error creating comment',
        });
    }
});
exports.postComment = postComment;
//# sourceMappingURL=comments.js.map