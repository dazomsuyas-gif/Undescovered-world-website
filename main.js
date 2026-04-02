// Carousel, Forms, Animations, and Utilities
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && (e.target.style.opacity = '1', e.target.style.transform = 'translateY(0)'));
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card, section, .ticket-card, .shop-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

class Carousel {
    constructor(c) { this.container = c; this.cardContainer = c.querySelector('.card-container'); this.prevBtn = c.querySelector('.carousel-btn.prev'); this.nextBtn = c.querySelector('.carousel-btn.next'); this.prevBtn && this.nextBtn && this.cardContainer && (this.prevBtn.onclick = () => this.scroll('prev'), this.nextBtn.onclick = () => this.scroll('next')); }
    scroll(d) { this.cardContainer.scrollBy({ left: d === 'prev' ? -320 : 320, behavior: 'smooth' }); }
}

document.addEventListener('DOMContentLoaded', () => { document.querySelectorAll('.carousel-container').forEach(c => new Carousel(c)); });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.subscribe-form').forEach(f => {
        f.onsubmit = e => {
            e.preventDefault(); const i = f.querySelector('input[type="email"]'), v = i.value;
            if (v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { const b = f.querySelector('button'), o = b.textContent; b.textContent = '✓ Subscribed!'; b.style.backgroundColor = '#27ae60'; setTimeout(() => { b.textContent = o; b.style.backgroundColor = ''; i.value = ''; }, 2000); } else alert('Invalid email');
        }
    });
});

