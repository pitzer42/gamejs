require.config({
  baseUrl: '../src', 
  paths: {
      'jasmine': ['../tests/lib/jasmine'],
      'jasmine-html': ['../tests/lib/jasmine-html'],
      'jasmine-boot': ['../tests/lib/boot'],
      'core/*': ['../src/core'],
      'engine': ['../src/engine']
  },
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  require([
      '../tests/specs/eventbus-spec',
      '../tests/specs/composite-spec',
      '../tests/specs/math/vector-spec',
      '../tests/specs/math/circle-spec',
      '../tests/specs/math/segment-spec',
      '../tests/specs/math/rectangle-spec',
      '../tests/specs/gameobject-spec'
  ], function(){
    window.onload();
  })
});
