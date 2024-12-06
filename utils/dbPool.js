import mongoose from 'mongoose';

const pool = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/kejaksaanFinal');
        console.log('Berhasil terkoneksi ke database!');
    } catch (error) {
        console.error('Error koneksi dengan datbase:', error.message);
        process.exit(1); 
    }
};

export default pool;
