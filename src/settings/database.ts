import { resolve } from 'path'
import { SequelizeOptions } from 'sequelize-typescript'

const modelPath: string = resolve(__dirname, '..', 'app', 'models')

const Settings:SequelizeOptions = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  models: [modelPath]
}

export default Settings
