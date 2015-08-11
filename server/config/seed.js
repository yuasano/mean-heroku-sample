/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Photo = require('../api/photo/photo.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    _id: '55c9f42fb549b3ab0f428cc3',
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    _id: '55c9f42fb549b3ab0f428cc4',
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Photo.find({}).remove(function() {
  Photo.create({
    name: 'Sample 1',
    url: '/assets/images/sample1.jpg',
    owner: '55c9f42fb549b3ab0f428cc3',
    share: true
  }, {
    name: 'Sample 2',
    url: '/assets/images/sample2.jpg',
    owner: '55c9f42fb549b3ab0f428cc3'
  }, {
    name: 'Sample 3',
    url: '/assets/images/sample3.jpg',
    owner: '55c9f42fb549b3ab0f428cc4',
    share: true
  }, {
    name: 'Sample 4',
    url: '/assets/images/sample4.jpg',
    owner: '55c9f42fb549b3ab0f428cc4'
  }, function() {
    console.log('finished populating photos');
  });
});
