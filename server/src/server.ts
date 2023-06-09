import express from 'express';
import cors from 'cors';
import { json as bodyParserJson} from 'body-parser';
import { index_router } from './router/index.routes';

const app = express();
app.use(cors());
app.use(bodyParserJson());

app.use(index_router);

app.listen(3001, "localhost", () => {
	console.log("Server is running on http://localhost:3001");
});