// Professional Portfolio - Main JavaScript

// Projects data
const projectsData = [
  {
    title: 'E-Commerce Platform',
    tech: 'React, Node.js, MongoDB',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
    github: 'https://github.com/saketbhatt/ecommerce-platform',
    demo: 'https://demo-ecommerce.saketbhatt.dev'
  },
  {
    title: 'Task Management App',
    tech: 'Vue.js, Express, PostgreSQL',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    github: 'https://github.com/saketbhatt/task-manager',
    demo: 'https://tasks.saketbhatt.dev'
  },
  {
    title: 'Data Visualization Dashboard',
    tech: 'D3.js, Python, Flask',
    description: 'Interactive dashboard for complex data visualization with real-time analytics and reporting.',
    github: 'https://github.com/saketbhatt/data-dashboard',
    demo: 'https://dashboard.saketbhatt.dev'
  },
  {
    title: 'Mobile Weather App',
    tech: 'React Native, TypeScript',
    description: 'Cross-platform weather application with location-based forecasts and weather alerts.',
    github: 'https://github.com/saketbhatt/weather-app',
    demo: 'https://weather.saketbhatt.dev'
  }
];

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Populate projects grid
function populateProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData.map(project => `
    <div class="project-card">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-tech">${project.tech}</p>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="${project.demo}" target="_blank" rel="noopener">Live Demo</a>
      </div>
    </div>
  `).join('');
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
function observeElements() {
  const elements = document.querySelectorAll('.section, .project-card, .experience-item');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 12, 26, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 12, 26, 0.9)';
  }
}

// Time-based theme variations (subtle)
function setTimeBasedTheme() {
  const hour = new Date().getHours();
  const root = document.documentElement;
  
  if (hour >= 6 && hour < 12) {
    root.style.setProperty('--accent2', '#4fd1c5');
  } else if (hour >= 12 && hour < 18) {
    root.style.setProperty('--accent2', '#63b3ed');
  } else if (hour >= 18 && hour < 22) {
    root.style.setProperty('--accent2', '#a78bfa');
  } else {
    root.style.setProperty('--accent2', '#ff00c8');
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  observeElements();
  setTimeBasedTheme();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Add subtle console message
  console.log('%cWelcome to my portfolio! 🚀', 'color: #00ffe7; font-size: 16px; font-weight: bold;');
});
