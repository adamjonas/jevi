(function() {
  console.log("hello from a require'd coffee file (via assets/js/_helper.coffee)");

}).call(this);

(function() {
  require.config({
    waitSeconds: 0,
    shim: {
      fancybox: {
        deps: ['jquery']
      },
      customSelect: {
        deps: ['jquery']
      },
      fitvid: {
        deps: ['jquery']
      }
    },
    paths: {
      jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min",
      fonts: "//fast.fonts.com/jsapi/977de03a-bfaa-4a1c-991f-fde6b155a146",
      facebookSdk: '//connect.facebook.net/en_US/all',
      fitvid: 'https://rawgithub.com/davatron5000/FitVids.js/master/jquery.fitvids'
    }
  });

  require(['jquery', 'fonts', 'facebookSdk', 'fitvid'], function($) {});

  require(['jquery'], function($) {
    return console.log('jquery loaded (via assets/js/main.coffee)');
  });

}).call(this);
