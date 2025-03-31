import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import routesHome from "./routes/rHome.js";
import routesDeck from "./routes/rDeck.js";
import error from "./middlewares/error.js";


const __dirname = path.resolve();

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.use(routesHome);
app.use(routesDeck);
app.use(error.e404);

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});




