/* ================= DATA ================= */
const DB = {
  services: {
    "Website Development": {
      tagline: "Pixel-perfect, SEO-ready, lightning-fast.",
      overview: "We craft modern websites that convert visitors into customers. Every line of code is written with performance, accessibility and scalability in mind.",
      features: ["Mobile-first responsive layout","On-page SEO baked in","AMP / Core-Web-Vitals optimised","Easy-to-use CMS (Strapi / Sanity)","CI/CD deployment pipeline"],
      tech: ["React","Next.js","Tailwind CSS","Laravel","MySQL","GitHub Actions"],
      img: "https://source.unsplash.com/960x640/?web,development",
      gallery: ["https://source.unsplash.com/800x600/?coding","https://source.unsplash.com/800x600/?laptop"]
    },
    "Android Apps": {
      tagline: "Native Android experiences users love.",
      overview: "From MVP to Play-Store launch we handle UI/UX, development, testing and App-store optimisation.",
      features: ["100 % Kotlin / Java","Material-You theming","Offline-first architecture","Firebase backend","Play-store ASO"],
      tech: ["Kotlin","Jetpack Compose","Firebase","Room DB","Coroutines"],
      img: "https://source.unsplash.com/960x640/?android,app",
      gallery: ["https://source.unsplash.com/800x600/?smartphone","https://source.unsplash.com/800x600/?ui"]
    }
  },
  portfolio: {
    "Church App": {
      tagline: "Sermons, events, donations & prayer wall.",
      overview: "A multi-campus church needed one hub for media, events and member engagement. We delivered iOS & Android apps plus a cloud dashboard.",
      features: ["Live-stream integration","Push notification prayer alerts","Secure tithe gateway","Small-group finder","Sermon notes"],
      tech: ["Flutter","Firebase","Stripe API","JW Player"],
      img: "https://source.unsplash.com/960x640/?church",
      gallery: ["https://source.unsplash.com/800x600/?worship","https://source.unsplash.com/800x600/?bible"]
    },
    "Restaurant Website": {
      tagline: "Reservations, menus & online ordering.",
      overview: "A boutique restaurant chain wanted a sleek site that also accepts table bookings and sells gift-cards.",
      features: ["Real-time table booking","Gift-card checkout","Instagram menu sync","Multi-location selector","Google Maps reviews"],
      tech: ["Next.js","Tailwind","Laravel","PostgreSQL","Stripe"],
      img: "https://source.unsplash.com/960x640/?restaurant",
      gallery: ["https://source.unsplash.com/800x600/?food","https://source.unsplash.com/800x600/?chef"]
    }
  }
};

/* ================= RENDER FUNCTION ================= */
function renderPage() {
  console.log("=== DEBUG: Starting renderPage ===");
  
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const itemName = params.get('item');
  
  console.log("Type:", type);
  console.log("Item:", itemName);
  console.log("Available types:", Object.keys(DB));
  console.log("Available services:", Object.keys(DB.services));
  console.log("Available portfolio:", Object.keys(DB.portfolio));
  
  const data = DB[type]?.[itemName];
  
  if (!data) {
    console.error("Data not found for:", {type, itemName});
    document.querySelector('main').innerHTML = `
      <section class="container" style="text-align: center; padding: 100px 20px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Project Not Found</h1>
        <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--gray);">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <a href="index.html" class="btn" style="background: var(--primary); color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px;">
          Return to Home
        </a>
      </section>
    `;
    return;
  }
  
  console.log("Data found:", data);
  
  try {
    /* HERO SECTION */
    document.getElementById('dh-title').textContent = itemName;
    document.getElementById('dh-desc').textContent = data.tagline;
    document.getElementById('dh-img').src = data.img;
    document.getElementById('dh-img').alt = itemName + " preview";
    
    // Add error handling for image
    document.getElementById('dh-img').onerror = function() {
      this.src = 'https://via.placeholder.com/960x640/4a90e2/ffffff?text=' + encodeURIComponent(itemName);
      console.log("Hero image failed to load, using placeholder");
    };
    
    // Tags for hero section
    const tagsContainer = document.getElementById('dh-tags');
    tagsContainer.innerHTML = '';
    data.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = t;
      tagsContainer.appendChild(tag);
    });
    
    console.log("Hero section rendered");
    
    /* OVERVIEW SECTION */
    document.getElementById('dv-overview').textContent = data.overview;
    console.log("Overview section rendered");
    
    /* FEATURES SECTION */
    const featList = document.getElementById('dv-features');
    featList.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="fa-li"><i class="fas fa-check-circle"></i></span>${f}`;
      featList.appendChild(li);
    });
    console.log("Features section rendered");
    
    /* TECH STACK SECTION */
    const techWrap = document.getElementById('dv-tech');
    techWrap.innerHTML = '';
    data.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = t;
      techWrap.appendChild(tag);
    });
    console.log("Tech section rendered");
    
    /* GALLERY SECTION */
    const gal = document.getElementById('dv-gallery');
    gal.innerHTML = '';
    data.gallery.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${itemName} screenshot ${index + 1}`;
      img.loading = 'lazy';
      
      // Add error handling for gallery images
      img.onerror = function() {
        this.src = 'https://via.placeholder.com/800x600/4a90e2/ffffff?text=Gallery+' + (index + 1);
      };
      
      gal.appendChild(img);
    });
    console.log("Gallery section rendered");
    
    /* PAGE TITLE */
    document.getElementById('page-title').textContent = `${itemName} – Sekho Tech`;
    console.log("Page title updated");
    
    console.log("=== DEBUG: All sections rendered successfully ===");
    
  } catch (error) {
    console.error("Error rendering page:", error);
    document.querySelector('main').innerHTML = `
      <section class="container" style="text-align: center; padding: 100px 20px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Error Loading Project</h1>
        <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--gray);">
          There was an error loading this project. Please try again.
        </p>
        <a href="index.html" class="btn" style="background: var(--primary); color: white; text-decoration: none; padding: 12px 30px; border-radius: 8px;">
          Return to Home
        </a>
      </section>
    `;
  }
}

/* ================= INITIALIZE ================= */
document.addEventListener('DOMContentLoaded', () => {
  console.log("=== DEBUG: DOM fully loaded ===");
  
  // Check if header/footer are already loaded
  setTimeout(() => {
    console.log("Starting renderPage...");
    renderPage();
  }, 100);
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      if (href.includes('#')) {
        e.preventDefault();
        const targetId = href;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// Also run on page load (in case DOMContentLoaded already fired)
if (document.readyState === 'loading') {
  console.log("Document still loading, waiting for DOMContentLoaded");
} else {
  console.log("Document already loaded, running renderPage now");
  renderPage();
}