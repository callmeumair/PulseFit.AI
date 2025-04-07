// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    navbar.querySelector('.container').appendChild(menuToggle);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Navbar Scroll Effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.section, .card, .form, .grid > *').forEach(el => {
        observer.observe(el);
    });

    // Form Interactions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                if (input.value) {
                    input.parentElement.classList.add('filled');
                } else {
                    input.parentElement.classList.remove('filled');
                }
            });
        });

        // Form submission animation
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            form.classList.add('submitting');
            
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            form.classList.remove('submitting');
            form.classList.add('submitted');
            
            setTimeout(() => {
                form.classList.remove('submitted');
            }, 2000);
        });
    });

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Performance Optimizations
    const debouncedResize = debounce(() => {
        // Update layout-sensitive calculations
        updateLayout();
    }, 250);

    window.addEventListener('resize', debouncedResize);

    // Form Elements
    const workoutForm = document.getElementById('workout-form');
    const nutritionForm = document.getElementById('nutrition-form');
    
    // Button Elements
    const editWorkoutBtn = document.querySelector('.edit-workout');
    const editNutritionBtn = document.querySelector('.edit-nutrition');
    const shareWorkoutBtn = document.querySelector('.share-workout');
    const shareNutritionBtn = document.querySelector('.share-nutrition');
    const generateShoppingListBtn = document.querySelector('.generate-shopping-list');
    
    // Initialize Charts
    initializeCharts();
    
    // Initialize Animations
    initializeAnimations();
    
    // Form Event Listeners
    if (workoutForm) {
        workoutForm.addEventListener('submit', handleWorkoutFormSubmit);
    }
    
    if (nutritionForm) {
        nutritionForm.addEventListener('submit', handleNutritionFormSubmit);
    }
    
    // Button Event Listeners
    if (editWorkoutBtn) {
        editWorkoutBtn.addEventListener('click', handleEditWorkout);
    }
    
    if (editNutritionBtn) {
        editNutritionBtn.addEventListener('click', handleEditNutrition);
    }
    
    if (shareWorkoutBtn) {
        shareWorkoutBtn.addEventListener('click', handleShareWorkout);
    }
    
    if (shareNutritionBtn) {
        shareNutritionBtn.addEventListener('click', handleShareNutrition);
    }
    
    if (generateShoppingListBtn) {
        generateShoppingListBtn.addEventListener('click', handleGenerateShoppingList);
    }

    // Initialize components
    initializeComponents();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add form validation
    initializeFormValidation();
    
    // Add mobile menu functionality
    initializeMobileMenu();
});

