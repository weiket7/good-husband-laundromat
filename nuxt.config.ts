// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: '/js/jquery-2.1.4.js', tagPosition: 'bodyClose' },
        { src: 'js/bootstrap.min.js', tagPosition: 'bodyClose' },
        { src: 'js/revolution.min.js', tagPosition: 'bodyClose' },
        { src: 'js/owl.js', tagPosition: 'bodyClose' },
        { src: 'js/wow.js', tagPosition: 'bodyClose' },
        { src: 'js/validation.js', tagPosition: 'bodyClose' },
        { src: 'js/jquery-ui.js', tagPosition: 'bodyClose' },
        { src: 'js/jquery.fancybox.pack.js', tagPosition: 'bodyClose' },
        { src: 'js/SmoothScroll.js', tagPosition: 'bodyClose' },
        { src: 'js/jQuery.style.switcher.min.js', tagPosition: 'bodyClose' },
        { src: 'js/html5lightbox/html5lightbox.js', tagPosition: 'bodyClose' },
        { src: 'js/script.js', tagPosition: 'bodyClose' },
        // { src: 'http://www.instagram.com/embed.js', tagPosition: 'bodyClose' },
        { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcbfM7uVHT3SvzxaBcV8E5SQu--tiSRAg&callback=console.debug&libraries=maps,marker&v=beta', tagPosition: 'bodyClose' },
    
      ]
    }
  }
})


// <script src="js/jquery-2.1.4.js"></script>
// <script src="js/bootstrap.min.js"></script>
// <script src="js/revolution.min.js"></script>
// <script src="js/owl.js"></script>
// <script src="js/wow.js"></script>
// <script src="js/validation.js"></script>
// <script src="js/jquery-ui.js"></script>
// <script src="js/jquery.fancybox.pack.js"></script>
// <script src="js/SmoothScroll.js"></script>
// <script src="js/jQuery.style.switcher.min.js"></script>
// <script src="js/html5lightbox/html5lightbox.js"></script>
// <script src="js/script.js"></script>