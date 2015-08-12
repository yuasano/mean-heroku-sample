var config = require('../config/environment');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SEACRET
});

function upload(file) {
  return cloudinary.uploader.upload(file);
}

function remove(publicId) {
  return cloudinary.api.delete_resources([publicId]);
}

exports.upload = upload;
exports.remove = remove;