// Chart Initialization
function initializeCharts() {
    // Workout Progress Chart
    const workoutCtx = document.getElementById('workoutProgressChart');
    if (workoutCtx) {
        new Chart(workoutCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Workout Duration (minutes)',
                    data: [30, 45, 60, 75],
                    borderColor: '#00ff88',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }

    // Weight Progress Chart
    const weightCtx = document.getElementById('weightProgressChart');
    if (weightCtx) {
        new Chart(weightCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Weight (kg)',
                    data: [75, 74.5, 74, 73.5],
                    borderColor: '#00ff88',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }

    // Strength Progress Chart
    const strengthCtx = document.getElementById('strengthProgressChart');
    if (strengthCtx) {
        new Chart(strengthCtx, {
            type: 'bar',
            data: {
                labels: ['Bench Press', 'Squats', 'Deadlifts', 'Pull-ups'],
                datasets: [{
                    label: 'Weight (kg)',
                    data: [60, 80, 100, 0],
                    backgroundColor: '#00ff88',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
}

// Form Handlers
async function handleWorkoutFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await simulateAPIResponse({
            type: 'workout',
            data: data
        });
        
        updateWorkoutPreview(response);
        showNotification('Workout plan generated successfully!', 'success');
    } catch (error) {
        showNotification('Error generating workout plan. Please try again.', 'error');
    }
}

async function handleNutritionFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await simulateAPIResponse({
            type: 'nutrition',
            data: data
        });
        
        updateNutritionPreview(response);
        showNotification('Nutrition plan generated successfully!', 'success');
    } catch (error) {
        showNotification('Error generating nutrition plan. Please try again.', 'error');
    }
}

// Button Handlers
function handleEditWorkout() {
    const workoutSetup = document.querySelector('.workout-setup');
    if (workoutSetup) {
        workoutSetup.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleEditNutrition() {
    const nutritionSetup = document.querySelector('.nutrition-setup');
    if (nutritionSetup) {
        nutritionSetup.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleShareWorkout() {
    showNotification('Workout plan shared successfully!', 'success');
}

function handleShareNutrition() {
    showNotification('Nutrition plan shared successfully!', 'success');
}

function handleGenerateShoppingList() {
    showNotification('Shopping list generated!', 'success');
}

// Animation Initialization
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function simulateAPIResponse({ type, data }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (type === 'workout') {
                resolve({
                    duration: '45 minutes',
                    exercises: [
                        {
                            name: 'Push-ups',
                            sets: '3',
                            reps: '12',
                            rest: '60s'
                        },
                        {
                            name: 'Squats',
                            sets: '3',
                            reps: '15',
                            rest: '60s'
                        }
                    ]
                });
            } else if (type === 'nutrition') {
                resolve({
                    meals: [
                        {
                            name: 'Breakfast',
                            calories: '400',
                            macros: {
                                protein: '30g',
                                carbs: '45g',
                                fat: '15g'
                            }
                        },
                        {
                            name: 'Lunch',
                            calories: '500',
                            macros: {
                                protein: '35g',
                                carbs: '55g',
                                fat: '20g'
                            }
                        },
                        {
                            name: 'Dinner',
                            calories: '450',
                            macros: {
                                protein: '30g',
                                carbs: '40g',
                                fat: '18g'
                            }
                        }
                    ]
                });
            }
        }, 1000);
    });
}

function updateWorkoutPreview(data) {
    const preview = document.querySelector('.workout-preview');
    if (!preview) return;

    // Update workout stats
    const durationElement = preview.querySelector('.workout-stats .stat-item:nth-child(1) .stat-value');
    if (durationElement) {
        durationElement.textContent = data.duration;
    }

    // Update exercise list
    const exerciseList = preview.querySelector('.exercise-list');
    if (exerciseList) {
        exerciseList.innerHTML = data.exercises.map(exercise => `
            <div class="exercise-item">
                <h4>${exercise.name}</h4>
                <p>${exercise.sets} sets × ${exercise.reps} reps</p>
                <p>Rest: ${exercise.rest}</p>
            </div>
        `).join('');
    }
}

function updateNutritionPreview(data) {
    const preview = document.querySelector('.nutrition-preview');
    if (!preview) return;

    // Update meal cards
    const mealCards = preview.querySelectorAll('.meal-card');
    data.meals.forEach((meal, index) => {
        if (mealCards[index]) {
            const title = mealCards[index].querySelector('h3');
            const calories = mealCards[index].querySelector('.calories');
            const macros = mealCards[index].querySelector('.macros');

            if (title) title.textContent = meal.name;
            if (calories) calories.textContent = `${meal.calories} calories`;
            if (macros) {
                macros.innerHTML = `
                    <div>Protein: ${meal.macros.protein}</div>
                    <div>Carbs: ${meal.macros.carbs}</div>
                    <div>Fat: ${meal.macros.fat}</div>
                `;
            }
        }
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function updateLayout() {
    // Add any layout updates needed on resize
    const heroHeight = window.innerHeight;
    document.querySelector('.hero').style.minHeight = `${heroHeight}px`;
}

// Add smooth scrolling polyfill for Safari
if (!('scrollBehavior' in document.documentElement.style)) {
    import('scroll-behavior-polyfill').then(() => {
        console.log('Smooth scrolling polyfill loaded');
    });
}

// Initialize components
function initializeComponents() {
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1500);
        });
    });

    // Add hover effect to cards
    document.querySelectorAll('.pricing-card, .social-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll Animations
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section, .card, .form').forEach(element => {
        observer.observe(element);
    });
}

// Form Validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.classList.add('loading');
            
            // Simulate form submission
            setTimeout(() => {
                submitButton.classList.remove('loading');
                showNotification('Form submitted successfully!', 'success');
            }, 1500);
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const nav = document.querySelector('.navbar .container');
    nav.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// FAQ Section Interactivity
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Auth Modal Functionality
const authModal = document.getElementById('authModal');
const closeModal = document.querySelector('.close-modal');
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

function openAuthModal(formType) {
    authModal.style.display = 'block';
    if (formType === 'signup') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

function closeAuthModal() {
    authModal.style.display = 'none';
}

function switchAuthForm(formType) {
    if (formType === 'signup') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === authModal) {
        closeAuthModal();
    }
});

