$(document).ready(function(){

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    
    // Proto Persona modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal 
    var popup = document.getElementById("proto-persona");
    var popupFSC = document.getElementById("FSCprotos");
    var modalImg = document.getElementById("img01");
    var modalImgFSC = document.getElementById("img02");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    $("#proto-persona").click(function(){
      $("#myModal").css("display", "block");
      $("#img01").attr("src", "../images/USARC/USARC-proto-persona.png"); 
      console.log("usarc work?");
    }); 

    $("#FSCprotos").click(function(){
      console.log("working?");
      modal.style.display = "block";
      modalImgFSC.src = "../images/FSC-pics/proto-personas.png";
    });

    $("#usarc-persona").click(function(){
      $("#myModal1").css("display", "block");
      $("#img03").attr("src", "../images/USARC/USARC-user-persona.png");
    });

    $("#fsc-persona").click(function(){
      $("#myModalFSC").css("display", "block");
      $("#img04").attr("src", "../images/FSC-pics/Sarah-Lopez_user-persona.png");
    });

    $(".close").click(function(){
      $(".modal").css("display","none");
    });

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";}
      };




// for arrows on homepage Yellow cards
  $ease: cubic-bezier(.2,1,.3,1);


// below is closing for document-ready function
});