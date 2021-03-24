module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 33061),
        database: env('DATABASE_NAME', 'woomanpower'),
        username: env('DATABASE_USERNAME', 'jason'),
        password: env('DATABASE_PASSWORD', '123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
