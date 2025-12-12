/* ================= DATA ================= */
const DB = {
  services: {
    "Website Development": {
      tagline: "Pixel-perfect, SEO-ready, lightning-fast.",
      overview: "We craft modern websites that convert visitors into customers. Every line of code is written with performance, accessibility and scalability in mind.",
      features: ["Mobile-first responsive layout","On-page SEO baked in","AMP / Core-Web-Vitals optimised","Easy-to-use CMS (Strapi / Sanity)","CI/CD deployment pipeline"],
      tech: ["React","Next.js","Tailwind CSS","Laravel","MySQL","GitHub Actions"],
      img: "https://source.unsplash.com/960x640/?web,development",
      gallery: ["https://source.unsplash.com/800x600/?coding","https://source.unsplash.com/800x600/?laptop"],
      pricing: "$5,000 - $25,000+",
      timeline: "4-12 weeks",
      deliverables: ["Fully responsive website", "SEO optimization", "CMS setup", "Analytics integration"]
    },
    "Android Apps": {
      tagline: "Native Android experiences users love.",
      overview: "From MVP to Play-Store launch we handle UI/UX, development, testing and App-store optimisation.",
      features: ["100 % Kotlin / Java","Material-You theming","Offline-first architecture","Firebase backend","Play-store ASO"],
      tech: ["Kotlin","Jetpack Compose","Firebase","Room DB","Coroutines"],
      img: "https://source.unsplash.com/960x640/?android,app",
      gallery: ["https://source.unsplash.com/800x600/?smartphone","https://source.unsplash.com/800x600/?ui"],
      pricing: "$15,000 - $50,000+",
      timeline: "8-16 weeks",
      deliverables: ["Native Android app", "Play Store deployment", "Admin dashboard", "Documentation"]
    },
  
    "UI / UX Design": {
      tagline: "Interfaces that feel intuitive & look stunning.",
      overview: "We turn complex problems into simple, elegant flows. Research, wire-frames, interactive prototypes and design systems that devs love.",
      features: ["User-research & personas","Low → hi-fidelity prototypes","Design-system hand-off","Accessibility WCAG 2.2","Micro-interaction & motion"],
      tech: ["Figma","Adobe XD","Lottie","Principle","Miro"],
      img: "https://source.unsplash.com/960x640/?ux,design",
      gallery: ["https://source.unsplash.com/800x600/?wireframe","https://source.unsplash.com/800x600/?prototype"],
      pricing: "$3,000 - $15,000+",
      timeline: "2-6 weeks",
      deliverables: ["Wireframes", "Interactive prototypes", "Design system", "Style guide"]
    },
    "Brand Identity": {
  tagline: "A brand that feels premium, memorable & instantly recognizable.",
  overview: "We design branding that communicates trust and personality. From logos to full identity systems, every detail is crafted with consistency, emotion, and strategy.",
  features: [
    "Logo design (3–5 concepts)",
    "Brand color palette",
    "Typography selection",
    "Brand guidelines",
    "Mockups & real-world previews"
  ],
  tech: ["Adobe Illustrator", "Photoshop", "Figma"],
  img: "https://source.unsplash.com/960x640/?branding,logo",
  gallery: [
    "https://source.unsplash.com/800x600/?brand",
    "https://source.unsplash.com/800x600/?identity"
  ],
  pricing: "$500 - $2,000",
  timeline: "1-3 weeks",
  deliverables: [
    "Primary logo + variations",
    "Brand color system",
    "Typography guide",
    "Full brand kit PDF"
  ]
},

"WhatsApp Catalog": {
  tagline: "A clean, scrollable catalog your customers can order from instantly.",
  overview: "We create stunning WhatsApp-ready product catalogs optimised for mobile users, making ordering fast and frictionless.",
  features: [
    "Modern catalog design",
    "Clickable product buttons",
    "Optimized for WhatsApp compression",
    "Offer banners",
    "Business profile optimization"
  ],
  tech: ["Photoshop", "Figma"],
  img: "https://source.unsplash.com/960x640/?whatsapp,shopping",
  gallery: [
    "https://source.unsplash.com/800x600/?catalog",
    "https://source.unsplash.com/800x600/?ecommerce"
  ],
  pricing: "$50 - $300",
  timeline: "2-5 days",
  deliverables: [
    "WhatsApp-ready catalog",
    "Product images",
    "Editable design files"
  ]
},

"Social Media Kit": {
  tagline: "Consistent visuals that make your social media instantly recognizable.",
  overview: "A complete design kit for Instagram, Facebook, and YouTube — perfect for brands that want a premium online presence.",
  features: [
    "Post & story templates",
    "Highlight icons",
    "Cover banners",
    "Reels/short-form layouts",
    "Brand color integration"
  ],
  tech: ["Canva", "Figma", "Illustrator"],
  img: "https://source.unsplash.com/960x640/?socialmedia,design",
  gallery: [
    "https://source.unsplash.com/800x600/?instagram",
    "https://source.unsplash.com/800x600/?content"
  ],
  pricing: "$80 - $500",
  timeline: "3-7 days",
  deliverables: [
    "Editable templates",
    "Brand-aligned assets",
    "Content layout pack"
  ]
},

"Digital Products": {
  tagline: "Ready-made digital assets you can sell or use instantly.",
  overview: "We design and package digital products like planners, eBooks, templates, and mini-courses. Professionally crafted and instantly downloadable.",
  features: [
    "Ebooks & guides",
    "Posters & templates",
    "Planners & journals",
    "Editable digital files",
    "Commercial/license setup"
  ],
  tech: ["Canva", "Figma", "PDF"],
  img: "https://source.unsplash.com/960x640/?digital,product",
  gallery: [
    "https://source.unsplash.com/800x600/?template",
    "https://source.unsplash.com/800x600/?ebook"
  ],
  pricing: "$20 - $300",
  timeline: "1-5 days",
  deliverables: [
    "Full digital product pack",
    "Editable source files",
    "Commercial use rights"
  ]
},

"Phone Repair (Add-on)": {
  tagline: "Affordable repair solutions for your customers — bundled with your tech services.",
  overview: "An optional add-on service for clients who need basic screen, battery, charging port, and software fixes. Ideal for local support and trust-building.",
  features: [
    "Screen replacement",
    "Battery replacement",
    "Charging port repair",
    "Software flashing",
    "Diagnostics & testing"
  ],
  tech: ["Hardware tools", "Software utilities"],
  img: "https://source.unsplash.com/960x640/?phone,repair",
  gallery: [
    "https://source.unsplash.com/800x600/?repair",
    "https://source.unsplash.com/800x600/?technician"
  ],
  pricing: "$10 - $80",
  timeline: "30 min - 3 hours",
  deliverables: [
    "Fixed device",
    "Diagnostic report",
    "Warranty (if applicable)"
  ]
}

  },

  portfolio: {
    "Church App": {
      tagline: "Sermons, events, donations & prayer wall.",
      overview: "A multi-campus church needed one hub for media, events and member engagement. We delivered iOS & Android apps plus a cloud dashboard.",
      features: ["Live-stream integration","Push notification prayer alerts","Secure tithe gateway","Small-group finder","Sermon notes"],
      tech: ["Flutter","Firebase","Stripe API","JW Player"],
      img: "https://source.unsplash.com/960x640/?church",
      gallery: ["https://source.unsplash.com/800x600/?worship","https://source.unsplash.com/800x600/?bible"],
      client: "Grace Community Church",
      industry: "Religious Organization",
      duration: "4 months",
      results: ["Increased engagement by 40%", "500+ active users", "20% growth in donations"]
    },
    "Restaurant Website": {
      tagline: "Reservations, menus & online ordering.",
      overview: "A boutique restaurant chain wanted a sleek site that also accepts table bookings and sells gift-cards.",
      features: ["Real-time table booking","Gift-card checkout","Instagram menu sync","Multi-location selector","Google Maps reviews"],
      tech: ["Next.js","Tailwind","Laravel","PostgreSQL","Stripe"],
      img: "https://source.unsplash.com/960x640/?restaurant",
      gallery: ["https://source.unsplash.com/800x600/?food","https://source.unsplash.com/800x600/?chef"],
      client: "Bistro Royale",
      industry: "Hospitality",
      duration: "2 months",
      results: ["30% increase in online orders", "Reduced no-shows by 25%", "15% growth in gift card sales"]
    },
  
    "Clothing Brand": {
  tagline: "A bold, modern identity for an emerging streetwear brand.",
  overview: "We built a complete digital presence — catalog, branding, social media kit, and a clean product showcase website.",
  features: [
    "Product catalog",
    "Brand identity",
    "Lookbook layout",
    "E-commerce ready design"
  ],
  tech: ["Figma", "Canva", "Next.js"],
  img: "https://source.unsplash.com/960x640/?fashion,clothes",
  gallery: [
    "https://source.unsplash.com/800x600/?streetwear",
    "https://source.unsplash.com/800x600/?fashion"
  ],
  client: "Urban Threads",
  industry: "Fashion",
  duration: "3 weeks",
  results: ["4× increase in engagement", "Clean brand presence", "Ready for e-commerce"]
},

"Gospel Lyrics App": {
  tagline: "Offline lyrics library for worship teams and youth groups.",
  overview: "A simple app with fast search and offline gospel lyrics. No ads, no distractions — just clean worship tools.",
  features: [
    "Offline lyrics",
    "Search by title",
    "Favorites",
    "Clean UI",
    "Dark mode"
  ],
  tech: ["Java", "XML", "Firebase"],
  img: "https://source.unsplash.com/960x640/?gospel,church",
  gallery: [
    "https://source.unsplash.com/800x600/?worship",
    "https://source.unsplash.com/800x600/?song"
  ],
  client: "Worship Community",
  industry: "Christian Ministry",
  duration: "2 weeks",
  results: ["Loved by local churches", "Zero crashes", "Fast performance"]
},

"Travel Agency": {
  tagline: "A clean booking-focused website for a tour & travel brand.",
  overview: "We created a modern travel landing page with packages, gallery, contact form, and WhatsApp enquiry integration.",
  features: [
    "Tour package layout",
    "WhatsApp enquiry",
    "Gallery & testimonials",
    "SEO optimized content"
  ],
  tech: ["HTML", "CSS", "JavaScript"],
  img: "https://source.unsplash.com/960x640/?travel,beach",
  gallery: [
    "https://source.unsplash.com/800x600/?tourism",
    "https://source.unsplash.com/800x600/?travel"
  ],
  client: "Skyline Travels",
  industry: "Tourism",
  duration: "1 week",
  results: ["More online enquiries", "Cleaner brand look", "Better WhatsApp conversions"]
},

"Phone-Repair Posters": {
  tagline: "High-converting posters for local repair shops.",
  overview: "We designed visually striking phone repair posters optimized for printing & WhatsApp sharing.",
  features: [
    "Print-ready A4 designs",
    "WhatsApp compressed versions",
    "Bold layouts",
    "Offer highlight sections"
  ],
  tech: ["Canva", "Photoshop"],
  img: "https://source.unsplash.com/960x640/?poster,design",
  gallery: [
    "https://source.unsplash.com/800x600/?phone",
    "https://source.unsplash.com/800x600/?poster"
  ],
  client: "Local Repair Shops",
  industry: "Electronics",
  duration: "3 days",
  results: ["Better customer reach", "Professional branding", "Higher trust"]
}
  }
};
/* ================= FILTERED DATA ARRAYS ================= */
// Filter services to match DB format and remove non-existent ones
const availableServices = [
  "Website Development", 
  "Android Apps",  
  "UI / UX Design", 
 
];

