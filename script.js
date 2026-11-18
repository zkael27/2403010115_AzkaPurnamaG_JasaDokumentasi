// Fungsi Toggle Menu Mobile 
const menuBtn = document.getElementById('azkapurnama-2403010115-mobile-btn');
const navMenu = document.getElementById('azkapurnama-2403010115-nav-menu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('azkapurnama-2403010115-show');
    });
}

// Fungsi Interaktif Form Kontak
const contactForm = document.getElementById('azkapurnama-2403010115-contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nama = document.getElementById('azkapurnama-2403010115-input-nama').value;
        alert('Terima kasih, ' + nama + '! Pesan Anda telah berhasil dikirim ke tim ZKA Visual.');
        
        contactForm.reset();
    });
}

// Zoom Gambar & Video Portofolio
const lightbox = document.getElementById('azkapurnama-2403010115-lightbox');
const lightboxImg = document.getElementById('azkapurnama-2403010115-lightbox-img');
const lightboxVideo = document.getElementById('azkapurnama-2403010115-lightbox-video');
const closeBtn = document.getElementById('azkapurnama-2403010115-lightbox-close');
const zoomItems = document.querySelectorAll('.azkapurnama-2403010115-zoomable');

function tutupLightbox() {
    if (lightbox) {
        lightbox.classList.remove('azkapurnama-2403010115-open');
    }
    if (lightboxVideo) {
        lightboxVideo.pause(); // Jeda video besar saat lightbox ditutup
    }
}

if (lightbox && zoomItems.length > 0) {
    zoomItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (this.tagName === 'VIDEO') {
                const sourceEl = this.querySelector('source');
                const videoSrc = sourceEl ? sourceEl.src : this.src;
                
                // Ambil waktu pemutaran video kecil saat ini agar bisa dilanjutkan di video besar
                const currentTime = this.currentTime;
                const isPlaying = !this.paused;

                // Jeda video kecil
                this.pause();
                
                if (lightboxImg) lightboxImg.style.display = 'none';
                if (lightboxVideo) {
                    lightboxVideo.style.display = 'block';
                    
                    // Jika sumber videonya sama, lanjutkan waktu pemutarannya
                    if (lightboxVideo.src !== videoSrc && lightboxVideo.currentSrc !== videoSrc) {
                        lightboxVideo.src = videoSrc;
                        lightboxVideo.load();
                    }
                    
                    lightboxVideo.currentTime = currentTime;
                    
                    // Jika video kecil sebelumnya sedang diputar, lanjutkan play di lightbox
                    if (isPlaying) {
                        lightboxVideo.play();
                    }
                }
            } else {
                if (lightboxVideo) lightboxVideo.style.display = 'none';
                if (lightboxImg) {
                    lightboxImg.style.display = 'block';
                    lightboxImg.src = this.src;
                }
            }
            
            lightbox.classList.add('azkapurnama-2403010115-open');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', tutupLightbox);
    }

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            tutupLightbox();
        }
    });
}