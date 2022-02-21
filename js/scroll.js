mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
  function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


$( ".rotateicon" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(90deg)");
    } else {
        $(this).css("transform","" );
    }
});

// for index author and our team
const audio = new Audio();
audio.src = "sounds/choose.mp3"

const audiolist = new Audio();
audiolist.src = "sounds/list.mp3"

// for kingdoms

const audiolistkng = new Audio();
audiolistkng.src = "../sounds/list.mp3"

const zoommap = new Audio();
zoommap.src = "../sounds/zoom.mp3"

const whoosh = new Audio();
whoosh.src = "../sounds/whoosh.mp3"

