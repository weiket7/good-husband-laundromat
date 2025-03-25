<script setup>
    const googleMap = `<gmp-map center='1.3603805303573608,103.97014617919922' zoom='14' map-id='DEMO_MAP_ID'>
                            <gmp-advanced-marker position='1.3603805303573608,103.97014617919922' title='My location'></gmp-advanced-marker>
                        </gmp-map>`;
</script>

<template>
    <section class="contact-section">
        <div class="container">
            <div class="contact-info">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="single-info">
                            <div class="icon-box"><i class="flaticon-gps"></i></div>
                            <h4>Address</h4>
                            <div class="text">
                                <b>Komo Shoppes Level 2</b><br>
                                963C Upper Changi Road North, #02-15<br>
                                Singapore 506790
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <div class="single-info">
                            <div class="icon-box"><i class="flaticon-technology"></i></div>
                            <h4>
                                For enquiries, compliments, lost & found and feedback
                            </h4>
                            <div class="text">feedback@thegoodhusbandwash.com</div>
                        </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="single-info">
                            <div class="icon-box"><i class="flaticon-globe"></i></div>
                            <h4>Staffed Self Drop-Off / Pick Up Counter</h4>
                            <div class="text">
                                <b>Monday - Thursday</b>: 9.30am to 4.30pm & 6.00pm to 9.00pm (please call number on window)<br>
                                <b>Friday</b>: 9.30am to 8.00pm<br>
                                <b>Weekends</b>: 9.30am to 3.30pm<br>
                                <b>​Public Holidays</b>: Closed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <!-- contact section -->
     <section class="contact-section">
        <div class="container">
            <div class="row">
                <!-- <div class="col-md-6 col-sm-12 col-xs-12 contact-column">
                    <div class="google-map-area">
                        
                    </div>
                </div> -->
                <div class="col-md-6 col-sm-12 col-xs-12 contact-column">
                    <div class="contact-info">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="single-info">
                                    <div class="icon-box"><i class="flaticon-gps"></i></div>
                                    <h4>Address</h4>
                                    <div class="text">
                                        Komo Shoppes Level 2<br>
                                        963C Upper Changi Road North, #02-15<br>
                                        Singapore 506790
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="single-info">
                                    <div class="icon-box"><i class="flaticon-technology"></i></div>
                                    <h4>
                                        For enquiries, compliments, lost & found and feedback
                                    </h4>
                                    <div class="text">feedback@thegoodhusbandwash.com</div>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="single-info">
                                    <div class="icon-box"><i class="flaticon-globe"></i></div>
                                    <h4>Staffed Self Drop-Off / Pick Up Counter</h4>
                                    <div class="text">
                                        <b>Monday - Thursday</b>: 9.30am to 4.30pm & 6.00pm to 9.00pm (please call number on window)<br>
                                        <b>Friday</b>: 9.30am to 8.00pm<br>
                                        <b>Weekends</b>: 9.30am to 3.30pm<br>
                                        <b>​Public Holidays</b>: Closed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="contact-form-area">
            <div class="container">
                <div class="title-top centred">Send Message</div>
                <div class="sec-title centred"><h2>Get In Touch</h2></div>
                <form id="contact-form" name="contact_form" class="default-form" action="inc/sendmail.php" method="post">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="form_name" value="" placeholder="Name" required="">
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="email" name="form_email" value="" placeholder="Email" required="">
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="form_phone" value="" placeholder="Phone" required="">
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="form_subject" value="" placeholder='Subject' required="">
                        </div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <textarea placeholder="Message" name="form_message" required=""></textarea>
                        </div>
                    </div>
                    <div class="contact-btn centred"><button type="submit" class="btn-one" data-loading-text="Please wait...">Send Message</button></div>
                </form>
            </div>
        </div> -->
    </section>
    <!-- contact section end -->

</template>