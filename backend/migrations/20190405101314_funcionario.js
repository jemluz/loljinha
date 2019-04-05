
exports.up = function(knex, Promise) {
  return knex.schema.createTable('funcionario', table => {
    table.string('login').primary().notNull().unique()
    table.string('nome').notNull()
    table.string('senha').notNull()
    table.string('salario').notNull()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('funcionario')
};
