// ---------- theme ----------
const body=document.body;const toggle=document.querySelector('.theme-toggle');const icon=toggle.querySelector('i');
toggle.addEventListener('click',()=>{body.classList.toggle('dark');icon.classList.toggle('fa-moon');icon.classList.toggle('fa-sun');localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('theme')==='dark'){body.classList.add('dark');icon.classList.replace('fa-moon','fa-sun')}

// ---------- mobile nav ----------
const menuBtn=document.querySelector('.mobile-menu-btn');const navList=document.querySelector('.nav-list');
menuBtn.addEventListener('click',()=>navList.classList.toggle('open'));

// ---------- dynamic content ----------
document.addEventListener('DOMContentLoaded', () => {
  const services = ["Website Development","Android Apps","UI/UX Design","Brand Identity","WhatsApp Catalog","Social Media Kit","Digital Products","Phone Repair (Add-on)"];
  const portfolio = ["Church App","Restaurant Website","Clothing Brand","Gospel Lyrics App","Travel Agency","Phone-Repair Posters"];

  const sList = document.getElementById('services-list');
  const pList = document.getElementById('portfolio-list');

  services.forEach(s => {
    const d = document.createElement('div');
    d.className = 'card';
    d.innerHTML = `<h4>${s}</h4><p>Reliable, modern and scalable.</p>`;
    sList.appendChild(d);
  });

  portfolio.forEach(p => {
    const d = document.createElement('div');
    d.className = 'card';
    d.innerHTML = `<h4>${p}</h4><p>Live project sample.</p>`;
    pList.appendChild(d);
  });
});
// ---------- auth ----------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('authModal').close();   // be sure it’s shut
});
const api=u=>`server/auth/${u}.php`;
async function handle(form,endpoint){form.addEventListener('submit',async(e)=>{e.preventDefault();const fd=new FormData(form);const obj={};fd.forEach((v,k)=>obj[k]=v);const r=await fetch(api(endpoint),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(obj)});const m=await r.text();if(r.ok){localStorage.setItem('token','1');closeModal();if(endpoint==='register')alert('Check email to verify.')}else alert(m)})}
handle(document.getElementById('loginForm'),'login');
handle(document.getElementById('registerForm'),'register');

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // Active link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link?.classList.add('active');
      } else {
        link?.classList.remove('active');
      }
    });
  });

// ---------- forgot ----------
document.getElementById('forgotLink').addEventListener('click',async()=>{const e=prompt('Enter your email');if(!e)return;const r=await fetch(api('reset_password'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:e})});alert(await r.text())});

// ---------- quote (protected) ----------
async function requestQuote(){const r=await fetch('server/protected_action.php',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+localStorage.getItem('token')},body:JSON.stringify({action:'request_quote',service:'General'})});alert(await r.text())}
// ---------- year ----------
document.getElementById('year').textContent=new Date().getFullYear();

// ---------- PWA ----------
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}
/* ---------- modal helpers ---------- */
const modal = document.getElementById('authModal');
const openModal = () => modal.showModal();
const closeModal = () => modal.close();

/* ---------- close icon + backdrop click ---------- */
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();   // click outside content
});

/* ---------- auto-open for protected actions ---------- */
function guardAuth() {
  if (localStorage.getItem('token')) return true;   // already logged in
  openModal();                                      // show login / register
  return false;
}

/* ---------- contact form ---------- */
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!guardAuth()) return;          // ← modal opens if guest
  const fd = new FormData(e.target);
  const res = await fetch('server/submit.php', { method: 'POST', body: fd });
  if (res.ok) { e.target.reset(); alert('Message sent!'); }
  else alert('Failed');
});

/* ---------- request quote button ---------- */
document.getElementById('requestQuote').addEventListener('click', () => {
  if (!guardAuth()) return;          // ← modal opens if guest
  requestQuote();                    // authenticated users only
});

card.href = `detail.html?type=portfolio&item=${encodeURIComponent(title)}#back=${type}`;














