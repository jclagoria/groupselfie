(function() {
  'use strict';

  angular
    .module('groupselfie')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
