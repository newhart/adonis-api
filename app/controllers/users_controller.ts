import type { HttpContext } from '@adonisjs/core/http'
import userService from '#services/user_service'

export default class UsersController {
  public async store({ request }: HttpContext) {
    const user = await userService.createUser(request.body())
    return user
  }

  public async index() {
    const users = await userService.getAllUsers()
    return users
  }
}
