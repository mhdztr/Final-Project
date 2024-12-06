import Kasus from '../models/kasus.js';

export const addKasus = async (kasusData, files) => {
    const documents = files ? files.map((file) => file.path) : [];
    const kasus = new Kasus ({ ...kasusData, documents });
    return await kasus.save();
};
export const getKasusByID = async (id) => {
    return await Kasus.findById(id);
};

export const updateKasus = async (id, updatedData) => {
    return await Kasus.findByIdAndUpdate(id, updatedData, { new: true });
};

export const getAllKasus = async () => {
    return await Kasus.find();
};


export const getStatisKasus = async () => {
    const total = await Kasus.countDocuments();
    const teratasi = await Kasus.countDocuments({ statusKasus: 'teratasi'});
    const queued = total - teratasi;
    return { total, teratasi, queued };
};

export const deleteKasus = async (id) => {
    return await Kasus.findByIdAndDelete(id);
}