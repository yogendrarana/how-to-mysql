import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1' || 'localhost',
    user: 'root',
    password: 'password',
    database: 'howtomysql'
}); 

export default pool;