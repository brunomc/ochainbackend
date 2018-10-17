'use strict'

const Model = use('Model')

class Product extends Model {
  	owner_products () {
    return this.belongsTo('App/Models/OwnerProduct')
  }
}

module.exports = Product
