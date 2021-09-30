import express from 'express';
require('./database');
import morgan from "morgan";
import categoryRoutes from "./routes/category.routes";

const app = express();
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