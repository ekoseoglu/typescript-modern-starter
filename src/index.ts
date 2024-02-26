import express, { Request, Response } from 'express';
const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

const APP_PORT = 7238;

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});
