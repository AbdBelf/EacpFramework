'use strict';

describe('myApp.phaseA module', function() {

  beforeEach(module('myApp.phaseA'));

  describe('phaseA controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var phaseACtrl = $controller('PhaseACtrl');
      expect(phaseACtrl).toBeDefined();
    }));

  });
});