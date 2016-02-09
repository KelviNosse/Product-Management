var app = angular.module('ProductsApp');

//Temporary url
var url = 'http://kelvinosse.github.io/Product-Management/api/products.json';

app.factory('Product', ($resource) => {
    return $resource(url, {} , {
        save: { method: "POST", isArray: true }
    });
});
