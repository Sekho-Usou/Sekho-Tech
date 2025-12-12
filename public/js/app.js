// ---------- theme ----------
const body = document.body;
const toggle = document.querySelector('.theme-toggle');
const icon = toggle?.querySelector('i');
if (toggle && icon) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
  
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

// ---------- MOBILE MENU TOGGLE (FIXED) ----------
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav-list');
  const hamburger = document.querySelector('.hamburger');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Toggle hamburger animation
      hamburger.classList.toggle('active');
      
      // Toggle menu visibility
      nav.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (nav.classList.contains('active')) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link, .share-btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
    
    // Close menu on window resize (if resizing to desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }
  
  // ---------- dynamic content ----------
  const services = ["Website Development", "Android Apps", "UI/UX Design", "Brand Identity", "WhatsApp Catalog", "Social Media Kit", "Digital Products", "Phone Repair (Add-on)"];
  const portfolio = ["Church App", "Restaurant Website", "Clothing Brand", "Gospel Lyrics App", "Travel Agency", "Phone-Repair Posters"];

  const sList = document.getElementById('services-list');
  const pList = document.getElementById('portfolio-list');

  if (sList) {
    services.forEach(title => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = `detail.html?type=services&item=${encodeURIComponent(title)}`;
      card.innerHTML = `<h4>${title}</h4><p>Reliable, modern and scalable.</p>`;
      sList.appendChild(card);
    });
  }

  if (pList) {
    portfolio.forEach(title => {
      const card = document.createElement('a');
      card.className = 'card';
      card.href = `detail.html?type=portfolio&item=${encodeURIComponent(title)}`;
      card.innerHTML = `<h4>${title}</h4><p>Live project sample.</p>`;
      pList.appendChild(card);
    });
  }
  
  // ---------- header scroll effect ----------
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // ---------- active link highlighting ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function highlightActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const id = section.getAttribute('id');
      
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    });
  }
  
  window.addEventListener('scroll', highlightActiveLink);
  
  // ---------- auth modal ----------
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.close();
    
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
      modalClose.addEventListener('click', () => authModal.close());
    }
    
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) authModal.close();
    });
    
    // Tab switching in modal
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (tabs.length && loginForm && registerForm) {
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const tabToShow = tab.getAttribute('data-tab');
          
          // Update active tab
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          // Show/hide forms
          if (tabToShow === 'login') {
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
            document.getElementById('modalTitle').textContent = 'Welcome Back';
          } else {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            document.getElementById('modalTitle').textContent = 'Create Account';
          }
        });
      });
    }
  }
  
  // ---------- year in footer ----------
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // ---------- PWA ----------
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.log('Service Worker registration failed:', err);
    });
  }
});

// ---------- API functions ----------
const api = u => `server/auth/${u}.php`;

async function handle(form, endpoint) {
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = {};
    fd.forEach((v, k) => obj[k] = v);
    
    try {
      const r = await fetch(api(endpoint), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
      const m = await r.text();
      
      if (r.ok) {
        localStorage.setItem('token', '1');
        const modal = document.getElementById('authModal');
        if (modal) modal.close();
        if (endpoint === 'register') alert('Check email to verify.');
      } else {
        alert(m);
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  });
}

// Initialize auth forms
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  if (loginForm) handle(loginForm, 'login');
  if (registerForm) handle(registerForm, 'register');
  
  // Forgot password link
  const forgotLink = document.getElementById('forgotLink');
  if (forgotLink) {
    forgotLink.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = prompt('Enter your email');
      if (!email) return;
      
      try {
        const r = await fetch(api('reset_password'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email })
        });
        alert(await r.text());
      } catch (error) {
        alert('Network error: ' + error.message);
      }
    });
  }
});

// ---------- contact form ----------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Guard auth check
    if (!localStorage.getItem('token')) {
      const modal = document.getElementById('authModal');
      if (modal) {
        modal.showModal();
        return;
      }
    }
    
    const fd = new FormData(contactForm);
    
    try {
      const res = await fetch('server/submit.php', { 
        method: 'POST', 
        body: fd 
      });
      
      if (res.ok) {
        contactForm.reset();
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  });
}