const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// for smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () =>
  header.classList.toggle("show-mobile-menu")
);

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Get all author card links
  var authorLinks = document.querySelectorAll(".author-card-link");

  // Attach click event to each author card link
  authorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Get the author's data from the clicked card
      var authorImage = link.querySelector("img").src;
      var authorName = link.querySelector("h3").textContent;

      // Redirect to the author's page with general overview
      window.location.href =
        "author-overview.html?authorImage=" +
        encodeURIComponent(authorImage) +
        "&authorName=" +
        encodeURIComponent(authorName);
    });
  });

  // Load More Button Click Event
  var loadMoreBtn = document.getElementById("load-more-btn");
  loadMoreBtn.addEventListener("click", function () {
    // Redirect to the search page
    window.location.href = "load-author.html";
  });
});

// This Varibale will store the top position
var lastScrollTop;
scrollnavbar = document.querySelector(".scrollNav"); // Get The NavBar

window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop;

  console.log(scrollTop - lastScrollTop);

  if (scrollTop - lastScrollTop > 4 && scrollTop > lastScrollTop) {
    this.setTimeout(function () {
      scrollnavbar.style.top = "-81px";
    }, 100);
    //set the value to the negetive of height of navbar
  } else if (scrollTop - lastScrollTop < -4 && scrollTop < lastScrollTop) {
    scrollnavbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
