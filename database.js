module.exports = {
    development: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_NAME || 'ww',
      host: process.env.DB_HOST || '127.0.0.1',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306
    }
  };
  