// Filter portfolio to match DB format and remove non-existent ones
const availablePortfolio = [
  "Church App", 
  "Restaurant Website",
  
];
/* ================= RENDER FUNCTION ================= */
function renderPage() {
  console.log("=== DEBUG: Starting renderPage ===");
  
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const itemNameEncoded = params.get('item');
  
  // Decode the item name
  const itemName = itemNameEncoded ? decodeURIComponent(itemNameEncoded) : '';
  
  console.log("URL Parameters:", { type, itemNameEncoded, itemName });
  
  if (!type || !itemName) {
    console.error("Missing type or item parameter");
    showNotFound();
    return;
  }
  
  // Normalize the type
  const normalizedType = type.toLowerCase();
  const dbType = normalizedType === 'service' || normalizedType === 'services' ? 'services' : 
                 normalizedType === 'project' || normalizedType === 'portfolio' ? 'portfolio' : 
                 normalizedType;
  
  console.log("Looking in DB category:", dbType);
  console.log("Available DB categories:", Object.keys(DB));
  
  if (!DB[dbType]) {
    console.error("DB category not found:", dbType);
    showNotFound();
    return;
  }
  
  console.log("Available items in", dbType + ":", Object.keys(DB[dbType]));
  
  // Try to find the item with multiple matching strategies
  let data = null;
  let matchedKey = null;
  
  // Strategy 1: Exact match
  if (DB[dbType][itemName]) {
    data = DB[dbType][itemName];
    matchedKey = itemName;
  }
  
  // Strategy 2: Trim and exact match (in case of extra spaces)
  if (!data) {
    const trimmedItemName = itemName.trim();
    if (DB[dbType][trimmedItemName]) {
      data = DB[dbType][trimmedItemName];
      matchedKey = trimmedItemName;
    }
  }
  
  // Strategy 3: Case-insensitive match
  if (!data) {
    const lowerItemName = itemName.toLowerCase().trim();
    for (const key in DB[dbType]) {
      if (key.toLowerCase() === lowerItemName) {
        data = DB[dbType][key];
        matchedKey = key;
        break;
      }
    }
  }
  
  // Strategy 4: Partial match (for URLs with different encoding)
  if (!data) {
    // Remove special characters and extra spaces for comparison
    const cleanItemName = itemName.toLowerCase()
      .replace(/[^a-z0-9\s]/gi, '') // Remove special chars
      .replace(/\s+/g, ' ')         // Replace multiple spaces with single
      .trim();
    
    console.log("Cleaned item name for partial match:", cleanItemName);
    
    for (const key in DB[dbType]) {
      const cleanKey = key.toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      if (cleanKey === cleanItemName || 
          cleanKey.includes(cleanItemName) || 
          cleanItemName.includes(cleanKey)) {
        data = DB[dbType][key];
        matchedKey = key;
        console.log("Partial match found:", key);
        break;
      }
    }
  }
  
  // Strategy 5: Match common variations
  if (!data) {
    const variations = {
      'ios apps': 'iOS Apps',
      'ui/ux design': 'UI / UX Design',
      'ui ux design': 'UI / UX Design',
      'cloud devops': 'Cloud & DevOps',
      'cloud & devops': 'Cloud & DevOps',
      'progressive web apps': 'Progressive Web Apps',
      'pwa': 'Progressive Web Apps',
      'e-learning platform': 'E-Learning Platform',
      'elearning platform': 'E-Learning Platform',
      'fintech dashboard': 'Fintech Dashboard',
      'health fitness tracker': 'Health & Fitness Tracker',
      'health & fitness tracker': 'Health & Fitness Tracker',
      'real-estate portal': 'Real-Estate Portal',
      'real estate portal': 'Real-Estate Portal',
      'church app': 'Church App',
      'restaurant website': 'Restaurant Website'
    };
    
    const lowerItemName = itemName.toLowerCase().trim();
    if (variations[lowerItemName]) {
      const matchKey = variations[lowerItemName];
      if (DB[dbType][matchKey]) {
        data = DB[dbType][matchKey];
        matchedKey = matchKey;
        console.log("Variation match found:", matchKey);
      }
    }
  }
  
  if (!data) {
    console.error("No match found for item:", itemName);
    console.log("Available items are:", Object.keys(DB[dbType]));
    showNotFound();
    return;
  }
  
  console.log("Successfully matched to:", matchedKey);
  console.log("Data found:", data);
  
  try {
    /* HERO SECTION */
    document.getElementById('dh-title').textContent = matchedKey || itemName;
    document.getElementById('dh-desc').textContent = data.tagline;
    document.getElementById('dh-img').src = data.img;
    document.getElementById('dh-img').alt = (matchedKey || itemName) + " preview";
    
    // Add error handling for image
    document.getElementById('dh-img').onerror = function() {
      this.src = 'https://via.placeholder.com/960x640/4a90e2/ffffff?text=' + encodeURIComponent(matchedKey || itemName);
      console.log("Hero image failed to load, using placeholder");
    };
    
    // Tags for hero section - Different styling for services vs portfolio
    const tagsContainer = document.getElementById('dh-tags');
    tagsContainer.innerHTML = '';
    if (data.tech && Array.isArray(data.tech)) {
      data.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = dbType === 'services' ? 'tag service-tag' : 'tag portfolio-tag';
        tag.textContent = t;
        tagsContainer.appendChild(tag);
      });
    }
    
    console.log("Hero section rendered");
    
    /* OVERVIEW SECTION */
    if (data.overview) {
      document.getElementById('dv-overview').textContent = data.overview;
    }
    console.log("Overview section rendered");
    
    /* FEATURES SECTION */
    const featList = document.getElementById('dv-features');
    featList.innerHTML = '';
    if (data.features && Array.isArray(data.features)) {
      data.features.forEach(f => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="fa-li"><i class="fas fa-check-circle"></i></span>${f}`;
        featList.appendChild(li);
      });
    }
    console.log("Features section rendered");
    
    /* TECH STACK SECTION */
    const techWrap = document.getElementById('dv-tech');
    techWrap.innerHTML = '';
    if (data.tech && Array.isArray(data.tech)) {
      data.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = dbType === 'services' ? 'tag service-tech' : 'tag portfolio-tech';
        tag.textContent = t;
        techWrap.appendChild(tag);
      });
    }
    console.log("Tech section rendered");
    
    /* SERVICE-SPECIFIC SECTIONS (for services only) */
    if (dbType === 'services') {
      // Create or update pricing section
      const pricingSection = document.getElementById('service-pricing');
      if (pricingSection && data.pricing) {
        pricingSection.innerHTML = `
          <div class="info-card">
            <h3><i class="fas fa-dollar-sign"></i> Pricing</h3>
            <p class="price">${data.pricing}</p>
            <p>Custom quotes based on project scope</p>
          </div>
        `;
        pricingSection.style.display = 'block';
      }
      
      // Create or update timeline section
      const timelineSection = document.getElementById('service-timeline');
      if (timelineSection && data.timeline) {
        timelineSection.innerHTML = `
          <div class="info-card">
            <h3><i class="fas fa-calendar-alt"></i> Timeline</h3>
            <p class="timeline">${data.timeline}</p>
            <p>Typical project duration</p>
          </div>
        `;
        timelineSection.style.display = 'block';
      }
      
      // Create or update deliverables section
      const deliverablesSection = document.getElementById('service-deliverables');
      if (deliverablesSection && data.deliverables) {
        let deliverablesHTML = '<h3><i class="fas fa-box"></i> Deliverables</h3><ul class="fa-ul">';
        data.deliverables.forEach(item => {
          deliverablesHTML += `<li><span class="fa-li"><i class="fas fa-check"></i></span>${item}</li>`;
        });
        deliverablesHTML += '</ul>';
        deliverablesSection.innerHTML = deliverablesHTML;
        deliverablesSection.style.display = 'block';
      }
      
      // Add CTA button for services
      const ctaSection = document.getElementById('service-cta');
      if (ctaSection) {
        ctaSection.innerHTML = `
          <div class="cta-container">
            <h3>Ready to Get Started?</h3>
            <p>Let's discuss how ${matchedKey} can help your business grow.</p>
            <div class="cta-buttons">
              <a href="contact.html?service=${encodeURIComponent(matchedKey)}" class="btn btn-primary">
                <i class="fas fa-comment-dots"></i> Request a Quote
              </a>
              <a href="tel:+1234567890" class="btn btn-secondary">
                <i class="fas fa-phone"></i> Call Now
              </a>
            </div>
          </div>
        `;
        ctaSection.style.display = 'block';
      }
    }
    
    /* PORTFOLIO-SPECIFIC SECTIONS (for portfolio only) */
    if (dbType === 'portfolio') {
      // Create or update client info section
      const clientSection = document.getElementById('portfolio-client');
      if (clientSection) {
        let clientHTML = '<div class="info-grid">';
        
        if (data.client) {
          clientHTML += `
            <div class="info-item">
              <h4><i class="fas fa-building"></i> Client</h4>
              <p>${data.client}</p>
            </div>
          `;
        }
        
        if (data.industry) {
          clientHTML += `
            <div class="info-item">
              <h4><i class="fas fa-industry"></i> Industry</h4>
              <p>${data.industry}</p>
            </div>
          `;
        }
        
        if (data.duration) {
          clientHTML += `
            <div class="info-item">
              <h4><i class="fas fa-clock"></i> Duration</h4>
              <p>${data.duration}</p>
            </div>
          `;
        }
        
        clientHTML += '</div>';
        clientSection.innerHTML = clientHTML;
        clientSection.style.display = 'block';
      }
      
      // Create or update results section
      const resultsSection = document.getElementById('portfolio-results');
      if (resultsSection && data.results) {
        let resultsHTML = '<h3><i class="fas fa-chart-line"></i> Key Results</h3><ul class="fa-ul">';
        data.results.forEach(result => {
          resultsHTML += `<li><span class="fa-li"><i class="fas fa-trophy"></i></span>${result}</li>`;
        });
        resultsHTML += '</ul>';
        resultsSection.innerHTML = resultsHTML;
        resultsSection.style.display = 'block';
      }
      
      // Add project CTA button
      const portfolioCta = document.getElementById('portfolio-cta');
      if (portfolioCta) {
        portfolioCta.innerHTML = `
          <div class="cta-container">
            <h3>Want a Similar Project?</h3>
            <p>We can build something amazing for your business too.</p>
            <a href="contact.html?project=${encodeURIComponent(matchedKey)}" class="btn btn-primary">
              <i class="fas fa-lightbulb"></i> Start Your Project
            </a>
          </div>
        `;
        portfolioCta.style.display = 'block';
      }
    }
    
    /* GALLERY SECTION */
    const gal = document.getElementById('dv-gallery');
    gal.innerHTML = '';
    if (data.gallery && Array.isArray(data.gallery)) {
      data.gallery.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${matchedKey || itemName} ${dbType === 'services' ? 'service' : 'project'} screenshot ${index + 1}`;
        img.loading = 'lazy';
        
        // Add error handling for gallery images
        img.onerror = function() {
          this.src = 'https://via.placeholder.com/800x600/4a90e2/ffffff?text=' + 
                     (dbType === 'services' ? 'Service+' : 'Project+') + (index + 1);
        };
        
        gal.appendChild(img);
      });
    }
    console.log("Gallery section rendered");
    
    /* PAGE TITLE */
    const pageType = dbType === 'services' ? 'Service' : 'Project';
    document.title = `${matchedKey || itemName} – Sekho Tech ${pageType}`;
    console.log("Page title updated");
    
    // Update page header based on type
    const pageHeader = document.querySelector('.page-header h2');
    if (pageHeader) {
      pageHeader.textContent = dbType === 'services' ? 'Our Service' : 'Project Case Study';
    }
    
    console.log("=== DEBUG: All sections rendered successfully ===");
    
  } catch (error) {
    console.error("Error rendering page:", error);
    showError(error);
  }
}

