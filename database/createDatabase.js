const mysql = require('mysql2/promise');

const createDatabase = async () => {
    const { host, port, user, password } = {host: 'localhost', port: '3306', user: 'root', password: 'root'};
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    // console.log(`Connection: ${JSON.stringify(connection)}`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ensolvers_todo;`);
}

module.exports = {
    createDatabase
  }