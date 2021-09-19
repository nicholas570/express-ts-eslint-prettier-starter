import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

const runServer = () => app.listen(port, () => console.log(`Running on port ${port}`));

export default runServer;
