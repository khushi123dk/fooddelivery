function include(url) {
    document.write('<script src="' + url + '"></script>');
    return false;
}

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');


/* DEVICE.JS
 ========================================================*/
include('js/device.min.js');

/* Stick up menu
 ========================================================*/
include('js/tmstickup.js');
$(window).load(function () {
    if ($('html').hasClass('desktop')) {
        $('#stuck_container').TMStickUp({
        })
    }
});

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* Stellar.js
 ========================================================*/
include('js/stellar/jquery.stellar.js');
$(document).ready(function () {
    if ($('html').hasClass('desktop')) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: 20
        });


    }
});

/* ToTop
 ========================================================*/
include('js/jquery.ui.totop.js');
$(function () {
    $().UItoTop({ easingType: 'easeOutQuart' });
});


/* DEVICE.JS AND SMOOTH SCROLLIG
 ========================================================*/
include('js/jquery.mousewheel.min.js');
include('js/jquery.simplr.smoothscroll.min.js');
$(function () {
    if ($('html').hasClass('desktop')) {
        $.srSmoothscroll({
            step: 150,
            speed: 800
        });
    }
});

/* Copyright Year
 ========================================================*/
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#copyright-year").text((new Date).getFullYear());
});


/* Superfish menu
 ========================================================*/
include('js/superfish.js');
include('js/jquery.mobilemenu.js');


/* Orientation tablet fix
 ========================================================*/
$(function () {
// IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM)
        if (!result) {
            $('.sf-menu li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">')


$(document).ready(function () {
    if ($('#owl').length > 0) {
        $("#owl").owlCarousel({
            navigation: false,
            autoPlay: true,
            slideSpeed: 300,
            pagination: false,
            paginationSpeed: 400,
            singleItem: true,
            addClassActive: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            stopOnHover: true,
            afterMove: function () {
                var index = $('#owl').find('.owl-item.active').find('.item').data('index');

                var pag = $('#owl-pag');
                pag.find('.box_2.active').removeClass('active');
                pag.find('.box_2[data-index="' + index + '"]').addClass('active');
            }
        });

        var owl = $("#owl").data('owlCarousel');

        $('#owl-pag').find('.box_2').click(function () {
            owl.goTo($(this).data('index') - 1);
        })
    }

    if ($('#owl_2').length > 0) {
        $("#owl_2").owlCarousel({
            navigation: true,
            autoPlay: true,
            slideSpeed: 300,
            pagination: false,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["", ""]
        });
    }

    if ($('#owl_3').length > 0) {
        $("#owl_3").owlCarousel({
            navigation: false,
            autoPlay: true,
            slideSpeed: 300,
            pagination: false,
            paginationSpeed: 400,
            singleItem: true,
            addClassActive: true,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            stopOnHover: true,
            afterMove: function () {
                var index = $('#owl_3').find('.owl-item.active').find('.item').data('index');

                var pag = $('#owl-pag_2');
                pag.find('.active').removeClass('active');
                pag.find('li[data-index="' + index + '"]').addClass('active');
            }
        });

        var owl = $("#owl_3").data('owlCarousel');

        $('#owl-pag_2').find('li').find('span').click(function () {
            owl.goTo($(this).parent().data('index') - 1);
        })
    }

    if ($('a[data-type="lightbox"]').length > 0) {
        $('a[data-type="lightbox"]').touchTouch();
    }
});
