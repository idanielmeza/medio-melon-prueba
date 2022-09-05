"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = exports.CommentsRouter = exports.PostRouter = void 0;
var posts_1 = require("./posts");
Object.defineProperty(exports, "PostRouter", { enumerable: true, get: function () { return __importDefault(posts_1).default; } });
var comments_1 = require("./comments");
Object.defineProperty(exports, "CommentsRouter", { enumerable: true, get: function () { return __importDefault(comments_1).default; } });
var users_1 = require("./users");
Object.defineProperty(exports, "UserRouter", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
//# sourceMappingURL=index.js.map