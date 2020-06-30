import { Router } from 'express'

// ==== Controllers ==== \\
import UserController from '../app/controllers/UserController'

const routes = Router({ caseSensitive: false })

routes.post('/user', UserController.create)

export default routes
