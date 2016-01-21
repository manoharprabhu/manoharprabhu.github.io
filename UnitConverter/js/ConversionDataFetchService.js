var ConversionDataFetchService = (function () {
    var ConversionDataFetchSrvc = function ($http) {
        return {
            getData: function (file, callback) {
                $http.get(file).then(function (data) {
                    callback(null, data);
                }, function (error) {
                    callback(true);
                });
            }
        };
    };
    return ConversionDataFetchSrvc;
})();