closeModal.addEventListener('click', closeAuthModal);

// Form submission handlers
document.getElementById('signup').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your signup logic here
    alert('Sign up successful!');
    closeAuthModal();
});

document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
    alert('Login successful!');
    closeAuthModal();
});

// Chatbot Functionality
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWindow = document.querySelector('.chatbot-window');
const closeChatbot = document.querySelector('.close-chatbot');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.querySelector('.chatbot-messages');

// Toggle chatbot window
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.add('active');
});

closeChatbot.addEventListener('click', () => {
  chatbotWindow.classList.remove('active');
});

// Send message function
function sendUserMessage() {
  const message = chatInput.value.trim();
  if (message) {
    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate bot response (replace with actual AI integration)
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      addMessage(botResponse, 'bot');
    }, 1000);
  }
}

// Add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Get bot response (replace with actual AI integration)
function getBotResponse(message) {
  const responses = {
    // Pricing related responses
    'price': 'We offer three subscription plans:\n\n' +
             '1. Free Plan ($0/month):\n' +
             '   - Basic Nutrition Tracking\n' +
             '   - Weekly Progress Reports\n' +
             '   - Community Access\n' +
             '   - Basic Support\n\n' +
             '2. Pro Plan ($20/month):\n' +
             '   - Everything in Free\n' +
             '   - Advanced Nutrition Analysis\n' +
             '   - Daily Progress Tracking\n' +
             '   - Custom Meal Plans\n' +
             '   - Priority Support\n' +
             '   - Progress Analytics\n\n' +
             '3. Customizable Plan ($40/month):\n' +
             '   - Everything in Pro\n' +
             '   - Custom AI Training\n' +
             '   - 1-on-1 Support\n' +
             '   - Advanced Analytics\n' +
             '   - Custom Integrations\n' +
             '   - API Access\n\n' +
             'All plans come with a 14-day money-back guarantee!',
    
    'subscription': 'You can subscribe to any of our plans through our website. We accept all major credit cards and PayPal. You can cancel your subscription anytime, and we offer a 14-day money-back guarantee if you\'re not satisfied with our service.',
    
    'cancel': 'You can cancel your subscription at any time through your account settings. There are no cancellation fees, and you\'ll continue to have access to your plan until the end of your current billing period.',
    
    'refund': 'We offer a 14-day money-back guarantee on all our plans. If you\'re not satisfied with our service, you can request a full refund within 14 days of your initial subscription.',
    
    // Workout plan related responses
    'workout': 'Our AI-powered workout plans are personalized based on:\n\n' +
              '1. Your fitness goals (weight loss, muscle gain, endurance, etc.)\n' +
              '2. Your current fitness level\n' +
              '3. Available equipment\n' +
              '4. Time commitment\n' +
              '5. Previous workout history\n\n' +
              'The AI continuously adapts your plan based on your progress and feedback.',
    
    'personalized': 'Our workout plans are completely personalized using advanced AI algorithms that consider:\n\n' +
                   '- Your fitness goals and preferences\n' +
                   '- Your current fitness level and limitations\n' +
                   '- Available equipment and space\n' +
                   '- Time availability\n' +
                   '- Progress tracking data\n' +
                   '- Previous workout performance\n\n' +
                   'The AI adjusts your plan in real-time based on your performance and feedback.',
    
    'equipment': 'Our workout plans can be customized for any equipment setup:\n\n' +
                '- No equipment (bodyweight exercises)\n' +
                '- Basic home equipment (dumbbells, resistance bands)\n' +
                '- Full gym equipment\n' +
                '- Specialized equipment\n\n' +
                'Just let us know what equipment you have access to, and our AI will create the perfect plan for you.',
    
    // AI integration related responses
    'ai': 'Our AI integration works through several advanced technologies:\n\n' +
          '1. Machine Learning Algorithms:\n' +
          '   - Analyze your fitness data\n' +
          '   - Predict optimal workout patterns\n' +
          '   - Adapt to your progress\n\n' +
          '2. Natural Language Processing:\n' +
          '   - Understand your goals and preferences\n' +
          '   - Provide personalized recommendations\n' +
          '   - Answer your questions\n\n' +
          '3. Computer Vision:\n' +
          '   - Track exercise form\n' +
          '   - Monitor progress\n' +
          '   - Provide real-time feedback\n\n' +
          '4. Predictive Analytics:\n' +
          '   - Forecast progress\n' +
          '   - Suggest optimal workout timing\n' +
          '   - Prevent plateaus',
    
    'how it works': 'PulseFit AI works through a combination of advanced technologies:\n\n' +
                   '1. Data Collection:\n' +
                   '   - Your fitness goals\n' +
                   '   - Current fitness level\n' +
                   '   - Available equipment\n' +
                   '   - Time availability\n\n' +
                   '2. AI Analysis:\n' +
                   '   - Processes your data\n' +
                   '   - Creates personalized plans\n' +
                   '   - Adapts to your progress\n\n' +
                   '3. Real-time Adjustments:\n' +
                   '   - Monitors your performance\n' +
                   '   - Provides instant feedback\n' +
                   '   - Updates your plan automatically\n\n' +
                   '4. Progress Tracking:\n' +
                   '   - Tracks your achievements\n' +
                   '   - Identifies patterns\n' +
                   '   - Suggests improvements',
    
    // General responses
    'hello': 'Hello! I\'m your PulseFit AI assistant. How can I help you with your fitness journey today?',
    'hi': 'Hi there! I\'m here to help you with your fitness goals. What would you like to know?',
    'help': 'I can help you with:\n' +
            '- Pricing and subscription information\n' +
            '- Workout plan details\n' +
            '- AI integration and features\n' +
            '- Progress tracking\n' +
            '- Nutrition planning\n' +
            '- Technical support\n\n' +
            'What would you like to know more about?',
    
    // Default response
    'default': "I'm here to help with your fitness journey. You can ask me about:\n" +
               "- Subscription plans and pricing\n" +
               "- How our AI-powered workout plans work\n" +
               "- Equipment requirements\n" +
               "- Progress tracking\n" +
               "- Nutrition planning\n" +
               "- Technical support\n\n" +
               "What would you like to know?"
  };

  const lowerMessage = message.toLowerCase();
  
  // Check for specific keywords
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('subscription')) {
    return responses['price'];
  }
  if (lowerMessage.includes('cancel') || lowerMessage.includes('refund')) {
    return responses['cancel'];
  }
  if (lowerMessage.includes('workout') || lowerMessage.includes('exercise')) {
    return responses['workout'];
  }
  if (lowerMessage.includes('personalized') || lowerMessage.includes('custom')) {
    return responses['personalized'];
  }
  if (lowerMessage.includes('equipment') || lowerMessage.includes('gear')) {
    return responses['equipment'];
  }
  if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
    return responses['ai'];
  }
  if (lowerMessage.includes('how') && lowerMessage.includes('work')) {
    return responses['how it works'];
  }
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return responses['hello'];
  }
  if (lowerMessage.includes('help')) {
    return responses['help'];
  }

  return responses['default'];
}

