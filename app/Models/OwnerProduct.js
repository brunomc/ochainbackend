'use strict'

const Model = use('Model')

class OwnerProduct extends Model {
	users () {
     return this.hasMany('App/Models/User')
  	}
  	products () {
     return this.hasMany('App/Models/Product')
  	}
}

module.exports = OwnerProduct
