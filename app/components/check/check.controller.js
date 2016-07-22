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
        this.$timeout(function() {
            this.$http.get('https://radacode.net')
                .success(function() {
                    this.$scope.radacodeNetState = 'active';
                })
                .error(function() {
                    this.$scope.radacodeNetState = 'unavailable';
                });
        }, 1000);
    }
}

CheckController.$inject = ['$http', '$scope', '$timeout'];

export { CheckController };