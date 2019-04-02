// esse arquivo é uma demonstração para as tabelas reais do projeto

// função para evolução do banco de dados (controle de versões novas)
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary
    table.string('name').notNull()
    table.string('e-mail').notNull().unique()
    // unique() - único
    table.string('password').notNull()
    table.boolean('admin').notNull().defaultTo(false)
    table.integer('parentId').references('id').inTable('categories')
  })
};

// função para involução do banco de dados (controle de versões antigas)
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
