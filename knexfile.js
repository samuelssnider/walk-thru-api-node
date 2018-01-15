module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/walk_thrus',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/walk_thrus_text',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
            database: 'walk_thrus_prod',
        },
    debug: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }
}