class User {
    constructor(pool) {
        this.pool = pool;
        this.tableName = 'user';
    }

    async createUser(email, password) {
        try {
            const result = await this.pool.query(`INSERT INTO ${this.tableName} (email, password) VALUES (?, ?)`, [email, password]);
            return result;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    async getUserByEmail(email) {
        try {
            const [result] = await this.pool.query(`SELECT * FROM ${this.tableName} WHERE email = ?`, [email]);
            const user = result[0];
            return user;
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
}

export default User;