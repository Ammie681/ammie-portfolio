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

const uploadForm = document.getElementById("uploadForm");
const uploadedPostsContainer = document.getElementById("uploadedPosts");

// Load posts on page load
document.addEventListener("DOMContentLoaded", () => {
  loadUploadedPosts();
});

uploadForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const newPost = { title, content };
  const existingPosts = JSON.parse(localStorage.getItem("ammiePosts")) || [];
  existingPosts.push(newPost);
  localStorage.setItem("ammiePosts", JSON.stringify(existingPosts));

  uploadForm.reset();
  loadUploadedPosts();
});

function loadUploadedPosts() {
  uploadedPostsContainer.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("ammiePosts")) || [];

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "uploaded-post";
    postDiv.innerHTML = <h3>${post.title}</h3>
    
    uploadedPostsContainer.appendChild(postDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("uploadForm");
    const workContainer = document.getElementById("workContainer");
  
    let uploads = JSON.parse(localStorage.getItem("ammieUploads")) || [];
  
    function renderUploads() {
      workContainer.innerHTML = "";
      uploads.forEach((upload, index) => {
        const div = document.createElement("div");
        div.className = "uploaded-post";
        div.innerHTML = `
          <h3>${upload.title}</h3>
          <p>${upload.content}</p>
        `;
        workContainer.appendChild(div);
      });
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const title = document.getElementById("title").value.trim();
      const content = document.getElementById("content").value.trim();
  
      if (title && content) {
        uploads.push({ title, content });
        localStorage.setItem("ammieUploads", JSON.stringify(uploads));
        renderUploads();
        form.reset();
      }
    });
  
    renderUploads();
  });