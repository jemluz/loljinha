
exports.up = function(knex, Promise) {
  return knex.schema.createTable('produto', table => {
    table.increments('id').primary
    table.string('descricao').notNull()
    table.string('preco').notNull()
    table.integer('categoriaId').references('id').inTable('categoria')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('produto')
};
