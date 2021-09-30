CREATE TABLE IF NOT EXISTS categories
(
  categoryId NUM PRIMARY KEY,
  name TEXT,
  level NUM,
  parentId NUM
);