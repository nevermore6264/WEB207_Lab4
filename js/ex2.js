var app = angular.module("myApp", []);
app.controller("showInfo", function ($scope) {
    $scope.student = {
        fullName : "Trần Trung Hiếu",
        birthday : "26-06-1997",
        gender : "Name",
        province : "Hà Nam",
        photo : "imgs/picture.jpg"
    };
});