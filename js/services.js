angular.module('myAppServices', ['ngResource']).

    factory('datos', function($resource){

  return $resource(':resourceName.json', {}, {

    query: {method:'GET', params:{resourceName:'datos'}, isArray: true}

  });

});
