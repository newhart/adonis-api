import { test } from '@japa/runner'
import UsersController from 'app/controllers/users_controller'
import userService from 'app/services/user_service'

// Mock the userService
jest.mock('app/services/user_service')

test.group('UsersController', (group) => {
  let usersController: UsersController
  let ctx: any

  group.beforeEach(() => {
    usersController = new UsersController()
    ctx = {
      request: {
        body: jest.fn().mockReturnValue({ username: 'test', email: 'test@example.com', age: 20 }),
      },
    }
  })

  group.afterEach(() => {
    jest.clearAllMocks()
  })

  test('should create a user', async ({ assert }) => {
    const mockUser = { id: 3, username: 'test', email: 'test@example.com', age: 20 }
    userService.createUser.mockResolvedValue(mockUser)

    const result = await usersController.store(ctx)

    assert.equal(userService.createUser.mock.calls.length, 1)
    assert.deepEqual(result, mockUser)
  })

  test('should return all users', async ({ assert }) => {
    const mockUsers = [{ id: 3, username: 'test', email: 'test@example.com', age: 20 }]
    userService.getAllUsers.mockResolvedValue(mockUsers)

    const result = await usersController.index()

    assert.equal(userService.getAllUsers.mock.calls.length, 1)
    assert.deepEqual(result, mockUsers)
  })
})
