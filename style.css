/* Reset & Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #6a11cb;
    --secondary-color: #2575fc;
    --accent-color: #ff6b6b;
    --gold-color: #ffd166;
    --light-color: #ffffff;
    --dark-color: #0a0a0a;
    --success-color: #06d6a0;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    --gradient-gold: linear-gradient(135deg, #ffd166 0%, #ff9e6d 100%);
    --gradient-accent: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    color: var(--dark-color);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Particles Background */
.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 50%;
    animation: float 15s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
    }
}

/* Control Panel */
.control-panel {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1000;
}

.control-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--light-color);
    border: none;
    box-shadow: 0 4px 15px var(--shadow-color);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--primary-color);
}

.control-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-color);
}

.control-btn.active {
    background: var(--primary-color);
    color: var(--light-color);
}

/* Opening Animation */
.opening-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2000;
    animation: fadeOut 1s ease 3.5s forwards;
}

.countdown {
    font-size: 8rem;
    font-weight: 700;
    color: var(--light-color);
    opacity: 0;
    animation: countdown 1s ease forwards;
}

.countdown:nth-child(1) { animation-delay: 0s; }
.countdown:nth-child(2) { animation-delay: 1s; }
.countdown:nth-child(3) { animation-delay: 2s; }

.celebrate-text {
    font-size: 4rem;
    font-weight: 700;
    color: var(--gold-color);
    opacity: 0;
    animation: celebrate 1s ease 3s forwards;
    text-transform: uppercase;
    letter-spacing: 3px;
}

@keyframes countdown {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
    100% {
        opacity: 0;
        transform: scale(1);
    }
}

@keyframes celebrate {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

/* Main Content */
.celebration-main {
    opacity: 0;
    animation: fadeIn 1s ease 3.5s forwards;
    padding: 20px;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

/* Hero Celebration */
.hero-celebration {
    text-align: center;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.celebration-header {
    position: relative;
    margin-bottom: 40px;
}

.header-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(106, 17, 203, 0.1) 0%, transparent 70%);
    z-index: -1;
}

.main-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 4.5rem;
    font-weight: 300;
    margin-bottom: 20px;
    position: relative;
}

.title-glow {
    color: var(--primary-color);
    font-weight: 400;
}

.name-highlight {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
    padding: 0 10px;
}

.ampersand {
    color: var(--accent-color);
    font-size: 3.5rem;
    margin: 0 15px;
    font-weight: 300;
}

.title-decoration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.deco-line {
    width: 100px;
    height: 2px;
    background: var(--gradient-gold);
}

.deco-star {
    color: var(--gold-color);
    font-size: 1.5rem;
    animation: spin 4s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.celebration-tag {
    font-size: 1.2rem;
    color: #666;
    margin-top: 10px;
}

/* Interactive Frame */
.interactive-frame {
    margin: 60px auto;
    max-width: 600px;
    position: relative;
}

.frame-border {
    border: 3px solid transparent;
    border-radius: 20px;
    padding: 10px;
    background: linear-gradient(135deg, var(--light-color), var(--light-color)) padding-box,
                var(--gradient-primary) border-box;
    position: relative;
    overflow: hidden;
}

.corner {
    position: absolute;
    font-size: 1.5rem;
    color: var(--primary-color);
}

.corner-tl { top: 10px; left: 10px; }
.corner-tr { top: 10px; right: 10px; }
.corner-bl { bottom: 10px; left: 10px; }
.corner-br { bottom: 10px; right: 10px; }

.frame-content {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    position: relative;
}

.photo-placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--primary-color);
}

.photo-placeholder i {
    font-size: 4rem;
    margin-bottom: 20px;
    color: var(--accent-color);
}

.photo-placeholder p {
    font-size: 1.2rem;
    color: #666;
}

.frame-controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.frame-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: var(--light-color);
    box-shadow: 0 4px 15px var(--shadow-color);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--primary-color);
}

.frame-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px var(--shadow-color);
    background: var(--primary-color);
    color: var(--light-color);
}

/* Celebration Message */
.celebration-message {
    margin: 60px auto;
    max-width: 600px;
}

.message-card {
    background: var(--light-color);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px var(--shadow-color);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.message-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--gradient-primary);
}

.message-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.message-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.message-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 30px;
}

.signature {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    color: var(--accent-color);
    font-style: italic;
}

