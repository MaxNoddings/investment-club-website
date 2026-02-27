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
        title: "TODO: Add Margrethe's current title",
        bio: "TODO: Add a short bio for Margrethe."
    },
    {
        name: "Nikolai Riiber",
        photo: "/public/ribs.png",
        linkedinUrl: "https://www.linkedin.com/in/nikolai-riiber-632a11195/",
        title: "TODO: Add Nikolai's current title",
        bio: "TODO: Add a short bio for Nikolai."
    },
    {
        name: "Simen Strand",
        photo: "/public/simen.png",
        linkedinUrl: "https://www.linkedin.com/in/simen-strand/",
        title: "TODO: Add Simen's current title",
        bio: "TODO: Add a short bio for Simen."
    },
    {
        name: "Niko Selvaag",
        photo: "/public/niko.png",
        linkedinUrl: "https://www.linkedin.com/in/nikolas-selvaag-6b1729200/",
        title: "TODO: Add Niko's current title",
        bio: "TODO: Add a short bio for Niko."
    },
    {
        name: "Sam Boger",
        photo: "/public/sam.png",
        linkedinUrl: "https://www.linkedin.com/in/samuelboger/",
        title: "TODO: Add Sam's current title",
        bio: "TODO: Add a short bio for Sam."
    },
    {
        name: "Hannah Bennett",
        photo: "/public/hannah.jpg",
        linkedinUrl: "https://www.linkedin.com/in/hannah04bennett/",
        title: "TODO: Add Hannah's current title",
        bio: "TODO: Add a short bio for Hannah."
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