// Event listeners for sending messages
sendMessage.addEventListener('click', sendUserMessage);

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendUserMessage();
  }
});

// Free Plan Button Click Handler
document.addEventListener('DOMContentLoaded', function() {
    const freePlanButton = document.querySelector('.pricing-card.free .btn');
    if (freePlanButton) {
        freePlanButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if user is authenticated
            const isAuthenticated = checkAuthentication();
            
            if (isAuthenticated) {
                // User is logged in, redirect to free plan
                window.location.href = 'free-plan.html';
            } else {
                // User is not logged in, show auth modal
                openAuthModal('signup');
                showNotification('Please sign up or log in to access the free plan', 'info');
            }
        });
    }

    // Authentication check function
    function checkAuthentication() {
        // In a real application, this would check for a valid session/token
        // For demo purposes, we'll use localStorage
        return localStorage.getItem('isAuthenticated') === 'true';
    }

    // Handle successful authentication
    function handleSuccessfulAuth() {
        localStorage.setItem('isAuthenticated', 'true');
        showNotification('Successfully authenticated! Redirecting to free plan...', 'success');
        setTimeout(() => {
            window.location.href = 'free-plan.html';
        }, 1500);
    }

    // Update auth form submission handlers
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your signup logic here
            handleSuccessfulAuth();
            closeAuthModal();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            handleSuccessfulAuth();
            closeAuthModal();
        });
    }

    // Check authentication on free plan page load
    if (window.location.pathname.includes('free-plan.html')) {
        if (!checkAuthentication()) {
            showNotification('Please sign up or log in to access this page', 'error');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }
    }

    // Handle form submissions on free plan page
    const nutritionForm = document.querySelector('.nutrition-form');
    const progressForm = document.querySelector('.progress-form');

    if (nutritionForm) {
        nutritionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add meal to tracking
            const mealType = document.getElementById('meal-type').value;
            const foodItem = document.getElementById('food-item').value;
            const calories = document.getElementById('calories').value;
            
            // Here you would typically send this data to your backend
            console.log('Meal added:', { mealType, foodItem, calories });
            
            // Show success message
            showNotification('Meal added successfully!', 'success');
            
            // Reset form
            nutritionForm.reset();
        });
    }

    if (progressForm) {
        progressForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Update progress
            const weight = document.getElementById('weight').value;
            const chest = document.getElementById('chest').value;
            const waist = document.getElementById('waist').value;
            const hips = document.getElementById('hips').value;
            
            // Here you would typically send this data to your backend
            console.log('Progress updated:', { weight, chest, waist, hips });
            
            // Show success message
            showNotification('Progress updated successfully!', 'success');
            
            // Reset form
            progressForm.reset();
        });
    }

    // Handle community and support buttons
    const communityButtons = document.querySelectorAll('.community-features button, .support-features button');
    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            showNotification('This feature is available in the Pro plan. Upgrade to access!', 'info');
        });
    });
});

