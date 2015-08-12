'use strict';

angular.module('sampleApp')
  .controller('MeCtrl', function ($scope, $http, Upload) {
    $scope.photos = [];

    $http.get('/api/photos/me').success(function (photos) {
      $scope.photos = photos;
    });

    $scope.deletePhoto = function (photo) {
      $http.delete('/api/photos/me/' + photo._id).success(function () {
        var index = $scope.photos.indexOf(photo);
        $scope.photos.splice(index, 1);
      });
    };

    /* jshint unused: false */
    $scope.upload = function (file) {
      if(file) {
        Upload.upload({
          url: '/api/photos/me',
          method: 'POST',
          file: file
        }).success(function (data, status, headers, config) {
          console.log('success :)');
        }).error(function (data, status, headers, config) {
          console.log('error status: ' + status);
        });
      }
    };

    $scope.sharePhoto = function(photo) {
      $http.put('/api/photos/me/' + photo._id).success(function (data) {
        var index = $scope.photos.indexOf(photo);
        $scope.photos[index] = data;
      });
    };

  });