/* ================= HELPER FUNCTIONS ================= */
function showNotFound() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const itemNameEncoded = params.get('item');
  const itemName = itemNameEncoded ? decodeURIComponent(itemNameEncoded) : 'Unknown';
  
  // Determine which DB category to show
  const dbType = type === 'service' ? 'services' : 
                 type === 'project' ? 'portfolio' : 
                 null;
  
  if (!dbType || !DB[dbType]) {
    document.querySelector('main').innerHTML = `
      <section class="container" style="text-align: center; padding: 100px 20px;">
        <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Invalid Page Type</h1>
        <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--gray);">
          The page type "${type}" is not valid.
        </p>
        <a href="index.html" class="btn" style="background: var(--primary); color: white; 
           text-decoration: none; padding: 12px 30px; border-radius: 8px; margin-top: 30px;">
          Return to Home
        </a>
      </section>
    `;
    return;
  }
  
  // Use the filtered arrays instead of all DB items
  const displayItems = dbType === 'services' ? availableServices : availablePortfolio;
  const categoryName = dbType === 'services' ? 'Services' : 'Projects';
  
  document.querySelector('main').innerHTML = `
    <section class="container" style="text-align: center; padding: 100px 20px;">
      <h1 style="font-size: 2.5rem; margin-bottom: 20px;">"${itemName}" Not Found</h1>
      <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--gray);">
        The ${type || 'item'} you're looking for doesn't exist in our ${categoryName.toLowerCase()} list.
      </p>
      
      ${displayItems.length > 0 ? `
        <p style="margin-bottom: 20px; font-weight: 600; color: var(--primary);">
          Available ${categoryName}:
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin: 40px 0;">
          ${displayItems.map(item => {
            const encodedItem = encodeURIComponent(item);
            const itemType = dbType === 'services' ? 'service' : 'project';
            const link = `detail.html?type=${itemType}&item=${encodedItem}`;
            
            return `
              <a href="${link}" 
                 style="background: var(--primary); color: white; padding: 10px 20px; border-radius: 6px; 
                        text-decoration: none; margin: 5px; transition: all 0.3s; font-size: 0.9rem;
                        border: 1px solid rgba(255,255,255,0.1); min-width: 140px;">
                ${item}
              </a>
            `;
          }).join('')}
        </div>
        
        <p style="color: var(--gray); margin-top: 20px; font-size: 0.9rem;">
          Click on any ${categoryName.toLowerCase()} above to view details
        </p>
      ` : `
        <p style="color: var(--gray); margin: 30px 0;">
          No ${categoryName.toLowerCase()} are currently available.
        </p>
      `}
      
      <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1);">
        <a href="index.html" 
           style="background: var(--primary); color: white; padding: 12px 25px; 
                  border-radius: 8px; text-decoration: none;">
          Return to Home
        </a>
      </div>
    </section>
  `;
}

