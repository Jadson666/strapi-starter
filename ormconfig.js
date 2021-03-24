/**
 * this Strapi migration is because Strapi has some reserved schema, therefore, if you set the autoMigration as false you need to rnu the migration specifically.
 *
 * basically this migration only will create 11 empty tables, there shouldn't be any error unless you have naming collisions
 */

const env = (key, defaultValue) => {
  return process.env[key] === undefined ? defaultValue : process.env[key];
}

module.exports = {
  type: "mysql",
  host: env('DATABASE_HOST'),
  port: env('DATABASE_PORT'),
  username: env('DATABASE_USERNAME'),
  password: env('DATABASE_PASSWORD'),
  database: env('DATABASE_NAME'),
  migrationsRun: false,
  migrationsTableName: "strapi_migration",
  migrations: ["migration/*migrate.js"],
  synchronize: false,
  cli: {
    migrationsDir: "migration",
  },
};
