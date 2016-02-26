

'use strict';

//  UserManager ApplicationPersistentToken Service
catwalkApp.factory('UserManagerApplicationPersistentToken', ['UserManagerBaseService',function (UserManagerBaseService) {
        var entityUrl = UserManagerBaseService.getEntityUrl('applicationPersistentToken');
        return UserManagerBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  UserManager ApplicationPersistentToken Controller
catwalkApp.controller('UserManagerApplicationPersistentTokenController', ['$scope','$controller', 'UserManagerApplicationPersistentToken',
    function ($scope, $controller,UserManagerApplicationPersistentToken) {
        $scope.name = "ApplicationPersistentToken";
        $scope.formId = 'saveUserManagerApplicationPersistentTokenModal';
        $controller('UserManagerBaseController', { $scope: $scope,service:UserManagerApplicationPersistentToken});
    }
]);

//  UserManager ApplicationPersistentToken Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationPersistentToken', {
            url: "/user_manager/applicationPersistentToken",
            templateUrl: "views/user_manager/tables/applicationPersistentToken.html",
            controller: 'UserManagerApplicationPersistentTokenController'
        })
     }
]);
