document.addEventListener("DOMContentLoaded", function () {
    // Create a header element
    var header = document.createElement("header");
    
    // Set the HTML content of the header (you can load it from an external file if needed)
    header.innerHTML = `
        <!-- Header Section -->
        <header>
            <div class="header-content">
                <!-- Top Left Corner Logo -->
                <!-- <img class="header-logo" src="/public/SMCSIF.png" alt="logo-img"/> -->
            
                <nav>
                    <ul class="sidebar">
                        <li id="close-icon" onclick=hideSidebar()><a href="index.html"><svg width="30" height="30" viewBox="0 0 468 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.43 10.429C23.4477 -2.58832 44.553 -2.58832 57.5707 10.429L234 186.859L410.43 10.429C423.447 -2.58832 444.554 -2.58832 457.57 10.429C470.587 23.4467 470.587 44.552 457.57 57.5697L281.14 233.999L457.57 410.429C470.587 423.446 470.587 444.553 457.57 457.569C444.554 470.586 423.447 470.586 410.43 457.569L234 281.139L57.5707 457.569C44.553 470.586 23.4477 470.586 10.43 457.569C-2.58734 444.553 -2.58734 423.446 10.43 410.429L186.86 233.999L10.43 57.5697C-2.58734 44.552 -2.58734 23.4467 10.43 10.429Z" fill="#743289"/>
                            </svg>
                            </a>
                        </li>
                        <li><a href="/about/index.html">About</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Educational Resources</a></li>
                        <li><a href="#">Get Involved</a></li>
                    </ul>
                    <ul>
                        <li><a href="index.html"><img id="header-logo" src="/public/SMCSIF.png" alt="logo-img"/></a></li>
                        <li class="hideOnMobile"><a href="/about/index.html">About</a></li>
                        <li class="hideOnMobile"><a href="#">Team</a></li>
                        <li class="hideOnMobile"><a href="#">Educational Resources</a></li>
                        <li class="hideOnMobile"><a href="#">Get Involved</a></li>
                        <li class="menu-button" onclick=showSidebar()><a href="#"><svg width="30" height="30" viewBox="0 0 720 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M720 40C720 50.6087 715.786 60.7828 708.284 68.2843C700.783 75.7857 690.609 80 680 80H40C29.3913 80 19.2172 75.7857 11.7157 68.2843C4.21427 60.7828 0 50.6087 0 40C0 29.3913 4.21427 19.2172 11.7157 11.7157C19.2172 4.21427 29.3913 0 40 0H680C690.609 0 700.783 4.21427 708.284 11.7157C715.786 19.2172 720 29.3913 720 40ZM720 280C720 290.609 715.786 300.783 708.284 308.284C700.783 315.786 690.609 320 680 320H40C29.3913 320 19.2172 315.786 11.7157 308.284C4.21427 300.783 0 290.609 0 280C0 269.391 4.21427 259.217 11.7157 251.716C19.2172 244.214 29.3913 240 40 240H680C690.609 240 700.783 244.214 708.284 251.716C715.786 259.217 720 269.391 720 280ZM680 560C690.609 560 700.783 555.786 708.284 548.284C715.786 540.783 720 530.609 720 520C720 509.391 715.786 499.217 708.284 491.716C700.783 484.214 690.609 480 680 480H40C29.3913 480 19.2172 484.214 11.7157 491.716C4.21427 499.217 0 509.391 0 520C0 530.609 4.21427 540.783 11.7157 548.284C19.2172 555.786 29.3913 560 40 560H680Z" fill="#743289"/>
                            </svg></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
    
    // Insert the header at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
});