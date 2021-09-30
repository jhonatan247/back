import db from '../database'

interface Category {
  categoryId: number;
  name: string;
  level: number;
  parentId: number
}

export function getCategories(id:number, level: string): Category[] {
  try {
    console.log("LLEGA 3");
    const sql = "SELECT * FROM categories;";
    const categories = db.prepare(sql).get();
    console.log(categories);
    console.log("LLEGA 4");
    return categories;
  } catch (error) {
    console.log(error);
    throw Error("Not found 2");
  }
}