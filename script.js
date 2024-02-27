const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
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
});

function showSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "flex";
};

function hideSidebar() {
	const sidebar = document.querySelector(".sidebar");
	sidebar.style.display = "none";
};