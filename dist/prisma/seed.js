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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
(function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const daniel = yield prisma.user.create({
                data: {
                    name: 'Daniel Eduardo',
                    email: 'daniel@prueba.es'
                }
            });
            const eduardo = yield prisma.user.create({
                data: {
                    name: 'Eduardo Daniel',
                    email: 'eduardo@prueba.es'
                }
            });
            const post1 = yield prisma.post.create({
                data: {
                    title: 'Post 1',
                    content: 'Contenido del post 1',
                    keywords: 'palabras clave del post 1',
                    authorId: daniel.id
                }
            });
            const post2 = yield prisma.post.create({
                data: {
                    title: 'Post 2',
                    content: 'Contenido del post 2',
                    keywords: 'palabras clave del post 2',
                    authorId: eduardo.id
                }
            });
            const cooment1 = yield prisma.comment.create({
                data: {
                    content: 'Comentario 1',
                    postId: post1.id,
                    authorId: daniel.id
                }
            });
            const cooment2 = yield prisma.comment.create({
                data: {
                    content: 'Comentario 2',
                    postId: post2.id,
                    authorId: eduardo.id
                }
            });
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
})();
//# sourceMappingURL=seed.js.map