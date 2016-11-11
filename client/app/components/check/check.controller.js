class CheckController {
    constructor($http, $scope, $timeout, statusCheck) {
        this.$http = $http;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.statusCheck = statusCheck;
    }

    $onInit() {
        let self = this;
        self.$scope.radacodeNetState = 'evaluating';
        self.$scope.radacodeNetState = 'evaluating';
        self.$scope.jiraState = 'evaluating';
        self.$scope.cfState = 'evaluating';
        self.$scope.swarmState = 'evaluating';
        self.$scope.tcState = 'evaluating';
        self.$scope.wikiState = 'evaluating';
        self.$scope.skbxState = 'evaluating';
        this.startChecks();
    }

    startChecks() {
        this.radacodeNetCheck();
        this.radacodeComCheck();
        this.jiraCheck();
        this.cfCheck();
        this.swarmCheck();
        this.tcCheck();
        this.wikiCheck();
        this.skbxCheck();
    }

    radacodeNetCheck() {
        let self = this;
        self.statusCheck.getStatus('https://radacode.net',()=>{
            self.$scope.radacodeNetState = 'active';
        },()=>{
            self.$scope.radacodeNetState = 'unavailable';
        })
    }

    radacodeComCheck() {
        let self = this;
        self.statusCheck.getStatus('https://radacode.com',()=>{
            self.$scope.radacodeComState = 'active';
        },()=>{
            self.$scope.radacodeComState = 'unavailable';
        })
    }

    jiraCheck() {
        let self = this;
        self.statusCheck.getStatus('https://jira.radacode.net',()=>{
            self.$scope.jiraState = 'active';
        },()=>{
            self.$scope.jiraState = 'unavailable';
        })      
    }

    cfCheck() {
        let self = this;
        self.statusCheck.getStatus('https://cf.radacode.net',()=>{
            self.$scope.cfState = 'active';
        },()=>{
            self.$scope.cfState = 'unavailable';
        })      
    }

    swarmCheck() {
        let self = this;
        self.statusCheck.getStatus('https://p4.radacode.net',()=>{
            self.$scope.swarmState = 'active';
        },()=>{
            self.$scope.swarmState = 'unavailable';
        })      
    }

    tcCheck() {
        let self = this;
        self.statusCheck.getStatus('https://tc.radacode.net',()=>{
            self.$scope.tcState = 'active';
        },()=>{
            self.$scope.tcState = 'unavailable';
        })      
    }

    wikiCheck() {
        let self = this;
        self.statusCheck.getStatus('https://wiki.radacode.net',()=>{
            self.$scope.wikiState = 'active';
        },()=>{
            self.$scope.wikiState = 'unavailable';
        })      
    }

    skbxCheck() {
        let self = this;
        self.statusCheck.getStatus('https://skbx.com',()=>{
            self.$scope.skbxState = 'active';
        },()=>{
            self.$scope.skbxState = 'unavailable';
        })      
    }
}

CheckController.$inject = ['$http', '$scope', '$timeout', 'statusCheck'];

export { CheckController };