import Database from 'better-sqlite3';
const db = new Database('./src/database/my_db.db');
export default db;