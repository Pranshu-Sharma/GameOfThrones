var app = angular.module('myApp');
app.controller('charactersDetailsController',['$http','$routeParams',function($http,$routeParams) {

var main = this;

this.characters = [];
this.paramsValue = $routeParams.id3 ;

console.log("charactersDetails controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.charactersDetails = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/characters/"+main.paramsValue,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data);
        console.log(response.data.name)
        main.characters = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
//
this.charactersDetails();

}]);
