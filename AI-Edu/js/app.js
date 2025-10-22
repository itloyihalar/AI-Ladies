// Enhanced AI Learning Platform JavaScript

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .category-card, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Counter animation for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalNumber = stat.textContent;
        const isPercentage = finalNumber.includes('%');
        const hasPlus = finalNumber.includes('+');
        const cleanNumber = parseInt(finalNumber.replace(/[^\d]/g, ''));
        
        if (!isNaN(cleanNumber)) {
            let currentNumber = 0;
            const increment = cleanNumber / 50; // 50 steps for animation
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= cleanNumber) {
                    currentNumber = cleanNumber;
                    clearInterval(timer);
                }
                
                let displayNumber = Math.floor(currentNumber);
                if (cleanNumber >= 1000) {
                    displayNumber = displayNumber >= 1000 ? Math.floor(displayNumber / 1000) + 'K' : displayNumber;
                }
                
                stat.textContent = displayNumber + (hasPlus ? '+' : '') + (isPercentage ? '%' : '');
            }, 50);
        }
    });

    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });

    // Removed problematic parallax effect that was causing hero section overlap

    // Card hover effects with 3D transform
    const cards = document.querySelectorAll('.feature-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Removed typing effect that could cause display issues

    // Form validation and enhancement (for contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                    
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    successMessage.style.cssText = `
                        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                        color: white;
                        padding: 1rem;
                        border-radius: 0.5rem;
                        margin-top: 1rem;
                        text-align: center;
                        animation: slideUp 0.5s ease-out;
                    `;
                    form.appendChild(successMessage);
                    
                    // Reset button after delay
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        if (successMessage.parentNode) {
                            successMessage.remove();
                        }
                    }, 3000);
                }, 2000);
            }
        });
    });

    // Enhanced scrolling indicators
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });

    // Lazy loading for images (if any)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.classList.add('loading');
        imageObserver.observe(img);
    });

    // Theme toggle functionality (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    document.body.appendChild(themeToggle);
});

// AI Tool Questions (for the symptoms/AI tools page)
const aiQuestionsList = [
    "Mashinani o'rganish algoritmlarini o'rganishga qiziqasizmi?",
    "Neyron tarmoqlar haqida o'rganmoqchimisiz?",
    "Tabiiy til ishlov berish sohasini o'rganishga ishtiyoqingiz bormi?",
    "Kompyuter ko'rishini o'rganmoqchimisiz?",
    "Generativ AI modellarini o'rganishga qiziqasizmi?",
    "Chuqur o'rganish haqida bilimga ega bo'lmoqchimisiz?",
    "AI axloqi va tarafkashlik masalalarini o'rganishga qiziqasizmi?",
    "Mustahkamlash o'rganishini o'rganmoqchimisiz?",
    "Tibbiyot sohasidagi AI dan foydalanishni o'rganishga qiziqasizmi?",
    "AI joylashtirish va MLOps haqida o'rganmoqchimisiz?"
];

