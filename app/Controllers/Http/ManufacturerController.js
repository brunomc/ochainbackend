'use strict'
const Manufacturer = use('App/Models/Manufacturer')
/**
 * Resourceful controller for interacting with manufacturers
 */
class ManufacturerController {
  /**
   * Show a list of all manufacturers.
   * GET manufacturers
   */
  async index ({ request, response }) {
    const manufacturers = await Manufacturer.all()

    return manufacturers
  }

  
  /**
   * Create/save a new manufacturer.
   * POST manufacturers
   */
  async store ({ request, response }) {
    const data = request.only(["name", "image"])

    const manufacturer = await Manufacturer.create(data)

    return manufacturer
  }

  /**
   * Display a single manufacturer.
   * GET manufacturers/:id
   */
  async show ({ params, request, response}) {
    const manufacturer = await Manufacturer.find(params.id)
    return manufacturer
  }

  /**
   * Update manufacturer details.
   * PUT or PATCH manufacturers/:id
   */
  async update ({ params, request, response }) {
     const data = request.only(["name", "image"])
    const manufacturer = await Manufacturer.find(params.id)
    manufacturer.merge(data)
    manufacturer.save()
    return manufacturer
  }

  /**
   * Delete a manufacturer with id.
   * DELETE manufacturers/:id
   */
  async destroy ({ params, request, response }) {
     const manufacturer = await Manufacturer.find(params.id)

    await manufacturer.delete()
  }
}

module.exports = ManufacturerController