// User Profile and Customization
document.addEventListener('DOMContentLoaded', function() {
    // Get user data from localStorage
    function getUserData() {
        return {
            name: localStorage.getItem('userName') || 'User',
            fitnessLevel: localStorage.getItem('fitnessLevel') || 'beginner',
            goal: localStorage.getItem('fitnessGoal') || 'weight-loss',
            joinDate: localStorage.getItem('joinDate') || new Date().toISOString(),
            progress: JSON.parse(localStorage.getItem('userProgress') || '{}')
        };
    }

    // Update user display with personalized data
    function updateUserDisplay() {
        const userData = getUserData();
        const userNameElements = document.querySelectorAll('#userName, #displayName');
        userNameElements.forEach(element => {
            element.textContent = userData.name;
        });

        // Update welcome message
        const welcomeMessage = document.querySelector('.user-welcome p');
        if (welcomeMessage) {
            const joinDate = new Date(userData.joinDate);
            const monthsSinceJoin = Math.floor((new Date() - joinDate) / (1000 * 60 * 60 * 24 * 30));
            welcomeMessage.textContent = `You've been with us for ${monthsSinceJoin} months. Let's continue your fitness journey!`;
        }

        // Update workout form with user's preferences
        const workoutGoal = document.getElementById('workout-goal');
        const workoutLevel = document.getElementById('workout-level');
        if (workoutGoal && workoutLevel) {
            workoutGoal.value = userData.goal;
            workoutLevel.value = userData.fitnessLevel;
        }

        // Update progress chart with user's data
        updateProgressChart(userData.progress);
    }

    // Update progress chart with user's data
    function updateProgressChart(progress) {
        const ctx = document.getElementById('progressChart');
        if (ctx && progress) {
            const labels = Object.keys(progress).slice(-4); // Get last 4 weeks
            const data = labels.map(week => progress[week].score || 0);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Progress',
                        data: data,
                        borderColor: '#00ff88',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(0, 255, 136, 0.1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        }
                    }
                }
            });
        }
    }

    // Handle workout form submission
    const workoutForm = document.querySelector('.workout-form');
    if (workoutForm) {
        workoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const goal = document.getElementById('workout-goal').value;
            const level = document.getElementById('workout-level').value;

            // Save user preferences
            localStorage.setItem('fitnessGoal', goal);
            localStorage.setItem('fitnessLevel', level);

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate AI generating workout plan
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                showNotification('Your personalized workout plan has been generated!', 'success');
            }, 2000);
        });
    }

    // Handle nutrition form submission
    const nutritionForm = document.querySelector('.nutrition-form');
    if (nutritionForm) {
        nutritionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const mealData = {
                type: document.getElementById('meal-type').value,
                food: document.getElementById('food-item').value,
                calories: document.getElementById('calories').value,
                macros: {
                    protein: document.getElementById('protein').value,
                    carbs: document.getElementById('carbs').value,
                    fat: document.getElementById('fat').value
                }
            };

            // Save meal data
            const meals = JSON.parse(localStorage.getItem('userMeals') || '[]');
            meals.push(mealData);
            localStorage.setItem('userMeals', JSON.stringify(meals));

            // Show success message
            showNotification('Meal added successfully!', 'success');
            this.reset();
        });
    }

    // Handle community and support buttons
    const communityButtons = document.querySelectorAll('.community-features button, .support-features button');
    communityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            showNotification(`Connecting you to ${action}...`, 'info');
        });
    });

    // Handle app download buttons
    const appButtons = document.querySelectorAll('.app-features button');
    appButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.textContent.includes('iOS') ? 'iOS' : 'Android';
            showNotification(`Redirecting to ${platform} App Store...`, 'info');
        });
    });

    // Update user display on page load
    updateUserDisplay();
});

