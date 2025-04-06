 // Work display
const workGallery = document.getElementById("workGallery");

if (workGallery) {
    const projects = [
        {
            title: "Common Web3 Jargons",
            description: "Breaking down the common Web3 jargons for everyday users.",
            link: "https://x.com/0xammie/status/1898453473462538559"
        },
        {
            title: "What a Content Creator Can Do",
            description: "Introducing myself through the power of storytelling.",
            link: "https://x.com/0xammie/status/1907449380686184550"
        },
        {
            title: "Web3 Wallets",
            description: "Explaining wallets and digital security for beginners.",
            link: "https://x.com/0xammie/status/1898052141022867861"
        }
    ];

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Work</a>
        `;
        workGallery.appendChild(card);
    });
}

// Contact form handler
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thanks for reaching out, Ammie will be in touch soon!");
        form.reset();
    });
}