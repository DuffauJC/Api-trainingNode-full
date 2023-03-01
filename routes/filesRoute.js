const uploadFile = require("../middleware/upload");

module.exports = (app) => {

    app.post("/api/v1/file/upload", async (req, res) => {
        try {
            await uploadFile(req, res);

            res.json({
                satus: 200, message: "Uploaded the file successfully: " + req.file.originalname,
            });
        } catch (err) {
            res.json({
                status: 500,
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
            });
        }
    })

    app.get("/api/v1/file/:name", async (req, res) => {
        const fileName = req.params.name;
        const directoryPath = __basedir + "/assets/img/";

        res.download(directoryPath + fileName, fileName, (err) => {
            if (err) {
                res.json({
                    status: 500,
                    message: "Could not download the file. " + err,
                });
            }
        });
    });

}