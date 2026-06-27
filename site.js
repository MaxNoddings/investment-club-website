/**
 * site.js — shared chrome + interactions for the SMCSIF site.
 *
 * Loaded with `defer` on every page, so the DOM is fully parsed by the time
 * this runs. Everything is set up at top level (no DOMContentLoaded race),
 * which is what fixes the old "reload twice / sections never appear" bug.
 */
(function () {
    "use strict";

    // Root-relative links work from any page depth (the site is served from /).
    var NAV_LINKS = [
        { href: "/about/index.html", label: "About", match: "/about/" },
        { href: "/team/index.html", label: "Team", match: "/team/" },
        { href: "/alumni/index.html", label: "Alumni", match: "/alumni/" },
        { href: "/educational-resources/index.html", label: "Educational Resources", match: "/educational-resources/" },
        { href: "/get-involved/index.html", label: "Get Involved", match: "/get-involved/" }
    ];

    var CLOSE_ICON = '<svg width="30" height="30" viewBox="0 0 468 468" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.43 10.429C23.4477 -2.58832 44.553 -2.58832 57.5707 10.429L234 186.859L410.43 10.429C423.447 -2.58832 444.554 -2.58832 457.57 10.429C470.587 23.4467 470.587 44.552 457.57 57.5697L281.14 233.999L457.57 410.429C470.587 423.446 470.587 444.553 457.57 457.569C444.554 470.586 423.447 470.586 410.43 457.569L234 281.139L57.5707 457.569C44.553 470.586 23.4477 470.586 10.43 457.569C-2.58734 444.553 -2.58734 423.446 10.43 410.429L186.86 233.999L10.43 57.5697C-2.58734 44.552 -2.58734 23.4467 10.43 10.429Z" fill="#743289"/></svg>';
    var MENU_ICON = '<svg width="30" height="30" viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M720 40C720 50.6087 715.786 60.7828 708.284 68.2843C700.783 75.7857 690.609 80 680 80H40C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21427 60.7828 0 50.6087 0 40C0 29.3913 4.21427 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 0 40 0H680C690.609 0 700.783 4.21427 708.284 11.7157C715.786 19.2172 720 29.3913 720 40ZM720 280C720 290.609 715.786 300.783 708.284 308.284C700.783 315.786 690.609 320 680 320H40C29.3913 320 19.2172 315.786 11.7157 308.284C4.21427 300.783 0 290.609 0 280C0 269.391 4.21427 259.217 11.7157 251.716C19.2172 244.214 29.3913 240 40 240H680C690.609 240 700.783 244.214 708.284 251.716C715.786 259.217 720 269.391 720 280ZM680 560C690.609 560 700.783 555.786 708.284 548.284C715.786 540.783 720 530.609 720 520C720 509.391 715.786 499.217 708.284 491.716C700.783 484.214 690.609 480 680 480H40C29.3913 480 19.2172 484.214 11.7157 491.716C4.21427 499.217 0 509.391 0 520C0 530.609 4.21427 540.783 11.7157 548.284C19.2172 555.786 29.3913 560 40 560H680Z" fill="#743289"/></svg>';

    function isCurrent(link) {
        return window.location.pathname.indexOf(link.match) === 0;
    }

    function navItems(extraClass) {
        return NAV_LINKS.map(function (link) {
            var current = isCurrent(link) ? ' aria-current="page"' : "";
            var cls = extraClass ? ' class="' + extraClass + '"' : "";
            return "<li" + cls + "><a href=\"" + link.href + "\"" + current + ">" + link.label + "</a></li>";
        }).join("");
    }

    function buildHeader() {
        var header = document.createElement("header");
        header.innerHTML =
            '<div class="header-content"><nav>' +
                '<ul class="sidebar">' +
                    '<li id="close-icon"><a href="#" aria-label="Close menu">' + CLOSE_ICON + "</a></li>" +
                    navItems("") +
                "</ul>" +
                "<ul>" +
                    '<li><a href="/index.html"><img id="header-logo" src="/public/SMCSIF.png" alt="SMCSIF logo"/></a></li>' +
                    navItems("hideOnMobile") +
                    '<li class="menu-button"><a href="#" aria-label="Open menu">' + MENU_ICON + "</a></li>" +
                "</ul>" +
            "</nav></div>";
        return header;
    }

    function buildFooter() {
        var footer = document.createElement("footer");
        footer.innerHTML =
            "<div>" +
                '<img class="footer-logo" src="/public/favicon.png" alt="SMCSIF logo"/>' +
                "<p>Copyright <i class=\"fa-regular fa-copyright\"></i> " + new Date().getFullYear() +
                    " Saint Michael's College Student Investment Fund<br><br></p>" +
                '<div><a class="plug" href="https://maxnoddings.netlify.app/" target="_blank" rel="noopener">' +
                    "<p>Website by Max Noddings</p></a></div>" +
            "</div>";
        return footer;
    }

    function wireSidebar() {
        var sidebar = document.querySelector(".sidebar");
        var openBtn = document.querySelector(".menu-button a");
        var closeBtn = document.querySelector("#close-icon a");
        if (!sidebar) return;

        function open(e) { e.preventDefault(); sidebar.classList.add("is-open"); }
        function close(e) { e.preventDefault(); sidebar.classList.remove("is-open"); }

        if (openBtn) openBtn.addEventListener("click", open);
        if (closeBtn) closeBtn.addEventListener("click", close);
        // Close the menu when any nav link inside it is tapped.
        sidebar.querySelectorAll("a").forEach(function (a) {
            if (a !== closeBtn) a.addEventListener("click", function () { sidebar.classList.remove("is-open"); });
        });
    }

    function wireReadMore() {
        var btn = document.getElementById("readMoreButton");
        var target = document.getElementById("target");
        if (btn && target) {
            btn.addEventListener("click", function () {
                target.scrollIntoView({ behavior: "smooth" });
            });
        }
    }

    // Hide the fixed header when scrolling down, reveal it when scrolling up.
    function wireScrollHeader() {
        var lastScroll = 0;
        var body = document.body;
        window.addEventListener("scroll", function () {
            if (document.querySelector(".sidebar.is-open")) return;
            var current = window.pageYOffset;
            if (current <= 0) {
                body.classList.remove("scroll-up", "scroll-down");
                return;
            }
            if (current > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            } else if (current < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }
            lastScroll = current;
        }, { passive: true });
    }

    // Reveal-on-scroll. Content is visible by default (see CSS); we only opt
    // into the hidden->animate behavior when JS + IntersectionObserver exist,
    // so a script failure can never leave a section blank.
    function wireReveal() {
        var els = document.querySelectorAll(".animate-on-scroll");
        if (!els.length) return;

        if (!("IntersectionObserver" in window)) {
            els.forEach(function (el) { el.classList.add("is-visible"); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        els.forEach(function (el) { observer.observe(el); });
    }

    // --- init (DOM is ready because this script is deferred) ---
    document.body.insertBefore(buildHeader(), document.body.firstChild);
    document.body.appendChild(buildFooter());
    wireSidebar();
    wireReadMore();
    wireScrollHeader();
    wireReveal();
})();
