<?php
//If the form is submitted
if(isset($_POST['submit'])) {

	//Check to make sure that the name field is not empty
	if(trim($_POST['contactname']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['contactname']);
	}
	
	//Check to make sure that the name field is not empty
	if(trim($_POST['phone']) == '') {
		$hasError = true;
	} else {
		$phone = trim($_POST['phone']);
	}

	//Check to make sure that the subject field is not empty
	if(trim($_POST['subject']) == '') {
		$hasError = true;
	} else {
		$subject = trim($_POST['subject']);
	}

	//Check to make sure sure that a valid email address is submitted
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", trim($_POST['email']))) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}

	//Check to make sure comments were entered
	if(trim($_POST['message']) == '') {
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}

	//If there is no error, send the email
	if(!isset($hasError)) {
		$emailTo = 'youremail@example.com'; //Put your own email address here
		$body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $comments \n\nPhone: $phone";
		$headers = 'From: My Website <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
	}
}
?>
<!DOCTYPE html>
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="">
    <meta name="description" content="">
    <link rel="shortcut icon" href="img/favicon.png">

    <title>Solofy</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/flexslider.css">
    <link rel="stylesheet" href="css/jquery.fancybox.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/animate.css">

    <script src="js/libs/modernizr.min.js"></script>

</head>

<body id="contact">

<!-- search box -->
<div class="search-big">
    <input class="search-desktop" type="search" placeholder="Search..." autofocus>
</div>
<!-- /search box -->

<!-- header wrap -->
<div class="header-wrap">
    <div class="header-wrap-inner">

        <!-- main navigation -->
        <div class="main-navigation">
            <div class="main-navigation-inner">
                <div class="top-nav">
                    <div class="container">
                        <div class="col-sm-6 col-xs-12 top-nav-left">
                            <i class="icon-map-marker"></i> 65 E 14th Street NYC, NY
                        </div>
                        <div class="hidden-xs col-sm-6 col-xs-12 top-nav-right">
                            <a href="#" class="sol-tooltip" data-toggle="tooltip" data-placement="bottom" title="Like"><i class="icon-facebook"></i></a>
                            <a href="#" class="sol-tooltip" data-toggle="tooltip" data-placement="bottom" title="Tweet"><i class="icon-twitter"></i></a>
                            <a href="#" class="sol-tooltip" data-toggle="tooltip" data-placement="bottom" title="Dribbble"><i class="icon-dribbble"></i></a>
                            <a href="#" class="sol-tooltip" data-toggle="tooltip" data-placement="bottom" title="Link"><i class="icon-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <nav class="navbar navbar-default" role="navigation">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="index.html"><img src="img/logo.png" alt="logo"></a>
                        </div>
                        <a href="#menu" class="menu-link">Menu</a>
                        <div id="menu" class="menu">
                            <ul class="sf-menu">
                                <li>
                                    <a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home Creative</a></li>
                                        <li><a href="index-agency.html">Home Agency</a></li>
                                        <li><a href="index-studio.html">Home Studio</a></li>
                                        <li><a href="index-designer.html">Home Designer</a></li>
                                        <li><a href="index-designer-alt.html">Home Designer Alt</a></li>
                                        <li><a href="index-photographer.html">Home Photographer</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="about-us-alt.html">About Us 2</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="services2.html">Services 2</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="prices.html">Prices</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="team-single.html">Team Member</a></li>
                                        <li><a href="shortcodes.html">Shortcodes</a></li>
                                        <li><a href="404.html">404 Error Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Portfolio</a>
                                    <ul>
                                        <li><a href="#">Grid Layout</a>
                                            <ul>
                                                <li><a href="portfolio-4c.html">4 Columns</a></li>
                                                <li><a href="portfolio-3c.html">3 Columns</a></li>
                                                <li><a href="portfolio-2c.html">2 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Grid Layout Mimimal</a>
                                            <ul>
                                                <li><a href="portfolio-4c-min.html">4 Columns</a></li>
                                                <li><a href="portfolio-3c-min.html">3 Columns</a></li>
                                                <li><a href="portfolio-2c-min.html">2 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Masonry Layout</a>
                                            <ul>
                                                <li><a href="portfolio-4c-masonry.html">4 Columns</a></li>
                                                <li><a href="portfolio-3c-masonry.html">3 Columns</a></li>
                                                <li><a href="portfolio-2c-masonry.html">2 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Masonry Layout Mimimal</a>
                                            <ul>
                                                <li><a href="portfolio-4c-masonry-min.html">4 Columns</a></li>
                                                <li><a href="portfolio-3c-masonry-min.html">3 Columns</a></li>
                                                <li><a href="portfolio-2c-masonry-min.html">2 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="portfolio-1c.html">Centered</a></li>
                                        <li><a href="portfolio-alt.html">Case Studies</a></li>
                                        <li><a href="portfolio-photo-wall.html">Photo Wall</a></li>
                                        <li><a href="#">Single Project</a>
                                            <ul>
                                                <li><a href="portfolio-single.html">Single Image 1</a></li>
                                                <li><a href="portfolio-details-alt.html">Single Image 2</a></li>
                                                <li><a href="portfolio-details-alt2.html">Single Video</a></li>
                                                <li><a href="portfolio-details-alt3.html">Single Slideshow</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-classic-left-sidebar.html">Blog Classic Left</a></li>
                                        <li><a href="blog-classic-right-sidebar.html">Blog Classic Right</a></li>
                                        <li><a href="blog-full.html">Blog Classic Full</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-centered.html">Blog Centered</a></li>
                                        <li><a href="blog-post.html">Single Post</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                    <ul>
                                        <li><a href="products.html">Products</a></li>
                                        <li><a href="products-sortable.html">Sortable Products</a></li>
                                        <li><a href="single-product.html">Single Product</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.php" class="no-line">Contact</a>
                                </li>
                                <li class="hidden-xs">
                                    <a class="no-line search-button" href="#/"></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <img src="img/shadow.png" class="nav-shadow">
        </div>
        <!-- /main navigation -->

        <!-- banner title -->
        <section class="page-title-location">
            <div class="page-title-location-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="location-container">
                                <ol class="breadcrumb">
                                    <li><a href="index.html"><span class="icn-container"><i class="icon-reorder"></i></span>Home</a></li>
                                    <li class="active"><a href="contact.php">Contact</a></li>
                                </ol>
                            </div>
                            <div class="title-container">
                                <h1 class="title white-title">Get in touch with us.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /banner title -->

    </div>
