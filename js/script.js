/* ---------- Scroll progress bar ---------- */
const scrollIndicator = document.getElementById('scrollIndicator');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollIndicator.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

/* ---------- Sticky masthead shadow on scroll ---------- */
const masthead = document.getElementById('masthead');
function updateMasthead() {
  if (window.scrollY > 12) {
    masthead.style.boxShadow = '0 8px 24px rgba(27,24,17,0.06)';
  } else {
    masthead.style.boxShadow = 'none';
  }
}
window.addEventListener('scroll', updateMasthead, { passive: true });
updateMasthead();

/* ---------- Mobile hamburger menu ---------- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

function toggleMenu(forceClose) {
  const shouldOpen = forceClose === true ? false : !hamburger.classList.contains('is-open');
  hamburger.classList.toggle('is-open', shouldOpen);
  mobileNav.classList.toggle('is-open', shouldOpen);
  hamburger.setAttribute('aria-expanded', String(shouldOpen));
  document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

hamburger.addEventListener('click', () => toggleMenu());
mobileNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(true));
});

/* ---------- Scroll-reveal animations ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- Edition line: current month/year ---------- */
const todayDate = document.getElementById('todayDate');
if (todayDate) {
  const now = new Date();
  const options = { month: 'long', year: 'numeric' };
  todayDate.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
}

/* ---------- Contact form: opens the visitor's email client ---------- */
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Please fill in every field before sending.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:chipostefani16@gmail.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your email app…';
});
