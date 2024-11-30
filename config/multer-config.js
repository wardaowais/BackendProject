const multer = require('multer');

//creating memory storage putting data into memory
const storage = multer.memoryStorage();
const upload = multer({storage:storage});

module.exports = upload;

