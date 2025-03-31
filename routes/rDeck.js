import { Router } from 'express';
import cDeck from "../controllers/cDeck.js";

const routes = Router();

routes.get('/deck/:id', cDeck.getDeck);

export default routes;