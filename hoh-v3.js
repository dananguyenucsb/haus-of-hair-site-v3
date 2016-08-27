$(window).scroll(function() {
    $('#mee').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
              $(this).addClass("slideDown");
        }
    });
});

$(window).scroll(function() {
    $('table').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
              $(this).addClass("slideDown");
        }
    });
});

$(window).scroll(function() {
    $('form').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
              $(this).addClass("slideDown");
        }
    });
});

$(window).scroll(function() {
    $('#contactMe').each(function() {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 400) {
              $(this).addClass("slideDown");
        }
    });
});
