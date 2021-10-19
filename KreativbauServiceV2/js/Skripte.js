// Back-to-top button
$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

// Navigationsleiste hiden wenn runtergescrollt wird und anzeigen wenn hochschrollen

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
      let scroll_top = window.scrollY;
      if(scroll_top < last_scroll_top) {
            el_autohide.classList.remove('scrolled-down');
            el_autohide.classList.add('scrolled-up');
        }
        else {
            el_autohide.classList.remove('scrolled-up');
            el_autohide.classList.add('scrolled-down');
        }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end


//Navigationsleiste zwischen transparent und dark wechseln

document.addEventListener("DOMContentLoaded", function(){
  el_farbeÄndern = document.querySelector('.farbeAnimiert');

  if(el_farbeÄndern){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let höhe = window.innerHeight - 75;
          let scroll_top = window.scrollY;
         if(scroll_top > höhe) {
              el_farbeÄndern.classList.remove('transparent');
              el_farbeÄndern.classList.add('dark');
          }
          else {
              el_farbeÄndern.classList.remove('dark');
              el_farbeÄndern.classList.add('transparent');
          }
          last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end
