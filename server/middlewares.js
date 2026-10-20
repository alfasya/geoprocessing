import path from 'path';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.parse(file.originalname).ext);
    },
});

const upload = multer({ storage: storage });

const uploadMiddleware = upload.fields([
    { name: 'geofile', maxCount: 10 },
    { name: 'district', maxCount: 1 },
]);

export { uploadMiddleware }