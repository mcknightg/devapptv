/**
 *   Routing
 */
catwalkApp.config(['$stateProvider', '$urlRouterProvider','USER_ROLES',
    function ($stateProvider, $urlRouterProvider,USER_ROLES) {
        $urlRouterProvider.otherwise("/index/main");
        $stateProvider
            .state('index', {
                abstract: true,
                url: "/index",
                templateUrl: "views/common/content.html"
            })
            .state('index.main', {
                url: "/main",
                templateUrl: "views/main.html",
                data: { pageTitle: 'Example view' }
            })
            .state('index.minor', {
                url: "/minor",
                templateUrl: "views/minor.html",
                data: { pageTitle: 'Example view' }
            });
    }
]).run(securityHandler);
