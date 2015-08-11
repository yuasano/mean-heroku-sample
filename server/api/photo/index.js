'use strict';

var express = require('express');
var controller = require('./photo.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

//router.get('/', controller.index);
//router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);

router.get('/', controller.showPublic);

router.get('/me', auth.isAuthenticated(), controller.showPrivate);
router.post('/me', auth.isAuthenticated(), controller.upload);
router.delete('/me/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
