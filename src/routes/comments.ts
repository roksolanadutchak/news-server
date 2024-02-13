import * as os from "os";
import express from 'express';
const router = express.Router();
import multer from 'multer';
import ImageModel from "../database/Schema/ImageSchema";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/upload', upload.single('file'), async (req , res) =>  {
    try {
        const imageBuffer = req.file?.buffer;
        const base64Image = imageBuffer?.toString('base64');
        console.log(base64Image);
        const newImage = new ImageModel({ data: base64Image });
        await newImage.save();
        res.status(200).send('Image uploaded successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
