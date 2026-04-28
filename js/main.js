/**
 * INFLANAR — main.js
 * Shared: navbar, footer, CTA banner, page hero, reveal, utils
 */

/* ══════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════ */
function renderNavbar() {
  const el = document.getElementById('navbar-placeholder');
  if (!el) return;

  const linksHTML = INFLANAR.nav.main.map(item => {
    if (item.dropdown) {
      const drops = item.dropdown.map(d => `<a href="${d.href}">${d.label}</a>`).join('');
      return `<li><span>${item.label} ▾<div class="nav-dropdown">${drops}</div></span></li>`;
    }
    return `<li><a href="${item.href}">${item.label}</a></li>`;
  }).join('');

  const mobileLinks = INFLANAR.nav.main.map(item => {
    if (item.dropdown) return item.dropdown.map(d => `<a href="${d.href}">— ${d.label}</a>`).join('');
    return `<a href="${item.href}">${item.label}</a>`;
  }).join('');

  const currencies = INFLANAR.nav.currencies.map(c =>
    `<a href="#">${c}</a>`).join('');
  const languages = INFLANAR.nav.languages.map((l, i) =>
    `<label><input type="radio" name="lang" ${i === 0 ? 'checked' : ''}> ${l}</label>`).join('');

  el.innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="nav-inner">
          <a href="index.html" class="nav-logo">
            <img class="nav-logo-img" src="assets/img/logo.png" alt="Inflanar"
              onerror="this.style.display='none'">
            <div>
              <div class="nav-logo-text">Infla<span>nar</span></div>
              <div class="nav-logo-sub">Influencer Hiring Platform</div>
            </div>
          </a>

          <ul class="nav-links">${linksHTML}</ul>

          <div class="nav-right">
            <div class="nav-currency">
              $ $-USD ▾
              <div class="nav-dropdown-mini">${currencies}</div>
            </div>
            <div class="nav-language">
              🌐 English ▾
              <div class="nav-dropdown-mini">${languages}</div>
            </div>
            <a href="register.html" class="nav-signup">Sign Up</a>
            <a href="login.html" class="nav-login">Login</a>
          </div>

          <button class="hamburger" id="hamburger" onclick="toggleMobileNav()">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <div class="mobile-nav-actions">
        <a href="login.html" class="btn btn-outline" style="justify-content:center">Login</a>
        <a href="register.html" class="btn btn-pink" style="justify-content:center">Sign Up</a>
      </div>
    </div>

    <button class="live-chat-btn" onclick="alert('Live chat coming soon!')">
      💬 Live Chat
    </button>`;

  /* Active link */
  const page = location.pathname.split('/').pop() || 'index.html';
  el.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Outside click */
  document.addEventListener('click', e => {
    const nav = document.getElementById('mobile-nav');
    const ham = document.getElementById('hamburger');
    if (nav && ham && !nav.contains(e.target) && !ham.contains(e.target)) {
      nav.classList.remove('open');
      ham.classList.remove('open');
    }
  });
}

function toggleMobileNav() {
  document.getElementById('mobile-nav')?.classList.toggle('open');
  document.getElementById('hamburger')?.classList.toggle('open');
}

/* ══════════════════════════════════════════════════════════
   PAGE HERO BANNER
══════════════════════════════════════════════════════════ */
function renderPageHero(title, breadcrumbs) {
  const el = document.getElementById('page-hero-placeholder');
  if (!el) return;
  const bc = breadcrumbs.map((b, i) =>
    i < breadcrumbs.length - 1
      ? `<a href="${b.href}">${b.label}</a><span class="sep"> / </span>`
      : `<span>${b.label}</span>`
  ).join('');
  el.innerHTML = `
    <div class="page-hero">
      <div class="container">
        <div class="page-hero-content">
          <h1>${title}</h1>
          <div class="page-hero-breadcrumb">${bc}</div>
        </div>
      </div>
      <div class="page-hero-visual">
        <img src="assets/img/hero/banner-person.png" alt=""
          onerror="this.style.display='none'">
        <!-- Floating social icons -->
        <div style="position:absolute;top:20%;left:5%;background:white;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 12px rgba(0,0,0,.1)">🎵</div>
        <div style="position:absolute;top:40%;left:2%;background:white;border-radius:12px;padding:6px 12px;font-size:12px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,.1);display:flex;align-items:center;gap:6px">❤️ Marketing</div>
        <div style="position:absolute;top:15%;right:15%;background:white;border-radius:12px;padding:6px 12px;font-size:12px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,.1)">😊 Influencer</div>
        <div style="position:absolute;top:55%;right:8%;background:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 12px rgba(0,0,0,.1)">🐦</div>
        <div style="position:absolute;top:70%;right:20%;background:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 4px 12px rgba(0,0,0,.1)">📷</div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   CTA BANNER
══════════════════════════════════════════════════════════ */
function renderCTABanner() {
  const el = document.getElementById('cta-placeholder');
  if (!el) return;
  const c = INFLANAR.cta_banner;
  el.innerHTML = `
    <div style="padding:40px 0">
      <div class="cta-banner">
        <div>
          <h2 class="cta-banner-title">${c.title}</h2>
          <div style="margin-top:24px">
            <a href="${c.href}" class="btn btn-pink" style="padding:13px 28px;font-size:14px">${c.cta}</a>
          </div>
        </div>
        <div class="cta-banner-img reveal-right">
          <img src="${c.img}" alt="Influencer Campaign"
            onerror="this.src='https://placehold.co/320x200/c8b8f5/6C3AFF?text=Campaign+Stats'">
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
function renderFooter() {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  const f = INFLANAR.footer;
  const half = Math.ceil(f.quick_links.length / 2);
  const col1 = f.quick_links.slice(0, half).map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  const col2 = f.quick_links.slice(half).map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  const socials = f.socials.map(s => `<a href="${s.href}" class="footer-social">${s.icon}</a>`).join('');

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo-text">Infla<span>nar</span></div>
            <div class="footer-logo-sub">Influencer Hiring Platform</div>
            <div class="footer-about">Want to Create Something Great Together?</div>
            <div class="footer-email">Get in Touch..<br>${INFLANAR.site.email}</div>
          </div>
          <div>
            <div class="footer-col-title">Quick Links</div>
            <div class="footer-quick-links footer-links">
              <div>${col1}</div>
              <div>${col2}</div>
            </div>
          </div>
          <div>
            <div class="footer-col-title">Working Hour</div>
            ${f.hours.map(h => `<div class="footer-info-item">${h}</div>`).join('')}
            <div class="footer-col-title" style="margin-top:20px">Our Location</div>
            <div class="footer-info-item">${f.address}</div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copy">${INFLANAR.site.copyright}</div>
          <div class="footer-socials">${socials}</div>
        </div>
      </div>
    </footer>`;
}

/* ══════════════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseFloat(e.target.style.transitionDelay || 0) * 1000;
        setTimeout(() => e.target.classList.add('vis'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════════════════════════════ */
function buildFaqAccordion(faqs, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = faqs.map((f, i) => `
    <div class="faq-item ${f.open ? 'open' : ''}" id="faq-${containerId}-${i}">
      <button class="faq-q" onclick="toggleFaq('${containerId}',${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

function toggleFaq(cid, idx) {
  const items = document.querySelectorAll(`[id^="faq-${cid}-"]`);
  items.forEach((item, i) => {
    if (i === idx) item.classList.toggle('open');
    else item.classList.remove('open');
  });
}

/* ══════════════════════════════════════════════════════════
   STAR RATING HELPER
══════════════════════════════════════════════════════════ */
function renderStars(rating, max = 5) {
  let html = '';
  for (let i = 1; i <= max; i++) {
    html += `<span class="${i <= rating ? 'service-star-fill' : 'service-star-empty'}">★</span>`;
  }
  return html;
}

/* ══════════════════════════════════════════════════════════
   POLICY CONTENT RENDERER
══════════════════════════════════════════════════════════ */
function renderPolicyContent(sections, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = sections.map(s => {
    let html = `<h2 class="policy-heading">${s.heading}</h2>`;
    if (s.text)  html += `<p class="policy-text">${s.text}</p>`;
    if (s.paras) html += s.paras.map(p => `<p class="policy-text">${p}</p>`).join('');
    if (s.items) html += `<ul class="policy-list">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    return `<div class="policy-section-block">${html}</div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════════
   INFLUENCER CARD HTML
══════════════════════════════════════════════════════════ */
function influencerCardHTML(inf) {
  return `
    <div class="influencer-card">
      <div class="influencer-avatar-wrap">
        <img class="influencer-avatar" src="${inf.avatar}" alt="${inf.name}"
          onerror="this.src='https://placehold.co/90x90/c8b8f5/6C3AFF?text=${inf.name.split(' ').map(n=>n[0]).join('')}'">
        ${inf.verified ? '<div class="influencer-verified">✓</div>' : ''}
      </div>
      <div class="influencer-name">${inf.name}</div>
      <div class="influencer-cat">${inf.category}</div>
      <div class="influencer-stats">
        <div>
          <div class="influencer-stat-val">${inf.followers}</div>
          <div class="influencer-stat-lbl">Followers</div>
        </div>
        <div>
          <div class="influencer-stat-val">${inf.following}</div>
          <div class="influencer-stat-lbl">Following</div>
        </div>
      </div>
      <button class="influencer-view-btn" onclick="location.href='influencer-profile.html?slug=${inf.slug}'">View Profile</button>
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   SERVICE CARD HTML
══════════════════════════════════════════════════════════ */
function serviceCardHTML(s) {
  return `
    <div class="service-card">
      <div class="service-card-img-wrap">
        <img class="service-card-img" src="${s.img}" alt="${s.title}"
          onerror="this.src='https://placehold.co/300x188/F5F3FF/6C3AFF?text=${encodeURIComponent(s.title)}'">
        <button class="service-wishlist" title="Add to wishlist">♡</button>
      </div>
      <div class="service-card-body">
        <div class="service-meta">
          <span class="service-cat">${s.category}</span>
          <span class="service-price">$${s.price.toFixed(2)}</span>
        </div>
        <div class="service-title">${s.title}</div>
        <div class="service-footer">
          <div class="service-inf">
            <img class="service-inf-avatar" src="assets/img/influencers/inf-${s.inf_id.replace('i','')}.png" alt="${s.influencer}"
              onerror="this.src='https://placehold.co/22x22/c8b8f5/6C3AFF?text=A'">
            ${s.influencer}
          </div>
          <div style="display:flex;align-items:center;gap:4px">
            <div class="service-stars">${renderStars(s.rating)}</div>
            <span class="service-rating-count">(${s.reviews})</span>
          </div>
        </div>
        <button class="service-book-btn" onclick="location.href='service-detail.html?id=${s.id}'">Book Now</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   BLOG CARD HTML
══════════════════════════════════════════════════════════ */
function blogCardHTML(b) {
  return `
    <a href="blog-detail.html?id=${b.id}" style="text-decoration:none">
      <div class="blog-card">
        <div style="overflow:hidden">
          <img class="blog-card-img" src="${b.img}" alt="${b.title}"
            onerror="this.src='https://placehold.co/300x188/F5F3FF/6C3AFF?text=${encodeURIComponent(b.title)}'">
        </div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="meta-author">👤 By ${b.author}</span>
            <span>📅 ${b.date}</span>
          </div>
          <div class="blog-card-title">${b.title}</div>
        </div>
      </div>
    </a>`;
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderCTABanner();
  renderFooter();
  setTimeout(initReveal, 80);
});



/* ══════════════════════════════════════════════════════════
   YOUTUBE VIDEO MODAL
   openVideoModal(youtubeId) — plays video in popup
══════════════════════════════════════════════════════════ */
function openVideoModal(videoId, title) {
  // Remove existing if any
  const existing = document.getElementById('yt-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'yt-modal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:9000;
    background:rgba(255,45,120,.28);
    display:flex;align-items:center;justify-content:center;
    padding:20px;animation:ytFadeIn .25s ease;
  `;
  modal.onclick = (e) => { if (e.target === modal) closeVideoModal(); };

  modal.innerHTML = `
    <div style="
      background:#000;border-radius:12px;overflow:hidden;
      width:100%;max-width:860px;position:relative;
      box-shadow:0 32px 80px rgba(0,0,0,.6);
      animation:ytSlideUp .3s ease;
    ">
      <!-- Header -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:14px 20px;background:#142959;
      ">
        <span style="
          font-family:'DM Sans',sans-serif;font-size:14px;
          font-weight:600;color:#fff;
        ">${title || 'Video'}</span>
        <button onclick="closeVideoModal()" style="
          background:rgba(255,255,255,.15);border:none;border-radius:50%;
          width:32px;height:32px;cursor:pointer;color:#fff;font-size:16px;
          display:flex;align-items:center;justify-content:center;
          transition:.2s ease;
        " onmouseover="this.style.background='#01bdb2'" onmouseout="this.style.background='rgba(255,255,255,.15)'">✕</button>
      </div>
      <!-- Video -->
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
          style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;fullscreen"
          allowfullscreen>
        </iframe>
      </div>
    </div>`;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Inject keyframes if not present
  if (!document.getElementById('yt-keyframes')) {
    const style = document.createElement('style');
    style.id = 'yt-keyframes';
    style.textContent = `
      @keyframes ytFadeIn  { from{opacity:0} to{opacity:1} }
      @keyframes ytSlideUp { from{transform:translateY(30px);opacity:0} to{transform:translateY(0);opacity:1} }
    `;
    document.head.appendChild(style);
  }
}

function closeVideoModal() {
  const modal = document.getElementById('yt-modal');
  if (modal) {
    modal.style.animation = 'ytFadeIn .2s ease reverse';
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 200);
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});


