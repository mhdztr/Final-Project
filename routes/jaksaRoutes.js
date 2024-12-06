import express from 'express';
import {createJaksa, fetchAllJaksa, fetchJaksaByID, modifyJaksa, removeJaksa} from '../controllers/jaksaController.js';

const route = express.Router();
route.post('/', createJaksa);
route.get('/', fetchAllJaksa);
route.get('/:id', fetchJaksaByID);
route.put('/:id', modifyJaksa);
route.delete('/:id', removeJaksa);

export default route;
