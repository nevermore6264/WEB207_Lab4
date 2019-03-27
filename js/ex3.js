var app = angular.module("myApp", []);
app.controller("showInfo", function ($scope) {
    $scope.students =
        [
            {
                fullName: "Trần Trung Hiếu",
                birthday: "26-06-1997",
                gender: "Nam",
                province: "Hà Nam",
                photo: "imgs/picture.jpg"
            },
            {
                fullName: "Nguyễn Thị Thu Thuỷ",
                birthday: "22-08-1997",
                gender: "Nữ",
                province: "Hà Nam",
                photo: "imgs/picture.jpg"
            }
        ]
    ;
});