'use strict';

angular.module('sampleApp')
  .controller('MeCtrl', function ($scope, $http, Upload) {
    $scope.photos = [];

    $http.get('/api/photos/me').success(function (photos) {
      $scope.photos = photos;
    });

    $scope.deletePhoto = function (photo) {
      $http.delete('/api/photos/me/' + photo._id).success(function (photos) {
        var index = $scope.photos.indexOf(photo);
        $scope.photos.splice(index, 1);
      });
    }

    $scope.upload = function (file) {
      Upload.upload({
        url: '/api/photos/me',
        file: file
      }).success(function (data, status, headers, config) {
        console.log('success :)');
      }).error(function (data, status, headers, config) {
        console.log('error status: ' + status);
      });
    };

  });
