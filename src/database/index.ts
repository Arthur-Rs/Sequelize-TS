import { Sequelize } from 'sequelize-typescript'
import settings from '../settings/database'

class Database {
  database!: Sequelize
  constructor () {
    this.init()
  }

  init () {
    this.database = new Sequelize(settings)
  }
}

export default new Database()
