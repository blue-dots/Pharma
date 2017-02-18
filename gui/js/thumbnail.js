/**
 * Created by admin on 18/02/2017.
 */
function createThumbnails() {

    var $sectionContainer = $('<div class="container sectionContainer"></div>');
    $sectionContainer.append('<div class="productImageLogo hotProductImage"></div>');

    var $sectionBodyContainer = $('<div class="sectionBodyContainer"></div>');
    $sectionContainer.append($sectionBodyContainer);
    $sectionBodyContainer.append('<div class="sectionHeader">Hot Products</div>');

    var $sectionBody = $('<div class="container sectionBody"></div>');
    for (var i in aHotProducts) {
        var $thumbnail = getThumbnailDOM(aHotProducts[i]);
        $sectionBody.append($thumbnail);
    }
    $sectionBodyContainer.append($sectionBody);
    $('#thumbnailWrapper').append($sectionContainer);


    $sectionContainer = $('<div class="container sectionContainer"></div>');
    $sectionContainer.append('<div class="productImageLogo newProductImage"></div>');
    $sectionBodyContainer = $('<div class="sectionBodyContainer"></div>');
    $sectionContainer.append($sectionBodyContainer);

    $sectionBodyContainer.append('<div class="sectionHeader">New Products</div>');

    $sectionBody = $('<div class="container sectionBody"></div>');
    for (var i in aNewProducts) {
        var $thumbnail = getThumbnailDOM(aNewProducts[i]);
        $sectionBody.append($thumbnail);
    }
    $sectionBodyContainer.append($sectionBody);
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