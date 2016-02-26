

'use strict';

//  UserManager ApplicationAuthority Service
catwalkApp.factory('UserManagerApplicationAuthority', ['UserManagerBaseService',function (UserManagerBaseService) {
        var entityUrl = UserManagerBaseService.getEntityUrl('applicationAuthority');
        return UserManagerBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  UserManager ApplicationAuthority Controller
catwalkApp.controller('UserManagerApplicationAuthorityController', ['$scope','$controller', 'UserManagerApplicationAuthority',
    function ($scope, $controller,UserManagerApplicationAuthority) {
        $scope.name = "ApplicationAuthority";
        $scope.formId = 'saveUserManagerApplicationAuthorityModal';
        $controller('UserManagerBaseController', { $scope: $scope,service:UserManagerApplicationAuthority});
    }
]);

//  UserManager ApplicationAuthority Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user_manager.applicationAuthority', {
            url: "/user_manager/applicationAuthority",
            templateUrl: "views/user_manager/tables/applicationAuthority.html",
            controller: 'UserManagerApplicationAuthorityController'
        })
     }
]);
