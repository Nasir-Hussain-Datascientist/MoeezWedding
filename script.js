// Celebration System
class CelebrationSystem {
    constructor() {
        this.images = ['M1.jpg', 'M2.jpg', 'M3.jpg']; // Your images
        this.currentImageIndex = 0;
        this.isPlaying = true;
        this.counters = {
            toasts: 0,
            fireworks: 0,
            wishes: 3
        };
        this.init();
    }

    init() {
        this.createParticles();
        this.loadImages();
        this.setupControls();
        this.setupInteractions();
        this.startOpeningAnimation();
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.background = this.getRandomColor();
            particlesContainer.appendChild(particle);
        }
    }

    getRandomColor() {
        const colors = ['#6a11cb', '#2575fc', '#ff6b6b', '#ffd166', '#06d6a0'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    loadImages() {
        const photoDisplay = document.getElementById('photoDisplay');
        const memoriesGrid = document.getElementById('memoriesGrid');
        
        // Clear loading states
        photoDisplay.innerHTML = '';
        memoriesGrid.innerHTML = '';

        if (this.images.length === 0) {
            // No images - show placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'photo-placeholder';
            placeholder.innerHTML = `
                <i class="fas fa-heart"></i>
                <p>Beautiful Memories Loading...</p>
            `;
            photoDisplay.appendChild(placeholder);
            return;
        }

        // Load first image
        this.loadImageIntoFrame();
        
        // Load all images into memories grid
        this.images.forEach((image, index) => {
            this.createMemoryItem(image, index);
        });
    }

    loadImageIntoFrame() {
        const photoDisplay = document.getElementById('photoDisplay');
        if (this.images.length > 0) {
            const img = document.createElement('img');
            img.src = `images/${this.images[this.currentImageIndex]}`;
            img.alt = `Memory ${this.currentImageIndex + 1}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.onerror = () => {
                img.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            };
            photoDisplay.innerHTML = '';
            photoDisplay.appendChild(img);
        }
    }

    createMemoryItem(imageName, index) {
        const memoriesGrid = document.getElementById('memoriesGrid');
        const memoryItem = document.createElement('div');
        memoryItem.className = 'memory-item';
        memoryItem.innerHTML = `
            <img src="images/${imageName}" 
                 alt="Memory ${index + 1}"
                 onerror="this.src='https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'">
        `;
        
        // Add click effect
        memoryItem.addEventListener('click', () => {
            this.showImagePopup(imageName);
        });
        
        memoriesGrid.appendChild(memoryItem);
    }

    showImagePopup(imageName) {
        // Create popup
        const popup = document.createElement('div');
        popup.className = 'image-popup';
        popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        img.style.borderRadius = '10px';
        img.onerror = () => {
            img.src = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
        };
        
        popup.appendChild(img);
        document.body.appendChild(popup);
        
        // Close on click
        popup.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
    }

    setupControls() {
        // Music toggle
        const musicToggle = document.getElementById('musicToggle');
        const musicPlayer = document.getElementById('celebrationMusic');
        
        musicToggle.addEventListener('click', () => {
            musicToggle.classList.toggle('active');
            if (musicPlayer.paused) {
                musicPlayer.play().catch(e => console.log('Audio play failed:', e));
            } else {
                musicPlayer.pause();
            }
        });

        // Confetti button
        const confettiBtn = document.getElementById('confettiBtn');
        confettiBtn.addEventListener('click', () => {
            this.createConfetti();
        });

        // Lights button
        const lightsBtn = document.getElementById('lightsBtn');
        lightsBtn.addEventListener('click', () => {
            document.body.classList.toggle('lights-on');
            lightsBtn.classList.toggle('active');
        });

        // Frame controls
        const prevBtn = document.getElementById('prevPhoto');
        const nextBtn = document.getElementById('nextPhoto');
        const playBtn = document.getElementById('playPause');

        prevBtn.addEventListener('click', () => {
            this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
            this.loadImageIntoFrame();
        });

        nextBtn.addEventListener('click', () => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            this.loadImageIntoFrame();
        });

        playBtn.addEventListener('click', () => {
            this.isPlaying = !this.isPlaying;
            playBtn.innerHTML = this.isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
            
            if (this.isPlaying) {
                this.startSlideshow();
            } else {
                clearTimeout(this.slideshowTimer);
            }
        });

        // Start slideshow
        this.startSlideshow();
    }

    startSlideshow() {
        if (this.images.length > 1 && this.isPlaying) {
            this.slideshowTimer = setTimeout(() => {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
                this.loadImageIntoFrame();
                this.startSlideshow();
            }, 5000); // Change every 5 seconds
        }
    }

    setupInteractions() {
        // Celebration actions
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleCelebrationAction(action);
            });
        });

        // Send wish
        const sendWishBtn = document.getElementById('sendWish');
        const wishInput = document.getElementById('wishInput');

        sendWishBtn.addEventListener('click', () => {
            this.sendWish(wishInput.value.trim());
            wishInput.value = '';
        });

        wishInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendWish(wishInput.value.trim());
                wishInput.value = '';
            }
        });

        // Reveal memory
        const revealBtn = document.getElementById('revealMemory');
        revealBtn.addEventListener('click', () => {
            this.revealSpecialMemory();
        });

        // Update counters display
        this.updateCounters();
    }

    handleCelebrationAction(action) {
        switch(action) {
            case 'toast':
                this.raiseToast();
                break;
            case 'fireworks':
                this.launchFireworks();
                break;
            case 'music':
                this.playCelebrationSong();
                break;
            case 'message':
                this.sendBlessing();
                break;
        }
    }

    raiseToast() {
        this.counters.toasts++;
        this.updateCounters();
        
        // Play sound
        const sound = document.getElementById('toastSound');
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Sound play failed:', e));
        
        // Show toast
        const toast = document.getElementById('toastNotification');
        toast.classList.add('show');
        
        // Create toast particles
        this.createToastParticles();
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    createToastParticles() {
        const container = document.getElementById('confettiContainer');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'confetti';
            particle.style.left = `${50 + Math.random() * 20 - 10}%`;
            particle.style.top = '80%';
            particle.style.background = this.getRandomColor();
            particle.style.animationDuration = `${1 + Math.random() * 2}s`;
            container.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode === container) {
                    container.removeChild(particle);
                }
            }, 3000);
        }
    }

    launchFireworks() {
        this.counters.fireworks++;
        this.updateCounters();
        
        // Play sound
        const sound = document.getElementById('fireworkSound');
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Sound play failed:', e));
        
        // Create fireworks
        this.createFireworks();
    }

    createFireworks() {
        const container = document.getElementById('fireworksContainer');
        const colors = ['#ff6b6b', '#ffd166', '#06d6a0', '#6a11cb', '#2575fc'];
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = `${20 + i * 15}%`;
                firework.style.top = `${Math.random() * 30 + 30}%`;
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(firework);
                
                setTimeout(() => {
                    if (firework.parentNode === container) {
                        container.removeChild(firework);
                    }
                }, 1000);
            }, i * 300);
        }
    }

    playCelebrationSong() {
        const musicPlayer = document.getElementById('celebrationMusic');
        musicPlayer.currentTime = 0;
        musicPlayer.play().catch(e => console.log('Music play failed:', e));
        
        // Show notification
        this.showNotification('🎵 Celebration song playing!');
    }

    sendBlessing() {
        const blessings = [
            "May your journey be filled with joy and laughter! ✨",
            "Wishing you endless happiness together! 💫",
            "May every day be as special as today! 🌟",
            "Here's to a lifetime of beautiful moments! 🥂",
            "May love light your path forever! 💖"
        ];
        
        const blessing = blessings[Math.floor(Math.random() * blessings.length)];
        this.sendWish(blessing);
    }

    sendWish(message) {
        if (!message || message.length < 2) return;
        
        this.counters.wishes++;
        this.updateCounters();
        
        // Add to wishes container
        const container = document.getElementById('wishesContainer');
        const wishBubble = document.createElement('div');
        wishBubble.className = 'wish-bubble';
        wishBubble.style.animationDelay = '0s';
        wishBubble.innerHTML = `<div class="bubble-content">${message}</div>`;
        
        container.appendChild(wishBubble);
        
        // Remove after animation
        setTimeout(() => {
            if (wishBubble.parentNode === container) {
                container.removeChild(wishBubble);
            }
        }, 3000);
        
        // Show success
        this.showNotification('💫 Wish sent!');
    }

    revealSpecialMemory() {
        const revealContent = document.getElementById('revealContent');
        const specialMessages = [
            "Moeez, your journey from electrical engineer to creative visionary is inspiring!",
            "Hania & Moeez - may your partnership be as creative and beautiful as your work!",
            "Through distance, friendship remains strong. Celebrating your special day!",
            "May your life together be filled with the same beauty you capture through your lens!",
            "To new beginnings and endless possibilities! Congratulations! 🎊"
        ];
        
        const message = specialMessages[Math.floor(Math.random() * specialMessages.length)];
        revealContent.innerHTML = `
            <div class="special-message">
                <div class="message-icon">🎁</div>
                <h3>A Special Note</h3>
                <p>${message}</p>
            </div>
        `;
        
        revealContent.style.display = 'block';
        
        // Hide after 10 seconds
        setTimeout(() => {
            revealContent.style.display = 'none';
        }, 10000);
    }

    updateCounters() {
        document.getElementById('toastCount').textContent = this.counters.toasts;
        document.getElementById('fireworkCount').textContent = this.counters.fireworks;
        document.getElementById('wishCount').textContent = this.counters.wishes;
    }

    showNotification(message) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-primary);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 3000;
            animation: slideDown 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease forwards';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }

    createConfetti() {
        const container = document.getElementById('confettiContainer');
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '-10px';
            confetti.style.background = this.getRandomColor();
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode === container) {
                    container.removeChild(confetti);
                }
            }, 5000);
        }
    }

    startOpeningAnimation() {
        // Opening animation happens automatically
        setTimeout(() => {
            this.createConfetti();
        }, 3500);
    }
}

// Initialize celebration when page loads
document.addEventListener('DOMContentLoaded', () => {
    const celebration = new CelebrationSystem();
    
    // Add global styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideUp {
            from {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
            to {
                transform: translateX(-50%) translateY(-20px);
                opacity: 0;
            }
        }
        
        .lights-on {
            filter: brightness(1.2) contrast(1.1);
        }
        
        .image-popup {
            cursor: zoom-out;
        }
        
        .special-message {
            text-align: center;
        }
        
        .special-message .message-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        
        .special-message h3 {
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        
        .special-message p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #555;
        }
    `;
    document.head.appendChild(style);
});

// Add audio elements if not present in HTML
if (!document.getElementById('celebrationMusic')) {
    const audioContainer = document.createElement('div');
    audioContainer.innerHTML = `
        <audio id="celebrationMusic" loop>
            <source src="https://assets.mixkit.co/music/preview/mixkit-happy-day-583.mp3" type="audio/mpeg">
        </audio>
        <audio id="fireworkSound">
            <source src="https://assets.mixkit.co/sfx/preview/mixkit-fireworks-show-audio-3060.mp3" type="audio/mpeg">
        </audio>
        <audio id="toastSound">
            <source src="https://assets.mixkit.co/sfx/preview/mixkit-champagne-toast-453.mp3" type="audio/mpeg">
        </audio>
    `;
    document.body.appendChild(audioContainer);
}
