/**
 * Created by admin on 19/02/2017.
 */

$('document').ready(function () {
    createThumbnails();

    $('.link').on('click', function () {
        var sDOMId = $(this).attr('data-id');
        var $oDOM = $("#" + sDOMId);
        if($oDOM.length) {
            $('html,body').animate({
                    scrollTop: $oDOM.offset().top},
                'slow');
        }
    });
});