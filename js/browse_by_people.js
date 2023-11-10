(function ($) {
  'use strict';
  window.onload = function () {
    jQuery('.view-header .view-id-a_z_list_of_people .view-content ul').prepend('<li id="show-all-link"><a href="/browse-people">All</a></li>');

    var param = window.location.pathname.split("/").pop();
    if (param == "browse-people") {
      jQuery('#show-all-link').addClass("active");
    } else {
      jQuery('.is-active').parent().addClass("active");
    }
  }
})(jQuery);
