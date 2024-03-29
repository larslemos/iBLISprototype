(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getPeople: getPeople,
      getMessageCount: getMessageCount,
      getPatients: getPatients,
      getTests: getTests
    };

    return service;

    function getMessageCount() { return $q.when(72); }

    function getPeople() {
      return $http.get('/api/people').then(success).catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }

    function getPatients() {
      return $http.get('api/patients').then(success).catch(fail);

        function success(response) {
          return response.data;
        }

        function fail(e) {
          return exception.catcher('XHR Failed for getPatients')(e);
        }
    }

    function getTests() {
      return $http.get('api/tests').then(success).catch(fail);

        function success(response) {
          return response.data;
        }

        function fail(e) {
          return exception.catcher('XHR Failed for getTests')(e);
        }
    }
  }
})();
