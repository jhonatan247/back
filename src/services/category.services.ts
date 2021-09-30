import { Category } from '../interfaces/Category';
import { Request } from 'express';


export function getCategories(req:Request, id:number, level: number): Category[] {
  try {
    const db = req.app.get('db');

    const sql = `SELECT * FROM categories
    WHERE categoryId != ${id} AND level = ${level}
    AND parentId = ${id}`;

    const categories = db.prepare(sql).all();
    return categories;
  } catch (error) {
    throw Error("Not found");
  }
}