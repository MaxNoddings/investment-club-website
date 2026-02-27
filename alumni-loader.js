/**
 * Alumni Loader — Static Version
 *
 * All alumni data is hardcoded here. To update an alumnus:
 *   1. Add/replace their photo in /public/ and update the `photo` field below.
 *   2. Update the `title` field with their current job title or role.
 *   3. Update the `bio` field with a short description (copied from their LinkedIn bio, for example).
 *
 * When a LinkedIn API becomes available again, this file can be swapped out
 * for a version that fetches live data.
 */

const alumniData = [
    {
        name: "Margrethe Frøland",
        photo: "/public/maggie.png",
        linkedinUrl: "https://www.linkedin.com/in/margrethe-froland/",
        title: "Project Associate at Investor Leadership Network",
        bio: "An alumna of Saint Michael's College, Margrethe served as Co-President and Head of Energy and Infrastructure for the Student Investment Fund during her time there."
    },
    {
        name: "Nikolai Riiber",
        photo: "/public/ribs.png",
        linkedinUrl: "https://www.linkedin.com/in/nikolai-riiber-632a11195/",
        title: "Associate at Investinor",
        bio: "Nikolai focuses on series A and growth-stage investments in the software and deeptech sectors. He holds a double major in Data Science and Finance from Saint Michael's College."
    },
    {
        name: "Simen Strand",
        photo: "/public/simen.png",
        linkedinUrl: "https://www.linkedin.com/in/simen-strand/",
        title: "Business Analyst at Arthur D. Little",
        bio: "Simen specializes in technology and strategy consulting in Oslo. He is a graduate of Saint Michael's College and has additional academic experience from the University of Utah's David Eccles School of Business."
    },
    {
        name: "Niko Selvaag",
        photo: "/public/niko.png",
        linkedinUrl: "https://www.linkedin.com/in/nikolas-selvaag-6b1729200/",
        title: "Procurement Buyer at Aker Solutions",
        bio: "A graduate of Saint Michael's College, Nikolas has a strong background in professional career readiness and finance, currently contributing to procurement operations within the energy industry."
    },
    {
        name: "Sam Boger",
        photo: "/public/sam.png",
        linkedinUrl: "https://www.linkedin.com/in/samuelboger/",
        title: "Cost Analyst at GlobalFoundries",
        bio: "A Co-Founder of the Saint Michael's College Student Investment Fund, Sam was instrumental in establishing the fund's foundation and remains an active supporter of the alumni network."
    },
    {
        name: "Hannah Bennett",
        photo: "/public/hannah.jpg",
        linkedinUrl: "https://www.linkedin.com/in/hannah04bennett/",
        title: "Co-Vice Chair of the Student Investment Fund",
        bio: "A member of the Class of 2026 at Saint Michael's College, Hannah is heavily involved in the college's finance and leadership programs, managing strategic initiatives for the fund."
    }
];

// Build a single alumni card's HTML
function createAlumniCard(alumnus) {
    return `
        <div>
            <div class="left-bio">
                <div class="imgContainer">
                    <img src="${alumnus.photo}" alt="${alumnus.name}-profile" onerror="this.src='/public/SMCSIF.png'"/>
                </div>
                <div>
                    <h1>${alumnus.name}</h1>
                    <h4>${alumnus.title}</h4>
                </div>
                <a href="${alumnus.linkedinUrl}" target="_blank">
                    <img class="logo-img" src="/public/linkedin.svg" alt="LinkedIn Logo">
                </a>
            </div>
            <div class="bio">
                <p>${alumnus.bio}</p>
            </div>
        </div>
    `;
}

// Render all alumni cards into the #alumniGrid element
function loadAlumni() {
    const alumniGrid = document.getElementById('alumniGrid');
    if (!alumniGrid) return;

    alumniData.forEach(alumnus => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = createAlumniCard(alumnus);
        alumniGrid.appendChild(tempDiv.firstElementChild);
    });
}

document.addEventListener('DOMContentLoaded', loadAlumni);
