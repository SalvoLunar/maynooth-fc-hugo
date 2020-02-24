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
  },2000)

  document.addEventListener("scroll", function(){
    msnry.layout()
  });

  window.addEventListener("resize", function(){
    msnry.layout()
  });

  window.addEventListener("orientationchange", function(){
    msnry.layout()
  });
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

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {

              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };
  setTimeout(lazyLoad,1000)
  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});