/* Interactive Wishes */
.interactive-wishes {
    padding: 60px 20px;
    background: linear-gradient(135deg, rgba(106, 17, 203, 0.03) 0%, rgba(37, 117, 252, 0.03) 100%);
    border-radius: 30px;
    margin: 40px auto;
    max-width: 1200px;
}

.section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    color: var(--primary-color);
}

.celebration-actions {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.action-btn {
    background: var(--light-color);
    border: none;
    padding: 25px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    box-shadow: 0 5px 20px var(--shadow-color);
}

.action-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow-color);
}

.action-btn i {
    font-size: 2.5rem;
    color: var(--primary-color);
}

.action-btn span {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--dark-color);
}

/* Wishes Wall */
.wishes-wall {
    background: var(--light-color);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px var(--shadow-color);
}

.wall-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 30px;
    text-align: center;
}

.wishes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    min-height: 150px;
    margin-bottom: 40px;
}

.wish-bubble {
    background: var(--gradient-primary);
    color: var(--light-color);
    padding: 15px 25px;
    border-radius: 50px;
    animation: floatUp 3s ease-out forwards;
    opacity: 0;
}

@keyframes floatUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    20%, 80% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-20px);
    }
}

.add-wish {
    text-align: center;
}

.wish-input-group {
    display: flex;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto 20px;
}

#wishInput {
    flex: 1;
    padding: 15px 20px;
    border: 2px solid #e0e0e0;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

#wishInput:focus {
    outline: none;
    border-color: var(--primary-color);
}

.send-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gradient-primary);
    border: none;
    color: var(--light-color);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.send-btn:hover {
    transform: scale(1.1);
}

.wish-examples {
    color: #888;
    font-size: 0.9rem;
}

/* Memory Lane */
.memory-lane {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.memories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin: 40px 0;
}

.memory-item {
    position: relative;
    aspect-ratio: 1/1;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
}

.memory-item:hover {
    transform: translateY(-5px) scale(1.02);
}

.memory-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.memory-item:hover img {
    transform: scale(1.1);
}

.memory-loading {
    grid-column: 1 / -1;
    text-align: center;
    padding: 60px;
}

.loader {
    width: 60px;
    height: 60px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

/* Memory Reveal */
.memory-reveal {
    text-align: center;
    margin-top: 60px;
}

.reveal-btn {
    background: var(--gradient-accent);
    color: var(--light-color);
    border: none;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.reveal-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
}

.reveal-content {
    background: var(--light-color);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px var(--shadow-color);
    display: none;
    animation: slideUp 0.5s ease;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Celebration Footer */
.celebration-footer {
    background: var(--gradient-primary);
    color: var(--light-color);
    padding: 60px 20px;
    border-radius: 30px 30px 0 0;
    margin-top: 60px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-heart {
    text-align: center;
}

.heart-animation {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

.footer-message {
    font-size: 1.2rem;
    line-height: 1.6;
}

.footer-date {
    text-align: center;
}

.date-badge {
    background: var(--gradient-gold);
    color: var(--dark-color);
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    display: inline-block;
}

.footer-note {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Celebration Counter */
.celebration-counter {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 60px;
    flex-wrap: wrap;
}

.counter-item {
    text-align: center;
}

.counter-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--gold-color);
}

.counter-label {
    font-size: 0.9rem;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Celebration Effects */
.celebration-effects {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
}

.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--accent-color);
    animation: fall 5s linear forwards;
}

.firework {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    animation: explode 1s ease-out forwards;
}

.toast-notification {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--light-color);
    color: var(--dark-color);
    padding: 20px 30px;
    border-radius: 50px;
    box-shadow: 0 10px 40px var(--shadow-color);
    display: none;
    z-index: 1100;
    pointer-events: none;
}

.toast-notification.show {
    display: block;
    animation: toastUp 0.3s ease forwards, toastDown 0.3s ease 2.7s forwards;
}

@keyframes toastUp {
    to {
        transform: translateX(-50%) translateY(0);
    }
}

@keyframes toastDown {
    to {
        transform: translateX(-50%) translateY(100px);
    }
}

.toast-content {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
}

.toast-content i {
    color: var(--accent-color);
    font-size: 1.2rem;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(30);
        opacity: 0;
    }
}

/* Responsive */
@media (max-width: 768px) {
    .main-title {
        font-size: 3rem;
    }
    
    .celebration-actions {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
    
    .celebration-counter {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
}
