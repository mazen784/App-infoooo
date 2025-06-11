document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts effect on page load
    createFloatingHearts();
    
    // Add special animation when clicking on the main heart
    document.querySelector('.love-icon').addEventListener('click', function() {
        this.style.transform = 'translateX(-50%) scale(1.5)';
        this.style.color = 'red';
        
        setTimeout(() => {
            this.style.transform = 'translateX(-50%) scale(1)';
            this.style.color = '';
        }, 500);
        
        // Create more floating hearts when clicked
        createFloatingHearts(10);
    });
});

function createFloatingHearts(count = 5) {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        container.appendChild(heart);
        
        // Remove hearts after animation completes
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}

// Add this CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: absolute;
        top: -10px;
        animation: float-up 8s linear forwards;
        z-index: -1;
    }
    
    @keyframes float-up {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

