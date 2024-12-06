import { addKasus, getAllKasus, updateKasus, getStatisKasus, deleteKasus, getKasusByID } from '../services/kasusService.js';
import { resFormat } from '../utils/resFormat.js';

export const createKasus = async (req, res) => {
    try {
        const kasus = await addKasus(req.body, req.files);
        resFormat(res, 201, { message: 'Kasus baru berhasil ditambahkan', kasus});
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const fetchAllKasus = async (req, res) => {
    try {
        const kasusList = await getAllKasus();
        resFormat(res, 200, kasusList);
    } catch (error) {
        resFormat (res, 500, null, error.message);
    }
};

export const fetchKasusByID = async (req, res) => {
    try {
        const kasusList = await getKasusByID(req.params.id);
        resFormat(res, 200, kasusList);
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const putKasus = async (req, res) => {
    try {
        const updatedKasus = await updateKasus(req.params.id, req.body);
        resFormat(res, 200, { message: 'Kasus berhasil diperbarui', updatedKasus});
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const getKasusStats = async (req, res) => {
    try {
        const stats = await getStatisKasus();
        resFormat(res, 200, stats);
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const removeKasus = async (req, res) => {
    try {
        const deletedKasus = await deleteKasus(req.params.id);
        resFormat(res, 200, {message: 'Kasus berhasil dihapus'});
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};