import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const existsUser = async (req: Request, res: Response, next: NextFunction) => {

    const {userId} = req.body;

    try {

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });

        if(!user){
            return res.status(404).json({
                message: 'User does not exits'
            });
        }

        next();


    }catch (e){

        console.log(e);

        res.status(500).json({
            message: 'Error validating user'
        });

    }

}

export const existsPost = async (req: Request, res: Response, next: NextFunction) => {

    const {id} = req.params;

    try {

        const post = await prisma.post.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(!post){
            return res.status(404).json({
                message: 'Post does not exits'
            });
        }

        next();
    }catch (e){
            
            console.log(e);
    
            res.status(500).json({
                message: 'Error validating post'
            });
    
    }

}

export const existsUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    
    const {email} = req.body;

    try {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(user){
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        next();

    }catch (e){

        console.log(e);

        res.status(500).json({
            message: 'Error validating user'
        });


    }

}