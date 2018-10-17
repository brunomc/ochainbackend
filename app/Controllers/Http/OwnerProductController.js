'use strict'

/**
 * Resourceful controller for interacting with ownerproducts
 */
class OwnerProductController {
  /**
   * Show a list of all ownerproducts.
   * GET ownerproducts
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new ownerproduct.
   * GET ownerproducts/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ownerproduct.
   * POST ownerproducts
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single ownerproduct.
   * GET ownerproducts/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ownerproduct.
   * GET ownerproducts/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ownerproduct details.
   * PUT or PATCH ownerproducts/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ownerproduct with id.
   * DELETE ownerproducts/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OwnerProductController
