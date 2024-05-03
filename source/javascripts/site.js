// This is where it all goes :)
// gallery item filter

document.addEventListener('DOMContentLoaded', function() {

  console.log('Hello from site.js')


  const filterButtons = document.querySelector("#filter-btns").children;
  const items = document.querySelector(".portfolio-gallery").children;

  for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", function () {
          for (let j = 0; j < filterButtons.length; j++) {
              filterButtons[j].classList.remove("active")
          }
          this.classList.add("active");
          const target = this.getAttribute("data-target")

          for (let k = 0; k < items.length; k++) {
              items[k].style.display = "none";
              if (target == items[k].getAttribute("data-id")) {
                  items[k].style.display = "block";
              }
              if (target == "all") {
                  items[k].style.display = "block";
              }
          }

      })
  }


  console.log('Check 1')

  // lightbox


  const closeLightbox = document.querySelector(".close-lightbox");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = lightbox.querySelector("img")

  lightbox.addEventListener("click", function () {
      if (event.target != lightboxImage) {
          lightbox.classList.remove("show");
          lightbox.classList.add("hide");
      }

  })

  console.log('Check 2')

  closeLightbox.addEventListener("click", function () {
      lightbox.classList.remove("show");
      lightbox.classList.add("hide");
  })

  const gallery = document.querySelector(".portfolio-gallery");

  const galleryItem = gallery.querySelectorAll(".item");

  console.log('Check 3')

/*
  galleryItem.forEach(function (element) {
      element.querySelector(".fa-info").addEventListener("click", function () {
          lightbox.classList.remove("hide");
          lightbox.classList.add("show");
          lightboxImage.src = element.querySelector("img").getAttribute("src")
      })
  })
*/

  console.log('Check 4')

  // header fix

  window.onscroll = function () {
      const docScrollTop = document.documentElement.scrollTop;

      if (window.innerWidth > 991) {
          if (docScrollTop > 100) {
              document.querySelector("header").classList.add("fixed")
          }
          else {
              document.querySelector("header").classList.remove("fixed")
          }
      }
  }

  console.log('Check 5')

  // Navbar links

  const navbar = document.querySelector(".navbar");
          a = navbar.querySelectorAll("a");

          a.forEach(function(element){
              element.addEventListener("click",function(){
                for(let i=0; i<a.length; i++){
                  a[i].classList.remove("active");
                }
                this.classList.add("active")
                  document.querySelector(".navbar").classList.toggle("show");
              })
          })

  console.log("Test Last");

  // Hamburger Menu

  const hamburger = document.querySelector(".hamburger");
  console.log(hamburger);
  const navMenu = document.querySelector(".nav-menu");
  console.log(navMenu);

  hamburger.addEventListener("click", mobileMenu);

  console.log("Event listener added on click to mobile menu function");

  function mobileMenu() {
      hamburger.classList.toggle("active");
      console.log(hamburger.classList);
      navMenu.classList.toggle("active");
      console.log(navMenu.classList);
  }

  const navLink = document.querySelectorAll(".nav-link");
  console.log(navLink);

  navLink.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }


});
