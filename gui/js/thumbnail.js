/**
 * Created by admin on 18/02/2017.
 */
$('document').ready(function () {

    var $sectionContainer1 = $('<div class="container sectionContainer1"><span class="hotproCls">Hot Products</span></div>');
    var $sectionContainer = $('<div class="container sectionContainer"></div>');
    for (var i in aHotProducts) {
        var $thumbnail = getThumbnailDOM(aHotProducts[i]);
        $sectionContainer.append($thumbnail);
    }
    $sectionContainer1.append($sectionContainer);
    $('#thumbnailWrapper').append($sectionContainer1);
    var $sectionContainerSecond2 = $('<div class="container sectionContainer2"><span class="newproCls">New Products</span></div>');
    var $sectionContainerSecond = $('<div class="container sectionContainer"></div>');
    for (var i in aNewProducts) {
        var $thumbnail = getThumbnailDOM(aNewProducts[i]);
        $sectionContainerSecond.append($thumbnail);
    }
    $sectionContainerSecond2.append($sectionContainerSecond);
    $('#thumbnailWrapper').append($sectionContainerSecond2);
});

function getThumbnailDOM(oProduct) {
   // alert(oProduct);
    //alert()
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