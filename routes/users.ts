import {Router} from 'express';
import { postUser } from '../controllers';
import { existsUserByEmail } from '../middlewares/validId';
import { validSchemaUser } from '../middlewares/validSchemas';

const router = Router();

router.post('/',[
    validSchemaUser,
    existsUserByEmail
] ,postUser);

export default router;