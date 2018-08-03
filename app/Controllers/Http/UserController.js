'use strict'

const User = use('App/Models/User')

class UserController {
	async store ({ request }) {
    const data = request.only(["username", "email", "password","user_type_id"])

    const user = await User.create(data)

    return user
  }
  /**
   * Show a list of all clientes.
   * GET clientes
   */
  async index ({ request, response}) {

  	const users = await User.all()

  	return users
  }
   async destroy ({ params, request, response }) {
    const user = await User.find(params.id)

    await user.delete()

  }
}

module.exports = UserController
