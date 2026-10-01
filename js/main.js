// Portfolio Laurent Leynaud - JavaScript Principal

// ===========================================================================
// CONFIGURATION DU FORMULAIRE DE CONTACT
// Remplacez la valeur ci-dessous par la clé d'accès reçue par email
// lors de l'inscription sur https://web3forms.com (champ "Access Key").
// C'est la SEULE ligne à modifier pour activer l'envoi des messages.
// ===========================================================================
const WEB3FORMS_ACCESS_KEY = 'COLLEZ-VOTRE-CLE-ICI';

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation
    initNavigation();
    initAnimations();
    initParticles();
    initScrollEffects();
    initFormHandling();
    
    console.log('Portfolio Laurent Leynaud - Chargé avec succès');
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Effet de navigation au scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-sticky');
        } else {
            navbar.classList.remove('nav-sticky');
        }
        
        // Mise à jour des liens actifs
        updateActiveNavLinks();
    });
    
    // Menu mobile
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Navigation smooth (seulement pour les liens internes)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Seulement pour les ancres internes (sections)
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Fermer le menu mobile
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
            
            // Fermer le menu mobile si ouvert
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

// Fonction pour scroller vers une section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Mise à jour des liens actifs dans la navigation
function updateActiveNavLinks() {
    const sections = ['accueil', 'experience', 'projets', 'competences', 'installation', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = sectionId;
            }
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-yellow-300');
        link.classList.add('text-white');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.remove('text-white');
            link.classList.add('text-yellow-300');
        }
    });
}

// Animations au scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                
                // Animation spéciale pour les statistiques
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
                
                // Animation spéciale pour les barres de progression
                if (entry.target.classList.contains('progress-bar')) {
                    animateProgressBar(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    document.querySelectorAll('.card-hover, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Animation des compteurs
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.textContent.replace(/\d+/, target);
            clearInterval(timer);
        } else {
            element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
        }
    }, 30);
}

// Animation des barres de progression
function animateProgressBar(element) {
    const targetWidth = element.style.width || element.getAttribute('data-width');
    element.style.width = '0%';
    
    setTimeout(() => {
        element.style.transition = 'width 1.5s ease-out';
        element.style.width = targetWidth;
    }, 200);
}

// Système de particules pour le hero
function initParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 3 + 3;
    const delay = Math.random() * 2;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

// Effets de scroll
function initScrollEffects() {
    // Parallax léger pour le hero
    const hero = document.getElementById('accueil');
    
    window.addEventListener('scroll', function() {
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Révélation progressive des éléments
    const revealElements = document.querySelectorAll('.timeline-item, .card-hover');
    
    function reveal() {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('animate-fadeInUp');
            }
        });
    }
    
    window.addEventListener('scroll', reveal);
    reveal(); // Appel initial
}

// Gestion des formulaires
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Validation en temps réel des champs
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea, #contact-form select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

