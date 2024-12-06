import mongoose from 'mongoose';

const kasusSchema = new mongoose.Schema({
    judul: { type:String, required: true },
    deskripsi: { type: String, required: true},
    statusKasus: { type: String, enum: ['queued', 'teratasi'], default: 'queued'},
    documents: [{ type: String }],
}, {timestamps: true });

const Kasus = mongoose.model('kasus', kasusSchema);
export default Kasus;
