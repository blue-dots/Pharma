<!doctype html>
<html>
<?php include("header.php");?>
<head>
    <link href="css/product.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,900,700italic,300italic,400italic,700'
          rel='stylesheet' type='text/css'>
</head>
<body>

<div class="cp-wrapper">
    <section class="cp-inner-banner">
        <div class="container">
            <div class="cp-inner-banner-outer">
                <h2>Online store</h2>

                <ul class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Product Page</li>
                </ul>
            </div>
        </div>
    </section>

    <div class="cp-main-content">
      <div class="cp-btn-listing">
        <ul class="nav nav-tabs" role="tablist">
          <li class="active">
            <a href="#tab-02" aria-controls="tab-02" role="tab" data-toggle="tab"><i
                  class="fa fa-list" aria-hidden="true"></i></a></li>
          <li>
            <a href="#tab-01" aria-controls="tab-01" role="tab" data-toggle="tab"><i
                  class="fa fa-th-large" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
        <section class="cp-product-section pd-t100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cp-tabs-holder">

                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane fade in" id="tab-01">
                                    <div class="row" id="productThumbnail">
                                    </div>
                                </div>
                                <div role="tabpanel" class="tab-pane fade in active" id="tab-02">
                                    <div class="row cp-pro-listing" id="productList">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
<?php include("footer.php");?>
<script src="./js/internal/mock-data-for-product.js" type="text/javascript"></script>
<script src="./js/internal/product-listing.js" type="text/javascript"></script>

</body>
</html>
