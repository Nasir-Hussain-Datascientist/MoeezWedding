// DOM Elements
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const invitationModal = document.getElementById('invitationModal');
const closeModal = document.querySelector('.close-modal');
const viewInvitationBtn = document.getElementById('viewInvitationBtn');
const invitationBtn = document.getElementById('invitationBtn');
const saveInvitationBtn = document.getElementById('saveInvitationBtn');
const submitWishBtn = document.getElementById('submitWishBtn');
const wishText = document.getElementById('wishText');
const galleryGrid = document.getElementById('galleryGrid');
const wishesContainer = document.getElementById('wishesContainer');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Invitation Modal
function openInvitationModal() {
    invitationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    createConfetti();
}

function closeInvitationModal() {
    invitationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

viewInvitationBtn.addEventListener('click', openInvitationModal);
invitationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openInvitationModal();
});

closeModal.addEventListener('click', closeInvitationModal);

window.addEventListener('click', (e) => {
    if (e.target === invitationModal) {
        closeInvitationModal();
    }
});

// Save to Calendar
saveInvitationBtn.addEventListener('click', () => {
    const eventDate = new Date('2026-02-12T18:00:00');
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Moeez & Hania Wedding//EN
BEGIN:VEVENT
UID:${Date.now()}@moeezhania.wedding
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Moeez & Hania's Wedding
DESCRIPTION:Wedding celebration\\nVenue: Grand Desire Marquee J5 Resort, Lahore
LOCATION:Grand Desire Marquee J5 Resort, Lahore, Pakistan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Moeez-Hania-Wedding.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Wedding date saved to calendar!');
});

// Load Gallery Images from images folder
function loadGalleryImages() {
    // Your image files in images folder - ADD YOUR IMAGE NAMES HERE
    const imageFiles = [
        'M1.jpg',
        'M2.jpg',
        'M3.jpg',
        'M4.jpg',
        'M5.jpg',
        'M6.jpg'
        // Add more if you have: 'M4.jpg', 'M5.jpg', etc.
    ];
    
    galleryGrid.innerHTML = '';
    
    imageFiles.forEach((fileName, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="images/${fileName}" 
                 alt="Moeez & Hania Wedding ${index + 1}"
                 loading="lazy"
                 onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // If no images, show message
    if (imageFiles.length === 0) {
        galleryGrid.innerHTML = `
            <div class="no-images" style="grid-column:1/-1; text-align:center; padding:3rem;">
                <i class="fas fa-images" style="font-size:3rem;color:var(--primary-gold);margin-bottom:1rem;"></i>
                <h3>Photos Coming Soon</h3>
                <p>Beautiful wedding moments will be shared here soon!</p>
            </div>
        `;
    }
}

// Submit Wish
submitWishBtn.addEventListener('click', () => {
    const wish = wishText.value.trim();
    if (wish.length < 10) {
        alert('Please write a heartfelt wish (at least 10 characters).');
        return;
    }
    
    const wishCard = document.createElement('div');
    wishCard.className = 'wish-card';
    wishCard.innerHTML = `
        <div class="wish-content">
            <p class="wish-text">"${wish}"</p>
            <p class="wish-author">- From Your Well-Wisher</p>
        </div>
    `;
    
    if (wishesContainer) {
        wishesContainer.appendChild(wishCard);
    }
    
    wishText.value = '';
    alert('Thank you for your beautiful wish! ❤️');
    createConfetti();
});

// Confetti Effect
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#D4AF37', '#F4E4A6', '#B76E79', '#FFFFFF'];
    
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((p, i) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
            
            p.y += p.d;
            p.tilt = Math.sin(p.y * 0.1) * 15;
            
            if (p.y > canvas.height) {
                confetti[i] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt
                };
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

// Print Invitation
function printInvitation() {
    const printContent = document.querySelector('.invitation-card').outerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Moeez & Hania Wedding Invitation</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                @media print {
                    body { padding: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            ${printContent}
            <div class="no-print" style="text-align:center;margin-top:20px;">
                <button onclick="window.close()">Close</button>
                <button onclick="window.print()">Print</button>
            </div>
        </body>
        </html>
    `;
    
    window.print();
    document.body.innerHTML = originalContent;
    location.reload();
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Load gallery images
    loadGalleryImages();
    
    // Fade in animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
