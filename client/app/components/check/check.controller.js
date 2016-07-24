class CheckController {
    constructor($http, $scope, $timeout) {
        this.$http = $http;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit() {
        this.$scope.radacodeNetState = 'evaluating';
        this.startChecks();
    }

    startChecks() {
        var current = this;
        this.$timeout(function() {
            current.$http.get('https://radacode.net')
                .success(function() {
                    current.$scope.radacodeNetState = 'active';
                })
                .error(function() {
                    current.$scope.radacodeNetState = 'unavailable';
                });
        }, 1000);
    }
}

CheckController.$inject = ['$http', '$scope', '$timeout'];

export { CheckController };