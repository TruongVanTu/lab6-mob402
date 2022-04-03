var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    var random = Math.random() ;
    cb(null, random + Date.now() + file.originalname);
  },
});

  var upload = multer({ storage: storage ,
      limit : {fileSize : 2 * 1024}
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Upload 1 file
router.post('/profile', upload.single('avatar'), function(req,
                                                          res, next) {
  res.render('index', { title: 'UPload thanh cong ' + 'kiem tra thu muc upload' });
});
// // Upload nhiều file
router.post('/profilearray', upload.array('avatar', 5), function(req,
                                                          res, next) {
  res.render('index', { title: 'UPload thanh cong ' + 'kiem tra thu muc upload' });
});

module.exports = router;
