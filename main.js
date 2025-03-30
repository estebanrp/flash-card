import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "static")));



app.use(cors());
app.use(helmet());

app.listen(port, () => {
    console.log("server listen in port http://localhost/3000");
});




