import { Router } from 'express';
import cDeck from "../controllers/cDeck.js";

const routes = Router();

routes.get('/deck/:id', cDeck.getDeck);
routes.get('/deck/:id/next', cDeck.nextCard);
routes.get('/deck/:id/prev', cDeck.prevCard);

export default routes;