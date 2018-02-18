var app = angular.module("springDemo", []);
app.controller("AppCtrl", function ($scope, $http) {
    $scope.websites = [];

    $http.get('http://127.0.0.1:8090/api/stackoverflow').success(function (data) {
        $scope.websites = data;
    });
});