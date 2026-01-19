// EventTribe - Main JavaScript File

// EventTribe - Main JavaScript File

// Initialize events data structure
let events = [
    {
        id: 1,
        name: 'AI x SaaS Founders MeetUp',
        date: '2026-01-20',
        time: '18:00',
        location: 'Canvas Workspace',
        city: 'Bangalore',
        category: 'Music',
        description: 'Join us for an exciting meetup of AI and SaaS founders. Network, learn, and grow together.',
        price: 0,
        image: './public/images/music-concert.png'
    },
    {
        id: 2,
        name: 'Jazz Night at Blue Note',
        date: '2026-01-21',
        time: '20:00',
        location: 'Blue Note Club',
        city: 'Bangalore',
        category: 'Music',
        description: 'Enjoy an evening of smooth jazz with local and international artists.',
        price: 500,
        image: './public/images/music-jazz.png'
    },
    {
        id: 3,
        name: 'Art Gallery Opening',
        date: '2026-01-22',
        time: '19:00',
        location: 'Modern Art Gallery',
        city: 'Bangalore',
        category: 'Performing & Visual Arts',
        description: 'Opening night of the latest contemporary art exhibition featuring local artists.',
        price: 0,
        image: './public/images/icon-arts-new.png'
    },
    {
        id: 4,
        name: 'Techno Bunker Party',
        date: '2026-01-23',
        time: '22:00',
        location: 'The Warehouse',
        city: 'Bangalore',
        category: 'Night Life',
        description: 'Underground techno vibes all night long with top DJs.',
        price: 1000,
        image: './public/images/music-dj.png'
    },
    {
        id: 5,
        name: 'Bangalore Food Festival',
        date: '2026-01-24',
        time: '11:00',
        location: 'Palace Grounds',
        city: 'Bangalore',
        category: 'Food & Drinks',
        description: 'Taste dishes from over 50 local restaurants and food trucks.',
        price: 250,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 6,
        name: 'Christmas Market',
        date: '2026-01-25',
        time: '16:00',
        location: 'Phoenix Marketcity',
        city: 'Bangalore',
        category: 'Holidays',
        description: 'Shop for gifts, enjoy mulled wine, and meet Santa!',
        price: 0,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 8,
        name: 'Wine Tasting Workshop',
        date: '2026-01-27',
        time: '18:30',
        location: 'The Wine Cellar',
        city: 'Bangalore',
        category: 'Food & Drinks',
        description: 'Learn the art of wine tasting with our expert sommelier.',
        price: 1500,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 9,
        name: 'New Year Bash 2026',
        date: '2026-01-28',
        time: '21:00',
        location: 'High Ultra Lounge',
        city: 'Bangalore',
        category: 'Holidays',
        description: 'Welcome the new year with spectacular views and great music.',
        price: 3000,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 10,
        name: 'Classical Dance Recital',
        date: '2026-01-29',
        time: '17:30',
        location: 'Chowdiah Memorial Hall',
        city: 'Bangalore',
        category: 'Performing & Visual Arts',
        description: 'A mesmerizing performance of Bharatanatyam.',
        price: 400,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 14,
        name: 'Diwali Mela',
        date: '2026-02-02',
        time: '15:00',
        location: 'Freedom Park',
        city: 'Bangalore',
        category: 'Holidays',
        description: 'Celebrate the festival of lights with food, games, and crackers.',
        price: 100,
        image: './public/images/https___cdn.evbuc.com_images_1167821513_3865663544_1_original.jpeg'
    },
    {
        id: 15,
        name: 'Karaoke Night',
        date: '2026-02-03',
        time: '20:30',
        location: 'Boozers Bar',
        city: 'Bangalore',
        category: 'Night Life',
        description: 'Sing your heart out and enjoy happy hour prices.',
        price: 0,
        image: './public/images/icon-nightlife-new.png'
    },
    {
        id: 16,
        name: 'Music Theory Workshop',
        date: '2026-02-04',
        time: '14:00',
        location: 'Music Academy',
        city: 'Bangalore',
        category: 'Music',
        description: 'Deep dive into harmony and composition with industry experts.',
        price: 800,
        image: './public/images/icon-music-new.png'
    },
    {
        id: 17,
        name: 'Cocktail Mixing Class',
        date: '2026-02-05',
        time: '18:00',
        location: 'Mixology Lab',
        city: 'Bangalore',
        category: 'Food & Drinks',
        description: 'Learn to craft the perfect cocktails for your next party.',
        price: 1500,
        image: './public/images/icon-nightlife-new.png'
    },
    {
        id: 18,
        name: 'Digital Art Showcase',
        date: '2026-02-06',
        time: '11:00',
        location: 'Tech Art Space',
        city: 'Bangalore',
        category: 'Performing & Visual Arts',
        description: 'Exhibition of 3D art, VR experiences, and digital paintings.',
        price: 300,
        image: './public/images/icon-arts-new.png'
    },
    {
        id: 20,
        name: 'Salsa Night',
        date: '2026-02-08',
        time: '21:00',
        location: 'Latin Dance Studio',
        city: 'Bangalore',
        category: 'Night Life',
        description: 'Dance the night away with salsa beats and expert instructors.',
        price: 200,
        image: './public/images/icon-nightlife-new.png'
    }
];

