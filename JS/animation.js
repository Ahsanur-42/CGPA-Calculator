// Typewriting Effect and Smooth Transition for Header and Container
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const mainPage = document.getElementById('mainPage');
    const greeting = document.getElementById('animatedGreeting');
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');

    // Constants
    const text = "Welcome to the SGPA Calculator...";
    const typingSpeed = 100; 
    const fadeDuration = 900; 
    const delayAfterTyping = 1000; 

    let charIndex = 0;

    // Typing function
    function typeText() {
        if (charIndex < text.length) {
            typewriterElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            
            setTimeout(() => {
                fadeOutGreeting();
            }, delayAfterTyping);
        }
    }

    // Fade-out greeting and reveal main page
    function fadeOutGreeting() {
        if (greeting) {
            greeting.style.transition = `opacity ${fadeDuration}ms ease`;
            greeting.style.opacity = 0;

            setTimeout(() => {
                if (greeting) greeting.style.display = 'none';
                if (mainPage) mainPage.classList.remove('hidden'); 
                if (header) header.classList.add('show'); 
                if (container) container.classList.add('show'); 
            }, fadeDuration);
        }
    }

    // Start typing if the typewriter element exists
    if (typewriterElement) {
        typeText();
    }
});
