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
      database: 'wt_prod',
      user:     'sam',
      password: 'sam',
      host: 'postgres://kxqvuxeukkbpvp:5c92997d95e3a058d6cbfceb00fd17aefcab836e73f3c8f3d7df721e75ae1937@ec2-23-21-246-25.compute-1.amazonaws.com:5432/dbfdaqn2tdpngl'
    }
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }
}