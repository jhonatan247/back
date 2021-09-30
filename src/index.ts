import express from 'express';
import morgan from "morgan";
import Database from 'better-sqlite3';

import categoryRoutes from "./routes/category.routes";

const db = new Database('./src/database/my_db.db');
const app = express();

app.set("db", db);

app.use(morgan("tiny"));
app.use(express.json());

const {
  PORT = process.env.PORT || 3000,
} = process.env;


// Routes
app.use("/", categoryRoutes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
}
export default app;