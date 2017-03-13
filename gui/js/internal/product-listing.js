/**
 * Created by cs05 on 12/03/17.
 */

var createThumbnail = function (oProduct) {
  var $mainContainer = $('<div class="col-md-3 col-sm-6"></div>');

  var $container = $('<div class="cp-pro-item"></div>');

  var $imageContainer = $('<div class="cp-pro-img"></div>');
  var $textContainer = $('<div class="cp-text"></div>');

  $imageContainer.append('<img src=' + oProduct.image + ' alt="">');
  $textContainer.append(
      '<div class="top">' +
      '<h3><a href="product-detail.html">' + oProduct.label + '</a></h3>' +
      '<span class="subLabel">(' + oProduct.subLabel + ')</span>' +
      '</div>'
  );

  $container.append($imageContainer);
  $container.append($textContainer);

  $mainContainer.append($container);

  return $mainContainer
};

var createComposition = function (oProduct) {
  var $compositionContainer = null;
  var aComposition = oProduct.composition;
  if(aComposition && aComposition.length) {
    $compositionContainer = $('<div class="compositionContainer"><div' +
        ' class="compositionHeaderLabel">COMPOSITION: </div></div>');
    $compositionContainer.append('<div class="compositionText">' + oProduct.compositionText + '</div>');
    for(var iCompCount = 0; iCompCount < aComposition.length; iCompCount++) {
      var oComposition = aComposition[iCompCount];
      var $composition = $('<div class="compositionRow"></div>');
      $composition.append('<div class="compositionLabel">' + oComposition.label + '</div>');
      if(oComposition.value) {
        $composition.append('<div class="compositionValue">' + oComposition.value + '</div>');
      }
      $compositionContainer.append($composition);
    }
  }

  return $compositionContainer;
};

var createIndication = function (oProduct) {
  var $indicatorContainer = null;
  var aIndication = oProduct.indication;
  var aIndicationCategory = oProduct.indicationCategories;
  if(aIndication && aIndication.length) {
    $indicatorContainer = $('<div class="indicationContainer"><div class"indicationLabel">INDICATION: </div></div>');
    for(var iIndCount = 0; iIndCount < aIndication.length; iIndCount++) {
      $indicatorContainer.append('<div class="indicationRow">' + aIndication[iIndCount] + '</div>');
    }
  }

  if (aIndicationCategory && aIndicationCategory.length) {
    $indicatorContainer = $indicatorContainer || $('<div class="indicationContainer"><div class"indicationLabel">INDICATION: </div></div>');
    for(var iIndCatCount = 0; iIndCatCount < aIndication.length; iIndCatCount++) {
      var oIndication = aIndication[iIndCatCount];
      var $indicationCat = $('<div class="indicationRow"></div>');
      $indicationCat.append('<div class="indicationLabel">' + oIndication.label + '</div>');
      if(oIndication.value) {
        $indicationCat.append('<div class="indicationValue">' + oIndication.value + '</div>');
      }
      $indicatorContainer.append($indicationCat);
    }
  }

  return $indicatorContainer;
};

var createDosage = function (oProduct) {
  var $dosageContainer = null;
  var aDosage = oProduct.dosage;
  var aDosageCategory = oProduct.dosageCategory;
  if(aDosage && aDosage.length) {
    $dosageContainer = $('<div class="dosageContainer"><div class"dosageLabel">DOSAGE & ADMINISTRATION: </div></div>');
	
	$dosageContainer.append('<div class="dosageRow">' + aDosage+ '</div>');
    /*for(var iIndCount = 0; iIndCount < aDosage.length; iIndCount++) {
		
		
      
    }*/
  }

  if (aDosageCategory && aDosageCategory.length) {
    $dosageContainer = $dosageContainer || $('<div class="dosageContainer"><div class"dosageLabel">DOSAGE & ADMINISTRATION: </div></div>');
    for(var iIndCatCount = 0; iIndCatCount < aDosage.length; iIndCatCount++) {
      var oIndication = aDosage[iIndCatCount];
      var $indicationCat = $('<div class="dosageRow"></div>');
      $indicationCat.append('<div class="dosageLabel">' + oIndication.label + '</div>');
      if(oIndication.value) {
        $indicationCat.append('<div class="dosageValue">' + oIndication.value + '</div>');
      }
      $dosageContainer.append($indicationCat);
    }
  }

  return $dosageContainer;
};

var createWithdrawal = function (oProduct) {
  var $withdrawalContainer = null;
  var aWithdrawal = oProduct.withdrawal;
 // var aWithdrawalCategory = oProduct.aWithdrawalCategory;
  /*if(aWithdrawal && aWithdrawal.length) {
    $withdrawalContainer = $('<div class="withdrawalContainer"><div class"withdrawalLabel">WITHDRAWAL PERIOD:' +
        ' </div></div>');
    for(var iIndCount = 0; iIndCount < aWithdrawal.length; iIndCount++) {
      $withdrawalContainer.append('<div class="withdrawalRow">' + aWithdrawal[iIndCount] + '</div>');
    }
  }*/

  if (aWithdrawal && aWithdrawal.length) {
    $withdrawalContainer = $withdrawalContainer || $('<div class="withdrawalContainer"><div' +
            ' class"withdrawalLabel">WITHDRAWAL PERIOD: </div></div>');
    for(var iIndCatCount = 0; iIndCatCount < aWithdrawal.length; iIndCatCount++) {
      var oIndication = aWithdrawal[iIndCatCount];
      var $indicationCat = $('<div class="withdrawalRow"></div>');
      $indicationCat.append('<div class="withdrawalLabel">' + oIndication.label + '</div>');
      if(oIndication.value) {
        $indicationCat.append('<div class="withdrawalValue">' + oIndication.value + '</div>');
      }
      $withdrawalContainer.append($indicationCat);
    }
  }

  return $withdrawalContainer;
};


var createListItem = function (oProduct) {
  var $mainContainer = $('<div class="col-md-12 col-sm-12"></div>');

  var $container = $('<div class="cp-pro-item"></div>');

  var $imageContainer = $('<div class="cp-pro-img"></div>');
  var $textContainer = $('<div class="cp-text"></div>');

  $imageContainer.append('<img src=' + oProduct.image + ' alt="">');
  $textContainer.append(
      '<div class="top">' +
      '<h3><a href="product-detail.html">' + oProduct.label + '</a></h3>' +
      '<span class="subLabel">(' + oProduct.subLabel + ')</span>' +
      '</div>'
  );

  $textContainer.append(createComposition(oProduct));
  $textContainer.append(createIndication(oProduct));
  $textContainer.append(createDosage(oProduct));
  $textContainer.append(createWithdrawal(oProduct));

  $container.append($imageContainer);
  $container.append($textContainer);

  $mainContainer.append($container);

  return $mainContainer
};


$('document').ready(function () {
  var $thumbnailContainer = $('#productThumbnail');
  var $listContainer = $('#productList');
  for(var iCount = 0; iCount < aProducts.length; iCount++) {
    var oCategory = aProducts[iCount];
    var aProdChildList = oCategory.children;
    for(var iProdCount = 0; iProdCount < aProdChildList.length; iProdCount++) {
      $thumbnailContainer.append(createThumbnail(aProdChildList[iProdCount]));
      $listContainer.append(createListItem(aProdChildList[iProdCount]));
    }
  }
});