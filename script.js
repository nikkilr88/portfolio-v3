/* global $ */

$(document).ready(function() {

   //On window load/resize show/hide mobile nav
   $(window).resize(function() {
      if ($(window).width() < 925) {
         //Open and close mobile menu
         $("nav ul").hide();
      }
      else {
         $("nav ul").show();
      }
   });

   //Open and close nav
   $(".fa-bars").on("click", function() {
      var scrollTop = $(window).scrollTop(),
         height = $(window).height();
      
      $("nav ul").slideToggle();
      if(scrollTop < height - 45){
         $("nav").css({"background": "rgba(0,0,0,0.8)"});
      }
   });

   //Box click details
   $(".projectDetails").hide();

   //Project section
   $(".project").on("mouseover", function() {
      $(this).find(".projectDetails").show("fade");
   });
   $(".project").on("mouseleave", function() {
      $(this).find(".projectDetails").hide("fade");
   });

   //Change menu color on scroll
   $(window).scroll(function() {
      if ($(window).width() < 925) {
         $("nav > ul").hide();
      }

      var scrollTop = $(window).scrollTop(),
         height = $(window).height();

      if (scrollTop > height - 45) {
         $("nav").css({"background": "#fff", "box-shadow": "0 1px 3px rgba(0,0,0,0.1)"});
         $("nav li, nav .fa-bars").css("color", "#666");
      }
      else {
         $("nav").css({"background": "none", "box-shadow": "none"});
         $("nav li, nav .fa-bars").css("color", "#ccc");
      }
   });

   //Scroll to section
   $('#about').on('click', function() {
      $('html, body').animate({
         scrollTop: $('.aboutMe').offset().top
      }, 1000);
   });

   $('#projects').on('click', function() {
      $('html, body').animate({
         scrollTop: $('.projects').offset().top
      }, 1000);
   });

   //Popup Info
   $("#html").on("click", function() {
      $('#popupInfo #heading').text("HTML / CSS");
      $('#popupInfo #content').html("<p>I began Learning the basics of HTML and CSS in January of 2017. I started off with Codecademy and later stumbled upon FreeCodeCamp. I completed all of their frontend lessons and projects, and eventually recieved my frontend certificate in May of 2017.</p><p>I have also completed a Codecademy course for responsive design and began their HTML & CSS course. I am currently putting it off to the side to focus on my bootcamp.<a href=\"images/cert.png\"><img src='images/cert.png' /></a>");
      $('#popupInfo').show("fade");
   });

   $("#js").on("click", function() {
      $('#popupInfo #heading').text("JavaScript");
      $('#popupInfo #content').html("<p>JavaScript is where the fun begins! I began learning vanilla JS with both Codecademy and FreeCodeCamp and have since completed both courses. FCC's algorithm challenges were very helpful because they taught me how do my own research and code with others.</p><p>I have also completed a couple of ReactJS courses and began building some FCC projects. This has been one of my favorite JS libraries so far.</p> <a href='https://www.freecodecamp.org/nikkilr88' target='_blank'>Have a look at some of the algorithm challenges I have completed</a>");
      $('#popupInfo').show("fade");

   });

   $("#backend").on("click", function() {
      $('#popupInfo #heading').text("Backend");
      $('#popupInfo #content').html("<p>This has been my favorite so far. I began learning Node.js and MongoDB in an online bootcamp, which I am still currently working though. I made a basic blog and movie search app, which taught me about RESTful routing, how to access data from APIs and how to use Mongoose.</p><p>I am excited to continue with the bootcamp and improve on my skills that I have already learned.</p>");
      $('#popupInfo').show("fade");
   });

   //Close Popup Info
   $(document).on("click", function(e) {
      
      if(!$(e.target).closest("#popupInfo").length && !$(e.target).is(".btn")){
         $("#popupInfo").hide("fade");
      }
   });
   
   $(".close").on('click', function(){
      $("#popupInfo").hide("fade");
   });

});
