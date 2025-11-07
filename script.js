// ======= NAV TOGGLE (MOBILE) =======
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
});

// ======= SMOOTH SCROLL FUNCTION (dipanggil dari tombol) =======
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ======= FOOTER TAHUN OTOMATIS =======
document.getElementById('year').textContent = new Date().getFullYear();

// ======= GALERI: LIGHTBOX (klik gambar untuk memperbesar) =======
const galleryImgs = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbClose = document.getElementById('lb-close');
const lbPrev = document.getElementById('lb-prev');
const lbNext = document.getElementById('lb-next');

let currentIndex = 0;
const images = Array.from(galleryImgs).map(img => img.src);

// fungsi buka lightbox
function openLightbox(index) {
    currentIndex = index;
    lbImg.src = images[currentIndex];
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden', 'false');
}

// fungsi tutup lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
}

// navigasi prev/next
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lbImg.src = images[currentIndex];
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lbImg.src = images[currentIndex];
}

// event listeners
galleryImgs.forEach((img, idx) => {
    img.addEventListener('click', () => openLightbox(idx));
});
lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', nextImage);
lbPrev.addEventListener('click', prevImage);

// tutup saat klik area luar gambar
lightbox.addEventListener('click', function(e){
    if (e.target === lightbox) closeLightbox();
});

// keyboard: Esc tutup, panah kiri/kanan navigasi
document.addEventListener('keydown', function(e){
    if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    }
});
