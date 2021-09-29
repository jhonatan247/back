import * as express from 'express';
import { Request, Response } from 'express';
const app = express();
const {
  PORT = process.env.PORT || 3000,
} = process.env;
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Holaaaaa world',
  });
});
if (require.main === module) { // true if file is executed
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
}
export default app;