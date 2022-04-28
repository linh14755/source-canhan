$(document).ready(function() {
  
  $('#checkhotelcode').click(function() {
    if (!$(this).is(':checked')) {
      $('#ezhotelcode').removeClass("ez-hotel-code-hide");
    }
    else{
      $('#ezhotelcode').addClass("ez-hotel-code-hide");
    }
  });

  
});
