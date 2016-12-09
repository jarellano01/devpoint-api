var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dsnpiaom4',
  api_key: '497667298332617',
  api_secret: '13l8i1Tl7wBllrtyCqwpoXAhJdg'
});
module.exports.upload = function (dataPhoto ,cb) {
  cloudinary.uploader.upload(dataPhoto, function(result) {
    console.log(result);
    cb(result);
  });


};
