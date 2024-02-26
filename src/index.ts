import express, { Request, Response } from 'express';
const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

const APP_PORT = 7238;

const a: { title: string } = { title: 'Hello World 12312!' };
console.log({
  a,
});

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}!`);
});
