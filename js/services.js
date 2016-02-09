var app = angular.module('ProductsApp');

//Temporary url
var url = 'http://planillaanal.apphb.com/api/Products';

app.factory('Product', ($resource) => {
    return $resource(url, {} , {
        save: { method: "POST", isArray: true }
    });
});