function showError(error) {
  document.querySelector('main').innerHTML = `
    <section class="container" style="text-align: center; padding: 100px 20px;">
      <h1 style="font-size: 2.5rem; margin-bottom: 20px;">Error Loading Content</h1>
      <p style="font-size: 1.2rem; margin-bottom: 30px; color: var(--gray);">
        There was an error loading this content.
      </p>
      <p style="font-size: 0.9rem; color: #ff6b6b; background: rgba(255,107,107,0.1); 
         padding: 10px; border-radius: 6px; margin: 20px 0;">
        ${error.message || 'Unknown error'}
      </p>
      <a href="index.html" class="btn" style="background: var(--primary); color: white; 
         text-decoration: none; padding: 12px 30px; border-radius: 8px;">
        Return to Home
      </a>
    </section>
  `;
}

/* ================= DEBUG HELPER ================= */
function debugURL() {
  console.log("=== URL DEBUG INFO ===");
  console.log("Full URL:", window.location.href);
  console.log("Pathname:", window.location.pathname);
  console.log("Search:", window.location.search);
  console.log("Hash:", window.location.hash);
  
  const params = new URLSearchParams(window.location.search);
  console.log("All params:");
  for (const [key, value] of params.entries()) {
    console.log(`  ${key}: "${value}" (raw) -> "${decodeURIComponent(value)}" (decoded)`);
  }
}

/* ================= INITIALIZE ================= */
document.addEventListener('DOMContentLoaded', () => {
  console.log("=== DEBUG: DOM fully loaded ===");
  debugURL();
  
  // Check if we should render a detail page
  const isDetailPage = window.location.pathname.includes('detail.html') || 
                       window.location.pathname.endsWith('/detail') ||
                       window.location.search.includes('type=');
  
  if (isDetailPage) {
    console.log("This appears to be a detail page, rendering...");
    
    // Small delay to ensure header/footer are loaded
    setTimeout(() => {
      console.log("Executing renderPage...");
      renderPage();
    }, 50);
  }
});

// Fallback initialization
if (document.readyState === 'loading') {
  console.log("Document still loading...");
} else {
  console.log("Document ready, checking for detail page...");
  const hasParams = window.location.search.includes('type=');
  if (hasParams) {
    console.log("Found URL parameters, rendering page...");
    renderPage();
  }
}

// Optional: Add a global function to test specific items
window.testItem = function(type, item) {
  const url = new URL(window.location);
  url.searchParams.set('type', type);
  url.searchParams.set('item', item);
  window.location.href = url.toString();
};



