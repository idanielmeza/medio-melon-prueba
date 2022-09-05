import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';


const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
})

const postSchema = z.object({
    title: z.string(),
    content: z.string(),
    authorId: z.number(),
    keywords: z.string()
})

const commentSchema = z.object({
    content: z.string(),
    id: z.string(),
    userId: z.string()
})

export const validSchemaUser = (req: Request, res: Response, next: NextFunction) => {

    const { name, email } = req.body;

    try {

        userSchema.parse({ name, email });

        next();

    } catch (e) {

        res.status(400).json({
            message: 'Error validating user schema'
        });

    }
}

export const validSchemaPost = (req: Request, res: Response, next: NextFunction) => {

    const { title, content, authorId, keywords } = req.body;

    try {

        postSchema.parse({ title, content, authorId, keywords });

        next();

    } catch (e) {

        res.status(400).json({
            message: 'Error validating post schema'
        });

    }

}

export const validSchemaComment = (req: Request, res: Response, next: NextFunction) => {

    const { content, userId } = req.body;
    const {id} = req.params;

    try {

        commentSchema.parse({ content, id, userId });

        next();

    } catch (e) {

        res.status(400).json({
            message: 'Error validating comment schema'
        });

    }

}