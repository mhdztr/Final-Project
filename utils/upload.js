import multer from 'multer';
import path from 'path';

const uploadDir = path.resolve('Final Project', 'uploads');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    const fileType = ['application/pdf'];
    if (fileType.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .pdf files are allowed!'));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, 
});

export default upload;
