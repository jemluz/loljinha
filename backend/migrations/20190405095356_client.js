// função para evolução do banco de dados (controle de versões novas)
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', table => {
    table.string('login').primary().notNull().unique()
    table.string('nome').notNull()
    table.string('senha').notNull()
  })
};
// função para involução do banco de dados (controle de versões novas)
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client')
};