async function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');
    
    // Validation basique
    if (!validateContactForm(form)) {
        return;
    }
    
    // Désactiver le bouton et changer le texte
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';
    
    try {
        // Préparer les données du formulaire
        const formData = new FormData(form);

        // Libellé lisible du sujet choisi dans la liste déroulante
        const subjectSelect = document.getElementById('subject');
        const subjectLabel = subjectSelect && subjectSelect.selectedIndex > 0
            ? subjectSelect.options[subjectSelect.selectedIndex].text
            : (formData.get('subject') || 'Contact');

        const senderName = `${formData.get('firstname')} ${formData.get('lastname')}`.trim();

        // Envoi via Web3Forms (https://web3forms.com)
        const payload = {
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Portfolio — ${subjectLabel} — ${senderName}`,
            from_name: 'Portfolio Laurent Leynaud',
            // Web3Forms utilise ce champ comme adresse de réponse
            email: formData.get('email'),
            Nom: formData.get('lastname'),
            Prénom: formData.get('firstname'),
            Email: formData.get('email'),
            Entreprise: formData.get('company') || 'Non spécifiée',
            Sujet: subjectLabel,
            Message: formData.get('message'),
            // Piège à robots : rempli uniquement par les spambots
            botcheck: formData.get('botcheck') || ''
        };

        const httpResponse = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await httpResponse.json().catch(() => ({ success: false }));
        const response = { ok: httpResponse.ok && result.success === true, result };

        if (response.ok) {
            // Succès
            statusDiv.className = 'text-center p-4 rounded-lg bg-green-500 text-white';
            statusDiv.textContent = currentLang === 'en' ? 
                'Message sent successfully! Laurent will contact you soon.' : 
                'Message envoyé avec succès ! Laurent vous contactera bientôt.';
            statusDiv.classList.remove('hidden');
            
            // Notification
            showNotification(
                currentLang === 'en' ? 
                'Your message has been sent to Laurent!' : 
                'Votre message a été envoyé à Laurent !', 
                'success'
            );
            
            // Reset du formulaire
            form.reset();
            
        } else {
            const r = response.result || {};
            throw new Error(r.message || (r.body && r.body.message) || 'Erreur serveur');
        }
        
    } catch (error) {
        console.error('Erreur envoi formulaire:', error);
        
        // Erreur
        statusDiv.className = 'text-center p-4 rounded-lg bg-red-500 text-white';
        statusDiv.textContent = currentLang === 'en' ? 
            'Error sending message. Please try again or contact Laurent directly at lleynaud@gmail.com' : 
            'Erreur lors de l\'envoi. Veuillez réessayer ou contacter Laurent directement : lleynaud@gmail.com';
        statusDiv.classList.remove('hidden');
        
        showNotification(
            currentLang === 'en' ? 
            'Error sending message. Please try again.' : 
            'Erreur lors de l\'envoi. Veuillez réessayer.', 
            'error'
        );
    }
    
    // Réactiver le bouton
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
    
    // Masquer le statut après 10 secondes
    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 10000);
}

function validateContactForm(form) {
    let isValid = true;
    const formData = new FormData(form);
    
    // Champs requis avec leurs IDs
    const requiredFields = [
        { id: 'lastname', name: 'lastname' },
        { id: 'firstname', name: 'firstname' },
        { id: 'email', name: 'email' },
        { id: 'subject', name: 'subject' },
        { id: 'message', name: 'message' }
    ];
    
    requiredFields.forEach(field => {
        const value = formData.get(field.name);
        if (!value || value.trim() === '') {
            showFieldError(field.id, currentLang === 'en' ? 'This field is required' : 'Ce champ est requis');
            isValid = false;
        }
    });
    
    // Validation email
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        showFieldError('email', currentLang === 'en' ? 'Invalid email address' : 'Adresse email invalide');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field.name, 'Ce champ est requis');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field.name, 'Adresse email invalide');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function clearFieldError(field) {
    if (field.target) field = field.target;
    
    field.classList.remove('border-red-400');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    field.classList.add('border-red-400');
    
    // Supprimer l'ancien message d'erreur s'il existe
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Ajouter le nouveau message d'erreur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-300 text-sm mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Système de notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
    
    // Styles selon le type
    switch (type) {
        case 'success':
            notification.classList.add('bg-green-500', 'text-white');
            break;
        case 'error':
            notification.classList.add('bg-red-500', 'text-white');
            break;
        default:
            notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info'} mr-3"></i>
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Fonctions utilitaires

// Fonction pour télécharger le CV (à implémenter selon les besoins)
function downloadCV() {
    showNotification('Fonctionnalité de téléchargement à implémenter', 'info');
    // Ici, vous pouvez ajouter la logique pour télécharger le CV
}

// Fonction pour ouvrir LinkedIn
function openLinkedIn() {
    window.open('https://linkedin.com/in/laurent-leynaud-pv', '_blank');
}

// Gestion du redimensionnement de fenêtre
window.addEventListener('resize', function() {
    // Recalculer les animations si nécessaire
    initParticles();
});

// Gestion des erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Performance - Lazy loading pour les images (si ajoutées plus tard)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialisation du lazy loading si nécessaire
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Gestion du mode sombre (fonctionnalité future)
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Restaurer le mode sombre depuis localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
}

// Analytics et tracking (à implémenter selon les besoins)
function trackEvent(action, category, label) {
    // Ici vous pouvez ajouter votre code de tracking (Google Analytics, etc.)
    console.log('Event tracked:', { action, category, label });
}

// Tracking des interactions importantes
document.addEventListener('click', function(e) {
    if (e.target.matches('[href^="#"]')) {
        trackEvent('navigation', 'internal_link', e.target.getAttribute('href'));
    }
    
    if (e.target.matches('button[type="submit"]')) {
        trackEvent('form', 'submit', 'contact_form');
    }
});