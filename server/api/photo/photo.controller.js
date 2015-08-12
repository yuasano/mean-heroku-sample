'use strict';

var _ = require('lodash');
var Photo = require('./photo.model');
var cloudinary = require('../../cloudinary/cloudinary.service');

// 公開可能な写真を取得
exports.showPublic = function(req, res) {
  Photo.find({
    share: true
  }, function (err, photos) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(photos);
  });
};

// プライベートな写真を取得
exports.showPrivate = function(req, res) {
  Photo.find({
    owner: req.user._id
  }, function (err, photos) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(photos);
  });
};

// 写真をアップロード
exports.upload = function(req, res) {

  if(req.files.file) {

    var file = req.files.file.path;

    // Cloudinary上に社員をアップロード
    cloudinary.upload(file).then(function(result){

//      console.log('** file uploaded to Cloudinary service');
//      console.dir(result);

      // 写真を追加
      var photo = new Photo();
      photo.owner = req.user.id;
      photo.name = result.version;
      photo.url = result.url;
      photo.publicId = result.public_id;

      Photo.create(photo, function(err, photo) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(photo);
      });

    });

  };

};

// 写真を削除
exports.destroy = function(req, res) {
  Photo.findById(req.params.id, function (err, photo) {
    if(err) { return handleError(res, err); }
    if(!photo) { return res.status(404).send('Not Found'); }

    // Cloudinary上から写真を削除
    cloudinary.remove(photo.publicId).then(function() {

      // 写真を削除
      photo.remove(function(err) {
        if(err) { return handleError(res, err); }
        return res.status(204).send('No Content');
      });
    });

  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
