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
    // Class of 2026
    {
        name: "Aidan Burns",
        photo: "/public/aidanburns.jpeg",
        imageClass: "adjust-vertical",
        linkedinUrl: "https://www.linkedin.com/in/aidan-burns-b2a893181/",
        title: "Class of 2026 — Economics & International Relations",
        bio: "Aidan graduated from Saint Michael's College in 2026 with a degree in Economics. He served as President and Head of Real Estate for the Student Investment Fund, leading the club through a pivotal year of growth. On campus he was also a videographer for the SMC Lacrosse team and a climbing guide for the SMC Adventure Sports Center."
    },
    {
        name: "Máximo Steverlynck",
        photo: "/public/maximo.jpg",
        imageClass: "adjust-vertical",
        linkedinUrl: "https://www.linkedin.com/in/maximosteverlynck/",
        title: "Class of 2026 — Finance & International Relations",
        bio: "Máximo graduated from Saint Michael's College in 2026 with a double major in International Relations and Political Science. He served as Director of Analysis & Education and Head of Healthcare for the Student Investment Fund. He was also the founder of the SMC Cycling Club and manager of the SMC Nordic Ski Team."
    },
    {
        name: "Julius Van den Broek",
        photo: "/public/julius.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/julius-van-den-broek-653a05247/",
        title: "Class of 2026 — Business Administration",
        bio: "Julius graduated from Saint Michael's College in 2026 with a major in Business and minors in Accounting, Economics, and Finance. He served as Director of Recruitment and Head of Fixed Income for the Student Investment Fund. He was Captain of the Men's Tennis Team, a finance tutor on campus, and brings internship experience in the hedge fund industry."
    },
    // Class of 2025
    {
        name: "Margrethe Frøland",
        photo: "/public/maggie.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/margrethe-froland/",
        title: "Class of 2025 - Economics",
        bio: "Margrethe graduated from Saint Michael's College in 2025. She served as Co-President and Head of Energy and Infrastructure for the Student Investment Fund during her time there, and is now a Project Associate at the Investor Leadership Network."
    },
    {
        name: "Hannah Bennett",
        photo: "/public/hannah.jpg",
        imageClass: "adjust-vertical-extreme",
        linkedinUrl: "https://www.linkedin.com/in/hannah04bennett/",
        title: "Class of 2025 - Digital Marketing",
        bio: "Hannah graduated from Saint Michael's College in 2025. She served as Co-Vice Chair of the Student Investment Fund, playing a key role in the college's finance and leadership programs and managing strategic initiatives for the fund."
    },
    {
        name: "Sam Boger",
        photo: "/public/sam.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/samuelboger/",
        title: "Class of 2025 - Economics & History",
        bio: "Sam graduated from Saint Michael's College in 2025 and is a Co-Founder of the Student Investment Fund, instrumental in establishing its foundation. He is now a Cost Analyst at GlobalFoundries and remains an active supporter of the alumni network."
    },
    // Class of 2024
    {
        name: "Nikolai Riiber",
        photo: "/public/ribs.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/nikolai-riiber-632a11195/",
        title: "Class of 2024 - Data Science & Economics",
        bio: "Nikolai graduated from Saint Michael's College in 2024 with a double major in Data Science and Finance. He now focuses on series A and growth-stage investments in the software and deeptech sectors as an Associate at Investinor."
    },
    {
        name: "Simen Strand",
        photo: "/public/simen.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/simen-strand/",
        title: "Class of 2024 - Business Administration & Economics",
        bio: "Simen graduated from Saint Michael's College in 2024 and has additional academic experience from the University of Utah's David Eccles School of Business. He now specializes in technology and strategy consulting in Oslo as a Business Analyst at Arthur D. Little."
    },
    {
        name: "Niko Selvaag",
        photo: "/public/niko.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/nikolas-selvaag-6b1729200/",
        title: "Class of 2024 - Business Administration & Finance",
        bio: "Niko graduated from Saint Michael's College in 2024 with a strong background in finance and professional career readiness. He is now a Procurement Buyer at Aker Solutions, contributing to procurement operations within the energy industry."
    }
];

// Build a single alumni card's HTML
function createAlumniCard(alumnus) {
    const imgClass = alumnus.imageClass ? `class="${alumnus.imageClass}"` : '';
    return `
        <div>
            <div class="left-bio">
                <div class="imgContainer">
                    <img ${imgClass} src="${alumnus.photo}" alt="${alumnus.name}-profile" loading="lazy" decoding="async" onerror="this.src='/public/SMCSIF.png'"/>
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