// Load initial state on page load
function loadEvents() {
    // If no events in localStorage, initialize with default events
    // This allows event.html to find the event when clicked
    if (!localStorage.getItem('eventTribeEvents')) {
        saveEvents();
    }

    // Also update current events array if we added something elsewhere?
    // For now, simple initialization is enough.

    updateRegistrationButtons();
    attachRegistrationHandlers();
    attachCardClickHandlers();
}

// Attach click handlers to event cards
function attachCardClickHandlers() {
    const cards = document.querySelectorAll('.event-cards .card');

    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function (e) {
            // Don't redirect if clicking the Register button
            if (e.target.closest('[data-register-btn]') || e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }

            const eventId = this.dataset.eventId;
            if (eventId) {
                window.location.href = `./event.html?id=${eventId}`;
            }
        });
    });
}

// Update registration buttons based on localStorage
function updateRegistrationButtons() {
    const registeredEvents = getRegisteredEvents();
    registeredEvents.forEach(regEvent => {
        const btn = document.querySelector(`[data-register-btn="${regEvent.id}"]`);
        if (btn) {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            btn.textContent = 'Registered';
            btn.href = '#';
            btn.style.cursor = 'pointer';
        }
    });
}

// Save events to localStorage
function saveEvents() {
    localStorage.setItem('eventTribeEvents', JSON.stringify(events));
}

// Render events (Deprecated - Logic moved to Static HTML)
function renderEvents(filteredEvents = null) {
    // This function is kept to avoid breaking calls, but it doesn't do much now
    // If logic calls this with filtered events, we should redirect to DOM filtering
    if (filteredEvents) {
        console.warn('renderEvents called with data, but using DOM filtering preference.');
        // If we really needed to re-render, we'd need a way to restore the full DOM.
        // For now, we rely on filterEvents toggling visibility.
    }
}

// Create an event card element (Deprecated)
function createEventCard(event) {
    // No-op
    return null;
}

// Format date for display
function formatDate(date) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateStr = date.toDateString();
    const todayStr = today.toDateString();
    const tomorrowStr = tomorrow.toDateString();

    if (dateStr === todayStr) {
        return 'Today';
    } else if (dateStr === tomorrowStr) {
        return 'Tomorrow';
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
}

// Check if event is registered
function isEventRegistered(eventId) {
    const registeredEvents = getRegisteredEvents();
    return registeredEvents.some(e => e.id === eventId);
}

// Get registered events from localStorage
function getRegisteredEvents() {
    const stored = localStorage.getItem('eventTribeRegisteredEvents');
    return stored ? JSON.parse(stored) : [];
}

// Save registered event
function registerForEvent(event) {
    const registeredEvents = getRegisteredEvents();

    // Check if already registered
    if (!registeredEvents.some(e => e.id === event.id)) {
        registeredEvents.push({
            id: event.id,
            name: event.name,
            date: event.date,
            time: event.time,
            location: event.location,
            city: event.city,
            category: event.category,
            price: event.price,
            image: event.image
        });
        localStorage.setItem('eventTribeRegisteredEvents', JSON.stringify(registeredEvents));
    }
}

