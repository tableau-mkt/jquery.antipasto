/*
 * jquery.antipasto
 * https://github.com/tableau-mkt/jquery.antipasto
 *
 * Copyright (c) 2015 Tableau Marketing Webteam
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jquery_antipasto = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jquery_antipasto = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jquery_antipasto.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jquery_antipasto.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jquery_antipasto = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
