import User from '#models/user'
import { createUserValidator } from '#validators/user'

export class UserService {
  public async createUser(userData: any) {
    const validatedUser = await createUserValidator.validate(userData)
    return await User.create(validatedUser)
  }

  public async getAllUsers() {
    return await User.all()
  }
}

export default new UserService()
