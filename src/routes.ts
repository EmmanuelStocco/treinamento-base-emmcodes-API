import { Router } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'
import { UserController } from './controllers/UserController'
import { PostController } from './controllers/postController'

const routes = Router()

routes.post('/login', new UserController().login)
routes.post('/user', new UserController().create)
routes.get('/user/all', new UserController().all)

routes.use(authMiddleware)

routes.get('/profile', new UserController().getProfile)
routes.post('/post', new PostController().create)

export default routes
