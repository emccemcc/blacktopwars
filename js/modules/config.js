var app = angular.module('myModule');


app.config(function($routeProvider, $locationProvider ) {

    $routeProvider
        .when('/home', {
            controller: 'controller1',
            templateUrl: 'index.html'
        })
        .otherwise('/home', {
            controller: 'controller1',
            templateUrl: 'index.html'
        });
//I can't switch urls because then I'd miss information
//but maybe I could do something else?
//or would I need to add in a server?
//could do that and then drop all the info in the tables
//but that might take more time then I'd like

//with one view this is looking more difficult than I expected


});
