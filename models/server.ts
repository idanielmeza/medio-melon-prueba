import express, {Application} from 'express';
import { PostRouter, CommentsRouter, UserRouter } from '../routes';
import cors from 'cors';

export default class Server{

    private app: Application;
    private port: string;
    private paths: {
        posts: string,
        users: string,
        comments: string
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '5000';
        this.paths = {
            posts: '/posts',
            users: '/users',
            comments: '/post'
        }

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());

        // CORS Optional
        // this.app.use(cors());
    }

    routes(){
        this.app.use(this.paths.posts, PostRouter);
        this.app.use(this.paths.users, UserRouter);
        this.app.use(this.paths.comments, CommentsRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }


}