</div>
<!-- /header wrap -->

<!-- map -->
<section class="map-container">

    <svg class="curve-down curve-down-lt" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
    </svg>
    <svg class="curve-up curve-up-white" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
    </svg>

    <div class="row">
        <div class="google-map"></div>
    </div>
</section>
<!-- /map -->

<!-- contact -->
<section class="contact-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-push-4">
                <div class="form-container">
                    <h3><span id="typed-contact" class="typed"></span></h3>

                    <?php if(isset($hasError)) { //If errors are found ?>
                        <p>Please check if you've filled all the fields with valid information and try again. Thank you.</p>
                        <?php } ?>

                            <?php if(isset($emailSent) && $emailSent == true) { //If email is sent ?>
                                <div class="success">
                                    <p><strong>Email Successfully Sent!</strong></p>
                                    <p>Thank you for contacting us <strong><?php echo $name;?></strong>! We'll be in touch soon.</p>
                                </div>
                                <?php } ?>

                                    <form method="post" action="<?php echo $_SERVER['form/PHP_SELF']; ?>" id="contactform">
                                        <div class="row">
                                            <div class="col-xs-12 col-md-6">
                                                <label for="contactname">Name:</label>
                                                <input type="text" name="contactname" id="contactname" class="required form-control">
                                            </div>

                                            <div class="col-xs-12 col-md-6">
                                                <label for="email">Email:</label>
                                                <input type="text" name="email" id="email" value="" class="required email form-control">
                                            </div>

                                            <div class="col-xs-12 col-md-6">
                                                <label for="phone">Telephone:</label>
                                                <input type="text" name="phone" id="phone" class="required form-control">
                                            </div>

                                            <div class="col-xs-12 col-md-6">
                                                <label for="subject">Subject:</label>
                                                <input type="text" name="subject" id="subject" value="" class="required form-control">
                                            </div>
                                        </div>

                                        <label for="message">Message:</label>
                                        <textarea rows="8" name="message" id="message" class="required form-control" role="textbox"></textarea>
                                        <button type="submit" name="submit" class="btn btn-green" id="submitButton" title="Click here to submit your message!">Send Message</button>
                                    </form>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-sm-pull-8">
                <aside class="contact-info">
                    <h3>Find Us</h3>
                    <address>Solofy Inc. <br>
                65 E 14th Street<br>
                    NYC, NY 10037</address>
                    <div class="details">
                        757-560-7499
                    </div>
                    <div class="details">
                        contact@solofy.com
                    </div>
                    <h3>Get Social</h3>
                    <div class="contact-social">
                        <a href="#">
                            <i class="icon-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="icon-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="icon-github" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i class="icon-dribbble" aria-hidden="true"></i>
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</section>
<!-- /contact -->

<!-- hero -->
<section class="full-separator pt150">

    <svg class="curve-down" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
    </svg>

    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1 center">
                <h2 class="title center">Need fast tech support?<br></h2>
                <p class="center"><a class="btn btn-default sign-up wow tada" href="#">Vist Our Support Forum! <i class="icon-chat"></i></a></p>
            </div>
        </div>
    </div>
</section>
<!-- /hero -->

<!-- twitter feed -->
<section class="tweet-container tweet-container-curves pt60">

    <svg class="curve-up" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
    </svg>

    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6 col-centered">
                <h4 class="title center">Latest Tweets</h4>
                <div class="twitter-feed">
                </div>
                <p class="center icn-container"><i class="icon-twitter"></i></p>
            </div>
        </div>
    </div>
</section>
<!-- /twitter feed -->

