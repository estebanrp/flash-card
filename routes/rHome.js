import { Router } from 'express';
import cHome from "../controllers/cHome.js";

const routes = Router();

routes.get('/', cHome.getHome)

export default routes;
