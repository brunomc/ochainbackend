'use strict'

const Schema = use('Schema')

class ProdutoSchema extends Schema {
  up () {
    this.create('produtos', (table) => {
      table.increments()
      table.string('qrcode',500).notNullable().unique()
      table.string('name',255).notNullable()
      table.string('manufactureDate', 20) //formato xx/xx/xxxx
      table.string('manufacturer',255)
      table.timestamps()
    })
  }

  down () {
    this.drop('produtos')
  }
}

module.exports = ProdutoSchema
