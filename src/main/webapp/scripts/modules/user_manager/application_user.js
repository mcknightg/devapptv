

'use strict';

//  UserManager ApplicationUser Service
catwalkApp.factory('UserManagerApplicationUser', ['UserManagerBaseService',function (UserManagerBaseService) {
        var entityUrl = UserManagerBaseService.getEntityUrl('applicationUser');
        return UserManagerBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  UserManager ApplicationUser Controller
catwalkApp.controller('UserManagerApplicationUserController', ['$scope','$controller', 'UserManagerApplicationUser',
    function ($scope, $controller,UserManagerApplicationUser) {
        $scope.name = "ApplicationUser";
        $scope.formId = 'saveUserManagerApplicationUserModal';
        $controller('UserManagerBaseController', { $scope: $scope,service:UserManagerApplicationUser});
    }
]);

//  UserManager ApplicationUser Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationUser', {
            url: "/user_manager/applicationUser",
            templateUrl: "views/user_manager/tables/applicationUser.html",
            controller: 'UserManagerApplicationUserController'
        })
     }
]);
