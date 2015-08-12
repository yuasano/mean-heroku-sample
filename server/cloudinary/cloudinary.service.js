var config = require('../config/environment');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.key,
  api_secret: config.cloudinary.secret
});

function upload(file) {
  return cloudinary.uploader.upload(file);
}

function remove(publicId) {
  return cloudinary.api.delete_resources([publicId]);
}

exports.upload = upload;
exports.remove = remove;
