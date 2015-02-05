;(function($, window, document, undefined) {
  'use strict';

  var ibCarousel = function(elem, options) {
    this.elem = elem;
    this.$elem = $(elem);
    this.options = options;
    // <div class=item' data-plugin-options='{"message":"Goodbye World!"}'></div>
    this.metadata = this.$elem.data('plugin-options');
  };

  ibCarousel.prototype = {
    defaults: {
      autoplay: 1,
      pause: 5000,
      animation: 1000,
      transitions: true
    },
    init: function() {

      this.config = $.extend({}, this.defaults, this.options,
        this.metadata);

      var $t = this.$elem;

      var frames = $t.children();
      var framesStr = '';
      frames.each(function() {
        framesStr += $.trim(this.outerHTML);
      });

      $t.html(framesStr);

      this.sampleMethod();
      return this;
    },
    sampleMethod: function() {

    }
  }
  ibCarousel.defaults = ibCarousel.prototype.defaults;

  $.fn.ibcarousel = function(options) {
    return this.each(function() {
      new ibCarousel(this, options).init();
    });
  };
  //optional: window.ibCarousel = ibCarousel;
})(jQuery, window, document);