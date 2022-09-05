import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPosts = async (req: Request, res: Response) => {

    const { creatorId = undefined , skipUntilPostId = 0 } = req.query;

    try {

        const posts = await prisma.post.findMany({
            take: 5,
            skip: Number(skipUntilPostId),
            where: {
                authorId: Number(creatorId) || undefined
            },
            orderBy: {
                createdAt: 'asc'
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


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error getting posts',
        });

    }

}
