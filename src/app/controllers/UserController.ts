import { Request, Response } from 'express'
import * as yup from 'yup'

// ==> Models
import UserModel from '../models/UserModel'

class UserController {
  async create (req: Request, res: Response) {
    // ==== Validation ==== \\

    const schema = yup.object().shape({
      name: yup.string().min(3).max(48).required(),
      email: yup.string().email().required(),
      password: yup.string().min(8).max(32).required()
    })

    if (!schema.validate(req.body)) {
      return res.status(400).json({ status: 'ICORRECT BODY' })
    }

    // ==== Added in Database ==== \\

    const newUser = await UserModel.create(req.body)

    // ==== Success Return ==== \\

    return res.json(newUser)
  }

  async index (req: Request, res: Response) {

  }
}

export default new UserController()
