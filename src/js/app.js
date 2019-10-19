// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
window.menuToggle = function(){
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var elem = document.querySelector('.grid');
if(elem){
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  var msnry = new Masonry( '.grid', {
    // options
  });
  setTimeout(function(){
    msnry.layout()
  },500)
}

// homepage slider

var slides = document.getElementsByClassName('bg-slide')

console.log(slides)

if(slides.length){
  slides[0].className += " visible"
  var i=0;
  setInterval(function(){
    console.log(i)
    if(i < slides.length){
      document.getElementsByClassName('visible')[0].className = 'bg-slide'
      slides[i].className += ' visible'
      i ++
    }else{
      i=0
    }
  },3000)
}