<!-- main footer -->
<footer class="main-footer">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-2">
                <div class="footer-widget">
                    <p><img src="img/logo-white.png" class="footer-logo"></p>
                    <ul class="list-unstyled list-info">
                        <li>65 E 14th Street</li>
                        <li>NYC, NY 10037</li>
                    </ul>
                    <ul class="list-unstyled list-info">
                        <li>757-560-7499</li>
                        <li>contact@solofy.com</li>
                    </ul>
                    <ul class="list-unstyled list-inline list-icn-container">
                        <li><a href="#"><i class="icon-twitter"></i></a></li>
                        <li><a href="#"><i class="icon-facebook"></i></a></li>
                        <li><a href="#"><i class="icon-google-plus"></i></a></li>
                        <li><a href="#"><i class="icon-pinterest2"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="footer-widget">
                    <h4 class="title">Our Instagram</h4>
                    <div class="insta"></div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4">
                <div class="footer-widget">
                    <h4 class="title">Featured Posts</h4>
                    <dl class="dl-horizontal dl-post-container">
                        <dt>
                        <img src="img/demo/footer/blog1.jpg" alt="img">
                    </dt>
                        <dd>
                            <h5 class="post-title"><a href="blog-post.html">A look back at our year</a></h5>
                            <p class="content">Sunt echo park heirloom keffiyeh skateboard irure, glossier odio artisan.</p>
                        </dd>
                    </dl>
                    <dl class="dl-horizontal dl-post-container">
                        <dt>
                        <img src="img/demo/footer/blog2.jpg" alt="img">
                    </dt>
                        <dd>
                            <h5 class="post-title"><a href="blog-post.html">Our top 10 creative projects</a></h5>
                            <p class="content">Sunt echo park heirloom keffiyeh skateboard irure, glossier odio artisan.</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="footer-widget">
                    <h4 class="title">About Us</h4>
                    <p>Succulents fixie velit iPhone fashion axe. Distillery plaid cliche post ironic hot chicken activated charcoal, duis ullamco. Ready made neutra sint, put a bird on it gochujang hammock photo booth viral 8-bit four dollar toast ut. Lumber tbh swag, pour-over farm-to-table gluten-free voluptate semiotics.</p>
                </div>
            </div>
        </div>
    </div>
    <section class="sub-footer scheme2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-2">
                    <p class="rights">&copy; Solofy Inc. 2018</p>
                </div>
                <div class="col-xs-12 col-md-10">
                    <ul class="list-unstyled list-inline list-footer-nav pull-right">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="team.html">Our Team</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio-4c-masonry.html">Portfolio</a></li>
                        <li><a href="blog-classic-left-sidebar.html">Blog</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</footer>
<!-- /main footer -->

<!-- JS libs -->
<script src="js/libs/jquery.min.js"></script>
<script src="js/libs/jquery-migrate.min.js"></script>
<script src="js/libs/bootstrap.min.js"></script>
<script src="js/libs/jquery.waypoints.min.js"></script>

<!-- JS plugins -->
<script src="js/plugins/superfish.js"></script>
<script src="js/plugins/isotope.min.js"></script>
<script src="js/plugins/jquery.counterup.min.js"></script>
<script src="js/plugins/instagram-fancybox.js"></script>
<script src="js/plugins/jquery.fancybox.pack.js"></script>
<script src="js/plugins/jquery.tweet.mod.js"></script>

<!-- JS sliders -->
<script src="js/plugins/jquery.flexslider-min.js"></script>
<script src="js/plugins/typed.js"></script>
<script src="js/plugins/wow.js"></script>

<!-- JS maps -->
<script src="http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script>
<script src="js/plugins/gmap3.min.js"></script>

<!-- JS main -->
<script src="js/main.js"></script>

<script>
    $('.google-map').gmap3({
        map: {
            address: "482 Broome St New York, NY 10013",
            options: {
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT
                },
                navigationControl: true,
                scrollwheel: false,
                streetViewControl: false,
                styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 45
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#00b4cc"
                    }, {
                        "visibility": "on"
                    }]
                }]
            }
        },
        marker: {
            address: "482 Broome St New York, NY 10013"
        }
    });
</script>

<script>
    new WOW().init();
</script>

<script>
    $(document).ready(function() {
        // validate signup form on keyup and submit
        var validator = $("#contactform").validate({
            rules: {
                contactname: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 2
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                contactname: {
                    required: "Please enter your name",
                    minlength: jQuery.format("Your name needs to be at least {0} characters")
                },
                email: {
                    required: "Please enter a valid email address",
                    minlength: "Please enter a valid email address"
                },
                phone: {
                    required: "Please enter your phone number",
                    minlength: jQuery.format("Enter at least {0} characters")
                },
                subject: {
                    required: "You need to enter a subject!",
                    minlength: jQuery.format("Enter at least {0} characters")
                },
                message: {
                    required: "You need to enter a message!",
                    minlength: jQuery.format("Enter at least {0} characters")
                }
            },
            // set this class to error-labels to indicate valid fields
            success: function(label) {
                label.addClass("checked");
            }
        });
    });
</script>

</body>

</html>