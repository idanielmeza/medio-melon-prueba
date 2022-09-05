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
exports.getPosts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { creatorId, skip = 0 } = req.query;
    try {
        const posts = yield prisma.post.findMany({
            skip: Number(skip),
            take: 5,
            where: {
                authorId: Number(creatorId) || undefined
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                _count: {
                    select: {
                        comments: true
                    }
                },
                author: {
                    select: {
                        id: true,
                        email: true,
                        name: true
                    }
                }
            }
        });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error getting posts',
        });
    }
});
exports.getPosts = getPosts;
//# sourceMappingURL=posts.js.map