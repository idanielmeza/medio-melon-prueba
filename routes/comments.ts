import {Router} from 'express';
import { getCommentsbyPostId, postComment } from '../controllers';
import {existsUser, existsPost, validSchemaComment} from '../middlewares';

const router = Router();

router.get('/:id/comments',existsPost ,getCommentsbyPostId);

router.post('/:id/comments',[
    validSchemaComment,
    existsUser,
    existsPost
] ,postComment);

export default router;