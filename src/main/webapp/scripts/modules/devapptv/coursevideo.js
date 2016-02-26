

'use strict';

//  Devapptv CourseVideo Service
catwalkApp.factory('DevapptvCourseVideo', ['DevapptvBaseService',function (DevapptvBaseService) {
        var entityUrl = DevapptvBaseService.getEntityUrl('courseVideo');
        return DevapptvBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  Devapptv CourseVideo Controller
catwalkApp.controller('DevapptvCourseVideoController', ['$scope','$controller', 'DevapptvCourseVideo',
    function ($scope, $controller,DevapptvCourseVideo) {
        $scope.name = "CourseVideo";
        $scope.formId = 'saveDevapptvCourseVideoModal';
        $controller('DevapptvBaseController', { $scope: $scope,service:DevapptvCourseVideo});
    }
]);

//  Devapptv CourseVideo Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('devapptv.courseVideo', {
            url: "/devapptv/courseVideo",
            templateUrl: "views/devapptv/tables/courseVideo.html",
            controller: 'DevapptvCourseVideoController'
        })
     }
]);
