var MainController = (function () {

    var availableParentUnits = [{'key': 'length', 'value': 'Length / Distance'}, {'key': 'weight', 'value': 'Weight'}];

    var MainCtrl = function ($scope, ConversionDataFetchService) {
        $scope.masterData = null;

        ConversionDataFetchService.getData("js/data/unitfilemapping.json", function (err, data) {
            $scope.unitFileMapping = data.data;
        });
        
        $scope.parentUnit = null;
        $scope.units = availableParentUnits;
        $scope.sourceUnit = null;
        $scope.targetUnit = null;

        $scope.sourceQuantity = 0;
        $scope.targetQuantity = 0;

        $scope.$watch('[sourceUnit,targetUnit]', function (newValue, oldValue) {
            if ($scope.parentUnit && $scope.sourceUnit && $scope.targetUnit) {
                $scope.targetQuantity = Helper.convertFromSourceToTarget($scope.sourceUnit, $scope.targetUnit, $scope.sourceQuantity, $scope.masterData.conversion);
            }
        });

        $scope.$watch('sourceQuantity', function (newValue, oldValue) {
            if ($scope.parentUnit && $scope.targetUnit) {
                $scope.targetQuantity = Helper.convertFromSourceToTarget($scope.sourceUnit, $scope.targetUnit, $scope.sourceQuantity, $scope.masterData.conversion);
            }
        });

        $scope.$watch('parentUnit', function (newValue, oldValue) {
            if ($scope.parentUnit) {
                ConversionDataFetchService.getData($scope.unitFileMapping[$scope.parentUnit], function (err, data) {
                    $scope.masterData = data.data;
                });
            }
        });

        $scope.swapUnits = function () {
            var tmp = $scope.sourceUnit;
            $scope.sourceUnit = $scope.targetUnit;
            $scope.targetUnit = tmp;
        };
    };

    return MainCtrl;

})();