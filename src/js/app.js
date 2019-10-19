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
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

var msnry = new Masonry( '.grid', {
  // options
});

msnry.layout()

var items = document.getElementsByClassName('grid-item')
Array.from(items).forEach(function(item){
  item.addEventListener('click',function(e){
    if(e.currentTarget.className.indexOf('gigante') === -1){
      e.currentTarget.className+=' gigante'
    }else{
      e.currentTarget.className=e.currentTarget.className.replace(' gigante','')
    }
    msnry.layout()
  })
})
