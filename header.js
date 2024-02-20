document.addEventListener("DOMContentLoaded", function () {
    // Create a header element
    var header = document.createElement("header");
    
    // Set the HTML content of the header (you can load it from an external file if needed)
    header.innerHTML = `
        <!-- Header Section -->
        <header>
            <div class="header-content">
                <!-- Top Left Corner Logo -->
                <img class="header-logo" src="/public/SMCSIF.png" alt="logo-img"/>
            
                <nav>
                    <!-- Nav section for Links (that will be in the top right corner) (give these links cool logos in the future) -->
                    <a class="logo-img" href="https://www.linkedin.com/in/max-noddings/" target="_blank">
                        About
                    </a>
                    <a class="logo-img git-img" href="https://github.com/MaxNoddings" target="_blank">
                        Team
                    </a>
                    <a class="logo-img git-img" href="https://github.com/MaxNoddings" target="_blank">
                        Get Involved
                    </a>
                </nav>
            </div>
        </header>
    `;
    
    // Insert the header at the beginning of the body
    document.body.insertBefore(header, document.body.firstChild);
});