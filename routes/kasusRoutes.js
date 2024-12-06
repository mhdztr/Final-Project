import express from 'express';
import { createKasus, fetchAllKasus, fetchKasusByID, putKasus, getKasusStats, removeKasus} from '../controllers/kasusController.js';
import upload from '../utils/upload.js';

const route = express.Router();
route.get('/statis', getKasusStats);
route.post('/', upload.array('documents'), createKasus);
route.get('/', fetchAllKasus);
route.get('/:id', fetchKasusByID);
route.put('/:id', upload.array('documents'), putKasus);
route.delete('/:id', upload.array('documents'), removeKasus);

export default route;
