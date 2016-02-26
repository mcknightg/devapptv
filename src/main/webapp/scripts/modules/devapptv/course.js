

'use strict';

//  Devapptv Course Service
catwalkApp.factory('DevapptvCourse', ['DevapptvBaseService',function (DevapptvBaseService) {
        var entityUrl = DevapptvBaseService.getEntityUrl('course');
        return DevapptvBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  Devapptv Course Controller
catwalkApp.controller('DevapptvCourseController', ['$scope','$controller', 'DevapptvCourse',
    function ($scope, $controller,DevapptvCourse) {
        $scope.name = "Course";
        $scope.formId = 'saveDevapptvCourseModal';
        $controller('DevapptvBaseController', { $scope: $scope,service:DevapptvCourse});
    }
]);

//  Devapptv Course Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('devapptv.course', {
            url: "/devapptv/course",
            templateUrl: "views/devapptv/tables/course.html",
            controller: 'DevapptvCourseController'
        })
     }
]);
