var app = angular.module("myApp", []);

app.controller("showCalc", function ($scope) {
    $scope.length =0 ;
    $scope.width =0 ;

    $scope.calculate = function () {
        var a = parseFloat($scope.width);
        var b = parseFloat($scope.length);
        $scope.acreage = a * b;
        $scope.perimeter = (a + b) * 2;

    }
});