angular.module('app.filters')
   .filter('imageUrl', [ function (imageUrlService) {
       return function (input) {
           return 'common/images/' + input;
       }
   }]);


