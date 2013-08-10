(function() {


}).call(this);

(function() {
  require.config({
    waitSeconds: 0,
    shim: {
      fancybox: {
        deps: ['jquery']
      },
      fitvid: {
        deps: ['jquery']
      }
    },
    paths: {
      jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min",
      fonts: "//fast.fonts.com/jsapi/977de03a-bfaa-4a1c-991f-fde6b155a146",
      fancybox: 'vendor/fancyapps/source/jquery.fancybox',
      mousewheel: 'vendor/fancyapps/lib/jquery.mousewheel-3.0.6.pack',
      facebookSdk: '//connect.facebook.net/en_US/all',
      fitvid: 'https://rawgithub.com/davatron5000/FitVids.js/master/jquery.fitvids'
    }
  });

  require(['jquery', 'fonts', 'fancybox', 'facebookSdk', 'fitvid'], function($) {
    return $(function() {
      return $('.fancy').fancybox();
    });
  });

}).call(this);
