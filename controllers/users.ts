import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const postUser = async (req: Request, res: Response) => {

    const { name, email } = req.body;

    try {
        
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        res.status(200).json({
            user
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Error creating user',
        });
    }

}