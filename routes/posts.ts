import {Router} from 'express';
import {getPosts} from '../controllers';

const router = Router();

router.get('/', getPosts);

export default router;