import express, { Express } from 'express';
import * as http from 'http';
import setupRoutes from '../controllers';

const app: Express = express();

const port: string = process.env.PORT || '3000';

app.use(express.json());
setupRoutes(app);

const runServer = (): http.Server => app.listen(port, () => console.log(`Running on port ${port}`));

export default runServer;
