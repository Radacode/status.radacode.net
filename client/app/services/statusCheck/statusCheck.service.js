export class statusCheck{
    constructor($http,$timeout) {
        "ngInject;"
        this.http = $http;
        this.timeout = $timeout;
    }

    getStatus(page,successCallback,errCallback,sucсessCode = 200){
        let self = this;
        self.timeout(()=>{
            self.http.get(page).then(function (success) {
                if(success.status == sucсessCode) successCallback();
            }, function (error) {
                if(error.status == sucсessCode) successCallback();
                errCallback(error)}
                );
        },1000);
    }
}