import express from 'express';
import pool from './utils/dbPool.js';
import jaksaRoutes from './routes/jaksaRoutes.js';
import kasusRoutes from './routes/kasusRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

pool().then(() => {
    app.use(express.json());

    app.use('/kejaksaan/jaksa', jaksaRoutes);
    app.use('/kejaksaan/kasus', kasusRoutes);
    
    app.listen(PORT, () => {
        console.log(`Server Terkoneksi Dengan Port ${PORT}`);
    });
});