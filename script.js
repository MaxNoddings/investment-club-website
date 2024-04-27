const body = document.body;
let lastScroll = 0;
let sidebarDisplayed = false;

window.addEventListener("scroll", () => {
    if (!sidebarDisplayed) {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains("scroll-down")
        ) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    }
});

function showSidebar(event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
    sidebarDisplayed = true;
    // Disable scroll event listener
    sidebar.style.overflowY = "hidden";
};

function hideSidebar(event) {
	event.preventDefault(); // Prevent default anchor tag behavior
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    sidebarDisplayed = false;
    // Re-enable scroll event listener
    sidebar.style.overflowY = "auto";
};

document.addEventListener("DOMContentLoaded", function() {
	var readMoreBtn = document.getElementById("readMoreButton");
	var scrollTarget = document.getElementById("target");

	readMoreBtn.addEventListener("click", function() {
		scrollTarget.scrollIntoView({ behavior: "smooth" }); // scroll to the target element
	});
});

window.addEventListener('scroll', function() {
    var element = document.querySelector('.fade-in');
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    // If the top of the element is within the viewport
    if (position < windowHeight) {
      element.style.opacity = 1;
    }
  });
  
  