import express, { Application, json } from 'express'
import 'express-async-errors'
import routes from '../routes'
import '../database'

class App {
  app: Application
  constructor () {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(express.json())
  }

  routes () {
    this.app.use(routes)
  }
}

export default new App().app
