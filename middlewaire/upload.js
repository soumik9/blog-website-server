const multer  = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    }, 
    filename: function(req, file, cb){
        console.log(req);
        let extention = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + extention)
    }
});

var upload = multer({
    storage: storage,
});

module.exports = upload