/* script for Browse by Subject View */
jQuery('.view-id-a_z_list_of_subjects .view-content').removeClass("row");
jQuery('.views-summary').prepend('<li id="show-all-link"><a href="/browse-subjects">All</a></li>');

var param = window.location.pathname.split("/").pop();
if (param == "browse-subjects") {
  jQuery('#show-all-link').addClass("active");
} else {
  jQuery('.is-active').parent().addClass("active");
}