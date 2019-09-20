var sections = $('.section');
var nav = $('nav');
var nav_height = nav.outerHeight();

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {

      nav.find('li').removeClass('active');
      nav.find('li[id="'+$(this).attr('id')+'Nav"]').addClass('active');
    }
  });
});
