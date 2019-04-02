// Update with your config settings.
//  esse arquivo é responsável pelas configurações de conexão c o banco de dados.
//  ele permite diferentes conxeções para diferentes ambientes (produção, desenvolvimento, testes...)
//  nesse caso ficamos apenas com as confg de produção e dispensamos as demais
module.exports = {
  // production: { 
  client: 'postgresql',
  connection: {
    database: 'loljinha_db',
    user:     'admin',
    password: 'admin'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  // }

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
};
