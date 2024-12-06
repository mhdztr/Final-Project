import mongoose from 'mongoose';

const jaksaSchema = new mongoose.Schema({
    nama: { type:String, required: true },
    email: { type: String, required: true, unique: true},
    biodata: {
        noTelp: { type: String},
        alamat: { type: String},
    },
}, {timestamps: true });

const Jaksa = mongoose.model('Jaksa', jaksaSchema);
export default Jaksa;
