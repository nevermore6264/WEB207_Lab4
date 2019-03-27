var app = angular.module("myApp", []);
app.controller("showInfo", function ($scope) {
    $scope.fullName = "Trần Trung Hiếu";
    $scope.birthday = "26-06-1997";
    $scope.gender = "Name";
    $scope.province = "Hà Nam";
    $scope.photo = "imgs/picture.jpg";
});