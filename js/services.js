var app = angular.module('ProductsApp');

//Temporary url
var url = 'http://productmonitor.herokuapp.com';

app.factory('Product', ($resource) => {
    return $resource(url, {} , {
        save: { method: "POST", isArray: true }
    });
});
