'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  name: String,
  url: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  publicId: String,
  share: Boolean
});

module.exports = mongoose.model('Photo', PhotoSchema);
