var app = angular.module('ProductsApp');

//Temporary url
var url = 'http://resources.habbobos.com/api/products.json';

app.factory('Product', ($resource) => {
    return $resource(url, {} , {
        save: { method: "POST", isArray: true }
    });
});
