var app = angular.module('ProductsApp');
    
app.directive('inplaceEditing', function() {
    return {
        restrict: 'E',
        scope: {
            edit:'='
        },
        controller : 'editmodeController as editCtrl',
        template: "<div id='editTbx' class='col-xs-10 list-group-item' ng-show='edit.editMode'><input type='text' id='{{edit.Id}}'  ng-model='edit.Name' ng-model-options='{ getterSetter: true }' ng-keypress='editCtrl.enterEvent($event)' focus='edit.editMode' ng-blur='edit.editMode = false'></div>"    
    }
});

app.directive('focus', ($timeout) => {
    return {
        restrict: 'A',
        scope: { focus: '=focus' },
        link: (scope, element, attr) => {
            scope.$watch('focus', (cv, pv) => {
                if (scope.focus) {
                    $timeout(() => {
                        console.log(scope.focus);
                        element[0].focus();
                    }, 0);
                }
                else {
                    $timeout(() => {
                        console.log(scope.focus);
                        element[0].blur();
                    }, 0);
                }
            });
        }
    };
});