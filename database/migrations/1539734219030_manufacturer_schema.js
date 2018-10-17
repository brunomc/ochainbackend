'use strict'

const Schema = use('Schema')

class ManufacturerSchema extends Schema {
  up () {
    this.create('manufacturers', (table) => {
      table.increments()
      table.string('name',255).notNullable()
       table.binary('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('manufacturers')
  }
}

module.exports = ManufacturerSchema
