# angular-edmunds
A collection of services that pull from the [Edmunds API](http://developer.edmunds.com/api-documentation/overview/index.html)

##Demo
[Plunkr](http://embed.plnkr.co/IfMn36rtKpAjiyZyqkNX/preview)
* The demo updates when the input loses focus. The function can easily be attached to a button.

##Requirements
* [AngularJS](https://angularjs.org/)
* [Edmunds API Key](http://developer.edmunds.com/api-documentation/overview/index.html)

##Installation
* Open the `edmunds-service.js` and edit this line with your API key:
    - `var key = API_KEY`
* Include `edmundsApi` in your module:
`angular.module('myApp', ['edmundsApi']);`
* Inject `edmundsService` into your controllers/directives/etc.

##Example Call:
````
$scope.vinLookup = function() {
    if($scope.vin === undefined) { return; }
    if($scope.vin.length == 17) {
        var vin = $scope.vin;
        edmundsService.get(vin).then(function(data) {
          $scope.data = data;
        });
    }   
}
````

##Services
* `getVin(vin)`: Get vehicle information based on the Vin given
* `getShortVin(shortVin)`: Same as getVin but accepts the shortened version of the VIN. It will do the shortening for you.
* `getPicture(make, model, year)`: Gets pictures based on the Make, Model, and Year. 
