'use strict';

angular.module('sampleApp')
  .controller('MeCtrl', function ($scope, $http) {
    $scope.photos = [];

    $http.get('/api/photos/me').success(function(photos) {
      $scope.photos = photos;
    });

    $scope.deletePhoto = function(photo) {
      $http.delete('/api/photos/me/' + photo._id).success(function(photos) {
        var index = $scope.photos.indexOf(photo);
        $scope.photos.splice(index, 1);
      });
    }

  });
