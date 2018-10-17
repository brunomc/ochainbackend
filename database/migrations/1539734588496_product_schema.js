'use strict'

const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.table('products', (table) => {
      table.integer('manufacturer_id').unsigned()
      table
        .foreign('manufacturer_id')
        .references('manufacturers.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('products', (table) => {
      table.dropColumn('manufacturer_id')
    })
  }
}

module.exports = ProductSchema