// Deregister/Cancel event registration
function deregisterEvent(eventId) {
    const registeredEvents = getRegisteredEvents();
    const filteredEvents = registeredEvents.filter(e => e.id !== eventId);
    localStorage.setItem('eventTribeRegisteredEvents', JSON.stringify(filteredEvents));
}

// Attach registration button handlers
function attachRegistrationHandlers() {
    const registerButtons = document.querySelectorAll('[data-register-btn]');

    registerButtons.forEach(btn => {
        // Clone button to remove previous event listeners before re-attaching
        // or just ensure we don't attach multiple times if we called this multiple times
        // simpler is just to add it, but since we are not re-rendering, 
        // this is only called once on load.

        btn.addEventListener('click', function (e) {
            const eventId = parseInt(this.dataset.registerBtn);
            // Construct event object from DOM
            const card = this.closest('.card');
            const buttonText = this.textContent.trim();

            if (buttonText === 'Register') {
                e.preventDefault();

                // Scrape data from DOM for storage
                if (card) {
                    const event = {
                        id: eventId,
                        name: card.dataset.name || card.querySelector('.card-title')?.textContent,
                        date: card.dataset.date,
                        location: card.dataset.location || card.querySelector('.venue')?.textContent,
                        category: card.dataset.category,
                        price: card.dataset.price === 'free' ? 0 : parseFloat(card.dataset.price),
                        image: card.querySelector('.card-img-top')?.src,
                        city: 'Bangalore' // hardcoded or add as data attribute
                    };

                    registerForEvent(event);
                    this.textContent = 'Registered';
                    this.classList.remove('btn-primary');
                    this.classList.add('btn-secondary');
                    this.href = '#';
                    this.style.cursor = 'pointer';
                }
            } else if (buttonText === 'Registered') {
                e.preventDefault();
                if (confirm('Are you sure you want to cancel your registration for this event?')) {
                    deregisterEvent(eventId);
                    this.textContent = 'Register';
                    this.classList.remove('btn-secondary');
                    this.classList.add('btn-primary');
                    this.href = `./event.html?id=${eventId}`;

                    // Reload tickets page if we're on it
                    if (window.location.pathname.includes('tickets.html')) {
                        window.location.reload();
                    }

                    // No need to re-render, just update button state
                }
            }
        });
    });
}

// Filter events
function filterEvents() {
    const searchInput = document.querySelector('.search-bar input');
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const priceFilter = document.getElementById('price-filter');

    // Get all static cards
    const cards = document.querySelectorAll('.event-cards .card');
    let hasVisibleEvents = false;

    cards.forEach(card => {
        let isVisible = true;

        // Data attributes
        const name = (card.dataset.name || card.querySelector('.card-title').textContent).toLowerCase();
        const category = card.dataset.category;
        const date = card.dataset.date;
        const price = card.dataset.price;
        const location = (card.dataset.location || '').toLowerCase();

        // Search filter
        if (searchInput && searchInput.value.trim()) {
            const searchTerm = searchInput.value.toLowerCase();
            const matchesSearch = name.includes(searchTerm) ||
                location.includes(searchTerm) ||
                category.toLowerCase().includes(searchTerm);
            if (!matchesSearch) isVisible = false;
        }

        // Category filter
        if (isVisible && categoryFilter && categoryFilter.value !== 'all') {
            if (category !== categoryFilter.value) isVisible = false;
        }

        // Date filter
        if (isVisible && dateFilter && dateFilter.value) {
            if (date !== dateFilter.value) isVisible = false;
        }

        // Price filter
        if (isVisible && priceFilter && priceFilter.value !== 'all') {
            if (price !== priceFilter.value) isVisible = false;
        }

        // Toggle visibility
        card.style.display = isVisible ? 'flex' : 'none'; // Assuming flex for card layout or block
        if (isVisible) hasVisibleEvents = true;
    });

    // Handle empty state
    const container = document.querySelector('.event-cards');
    let emptyState = container.querySelector('.empty-state');

    if (!hasVisibleEvents) {
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = '<p>No events found. Try adjusting your filters.</p>';
            container.appendChild(emptyState);
        }
        emptyState.style.display = 'block';
    } else if (emptyState) {
        emptyState.style.display = 'none';
    }
}

