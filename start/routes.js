'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'API OCHAIN' }
})

Route.resource('users','UserController')
Route.resource('produtos','ProdutoController')
Route.post('produtos/updateOwnerProduct','ProdutoController.updateOwnerProduct')

