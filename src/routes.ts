import { Router } from 'express'
import { authMiddleware } from './middlewares/authMiddleware'
import { UserController } from './controllers/UserController'
import { PostController } from './controllers/postController'
import { AnswerController } from './controllers/answerController'

const routes = Router()

routes.post('/login', new UserController().login)
routes.post('/user', new UserController().create)

routes.use(authMiddleware) 

routes.get('/profile', new UserController().getProfile)
routes.post('/post', new PostController().create) 

export default routes
