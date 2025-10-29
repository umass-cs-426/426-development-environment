import Sequelize from 'sequelize';

// Get an environment variable
const env = (name) => process.env[name]

// Connect to database
const dbconnect = (user, pass, host, db) =>
  new Sequelize(db, user, pass, { host, dialect: 'postgres' })

// Connec to database
const conn = dbconnect(env("POSTGRES_USER"),
                       env("POSTGRES_PASSWORD"),
                       "dev_pg",
                       "pintrails")

// Test Connection                       
try {
  await conn.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
