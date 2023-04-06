
const configuration = {
   client: 'postgresql',
   connection: 'postgresql://postgres@localhost/database',
   migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
   },
}

export default configuration;
