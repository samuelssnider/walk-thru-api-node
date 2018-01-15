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
            database: 'postgres://damnbkjxpwkmdy:4c03254f7413cfcfda6876bd79043f66fbf7a68c57bba1aec08abe61d655f2f2@ec2-54-227-250-33.compute-1.amazonaws.com:5432/df7fk7hlbsb26r',
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