import { Router, Routes } from 'express';
import cHome from '../controllers/cHome.js';

const routes = Router();

routes.get('/', cHome.getHome)