// Pro Plan Access and Payment Verification
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has paid for pro plan
    function checkProPlanAccess() {
        const hasPaid = localStorage.getItem('hasPaidForPro') === 'true';
        return hasPaid;
    }

    // Handle pro plan button click
    const proPlanButton = document.querySelector('.pricing-card.pro .btn');
    if (proPlanButton) {
        proPlanButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if user is authenticated
            const isAuthenticated = checkAuthentication();
            
            if (isAuthenticated) {
                // Check if user has paid
                if (checkProPlanAccess()) {
                    // User has paid, redirect to pro plan
                    window.location.href = 'pro-plan.html';
                } else {
                    // User hasn't paid, show payment modal
                    showPaymentModal();
                }
            } else {
                // User is not logged in, show auth modal
                openAuthModal('signup');
                showNotification('Please sign up or log in to access the pro plan', 'info');
            }
        });
    }

    // Payment Modal
    function showPaymentModal() {
        const modal = document.createElement('div');
        modal.className = 'payment-modal';
        modal.innerHTML = `
            <div class="payment-modal-content">
                <span class="close-modal">&times;</span>
                <h2>Upgrade to Pro Plan</h2>
                <p>Complete your payment to access all pro features</p>
                <div class="payment-form">
                    <div class="form-group">
                        <label for="card-number">Card Number</label>
                        <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>
                    </div>
                    <div class="form-group">
                        <label for="expiry">Expiry Date</label>
                        <input type="text" id="expiry" placeholder="MM/YY" required>
                    </div>
                    <div class="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" placeholder="123" required>
                    </div>
                    <button class="btn" id="processPayment">Process Payment</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        // Process payment
        const processPaymentBtn = modal.querySelector('#processPayment');
        processPaymentBtn.addEventListener('click', () => {
            // Simulate payment processing
            processPaymentBtn.classList.add('loading');
            processPaymentBtn.disabled = true;

            setTimeout(() => {
                // Simulate successful payment
                localStorage.setItem('hasPaidForPro', 'true');
                showNotification('Payment successful! Redirecting to pro plan...', 'success');
                modal.remove();
                setTimeout(() => {
                    window.location.href = 'pro-plan.html';
                }, 1500);
            }, 2000);
        });
    }

    // Check pro plan access on pro plan page load
    if (window.location.pathname.includes('pro-plan.html')) {
        if (!checkAuthentication()) {
            showNotification('Please sign up or log in to access this page', 'error');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else if (!checkProPlanAccess()) {
            showNotification('Please upgrade to pro plan to access this page', 'error');
            setTimeout(() => {
                window.location.href = 'index.html#pricing';
            }, 2000);
        }
    }

    // Initialize analytics chart on pro plan page
    if (window.location.pathname.includes('pro-plan.html')) {
        const ctx = document.getElementById('progressChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Progress',
                        data: [0, 0, 0, 0],
                        borderColor: '#00ff88',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(0, 255, 136, 0.1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#ffffff'
                            }
                        }
                    }
                }
            });
        }
    }
});

// User Plan Customization
function customizeUserExperience() {
    const userData = getUserData();
    const isProUser = checkProPlanAccess();
    
    // Update user display
    updateUserDisplay();
    
    // Customize based on plan type
    if (isProUser) {
        customizeProExperience();
    } else {
        customizeFreeExperience();
    }
}

function customizeProExperience() {
    // Enable all pro features
    document.querySelectorAll('.pro-feature').forEach(feature => {
        feature.classList.remove('disabled');
        feature.classList.add('enabled');
    });

    // Initialize advanced analytics
    initializeAdvancedAnalytics();
    
    // Enable AI workout generation
    const workoutForm = document.querySelector('.workout-form');
    if (workoutForm) {
        workoutForm.addEventListener('submit', handleProWorkoutGeneration);
    }

    // Enable advanced nutrition tracking
    const nutritionForm = document.querySelector('.nutrition-form');
    if (nutritionForm) {
        nutritionForm.addEventListener('submit', handleProNutritionTracking);
    }

    // Enable community features
    document.querySelectorAll('.community-features button').forEach(button => {
        button.addEventListener('click', handleProCommunityAction);
    });

    // Enable priority support
    document.querySelectorAll('.support-features button').forEach(button => {
        button.addEventListener('click', handleProSupportAction);
    });
}

function customizeFreeExperience() {
    // Disable pro features
    document.querySelectorAll('.pro-feature').forEach(feature => {
        feature.classList.add('disabled');
        feature.classList.remove('enabled');
    });

    // Show upgrade prompts
    document.querySelectorAll('.upgrade-prompt').forEach(prompt => {
        prompt.style.display = 'block';
    });

    // Handle basic workout tracking
    const workoutForm = document.querySelector('.workout-form');
    if (workoutForm) {
        workoutForm.addEventListener('submit', handleBasicWorkoutTracking);
    }

    // Handle basic nutrition tracking
    const nutritionForm = document.querySelector('.nutrition-form');
    if (nutritionForm) {
        nutritionForm.addEventListener('submit', handleBasicNutritionTracking);
    }

    // Handle basic community access
    document.querySelectorAll('.community-features button').forEach(button => {
        button.addEventListener('click', handleBasicCommunityAction);
    });

    // Handle basic support
    document.querySelectorAll('.support-features button').forEach(button => {
        button.addEventListener('click', handleBasicSupportAction);
    });
}

// Pro Feature Handlers
function handleProWorkoutGeneration(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const workoutData = {
        goal: formData.get('workout-goal'),
        level: formData.get('workout-level'),
        duration: formData.get('workout-duration'),
        equipment: formData.get('equipment')
    };

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate AI workout generation
    setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        showNotification('Your AI-powered workout plan has been generated!', 'success');
        // Here you would typically update the UI with the generated workout
    }, 2000);
}

function handleProNutritionTracking(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nutritionData = {
        mealType: formData.get('meal-type'),
        food: formData.get('food-item'),
        calories: formData.get('calories'),
        macros: {
            protein: formData.get('protein'),
            carbs: formData.get('carbs'),
            fat: formData.get('fat')
        }
    };

    // Save meal data with advanced tracking
    const meals = JSON.parse(localStorage.getItem('userMeals') || '[]');
    meals.push({
        ...nutritionData,
        timestamp: new Date().toISOString(),
        aiAnalysis: 'Analyzing meal composition...'
    });
    localStorage.setItem('userMeals', JSON.stringify(meals));

    showNotification('Meal added with advanced tracking!', 'success');
    e.target.reset();
}

function handleProCommunityAction(e) {
    const action = e.target.textContent.trim();
    showNotification(`Accessing premium ${action} features...`, 'info');
    // Here you would typically implement the pro community features
}

function handleProSupportAction(e) {
    const action = e.target.textContent.trim();
    showNotification(`Connecting to priority ${action} support...`, 'info');
    // Here you would typically implement the pro support features
}

// Basic Feature Handlers
function handleBasicWorkoutTracking(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const workoutData = {
        goal: formData.get('workout-goal'),
        level: formData.get('workout-level')
    };

    // Save basic workout data
    const workouts = JSON.parse(localStorage.getItem('userWorkouts') || '[]');
    workouts.push({
        ...workoutData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('userWorkouts', JSON.stringify(workouts));

    showNotification('Workout logged successfully!', 'success');
    e.target.reset();
}

function handleBasicNutritionTracking(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nutritionData = {
        mealType: formData.get('meal-type'),
        food: formData.get('food-item'),
        calories: formData.get('calories')
    };

    // Save basic meal data
    const meals = JSON.parse(localStorage.getItem('userMeals') || '[]');
    meals.push({
        ...nutritionData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('userMeals', JSON.stringify(meals));

    showNotification('Meal added successfully!', 'success');
    e.target.reset();
}

function handleBasicCommunityAction(e) {
    const action = e.target.textContent.trim();
    showNotification(`This feature is available in the Pro plan. Upgrade to access ${action}!`, 'info');
}

function handleBasicSupportAction(e) {
    const action = e.target.textContent.trim();
    showNotification(`This feature is available in the Pro plan. Upgrade to access ${action}!`, 'info');
}

// Initialize advanced analytics for pro users
function initializeAdvancedAnalytics() {
    const ctx = document.getElementById('progressChart');
    if (ctx) {
        const userData = getUserData();
        const progress = userData.progress || {};
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(progress).slice(-4),
                datasets: [{
                    label: 'Progress',
                    data: Object.values(progress).map(p => p.score || 0),
                    borderColor: '#00ff88',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 136, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }
}

// Initialize user experience on page load
document.addEventListener('DOMContentLoaded', function() {
    customizeUserExperience();
}); 
