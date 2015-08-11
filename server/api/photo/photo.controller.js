'use strict';

var _ = require('lodash');
var Photo = require('./photo.model');

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
  Photo.create(req.body, function(err, photo) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(photo);
  });
};

// 写真を削除
exports.destroy = function(req, res) {
  Photo.findById(req.params.id, function (err, photo) {
    if(err) { return handleError(res, err); }
    if(!photo) { return res.status(404).send('Not Found'); }
    photo.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
