angular.module('edmundsApi', []);
angular.module('edmundsApi')
  .factory('vinService', function($http, $q) {
    var key = API_KEY,
      edmundUrl = 'https://api.edmunds.com/api/vehicle/v2/',
      mediaUrl = 'https://api.edmunds.com/api/media/v2/',
      type = '';

    return {
      get: function(vin) {
        type = 'squishvins';
        var vinSquished = '';

        for (var i = 0; i < vin.length; i++) {
          if (i <= 10 && i !== 8) {
            vinSquished += vin.charAt(i);
          }
        }

        var delay = $q.defer();
        $http.get(edmundUrl + type + '/' + vinSquished + '/?fmt=json&api_key=' + key)
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      },
      getPicture: function(make, model, year) {
        var delay = $q.defer();
        $http.get(mediaUrl + 'nissan/altima/2014/photos?api_key=' + key + '&fmt=json')
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      }
    };
  })
  .directive('getVin', function(vinService) {
    return {
      templateUrl: 'vin-list.html',
      link: function($scope, elem, attrs) {
        var vin = attrs.getVin;
        vinService.get(vin).then(function(data) {
          $scope.data = data;
        });
      }
    };
  });