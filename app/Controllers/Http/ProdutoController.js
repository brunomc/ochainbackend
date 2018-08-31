const OchainX = require('../../OchainCore/OchainxCore');
/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {

  //private key gerada a partir das 12 palavras chaves privadas da carteira

  /**
   * Show a list of all produtos.
   * GET produtos
   */
async  index ({ request, response }) {
  
  return  await OchainX.list();
 
}

  /**
   * Create/save a new produto.
   * POST produtos
   */
  async store ({ request, response }) {
    const dataBody = request.only(["nameProduct","productionDate","manufacturer","trackerProgress"])
   return await OchainX.save(
     dataBody.nameProduct,
     dataBody.productionDate,
     dataBody.manufacturer,
     dataBody.trackerProgress)
  
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   */
  async show ({ params, request, response}) {
    
      return await OchainX.getProductById(params.id)  
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   */
  async update ({ params, request, response }) {
     var data = request.only(['trackerProgress']);
     return await OchainX.updateProductTracker(params.id,data.trackerProgress);
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
