'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('code',1000).notNullable().unique()
      table.string('name',255).notNullable()
      table.date('manufactureDate', 20)//formato xx/xx/xxxx
      table.date('expirationDate')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
