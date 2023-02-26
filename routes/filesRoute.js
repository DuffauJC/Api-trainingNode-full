const file = require('../services/file')

module.exports = (app) => {
    app.post("/api/v1/file/upload", file.download);
    app.get("/api/v1/file/:name", file.download);
   
}