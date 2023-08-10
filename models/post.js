import pool from '../config/db.js';

class Post {
    constructor(caption) {
        this.caption = caption;
    }

    async save() {
        let d = new Date();
        let date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

    }

    static async readAll() {

    }
}