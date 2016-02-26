

'use strict';

//  Devapptv Video Service
catwalkApp.factory('DevapptvVideo', ['DevapptvBaseService',function (DevapptvBaseService) {
        var entityUrl = DevapptvBaseService.getEntityUrl('video');
        return DevapptvBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  Devapptv Video Controller
catwalkApp.controller('DevapptvVideoController', ['$scope','$controller', 'DevapptvVideo',
    function ($scope, $controller,DevapptvVideo) {
        $scope.name = "Video";
        $scope.formId = 'saveDevapptvVideoModal';
        $controller('DevapptvBaseController', { $scope: $scope,service:DevapptvVideo});
    }
]);

//  Devapptv Video Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('devapptv.video', {
            url: "/devapptv/video",
            templateUrl: "views/devapptv/tables/video.html",
            controller: 'DevapptvVideoController'
        })
     }
]);
