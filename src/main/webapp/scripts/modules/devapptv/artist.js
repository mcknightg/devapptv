

'use strict';

//  Devapptv Artist Service
catwalkApp.factory('DevapptvArtist', ['DevapptvBaseService',function (DevapptvBaseService) {
        var entityUrl = DevapptvBaseService.getEntityUrl('artist');
        return DevapptvBaseService.getResource(entityUrl,{},{
            'listColumns':{method: 'POST', params:{},url:entityUrl + 'listColumns'}
        });
    }
]);

//  Devapptv Artist Controller
catwalkApp.controller('DevapptvArtistController', ['$scope','$controller', 'DevapptvArtist',
    function ($scope, $controller,DevapptvArtist) {
        $scope.name = "Artist";
        $scope.formId = 'saveDevapptvArtistModal';
        $controller('DevapptvBaseController', { $scope: $scope,service:DevapptvArtist});
    }
]);

//  Devapptv Artist Routing
catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('devapptv.artist', {
            url: "/devapptv/artist",
            templateUrl: "views/devapptv/tables/artist.html",
            controller: 'DevapptvArtistController'
        })
     }
]);
