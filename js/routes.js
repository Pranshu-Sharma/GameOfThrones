var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "views/main-view.html",
    })

    .when("/books/:id1", {
      templateUrl : "views/books-detailed-view.html",
      controller : "booksDetailsController",
      controllerAs : "booksCtrl"
    })

    .when("/houses/:id2", {
      templateUrl : "views/houses-detailed-view.html",
      controller : "housesDetailsController",
      controllerAs : "housesCtrl"
    })

    .when("/characters/:id3", {
      templateUrl : "views/characters-detailed-view.html",
      controller : "charactersDetailsController",
      controllerAs : "charactersCtrl"
    });

}]);
