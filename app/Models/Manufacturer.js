'use strict'

const Model = use('Model')

class Manufacturer extends Model {
	products () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Manufacturer
