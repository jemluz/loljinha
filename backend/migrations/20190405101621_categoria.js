
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categoria', table => {
    table.increments('id').primary
    table.string('descricao').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categoria')
};
