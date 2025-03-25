<script>
// Use a static import for server-side compatibility
import '~/assets/css/style.css'
import '~/assets/css/responsive.css'
import '~/assets/css/custom/theme-4.css'
import '~/assets/css/custom/custom.css'
import { NuxtLink } from '#components';

</script>


<template>
  
    <!-- .preloader -->
    <div class="preloader"></div>
    <!-- /.preloader -->


    <!-- main header area -->
    <header class="main-header">

    <!-- header lower/fixed-header -->     
    <div class="theme_menu stricky header-lower">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="logo-box">
                      <NuxtLink href="">
                        The Good Husband Laundromats & Drycleaners
                      </NuxtLink>
                    </div>
                    
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="menu-bar">
                        <nav class="main-menu">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="current"><NuxtLink to="/">Home</NuxtLink></li>
                                    <li><NuxtLink to="/about">About</NuxtLink></li>
                                    <!-- <li class="dropdown"><a href="#">About</a>
                                        <ul class="submenu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="Testimonials.html">Testimonials</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="error.html">404 Page</a></li>
                                        </ul>
                                    </li> -->
                                    <li><NuxtLink to="/dry-cleaning">Dry Cleaning</NuxtLink></li>
                                    <!-- <li class="dropdown">
                                      <a href="#">Services</a>
                                        <ul class="submenu">
                                            <li><a href="service.html">Our Services</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li> -->
                                    <li><NuxtLink to="/location">Location</NuxtLink></li>
                                </ul>

                                <!-- mobile menu -->
                                <ul class="mobile-menu clearfix">
                                    <li class="current"><a href="index.html">Home</a></li>
                                    <li class="dropdown"><a href="#">About</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="Testimonials.html">Testimonials</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="error.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Services</a>
                                        <ul>
                                            <li><a href="service.html">Our Services</a></li>
                                            <li><a href="service-details.html">Service Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="gallery.html">Our Gallery</a></li>
                                            <li><a href="team.html">Our Experts</a></li>
                                            <li><a href="team-detaisl.html">Expert Details</a></li>
                                            <li><a href="shop.html">Shop Page</a></li>
                                            <li><a href="single-shop.html">Single Product</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">News</a>
                                        <ul>
                                            <li><a href="blog-classic.html">Blog Post</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <!-- <div class="cart-box">
                          <a href="https://www.instagram.com/_thegoodhusbandwash.sg/"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end header lower/fixed-header -->

    </header>
    <!-- end main header area -->



    <NuxtPage />

    


    <!-- main footer area -->
    <footer class="footer-area" style="background-image: url(images/home/footer.png);">
        <div class="container">
            <div class="main-footer">
                <div class="row">
                  <div class="col-md-4 col-sm-6 col-xs-12 footer-column">
                        <div class="contact-wideget footer-wideget">
                            <div class="footer-title"><h3>Location</h3></div>
                            <div class="widget-content">
                                <!-- <div class="text">
                                    <p>Komo Shoppes Level 2</p>
                                </div> -->
                                <ul class="contact-info">
                                    <li>
                                      <i class="icon fa fa-map-marker">
                                      </i>Komo Shoppes Level 2<br />
                                      963C Upper Changi Road North, #02-15<br>
                                      Singapore 506790
                                    </li>
                                    <!-- <li><i class="icon fa fa-phone"></i>+22 657 325 413</li> -->
                                </ul>
                            </div>                          
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 footer-column">
                        <div class="service-wideget footer-wideget">
                            <div class="footer-title"><h3>Email</h3></div>
                            <div class="widget-content">
                                <ul class="contact-info">
                                    <li>
                                      <i class="icon fa fa-envelope"></i>
                                      <a href="email: feedback@thegoodhusbandwash.com">feedback@thegoodhusbandwash.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <br>
                        <div class="service-wideget footer-wideget">
                            <div class="footer-title"><h3>Komo Shoppes</h3></div>
                            <div class="widget-content">
                                <ul class="contact-info">
                                    <li>
                                      <i class="icon fa fa-link"></i>
                                      <a href="email: feedback@thegoodhusbandwash.com">feedback@thegoodhusbandwash.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        https://www.komoshoppes.com.sg/tenant/the-good-husband-laundromats-drycleaners/ -->
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12 footer-column">
                        <div class="link-wideget footer-wideget">
                            <div class="footer-title"><h3>Connect</h3></div>
                            <div class="widget-content">
                                <ul class="contact-info">
                                    <li>
                                      <i class="icon fa fa-instagram">
                                      </i>
                                      <a href="https://www.instagram.com/_thegoodhusbandwash.sg/" target="_blank">
                                        _thegoodhusbandwash.sg
                                      </a>
                                    </li>
                                    <!-- <li><i class="icon fa fa-phone"></i>+22 657 325 413</li> -->
                                </ul>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <!-- <div class="container">
            <div class="footer-bottom centred">
                <div class="copyright"><a href="#">Sharpes</a> © 2018 All Right Reserved</div>
            </div>
        </div> -->
    </footer>
    <!-- main footer area -->



<!--End bodywrapper-->


<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target=".main-header"><span class="icon fa fa-angle-up"></span></div>

</template>
