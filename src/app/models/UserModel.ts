import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  BeforeCreate,
  BeforeUpdate

} from 'sequelize-typescript'
import { hash } from 'bcryptjs'
import { Console } from 'console'

@Table({ timestamps: true })
export default class User extends Model<User> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id ?: string

  @Column({ type: DataType.STRING, allowNull: false })
  name ?: string

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email ?: string

  @Column({ type: DataType.STRING })
  password_hash ?: string

  @Column({ type: DataType.VIRTUAL })
  password ?: string

  @BeforeCreate
  @BeforeUpdate
  static async beforeSaveHook (instance: User): Promise<void> {
    if (instance.password) {
      instance.password_hash = await hash(instance.password, 8)
    }
  }

  @CreatedAt
  created_at ?: Date

  @UpdatedAt
  updated_at ?: Date

  @DeletedAt
  deletion_at ?: Date
}