document.addEventListener('click', e => {
    if (e.target.tagName === 'A' && e.target.href.includes('#')) { e.preventDefault(); const t = document.querySelector(e.target.hash); t && t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
});

window.addEventListener('scroll', () => { document.querySelectorAll('nav a[href^="#"]').forEach(l => { const s = document.querySelector(l.hash); if (s) { const top = s.offsetTop - 100; window.scrollY >= top && window.scrollY < top + s.offsetHeight ? (document.querySelectorAll('nav a[href^="#"]').forEach(x => x.style.borderBottomColor = 'transparent'), l.style.borderBottomColor = '#e74c3c') : 0; } }); });

document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) { const b = e.target, r = document.createElement('span'), rect = b.getBoundingClientRect(), size = Math.max(rect.width, rect.height), x = e.clientX - rect.left - size / 2, y = e.clientY - rect.top - size / 2; r.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${x}px;top:${y}px;background:rgba(255,255,255,0.6);border-radius:50%;transform:scale(0);animation:ripple 0.6s;pointer-events:none`; b.style.position = 'relative'; b.style.overflow = 'hidden'; b.appendChild(r); setTimeout(() => r.remove(), 600); }
});

function validateForm(f) { let v = true; f.querySelectorAll('input[required], textarea[required]').forEach(i => { if (!i.value.trim()) i.style.borderColor = '#e74c3c', v = false; else i.style.borderColor = ''; if (i.type === 'email' && i.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value)) i.style.borderColor = '#e74c3c', v = false; }); return v; }

function copyToClipboard(t) { navigator.clipboard ? navigator.clipboard.writeText(t).then(() => showNotif('Copied!', 'success')) : (() => { const ta = document.createElement('textarea'); ta.value = t; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); showNotif('Copied!', 'success'); } catch (e) { showNotif('Failed', 'error'); } document.body.removeChild(ta); })(); }

function showNotif(m, t = 'info') { const n = document.createElement('div'), c = { success: '#27ae60', error: '#e74c3c', info: '#3498db' }; n.textContent = m; n.style.cssText = `position:fixed;top:20px;right:20px;padding:15px 20px;border-radius:5px;font-weight:600;z-index:1000;background:${c[t]};color:white;animation:slideIn 0.3s`; document.body.appendChild(n); setTimeout(() => { n.style.animation = 'slideOut 0.3s'; setTimeout(() => n.remove(), 300); }, 3000); }

document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'e') { e.preventDefault(); const i = document.querySelector('.subscribe-form input[type="email"]'); i && i.focus(); } });

function createScrollBtn() { const b = document.createElement('button'); b.innerHTML = '↑'; b.style.cssText = 'position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:#e74c3c;color:white;border:none;border-radius:50%;cursor:pointer;display:none;font-size:24px;font-weight:bold;z-index:999;transition:all 0.3s;box-shadow:0 4px 8px rgba(0,0,0,0.2)'; document.body.appendChild(b); window.addEventListener('scroll', () => { b.style.display = window.scrollY > 300 ? 'flex' : 'none'; b.style.alignItems = b.style.justifyContent = 'center'; }); b.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' }); b.onmouseenter = () => { b.style.backgroundColor = '#c0392b'; b.style.transform = 'scale(1.1)'; }; b.onmouseleave = () => { b.style.backgroundColor = '#e74c3c'; b.style.transform = 'scale(1)' }; }

document.addEventListener('DOMContentLoaded', createScrollBtn);

if (window.performance) window.addEventListener('load', () => console.log(`Loaded in ${window.performance.timing.loadEventEnd - window.performance.timing.navigationStart}ms`));

document.addEventListener('DOMContentLoaded', () => { const h = document.querySelector('.hamburger'), n = document.querySelector('nav ul'); if (h && n) { h.onclick = () => (h.classList.toggle('active'), n.classList.toggle('active')); n.querySelectorAll('a').forEach(a => a.onclick = () => (h.classList.remove('active'), n.classList.remove('active'))); } });

function animateCounter(e, t, d = 1000) { let c = 0, i = t / (d / 10); const it = setInterval(() => { c += i; e.textContent = c >= t ? t.toLocaleString() : Math.floor(c).toLocaleString(); c >= t && clearInterval(it); }, 10); }

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear()));

const s = document.createElement('style');
s.textContent = `@keyframes slideIn {from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}} @keyframes slideOut {from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}} @keyframes ripple {to{transform:scale(4);opacity:0}} .btn-primary, .btn-secondary {position:relative}`;
document.head.appendChild(s);

console.log('✓ Undiscovered World JS loaded');

// ==============================
// COMMUNITY STORIES FUNCTIONALITY
// ==============================

// Load and display stories
function loadStories() {
    const storiesData = JSON.parse(localStorage.getItem('stories') || '[]');
    const container = document.getElementById('storiesContainer');

    if (!container) return; // Exit if container doesn't exist

    container.innerHTML = '';

    if (storiesData.length === 0) {
        container.innerHTML = `
            <div class="story-empty" style="grid-column: 1/-1;">
                <p>📖 Be the first to share your story!</p>
                <p style="font-size: 0.95rem; color: #95a5a6;">Fill the form above to post your experience, ideas, and stories.</p>
            </div>
        `;
        return;
    }

    // Display stories in reverse order (newest first)
    storiesData.reverse().forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            ${story.image ? `<img src="${story.image}" alt="${story.title}" class="story-image" onerror="this.src='https://via.placeholder.com/400x200?text=${encodeURIComponent(story.title)}'" >` : '<div class="story-image" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;font-size:3rem;">📖</div>'}
            <div class="story-content">
                <div class="story-header">
                    <div class="story-title">${escapeHtml(story.title)}</div>
                    <div class="story-author">
                        <span class="story-author-name">👤 ${escapeHtml(story.name)}</span>
                        <span class="story-date">${story.date}</span>
                    </div>
                </div>
                <p class="story-text">${escapeHtml(story.content).replace(/\n/g, '<br>')}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Handle story form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('storyForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('storyName').value.trim();
            const email = document.getElementById('storyEmail').value.trim();
            const title = document.getElementById('storyTitle').value.trim();
            const content = document.getElementById('storyContent').value.trim();
            const image = document.getElementById('storyImage').value.trim();

            if (!name || !title || !content) {
                showNotif('Please fill in all required fields', 'error');
                return;
            }

            const today = new Date();
            const dateStr = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

            const newStory = {
                name: name,
                email: email || 'anonymous',
                title: title,
                content: content,
                image: image || '',
                date: dateStr
            };

            const stories = JSON.parse(localStorage.getItem('stories') || '[]');
            stories.push(newStory);
            localStorage.setItem('stories', JSON.stringify(stories));

            // Clear form
            form.reset();

            // Reload stories display
            loadStories();

            // Show success message
            showNotif('✓ Your story has been posted! Thank you for sharing!', 'success');

            // Scroll to stories
            setTimeout(() => {
                const storiesSection = document.getElementById('stories');
                if (storiesSection) {
                    storiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500);
        });
    }

    // Initial load of stories
    loadStories();
});

