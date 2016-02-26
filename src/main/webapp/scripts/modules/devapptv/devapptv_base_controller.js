

'use strict';
catwalkApp.controller('DevapptvBaseController', ['$scope', 'service',
    function ($scope, service) {
        $scope.queryParameters = {rows: 5};
        $scope.create = function () {service.save($scope.modelData,function(){
                $scope.modelList = service.query($scope.queryParameters);
                jQuery('#' + $scope.formId).modal('hide');
                $scope.clear();
            });
        };
        $scope.onServerSideItemsRequested = function (currentPage, filterBy, filterByFields, orderBy, orderByReverse) {
            $scope.queryParameters = {
                rows: $scope.queryParameters.rows,
                page: currentPage + 1,
                sord: orderByReverse ? "DESC" : "ASC",
                sidx: orderBy,
                filterBy: filterBy,
                filterByFields: filterByFields
            };
            service.query($scope.queryParameters, function (json) {
                $scope.modelList = json;
            });
        };
        $scope.update = function (id) {
            $scope.modelData = service.get({id: id});
            jQuery('#' + $scope.formId).modal('show');
        };
        $scope.setRows = function (numRows) {
            $scope.queryParameters.rows = numRows;
            service.query($scope.queryParameters, function (json) {
                $scope.modelList = json;
            });
        };
        $scope.remove = function (id) {
            service.delete({id: id},
                function () {
                    $scope.modelList = service.query($scope.queryParameters);
                });
        };
        $scope.setRows(20);
        $scope.clear = function () {
            $scope.modelData = {id: ""};
        };
    }]);