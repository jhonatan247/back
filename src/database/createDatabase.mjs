import Database from 'better-sqlite3';
const db = new Database('my_db.db');
import csv from 'csv-parser';
import { readFileSync, createReadStream } from 'fs';

const sqlSchema = readFileSync('./category.schema.sql').toString();
// create table
db.exec('DROP TABLE IF EXISTS categories;');
db.exec(sqlSchema);

const insrow = db.prepare(
  'insert into categories (categoryId, name, level, parentId ) VALUES (?, ?, ?, ?)'
);

createReadStream('test.csv')
  .pipe(csv({ separator: ',' }))
  .on('data', (row) => {
    try {
      insrow.run(row.CategoryID, row.CategoryName, row.CategoryLevel, row.CategoryParentID);
    } catch (error) {
      console.log(error);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    db.close();
  });
