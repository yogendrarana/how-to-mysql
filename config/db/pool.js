import mysql from 'mysql2'

const pool = mysql.createPool({
    user: 'root',
    password: 'password',
    host: 'localhost',
    database: 'howtomysql',
    port: 3306
}).promise();

export default pool;