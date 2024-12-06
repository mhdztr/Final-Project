import Jaksa from "../models/jaksa.js";

export const addJaksa = async (jaksaData) => {
    const jaksa = new Jaksa(jaksaData);
    return await jaksa.save();
};

export const getAllJaksa = async () => {
    return await Jaksa.find();
};

export const getJaksaByID = async (id) => {
    return await Jaksa.findById(id);
}
export const updateJaksa = async (id, updatedData) => {
    return await Jaksa.findByIdAndUpdate(id, updatedData, {new:true});
};

export const deleteJaksa = async (id) => {
    return await Jaksa.findByIdAndDelete(id);
}