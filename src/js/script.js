// drop menu
function menuBar() {
    var container = document.getElementById("header_link_container");
    container.classList.toggle("show-header-link-container");
}

// pop up
function popUp() {
    var modal = document.getElementById("weareopen_popup");
  
    var span = document.getElementsByClassName("popup-close")[0];
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  }
  popUp();

// dropdown
function dropDown() {
    var inner = document.getElementById("about_us_inner");
    var about_btn = document.getElementById("about_us");
    var link_container = document.getElementById("header_link_container");
    inner.classList.toggle("show-about-us-inner");
    link_container.classList.toggle("header-link-container-height");
    about_btn.classList.toggle("about-us-button-active");
}


// dropdown footer
function dropDownFooter() {
  var inner = document.getElementById("footer_about_us_inner");
  var about_btn = document.getElementById("footer_about_us");
  var link_container = document.getElementById("footer");
  inner.classList.toggle("footer-show-about-us-inner");
  footer.classList.toggle("footer-link-container-height");
  about_btn.classList.toggle("footer-about-us-button-active");
}

// animate when visible
function animateVisible() {
    const inViewport = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL, obsOptions);
    });
}
animateVisible();
