import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const getCommentsbyPostId = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const comments = await prisma.comment.findMany({
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

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Error getting comments',
        });

    }

}

export const postComment = async (req: Request, res: Response) => {

    const { content, userId } = req.body;
    const {id} = req.params;

    try {

        const comment = await prisma.comment.create({
            data: {
                content,
                authorId: Number(userId),
                postId: Number(id)
            }
        });

        res.status(200).json({
            comment
        });



    } catch (e) {

        res.status(500).json({
            message: 'Error creating comment',
        });

    }

}