// Enhanced AI assessment functionality
function initializeAIAssessment() {
    const questionsDiv = document.getElementById('questions');
    if (questionsDiv) {
        questionsDiv.innerHTML = '';
        
        aiQuestionsList.forEach((question, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            questionCard.style.cssText = `
                background: white;
                padding: 1.5rem;
                border-radius: 1rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
                margin-bottom: 1rem;
                border: 2px solid transparent;
                transition: all 0.3s ease;
            `;
            
            questionCard.innerHTML = `
                <label class="question-label" style="display: block; font-weight: 600; margin-bottom: 1rem; color: #2d3748;">
                    ${index + 1}. ${question}
                </label>
                <div class="answer-options" style="display: flex; gap: 1rem;">
                    <label class="option-label" style="display: flex; align-items: center; cursor: pointer;">
                        <input type="radio" name="q${index}" value="yes" style="margin-right: 0.5rem;">
                        <span style="color: #4facfe;">Ha, juda qiziqaman</span>
                    </label>
                    <label class="option-label" style="display: flex; align-items: center; cursor: pointer;">
                        <input type="radio" name="q${index}" value="maybe" style="margin-right: 0.5rem;">
                        <span style="color: #667eea;">Balki</span>
                    </label>
                    <label class="option-label" style="display: flex; align-items: center; cursor: pointer;">
                        <input type="radio" name="q${index}" value="no" style="margin-right: 0.5rem;">
                        <span style="color: #718096;">Unchalik emas</span>
                    </label>
                </div>
            `;
            
            questionsDiv.appendChild(questionCard);
            
            // Add interaction effects
            const radioButtons = questionCard.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.addEventListener('change', function() {
                    questionCard.style.borderColor = '#667eea';
                    questionCard.style.transform = 'translateY(-2px)';
                });
            });
        });
    }

    // Enhanced submit functionality
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            let yesCount = 0;
            let maybeCount = 0;
            let totalAnswered = 0;

            for (let i = 0; i < aiQuestionsList.length; i++) {
                const answer = document.querySelector(`input[name="q${i}"]:checked`);
                if (answer) {
                    totalAnswered++;
                    if (answer.value === 'yes') yesCount++;
                    if (answer.value === 'maybe') maybeCount++;
                }
            }

            const result = document.getElementById('result');
            if (result) {
                if (totalAnswered < aiQuestionsList.length) {
                    result.innerHTML = `
                        <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; padding: 1.5rem; border-radius: 1rem; text-align: center;">
                            <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                            <h3>Iltimos, barcha savollarga javob bering</h3>
                            <p>Siz ${totalAnswered} ta savoldan ${aiQuestionsList.length} tasiga javob berdingiz.</p>
                        </div>
                    `;
                    return;
                }

                let recommendation = '';
                let bgGradient = '';
                let icon = '';

                if (yesCount >= 7) {
                    recommendation = `
                        <h3>🚀 AI Ekspert Yo'nalishi Tavsiya Etiladi!</h3>
                        <p>Siz AI ga yuqori qiziqish ko'rsatasiz! Biz sizga Ilg'or AI Asoslari kursidan boshlashni, 
                        so'ngra Mashinani O'rganish va Generativ AI bo'yicha maxsus yo'nalishlarni tavsiya etamiz.</p>
                        <div style="margin-top: 1rem;">
                            <strong>Tavsiya etilgan O'rganish Yo'li:</strong>
                            <ol style="text-align: left; margin-top: 0.5rem;">
                                <li>Ilg'or AI va ML Asoslari</li>
                                <li>Chuqur O'rganish Mutaxassisligi</li>
                                <li>Generativ AI Mahorati</li>
                                <li>AI Loyiha Portfeli</li>
                            </ol>
                        </div>
                    `;
                    bgGradient = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                    icon = '<i class="fas fa-rocket" style="font-size: 2rem; margin-bottom: 1rem;"></i>';
                } else if (yesCount >= 4 || (yesCount + maybeCount) >= 6) {
                    recommendation = `
                        <h3>🎯 O'rta Daraja AI Yo'nalishi Tavsiya Etiladi!</h3>
                        <p>Sizda AI tushunchalariga yaxshi qiziqish bor! Biz sizga AI Asoslari kursidan boshlashni 
                        va sizning afzalliklaringizga qarab asta-sekin maxsus mavzularga o'tishni tavsiya etamiz.</p>
                        <div style="margin-top: 1rem;">
                            <strong>Tavsiya etilgan O'rganish Yo'li:</strong>
                            <ol style="text-align: left; margin-top: 0.5rem;">
                                <li>AI Asoslari</li>
                                <li>Mashinani O'rganishga Kirish</li>
                                <li>O'zingizning Mutaxassisligingizni Tanlang</li>
                                <li>Amaliy Loyihalar</li>
                            </ol>
                        </div>
                    `;
                    bgGradient = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
                    icon = '<i class="fas fa-graduation-cap" style="font-size: 2rem; margin-bottom: 1rem;"></i>';
                } else {
                    recommendation = `
                        <h3>🌱 Boshlovchilar Uchun AI Kirish!</h3>
                        <p>Ajoyib! Har kim biror joydan boshlaydi. Biz sizning qiziqishingizni uyg'otish uchun 
                        amaliy misollar va real hayot ilovalari bilan AI tushunchalariga yumshoq kirishni tavsiya etamiz.</p>
                        <div style="margin-top: 1rem;">
                            <strong>Tavsiya etilgan O'rganish Yo'li:</strong>
                            <ol style="text-align: left; margin-top: 0.5rem;">
                                <li>AI nima? - Interaktiv Kirish</li>
                                <li>Kundalik Hayotda AI</li>
                                <li>AI uchun Asosiy Dasturlash</li>
                                <li>Sizning Birinchi AI Loyihangiz</li>
                            </ol>
                        </div>
                    `;
                    bgGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    icon = '<i class="fas fa-seedling" style="font-size: 2rem; margin-bottom: 1rem;"></i>';
                }

                result.innerHTML = `
                    <div style="background: ${bgGradient}; color: white; padding: 2rem; border-radius: 1rem; text-align: center; animation: slideUp 0.5s ease-out;">
                        ${icon}
                        ${recommendation}
                        <div style="margin-top: 1.5rem;">
                            <a href="/contact/" style="background: rgba(255,255,255,0.2); color: white; padding: 0.75rem 1.5rem; border-radius: 2rem; text-decoration: none; display: inline-block; transition: all 0.3s ease;" 
                               onmouseover="this.style.background='rgba(255,255,255,0.3)'"
                               onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                                Hozir Boshlang
                            </a>
                        </div>
                    </div>
                `;
            }
        });
    }
}

// Initialize AI assessment when page loads
document.addEventListener('DOMContentLoaded', initializeAIAssessment);

// Dark/Light Mode Functionality
function initializeThemeToggle() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle button icon
    updateThemeIcon(savedTheme);
    
    // Add event listener to theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeThemeToggle();
});

// Export functions for use in other files
window.AILearningPlatform = {
    initializeAIAssessment,
    aiQuestionsList,
    toggleTheme,
    initializeThemeToggle
};
