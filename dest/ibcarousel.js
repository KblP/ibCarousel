(function ($, undefined) {
  'use strict';

  // Collection method.
  $.fn.extend({
    ibcarousel: function(options) {

      var defaults = {};
      var settings = $.extend(defaults, options);

      return this.each(function() {

        var $t = $(this);

        var frames = $t.children();
        var framesStr = '';
        frames.each(function() {
          framesStr += $.trim(this.outerHTML);
        });
        $t.html(framesStr);

      });
    }
  });

  // Static method.
  $.extend({
    ibcarousel: function(options) {

      var defaults = {};
      var settings = $.extend(defaults, options);

    }
  });

}(jQuery));

$(document).ready(function() {
  $('.ibcarousel').ibcarousel();
});
