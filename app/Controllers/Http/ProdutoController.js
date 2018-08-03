'use strict'

const Produto = use('App/Models/Produto')

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  /**
   * Show a list of all produtos.
   * GET produtos
   */
  async index ({ request, response }) {
    const produtos = await Produto.all()
    return produtos
  }

  /**
   * Create/save a new produto.
   * POST produtos
   */
  async store ({ request, response }) {
      const data = request.only(["url"])

    const produto = await Produto.create(data)

    return use
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   */
  async show ({ params, request, response}) {
    const produto = await Produto.find(params.id)
    return produto
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   */
  async update ({ params, request, response }) {
    const data = request.only(["url"])
    const produto = await Produto.find(params.id)
    console.log(produto)
    produto.merge(data)
    produto.save()
    return produto
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   */
  async destroy ({ params, request, response }) {
    const produto = await Produto.find(params.id)
    produto.delete()
  }
}

module.exports = ProdutoController
