import express, { Express } from 'express';
import * as http from 'http';
import cors from 'cors';
import setupRoutes from '../controllers';
import options from '../config/cors';

const app: Express = express();

const port: string = process.env.PORT || '3000';

app.use(express.json());
app.use(cors(options));

setupRoutes(app);

const runServer = (): http.Server => app.listen(port, () => console.log(`Running on port ${port}`));

export default runServer;
