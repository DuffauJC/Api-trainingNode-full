const uploadFile = require("./files/upload");


const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};



const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/assets/img/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

module.exports = {
    upload,
    download,
};