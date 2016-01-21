(function () {
    'use strict';
    var app = angular.module('converter',['ngLoadingSpinner']);
    app.service('ConversionDataFetchService',['$http',ConversionDataFetchService]);
    app.controller('MainController',['$scope','ConversionDataFetchService',MainController]);
})();