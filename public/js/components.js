/* ================= LOAD HEADER  (back-button now inside header) ================= */
function loadHeader() {
  const headerContainer = document.getElementById('header-container');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="header">
      <div class="container flex-between">
        <!-- 1. back button – left corner -->
        <a href="javascript:history.back()" class="back-button">
          <i class="fas fa-arrow-left"></i><span>Back</span>
        </a>

        <!-- 2. logo – centre brand -->
        <a class="logo" href="index.html">Sekho<span class="logo-dot"></span>Tech</a>

        <!-- 3. navigation – right side -->
        <nav class="nav">
          <ul class="nav-list">
            <li><a class="nav-link" href="index.html#services">Services</a></li>
            <li><a class="nav-link" href="index.html#portfolio">Portfolio</a></li>
            <li><a class="nav-link" href="index.html#about">About</a></li>
            <li><a class="nav-link" href="index.html#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

/* ================= LOAD FOOTER ================= */
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const currentYear = new Date().getFullYear();
  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <h1>Sekho Tech</h1>
          <p>Creating digital experiences that make an impact.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#portfolio">Portfolio</a></li>
            <li><a href="index.html#about">About</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <div class="social">
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        © ${currentYear} Sekho Üsou Deals | All Rights Reserved<br>
        𝒟𝑒𝓈𝒾𝑔𝓃 𝒶𝓃𝒹 𝒟𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝒹 𝐵𝓎 𝒮𝑒𝓀𝒽𝑜 Ü𝓈𝑜𝓊
      </div>
    </footer>
  `;
}

/* ================= INITIALIZE ================= */
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadFooter();
});