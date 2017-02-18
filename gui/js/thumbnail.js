/**
 * Created by admin on 18/02/2017.
 */
function createThumbnails() {

    var $sectionContainer = $('<div class="container sectionContainer"><span class="hotproCls">Hot Products</span></div>');
    var $sectionBody = $('<div class="container sectionBody"></div>');
    for (var i in aHotProducts) {
        var $thumbnail = getThumbnailDOM(aHotProducts[i]);
        $sectionBody.append($thumbnail);
    }
    $sectionContainer.append($sectionBody);
    $('#thumbnailWrapper').append($sectionContainer);


    $sectionContainer = $('<div class="container sectionContainer"><span class="newproCls">New Products</span></div>');
    $sectionBody = $('<div class="container sectionBody"></div>');
    for (var i in aNewProducts) {
        var $thumbnail = getThumbnailDOM(aNewProducts[i]);
        $sectionBody.append($thumbnail);
    }
    $sectionContainer.append($sectionBody);
    $('#thumbnailWrapper').append($sectionContainer);
}

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