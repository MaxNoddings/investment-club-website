// Alumni data with hardcoded names and LinkedIn URLs
const alumniData = [
    {
        name: "Margrethe Frøland",
        linkedinUrl: "https://www.linkedin.com/in/margrethe-froland/"
    },
    {
        name: "Nikolai Riiber",
        linkedinUrl: "https://www.linkedin.com/in/nikolai-riiber-632a11195/"
    },
    {
        name: "Simen Strand",
        linkedinUrl: "https://www.linkedin.com/in/simen-strand/"
    },
    {
        name: "Niko Selvaag",
        linkedinUrl: "https://www.linkedin.com/in/nikolas-selvaag-6b1729200/"
    },
    {
        name: "Sam Boger",
        linkedinUrl: "https://www.linkedin.com/in/samuelboger/"
    },
    {
        name: "Hannah Bennett",
        linkedinUrl: "https://www.linkedin.com/in/hannah04bennett/"
    }
];

// Function to extract LinkedIn profile ID from URL
function extractLinkedInId(url) {
    const match = url.match(/\/in\/([a-zA-Z0-9\-]+)\/?/);
    return match ? match[1] : null;
}

// Function to fetch LinkedIn profile data using third-party API
async function fetchLinkedInProfile(linkedinUrl) {
    const profileId = extractLinkedInId(linkedinUrl);
    if (!profileId) return null;

    try {
        // Using RapidAPI's LinkedIn Profile Scraper
        // You'll need to sign up at https://rapidapi.com and get an API key
        const response = await fetch(
            `https://linkedin-data-api.p.rapidapi.com/get-profile-data?profile_id=${profileId}`,
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY_HERE', // Replace with your API key
                    'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
                }
            }
        );

        if (!response.ok) throw new Error('Failed to fetch LinkedIn data');
        
        const data = await response.json();
        
        return {
            headline: data.headline || 'Professional',
            profileImage: data.profileImage || '/public/default-avatar.png',
            summary: data.summary || 'No description available'
        };
    } catch (error) {
        console.error(`Error fetching LinkedIn data for ${profileId}:`, error);
        return null;
    }
}

// Function to create alumni card HTML
function createAlumniCard(alumnus, linkedinData) {
    const profileImage = linkedinData?.profileImage || '/public/default-avatar.png';
    const headline = linkedinData?.headline || 'Loading...';
    const summary = linkedinData?.summary || 'Professional from Saint Michael\'s College';

    return `
        <div>
            <div class="left-bio">
                <div class="imgContainer">
                    <img src="${profileImage}" alt="${alumnus.name}-profile" onerror="this.src='/public/default-avatar.png'"/>
                </div>
                <div>
                    <h1>${alumnus.name}</h1>
                    <h4>${headline}</h4>
                </div>
                <a href="${alumnus.linkedinUrl}" target="_blank">
                    <img class="logo-img" src="/public/linkedin.svg" alt="LinkedIn Logo">
                </a>
            </div>
            <div class="bio">
                <p>${summary}</p>
            </div>
        </div>
    `;
}

// Load alumni when page is ready
async function loadAlumni() {
    const alumniGrid = document.getElementById('alumniGrid');
    
    for (const alumnus of alumniData) {
        try {
            const linkedinData = await fetchLinkedInProfile(alumnus.linkedinUrl);
            const cardHTML = createAlumniCard(alumnus, linkedinData);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cardHTML;
            alumniGrid.appendChild(tempDiv.firstElementChild);
        } catch (error) {
            console.error(`Error loading alumni card for ${alumnus.name}:`, error);
            // Still add a card with just the name
            const cardHTML = createAlumniCard(alumnus, null);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cardHTML;
            alumniGrid.appendChild(tempDiv.firstElementChild);
        }
    }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', loadAlumni);
