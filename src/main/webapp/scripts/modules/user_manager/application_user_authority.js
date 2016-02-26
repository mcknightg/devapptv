

'use strict';

//  UserManager ApplicationUserAuthority Service
catwalkApp.factory('UserManagerApplicationUserAuthority', ['UserManagerBaseService',function (UserManagerBaseService) {
        var entityUrl = UserManagerBaseService.getEntityUrl('applicationUserAuthority');
        return UserManagerBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  UserManager ApplicationUserAuthority Controller
catwalkApp.controller('UserManagerApplicationUserAuthorityController', ['$scope','$controller', 'UserManagerApplicationUserAuthority',
    function ($scope, $controller,UserManagerApplicationUserAuthority) {
        $scope.name = "ApplicationUserAuthority";
        $scope.formId = 'saveUserManagerApplicationUserAuthorityModal';
        $controller('UserManagerBaseController', { $scope: $scope,service:UserManagerApplicationUserAuthority});
    }
]);

//  UserManager ApplicationUserAuthority Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationUserAuthority', {
            url: "/user_manager/applicationUserAuthority",
            templateUrl: "views/user_manager/tables/applicationUserAuthority.html",
            controller: 'UserManagerApplicationUserAuthorityController'
        })
     }
]);
