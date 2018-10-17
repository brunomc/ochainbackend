'use strict'

const Schema = use('Schema')

class OwnerProductSchema extends Schema {
  up () {
    this.create('owner_products', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table
        .foreign('user_id')
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('product_id').unsigned()
      table
        .foreign('product_id')
        .references('products.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('owner_products')
  }
}

module.exports = OwnerProductSchema
