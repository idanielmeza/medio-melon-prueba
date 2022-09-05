"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '5000';
        this.paths = {
            posts: '/posts',
            users: '/users',
            comments: '/post'
        };
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        // CORS Optional
        // this.app.use(cors());
    }
    routes() {
        this.app.use(this.paths.posts, routes_1.PostRouter);
        this.app.use(this.paths.users, routes_1.UserRouter);
        this.app.use(this.paths.comments, routes_1.CommentsRouter);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map