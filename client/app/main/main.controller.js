'use strict';

angular.module('sampleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.photos = [];

    $http.get('/api/photos').success(function(photos) {
      $scope.photos = photos;
    });

  });
