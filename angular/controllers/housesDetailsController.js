var app = angular.module('myApp');
app.controller('housesDetailsController',['$http','$routeParams',function($http,$routeParams) {

var main = this;

this.houses = [];
this.paramsValue = $routeParams.id2 ;

console.log("housesDetails controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.housesDetails = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/houses/"+main.paramsValue,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data);
        console.log(response.data.name)
        main.houses = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
//
this.housesDetails();

}]);
