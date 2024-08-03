module.exports = {
  mysql: {
    database: 'bookshelf_test',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    encoding: 'utf8',
    host: 'localhost'
  },

  postgres: {
    database: 'bookshelf_test',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    charset: 'utf8',
    ssl: false
  },

  sqlite3: {
    filename: ':memory:'
  }
};
