

catwalkApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('devapptv', {
            abstract: false,
            url: "/devapptv",
            templateUrl: "views/devapptv/content.html"
        })

     }
]);
