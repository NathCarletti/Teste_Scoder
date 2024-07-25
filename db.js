const { Sequelize } = require('sequelize');

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Variável de ambiente DATABASE_URL não configurada.');
}


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão ok.');
  } catch (error) {
    console.error('Não conecta ao BD:', error);
  }
};

module.exports = { sequelize, connectDB };