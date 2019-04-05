
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', table => {
    table.string('login').primary().notNull().unique()
    table.string('nome').notNull()
    table.string('senha').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client')
};
