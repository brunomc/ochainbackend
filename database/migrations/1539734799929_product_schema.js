'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.integer('owner_product_id').unsigned()
      table
        .foreign('owner_product_id')
        .references('owner_products.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.binary('image')
    })
  }

  down () {
    this.table('products', (table) => {
       table.dropColumn('ownerProduct_id')
    })
  }
}

module.exports = ProductSchema
