/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

// get all user
router.get('/', [UsersController, 'index'])

// create new user
router.post('/users', [UsersController, 'store'])
