var app = angular.module('myApp');
app.controller('booksDetailsController',['$http','$routeParams',function($http,$routeParams) {

var main = this;

this.books = [];
this.paramsValue = $routeParams.id1 ;

console.log("booksDetails controller loaded");

this.baseUrl = 'https://www.anapioficeandfire.com/api';

this.booksDetails = function(){
  $http({
      method: 'GET',
      url: main.baseUrl+"/books/"+main.paramsValue,
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response.data);
        console.log(response.data.name)
        main.books = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        console.log(response);
      },
    );
};
//
this.booksDetails();

}]);
