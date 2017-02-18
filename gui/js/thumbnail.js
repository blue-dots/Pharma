/**
 * Created by admin on 18/02/2017.
 */
$('document').ready(function () {
    for (var i in aProducts) {
        var $thumbnail = getThumbnailDOM(aProducts[i]);
        $('#thumbnailWrapper').append($thumbnail);
    }
});

function getThumbnailDOM(oProduct) {
    var sLabel = oProduct.label;
    var url = oProduct.image;

    var $container = $('<div class="container thumbnailContainer"></div>');
    var $imageContainer = $("<div class='thumbnailImage'></div>");
    $imageContainer.append("<img src=" + url + ">");

    var $labelContainer = $("<div class='thumbnailLabel'></div>");
    $labelContainer.append("<div>" + sLabel + "</div>");


    $container.append($imageContainer);
    $container.append($labelContainer);

    return $container;

}