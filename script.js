// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const celebrateBtn = document.getElementById('celebrateBtn');
    const celebrationModal = document.getElementById('celebrationModal');
    const modalClose = document.querySelector('.modal-close');
    const toastBtn = document.getElementById('toastBtn');
    const toast = document.getElementById('toast');
    const galleryGrid = document.getElementById('galleryGrid');
    const submitWish = document.getElementById('submitWish');
    const wishMessage = document.getElementById('wishMessage');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const imageDisplay = document.getElementById('imageDisplay');

    // Image files in your images folder - UPDATE THESE WITH YOUR ACTUAL FILENAMES
    const imageFiles = [
        'M1.jpg',
        'M2.jpg', 
        'M3.jpg'
        // Add more if you have: 'M4.jpg', 'M5.jpg', etc.
    ];

    // Initialize image display
    function initializeImageDisplay() {
        if (imageFiles.length > 0) {
            // Display first image
            const firstImage = document.createElement('img');
            firstImage.src = `images/${imageFiles[0]}`;
            firstImage.alt = "Moeez & Hania Celebration";
            firstImage.style.width = '100%';
            firstImage.style.height = '100%';
            firstImage.style.objectFit = 'cover';
            imageDisplay.appendChild(firstImage);
            
            // Cycle through images if there are more
            if (imageFiles.length > 1) {
                let currentIndex = 0;
                setInterval(() => {
                    currentIndex = (currentIndex + 1) % imageFiles.length;
                    const img = imageDisplay.querySelector('img');
                    img.style.opacity = '0';
                    setTimeout(() => {
                        img.src = `images/${imageFiles[currentIndex]}`;
                        img.style.opacity = '1';
                    }, 500);
                }, 5000);
            }
        }
    }

    // Load gallery images
    function loadGalleryImages() {
        galleryGrid.innerHTML = '';
        
        if (imageFiles.length === 0) {
            galleryGrid.innerHTML = `
                <div class="gallery-loading">
                    <div class="loading-spinner"></div>
                    <p>Beautiful memories coming soon...</p>
                </div>
            `;
            return;
        }
        
        imageFiles.forEach((fileName, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="images/${fileName}" 
                     alt="Moeez & Hania Celebration ${index + 1}"
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Celebration modal
    celebrateBtn.addEventListener('click', () => {
        celebrationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', () => {
        celebrationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Toast notification
    toastBtn.addEventListener('click', () => {
        celebrationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });

    // Submit wish
    submitWish.addEventListener('click', () => {
        const message = wishMessage.value.trim();
        if (message.length < 10) {
            alert('Please write a heartfelt message (at least 10 characters).');
            return;
        }
        
        const wishesContainer = document.querySelector('.wishes-container');
        const newWish = document.createElement('div');
        newWish.className = 'wish-card';
        newWish.innerHTML = `
            <div class="wish-header">
                <div class="wish-icon">💫</div>
                <div class="wish-meta">
                    <h4>New Message</h4>
                    <span class="wish-time">Just now</span>
                </div>
            </div>
            <p class="wish-text">"${message}"</p>
        `;
        
        wishesContainer.appendChild(newWish);
        wishMessage.value = '';
        
        // Show toast
        toast.querySelector('span').textContent = 'Message sent! 💌';
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Gallery filter functionality
    document.querySelectorAll('.gallery-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.gallery-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            // Filter functionality can be added here
        });
    });

    // Initialize everything
    initializeImageDisplay();
    loadGalleryImages();
    
    // Set current year in footer
    document.querySelector('.copyright').textContent = 
        document.querySelector('.copyright').textContent.replace('2026', new Date().getFullYear());

    // Add subtle fade-in animation to page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Elegant typing effect for quotes (optional enhancement)
class TypeWriter {
    constructor(element, phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.phrases = phrases;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseTime = pauseTime;
        this.currentPhraseIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        
        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }

        this.element.textContent = currentPhrase.substring(0, this.currentCharIndex);

        if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
            setTimeout(() => this.isDeleting = true, this.pauseTime);
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
        }

        const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
        setTimeout(() => this.tick(), speed);
    }
}

// Initialize typewriter if you want dynamic quotes
// const quoteElement = document.querySelector('.hero-quote');
// if (quoteElement) {
//     const phrases = [
//         "Two souls, one heart, a lifetime of shared moments",
//         "Capturing love through the lens of life",
//         "Where engineering meets artistic vision",
//         "A partnership written in light and shadow"
//     ];
//     new TypeWriter(quoteElement, phrases);
// }
