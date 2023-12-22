import * as os from "os";
import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: os.tmpdir() });
router.post('/upload', upload.single('file'), (req , res) =>  {
    const file = req.file;
    console.log(file);
    res.sendStatus(200);
});

export default router;