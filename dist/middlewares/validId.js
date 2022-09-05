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
exports.existsUserByEmail = exports.existsPost = exports.existsUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const existsUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });
        if (!user) {
            return res.status(404).json({
                message: 'User does not exits'
            });
        }
        next();
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error validating user'
        });
    }
});
exports.existsUser = existsUser;
const existsPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!post) {
            return res.status(404).json({
                message: 'Post does not exits'
            });
        }
        next();
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error validating post'
        });
    }
});
exports.existsPost = existsPost;
const existsUserByEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                email
            }
        });
        if (user) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        next();
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error validating user'
        });
    }
});
exports.existsUserByEmail = existsUserByEmail;
//# sourceMappingURL=validId.js.map