(function ($) {
  'use strict';
  window.onload = function () {
    jQuery('.view-header .view-id-a_z_list_of_subjects .view-content ul').prepend('<li id="show-all-link"><a href="/browse-subjects">All</a></li>');

    var param = window.location.pathname.split("/").pop();
    if (param == "browse-subjects") {
      jQuery('#show-all-link').addClass("active");
    } else {
      jQuery('.is-active').parent().addClass("active");
    }
  }
})(jQuery);
