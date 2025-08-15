import { Router } from 'express';
import { UserController } from '../controllers/UserControllers';
import { PostController } from '../controllers/PostController';

const routes = Router();
const userController = new UserController();
const postController = new PostController();

routes.get('/users', (req, res) => userController.list(req, res));
routes.post('/users', (req, res) => userController.create(req, res));
routes.post('/posts', (req, res) => postController.create(req, res));

export default routes;