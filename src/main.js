import './style.css'
import { renderNav, initNav } from './components/nav.js'
import { renderFooter } from './components/footer.js'
import { initRouter, getRoute } from './router.js'

// Mount nav & footer
const navRoot = document.getElementById('nav-root')
const footerRoot = document.getElementById('footer-root')
const app = document.getElementById('app')

if (navRoot) {
  navRoot.innerHTML = renderNav()
  initNav()
}

if (footerRoot) {
  footerRoot.innerHTML = renderFooter()
}

// Add padding to account for fixed nav + ticker
if (app) {
  app.style.paddingTop = '0'
}

// Init router
initRouter(app, navRoot)

// Update active nav link on initial load
function updateNavActive() {
  const path = getRoute()
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('data-path')
    if (href === path) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}

updateNavActive()
window.addEventListener('hashchange', updateNavActive)
