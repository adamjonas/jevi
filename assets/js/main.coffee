#= require "_helper"

# requirejs makes life a lot easier when dealing with more than one
# javascript file and any sort of dependencies, and loads faster.

# for more info on require config, see http://requirejs.org/docs/api.html#config
require.config
  waitSeconds: 0

  shim:
    fancybox:
      deps: ['jquery']

    fitvid:
      deps: ['jquery']

  paths:
    jquery:         "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min"
    fonts:          "//fast.fonts.com/jsapi/977de03a-bfaa-4a1c-991f-fde6b155a146"
    fancybox:       '../vendor/fancyapps/source/jquery.fancybox'
    mousewheel:     '../vendor/fancyapps/lib/jquery.mousewheel-3.0.6.pack'
    facebookSdk:    '//connect.facebook.net/en_US/all'
    fitvid:         'https://rawgithub.com/davatron5000/FitVids.js/master/jquery.fitvids'

# this will fire once the required scripts have been loaded
require ['jquery', 'fonts', 'fancybox', 'facebookSdk', 'fitvid'], ($) ->

  #intro
  $('.intro').slideUp(4000)

  $ ->
  
    # fancybox
    $('.fancy').fancybox()

    #initial screen
    $('.wrap').delay(4000).show(2000)

    #GA analytics
    $('.compra').click ->
      product_id  = $(@).data('product')
      ga('send', 'event', 'compra', product_id)

    $('.enlarge').click ->
      product_id  = $(@).data('product')
      ga('send', 'event', 'enlarge div', product_id)

    $('.fancy').click ->
      product_id  = $(@).data('product')
      ga('send', 'event', 'fancy div', product_id)