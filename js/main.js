// Gallery Filter jQuery Codes
var $grid = $('.grid').isotope({
});
// filter items on button click
$('.gellery-btn-area').on('click', 'li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
$('.grid').isotope({
  itemSelector: '.gellery-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gellery-box'
  }
});

// F.A.Q Section
// Show & Hide plugin
$(document).ready(function(){

   $('.fa-chevron-up').hide(function(){
    
  });

  $('#faq1').hide(function(){
    
  });
  
   $('#faq2').hide(function(){
    
  });
  
     $('#faq3').hide(function(){
    
  });
  
     $('#faq4').hide(function(){
    
  });
  
     $('#faq5').hide(function(){
    
  });
   
  $('#faq1btn').click(function(){
    $('#faq1').toggle(1000);
    $('#faq2').hide(1000);
    $('#faq3').hide(1000);
    $('#faq4').hide(1000);
    $('#faq5').hide(1000);
  });

  $('#faq2btn').click(function(){
    $('#faq1').hide(1000);
    $('#faq2').toggle(1000);
    $('#faq3').hide(1000);
    $('#faq4').hide(1000);
    $('#faq5').hide(1000);
  });  

  $('#faq3btn').click(function(){
    $('#faq1').hide(1000);
    $('#faq2').hide(1000);
    $('#faq3').toggle(1000);
    $('#faq4').hide(1000);
    $('#faq5').hide(1000);
    
  });  $('#faq4btn').click(function(){
    $('#faq1').hide(1000);
    $('#faq2').hide(1000);
     $('#faq3').hide(1000);
     $('#faq4').toggle(1000);
     $('#faq5').hide(1000);
    
  });  $('#faq5btn').click(function(){
    $('#faq1').hide(1000);
    $('#faq2').hide(1000);
    $('#faq3').hide(1000);
    $('#faq4').hide(1000);
    $('#faq5').toggle(1000);
 
  });

});

// Client Slider
// OwlCarousel PlugIn
$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    responsive:{
        600:{
            items:4
        }    
    }
});
