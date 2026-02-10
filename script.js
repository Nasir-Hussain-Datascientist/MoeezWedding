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

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Invitation Modal Functions
function openInvitationModal() {
    invitationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    createConfetti();
}

function closeInvitationModal() {
    invitationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners for Invitation Modal
viewInvitationBtn.addEventListener('click', openInvitationModal);
invitationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openInvitationModal();
});

closeModal.addEventListener('click', closeInvitationModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === invitationModal) {
        closeInvitationModal();
    }
});

// Save Invitation Date
saveInvitationBtn.addEventListener('click', () => {
    const eventDate = new Date('2026-02-12T18:00:00');
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//Moeez & Hania//EN
BEGIN:VEVENT
UID:${Date.now()}@moeezhania.wedding
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Moeez & Hania's Wedding
DESCRIPTION:Wedding celebration of Moeez & Hania\\nVenue: Grand Desire Marquee J5 Resort, Gate #2, Jatti Umrah Road, near Adda Plot, Raiwind Road, Lahore, Pakistan
LOCATION:Grand Desire Marquee J5 Resort, Gate #2, Jatti Umrah Road, near Adda Plot, Raiwind Road, Lahore, Pakistan
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
    
    alert('Wedding date saved to your calendar!');
});

// Submit Wish Functionality
submitWishBtn.addEventListener('click', () => {
    const wish = wishText.value.trim();
    if (wish.length < 10) {
        alert('Please write a heartfelt wish (at least 10 characters).');
        return;
    }
    
    // In a real implementation, you would send this to a server
    // For now, we'll just show a confirmation
    alert('Thank you for your beautiful wish! Though this is a demo site, your heartfelt message means the world to the couple. ❤️');
    wishText.value = '';
    
    // Add confetti celebration
    createConfetti();
});

// Confetti Effect
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#D4AF37', '#F4E4A6', '#B76E79', '#8A9A5B', '#FFFFFF'];
    
    // Create confetti pieces
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 10 + 5,
            d: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngle: 0,
            tiltAngleIncrement: Math.random() * 0.1 + 0.01
        });
    }
    
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach((p, i) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
            
            // Update position
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += p.d;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            // Reset if off screen
            if (p.y > canvas.height) {
                confettiPieces[i] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngle: p.tiltAngle,
                    tiltAngleIncrement: p.tiltAngleIncrement
                };
            }
        });
        
        requestAnimationFrame(drawConfetti);
    }
    
    // Stop confetti after 5 seconds
    drawConfetti();
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (scrolled > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Auto-close mobile menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});
