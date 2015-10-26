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
    - `vin`: Required. Full 17-code VIN.
* `getShortVin(shortVin)`: Same as getVin but accepts the shortened version of the VIN. It will do the shortening for you.
    - `shortVin`: Required. Pass in the full 17-code VIN and it will shorten the VIN for you.
* `getPicture(make, model, year)`: Gets pictures based on the Make, Model, and Year. 
    - `make`: Required. Takes the `niceName` version of the Make.
    - `model`: Required. Takes the `niceName` version of the Model.
    - `year`: Required. 4-letter version of year.
* `getMakes(year)`: Get all car Makes. 
    - `year`: Optional. Pass this value in to get Makes only from that year.
* `getModels(make, year)`: Get all Models for a Make
    - `make`: Required. Takes the `niceName` version of the Make.
    - `year`: Optional. Pass this value in to get Models only from that year.
