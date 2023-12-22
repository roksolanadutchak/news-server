import * as os from "os";

const express = require('express');
const router = express.Router();

const multer  = require('multer');
const upload = multer({ dest: os.tmpdir() });

router.use((req: any, res: any, next: () => void) => {
    console.log('Time: ', Date.now())
    next()
})
router.post('/upload', upload.single('file'), function(req: {file: any; }, res: { sendStatus: (arg0: number) => void; }) {
    const file = req.file;
    
    console.log(file);

    res.sendStatus(200);
});

module.exports = router;