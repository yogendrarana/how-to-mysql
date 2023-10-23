class Post {
    constructor(pool) {
        this.pool = pool;
        this.tableName = 'post';
        this.schema = `CREATE TABLE IF NOT EXISTS ${this.tableName} (
            id INT NOT NULL AUTO_INCREMENT,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        )`

        this.createTable();
    }

    async createTable() {
        try {
            await this.pool.query(this.schema);
            console.log(`Table '${this.tableName}' created or already exists.`);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    async createPost(email, password) {
        try {
            await this.pool.query(`INSERT INTO ${this.tableName} (email, password) VALUES (?, ?)`, [email, password]);
            console.log('Post created.');
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default Post;