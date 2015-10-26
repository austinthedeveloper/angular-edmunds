angular.module('edmundsApi', []);
angular.module('edmundsApi')
  .factory('edmundsService', function($http, $q) {
    var key = API_KEY,
      edmundUrl = 'https://api.edmunds.com/api/vehicle/v2/',
      mediaUrl = 'https://api.edmunds.com/api/media/v2/',
      type = '';

    return {
      get: function(vin) {
        type = 'vins';

        var delay = $q.defer();
        $http.get(edmundUrl + type + '/' + vin + '/?fmt=json&api_key=' + key, {cache: true})
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      },
      getShortVin: function(vin) {
        type = 'squishvins';
        var shortenedVin = shortenVin(vin);

        var delay = $q.defer();
        $http.get(edmundUrl + type + '/' + shortenedVin + '/?fmt=json&api_key=' + key)
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      },
      getPicture: function(make, model, year) {
        var delay = $q.defer();
        $http.get(mediaUrl + make + '/' + model + '/' + year + '/photos?api_key=' + key + '&fmt=json')
          .success(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      }
    };
    function shortenVin(vin){
      var vinSquished = '';

      for (var i = 0; i < vin.length; i++) {
        if (i <= 10 && i !== 8) {
          vinSquished += vin.charAt(i);
        }
      }
      return vinSquished;
    }
  });