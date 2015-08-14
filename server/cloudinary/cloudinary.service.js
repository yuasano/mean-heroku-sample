var config = require('../config/environment');
var cloudinary = require('cloudinary');
var url = require('url');

var uri = url.parse(process.env.CLOUDINARY_URL, true)
var config = {
  cloud_name: uri.host,
  api_key: uri.auth.split(":")[0],
  api_secret: uri.auth.split(":")[1],
};

cloudinary.config(config);

function upload(file) {
  return cloudinary.uploader.upload(file);
}

function remove(publicId) {
  return cloudinary.api.delete_resources([publicId]);
}

exports.upload = upload;
exports.remove = remove;
