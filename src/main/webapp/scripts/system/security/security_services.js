'use strict';
catwalkApp.constant('USER_ROLES', {
    all: '*',
    admin: 'ROLE_ADMIN',
    user: 'ROLE_USER'
});

var user_manager_base_url  = base_url + 'rest/user_manager/';

/* Services */
catwalkApp.factory('Account', ['$resource',
    function ($resource) {
        return $resource(user_manager_base_url + 'account', {}, {
        });
    }]);
catwalkApp.factory('Register', function ($resource) {
    return $resource(user_manager_base_url + 'register', {}, {
    });
});

catwalkApp.factory('Activate', function ($resource) {
    return $resource(user_manager_base_url + 'activate', {}, {
        'get': { method: 'GET', params: {}, isArray: false}
    });
});
catwalkApp.factory('Password', ['$resource',
    function ($resource) {
        return $resource(user_manager_base_url + 'account/change_password', {}, {
        });
    }]);

catwalkApp.factory('Sessions', ['$resource',
    function ($resource) {
        return $resource(user_manager_base_url + 'sessions/:series', {}, {
            'get': { method: 'GET', isArray: true}
        });
    }]);
catwalkApp.factory('Session', function () {
    this.create = function (login, firstName, lastName, email, userRoles) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userRoles = userRoles;
    };
    this.invalidate = function () {
        this.login = null;
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.userRoles = null;
    };
    return this;
});



catwalkApp.factory('AuthenticationSharedService', function ($rootScope, $http, authService, Session, Account) {
    return {
        login: function (param) {

            var data ="j_username=" + param.username +"&j_password=" + param.password +"&_spring_security_remember_me=" + param.rememberMe +"&submit=Login";
            $http.post(base_url + 'app/authentication', data, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                ignoreAuthModule: 'ignoreAuthModule'
            }).success(function (data, status, headers, config) {

                console.log(data);
                Account.get(function(data) {
                    Session.create(data.login, data.firstName, data.lastName, data.email, data.roles);
                    $rootScope.account = Session;
                    authService.loginConfirmed(data);
                });
            }).error(function (data, status, headers, config) {
                $rootScope.authenticationError = true;
                Session.invalidate();
            });
        },
        valid: function (authorizedRoles) {

            $http.get('protected/authentication_check.gif', {
                ignoreAuthModule: 'ignoreAuthModule'
            }).success(function (data, status, headers, config) {

                if (!Session.login) {
                    Account.get(function(data) {
                        Session.create(data.login, data.firstName, data.lastName, data.email, data.roles);
                        $rootScope.account = Session;

                        if (!$rootScope.isAuthorized(authorizedRoles)) {
                            event.preventDefault();
                            // user is not allowed
                            $rootScope.$broadcast("event:auth-notAuthorized");
                        }

                        $rootScope.authenticated = true;
                    });
                }
                $rootScope.authenticated = !!Session.login;

            }).error(function (data, status, headers, config) {
                $rootScope.authenticated = false;
            });
        },
        isAuthorized: function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                if (authorizedRoles == '*') {
                    return true;
                }

                authorizedRoles = [authorizedRoles];
            }

            var isAuthorized = false;
            angular.forEach(authorizedRoles, function(authorizedRole) {
                var authorized = (!!Session.login &&
                Session.userRoles.indexOf(authorizedRole) !== -1);

                if (authorized || authorizedRole == '*') {
                    isAuthorized = true;
                }
            });

            return isAuthorized;
        },
        logout: function () {
            $http.get(base_url + 'app/logout').success(function (data, status, headers, config) {
                $rootScope.authenticationError = false;
                $rootScope.authenticated = false;
                $rootScope.account = null;
                Session.invalidate();
                authService.loginCancelled();
            });
        }
    };
});
 var securityHandler = ['$rootScope','$log', '$location', '$http','$state','AuthenticationSharedService', 'Session', 'USER_ROLES',
     function($rootScope,$log, $location, $http,$state, AuthenticationSharedService, Session, USER_ROLES) {
         $rootScope.$state = $state;

         $rootScope.$on('$stateChangeStart',
             function(event, toState, toParams, fromState, fromParams){

                 $rootScope.isAuthorized = AuthenticationSharedService.isAuthorized;
                 $rootScope.userRoles = USER_ROLES;
                 var authorizedRoles = ['NONE'];
                 var access = toState.access;
                 if(access){
                     authorizedRoles = access.authorizedRoles;
                 }
                 AuthenticationSharedService.valid(authorizedRoles);
             });


         // Call when the the client is confirmed
         $rootScope.$on('event:auth-loginConfirmed', function(data) {
             $rootScope.authenticated = true;
             if ($location.path() === "/login") {
                 $location.path('/').replace();
             }
         });

         // Call when the 401 response is returned by the server
         $rootScope.$on('event:auth-loginRequired', function(rejection) {
             Session.invalidate();

             $rootScope.authenticated = false;
             if ($location.path() !== "/" && $location.path() !== "" && $location.path() !== "/register" &&
                 $location.path() !== "/activate") {
                 $location.path('/login').replace();
             }
         });

         // Call when the 403 response is returned by the server
         $rootScope.$on('event:auth-notAuthorized', function(rejection) {
             $rootScope.errorMessage = 'errors.403';
             $location.path('/error').replace();
         });

         // Call when the user logs out
         $rootScope.$on('event:auth-loginCancelled', function() {
             $location.path('');
         });

         $rootScope.log = function(val) {
             $log.info(val);
         };

     }];
