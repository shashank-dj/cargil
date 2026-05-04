import { renderHome } from './pages/home.js'
import { renderChallenges } from './pages/challenges.js'
import { renderData } from './pages/data.js'
import { renderLeaderboard } from './pages/leaderboard.js'
import { renderCommunity } from './pages/community.js'

const routes = {
  '/': renderHome,
  '/challenges': renderChallenges,
  '/data': renderData,
  '/leaderboard': renderLeaderboard,
  '/community': renderCommunity,
}

export function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash.startsWith('/') ? hash : '/' + hash
}

export function navigate(path) {
  window.location.hash = path
}

export function initRouter(appEl, navEl) {
  const render = () => {
    const path = getRoute()
    const page = routes[path] || routes['/']

    // Animate out
    appEl.style.opacity = '0'
    appEl.style.transform = 'translateY(10px)'

    setTimeout(() => {
      appEl.innerHTML = page()
      appEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
      appEl.style.opacity = '1'
      appEl.style.transform = 'translateY(0)'

      // Re-run page scripts
      initPageScripts()

      // Update nav active state
      if (navEl) updateNavActive(path)

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 150)
  }

  window.addEventListener('hashchange', render)
  render()
}

function updateNavActive(currentPath) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('data-path')
    link.classList.toggle('active', href === currentPath)
  })
}

function initPageScripts() {
  // Counter animations
  document.querySelectorAll('[data-count]').forEach(el => {
    animateCounter(el)
  })

  // Intersection observer for fade-in elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-8')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700')
    observer.observe(el)
  })

  // Progress bars
  setTimeout(() => {
    document.querySelectorAll('[data-progress]').forEach(bar => {
      bar.style.width = bar.getAttribute('data-progress') + '%'
    })
  }, 300)

  // Tab switching
  document.querySelectorAll('[data-tab-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-tab-group')
      const target = btn.getAttribute('data-tab-trigger')

      document.querySelectorAll(`[data-tab-group="${group}"] [data-tab-trigger]`).forEach(b => {
        b.classList.remove('bg-lime-400', 'text-forest-900')
        b.classList.add('text-gray-400')
      })
      btn.classList.add('bg-lime-400', 'text-forest-900')
      btn.classList.remove('text-gray-400')

      document.querySelectorAll(`[data-tab-content="${group}"]`).forEach(panel => {
        panel.classList.toggle('hidden', panel.getAttribute('data-tab-id') !== target)
      })
    })
  })
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'))
  const suffix = el.getAttribute('data-suffix') || ''
  const duration = 2000
  const start = performance.now()

  const update = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * target).toLocaleString() + suffix
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}
