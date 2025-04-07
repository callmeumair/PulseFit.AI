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

// Initialize any third-party libraries or custom components
function initializeComponents() {
    // Add any component initialization here
}

// Call initialization function
initializeComponents(); 
