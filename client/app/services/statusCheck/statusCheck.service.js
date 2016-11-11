export class statusCheck{
    constructor($http,$timeout) {
        "ngInject;"
        this.http = $http;
        this.timeout = $timeout;
    }

    getStatus(page,successCallback,errCallback){
        let self = this;
        self.timeout(()=>{
            self.http.get(page).success(()=>{
                successCallback()
            }).error((err)=>{
                errCallback(err)});
        },1000);
    }
}