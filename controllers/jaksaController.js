import { addJaksa, getAllJaksa, updateJaksa, deleteJaksa, getJaksaByID } from "../services/jaksaService.js";
import { resFormat} from "../utils/resFormat.js";

export const createJaksa = async (req, res) => {
    try {
        const jaksa = await addJaksa(req.body);
        resFormat(res, 201, {message: 'Jaksa Baru Berhasil Ditambahkan', jaksa });
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const modifyJaksa = async (req, res) => {
    try {
        const updatedJaksa = await updateJaksa(req.params.id, req.body);
        resFormat(res, 200, { message: 'Data Jaksa Berhasil Diperbarui', updatedJaksa});
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const fetchAllJaksa = async (req, res) => {
    try {
        const jaksaList = await getAllJaksa();
        resFormat(res, 200, jaksaList);
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const fetchJaksaByID = async (req, res) => {
    try {
        const jaksaList = await getJaksaByID(req.params.id);
        resFormat(res, 200, jaksaList);
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};

export const removeJaksa = async (req, res) => {
    try {
        await deleteJaksa(req.params.id);
        resFormat(res, 200, { message: 'Data Jaksa Berhail Dihapus'});
    } catch (error) {
        resFormat(res, 500, null, error.message);
    }
};