// Category descriptions
const categoryDescriptions = {
    'Music': 'Immerse yourself in live performances, concerts, and musical gatherings.',
    'Night Life': 'Explore the city\'s best clubs, pubs, and late-night events.',
    'Performing & Visual Arts': 'Discover theater, dance, painting exhibitions, and creative showcases.',
    'Holidays': 'Celebrate special occasions with festive markets and seasonal gatherings.',
    'Food & Drinks': 'Savor culinary delights, food festivals, and tasting workshops.'
};

// Initialize category info display
function initCategoryInfo() {
    const categoryLinks = document.querySelectorAll('.event-categories .icons');
    const categoryInfoDiv = document.getElementById('category-info');

    if (!categoryInfoDiv) return;

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // Use data-category attribute if available, otherwise fallback to figcaption text
            let category = this.dataset.category;

            if (!category) {
                const figcaption = this.querySelector('figcaption');
                if (figcaption) {
                    category = figcaption.textContent.trim();
                    // Handle multi-line category names if necessary (legacy fallback)
                    if (category.includes('\n')) {
                        category = category.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
                    }
                }
            }

            if (!category) return;

            // Map category names to keys
            const categoryMap = {
                'Music': 'Music',
                'Night Life': 'Night Life',
                'Performing & Visual Arts': 'Performing & Visual Arts',
                'Holidays': 'Holidays',
                'Food & Drinks': 'Food & Drinks'
            };

            const categoryKey = categoryMap[category] || category;

            if (categoryDescriptions[categoryKey]) {
                categoryInfoDiv.innerHTML = `
                    <h3>${categoryKey}</h3>
                    <p>${categoryDescriptions[categoryKey]}</p>
                `;
                categoryInfoDiv.classList.add('active');

                // Update filter dropdown and trigger filter
                const categoryFilter = document.getElementById('category-filter');
                if (categoryFilter) {
                    // Find option with matching text or value
                    const options = Array.from(categoryFilter.options);
                    const matchingOption = options.find(opt => opt.value === categoryKey || opt.text === categoryKey);

                    if (matchingOption) {
                        categoryFilter.value = matchingOption.value;
                        // Trigger change event manually
                        const event = new Event('change');
                        categoryFilter.dispatchEvent(event);
                    }
                }

                // Scroll to events section
                const eventsSection = document.querySelector('.events');
                if (eventsSection) {
                    eventsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', filterEvents);
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                filterEvents();
            }
        });
    }

    const searchButton = document.querySelector('.search-bar .bi-search:last-child');
    if (searchButton) {
        searchButton.addEventListener('click', filterEvents);
    }
}

// Initialize filters
function initFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const dateFilter = document.getElementById('date-filter');
    const priceFilter = document.getElementById('price-filter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }

    if (dateFilter) {
        dateFilter.addEventListener('change', filterEvents);
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', filterEvents);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    // Load events if on index page
    if (document.querySelector('.event-cards')) {
        loadEvents();
        initCategoryInfo();
        initSearch();
        initFilters();
    }

    // Initialize mobile menu
    initMobileMenu();

    // Handle login state and sign out
    initLoginState();
});

// Sign out function
function signOut() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = './login.html';
}

// Initialize login state and sign out functionality
function initLoginState() {
    if (localStorage.getItem('loggedIn') === 'true') {
        const loginLinks = document.querySelectorAll('nav.navbar a[href="./login.html"], .mobile-nav a[href="./login.html"]');
        loginLinks.forEach(link => {
            link.innerHTML = '<span>Sign Out</span>';
            link.setAttribute('title', 'Sign Out');
            link.href = '#';
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (confirm('Are you sure you want to sign out?')) {
                    signOut();
                }
            });
        });
    }
}

// Newsletter handler
function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! We\'ll keep you updated with the latest events.');
    event.target.reset();
}

// Back to top button functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize back to top on page load
document.addEventListener('DOMContentLoaded', function () {
    initBackToTop();

    // Attach newsletter handlers
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletter);
    });
});

// Export functions for use in other scripts
window.eventTribe = {
    loadEvents,
    saveEvents,
    registerForEvent,
    deregisterEvent,
    getRegisteredEvents,
    filterEvents,
    signOut,
    handleNewsletter,
    events
};

