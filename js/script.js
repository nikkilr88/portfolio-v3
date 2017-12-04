/* global $ */
/* global projects */
/* global ScrollReveal */
/* global sr */


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
      if (scrollTop < height - 45) {
         $("nav").css({ "background": "rgba(0,0,0,0.8)" });
      }
   });


   //Change menu color on scroll
   $(window).scroll(function() {
      if ($(window).width() < 925) {
         $("nav > ul").hide(500);
      }

      var scrollTop = $(window).scrollTop(),
         height = $(window).height();

      if (scrollTop > height - 45) {
         $("nav").css({ "background": "#fff", "box-shadow": "0 1px 3px rgba(0,0,0,0.1)" });
         $("nav li, nav .fa-bars").css("color", "#666");
      }
      else {
         $("nav").css({ "background": "none", "box-shadow": "none" });
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

      if (!$(e.target).closest("#popupInfo").length && !$(e.target).is(".btn")) {
         $("#popupInfo").hide("fade");
      }
   });

   $(".close").on('click', function() {
      $("#popupInfo").hide("fade");
   });

   //Project section
   $(".projects").on("mouseover", ".project", function() {
      $(this).find(".projectDetails").show("slide", {
          'direction': 'down'
      }, 200);
   });
   $(".projects").on("mouseleave", ".project", function() {
      $(this).find(".projectDetails").hide("slide", {
          'direction': 'down'
      }, 200);
   });

   //Populate projects section
   projects.forEach(function(project) {

      var projectDiv = '<div class="project"><img src=' + project.img + '><span class="projectDetails"><h5>' + project.name + '</h5>' + project.description + '<a href="' + project.link + '" target="_blank "><button>View Live</button></a></span></div>';

      $('.projects section').append(projectDiv);
   });

   //Hide project details
   $(".projectDetails").hide();

   /*
<div class="project "><img src="images/wiki1.png "><span class="projectDetails "><h5>Wikipedia Viewer</h5> Intermediate Front-End Project<br>HTML, CSS & jQuery<a href="https://codepen.io/nikkilr88/full/PpdBEe" target="_blank "><button>View Live</button></a></span></div>
*/

   //ScrollReveal Config

   window.sr = ScrollReveal();
 
   sr.reveal('.txtbg h1', {
      duration: 1000,
      origin: 'left',
      distance: '300px'
   });

   sr.reveal('.txtbg h2', {
      duration: 1000,
      origin: 'right',
      distance: '300px',
      delay: 1000
   });
   
   sr.reveal('.featurette img', {
      duration: 2000,
      origin: 'left',
      distance: '300px',
      viewFactor: 0.2
   });
   
   sr.reveal('.featurette section', {
      duration: 2000,
      origin: 'right',
      distance: '300px',
      viewFactor: 0.2
   });

   sr.reveal('.box, .project', {
      duration: 2000,
      viewFactor: 0.2
   });

});
