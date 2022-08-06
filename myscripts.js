console.log ("Your index.js file is loaded correctly!");
$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });
/*this is for the page up button */
  mybutton = document.getElementById("myBtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  } 
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $(function() {
    $("#myBtn2").on("click", function() {
        $("body").animate({"scrollTop": window.scrollY-300}, 1000);
        return false;
    });
});