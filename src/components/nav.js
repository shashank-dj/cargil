export function renderNav() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-forest-600 bg-forest-900/90 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <!-- Logo -->
        <a href="#/" class="flex items-center gap-3 group">
          <div class="w-8 h-8 bg-lime-400 flex items-center justify-center clip-corner">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="#0A2218"/>
              <path d="M8 5V11M5 6.5L8 5L11 6.5" stroke="#0A2218" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <span class="font-display text-xl text-white tracking-wider leading-none block">CARGILL</span>
            <span class="font-mono text-[9px] text-lime-400 tracking-[0.3em] leading-none">AGLAB</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8" data-tab-group="main-nav">
          <a href="#/" class="nav-link" data-path="/">Home</a>
          <a href="#/challenges" class="nav-link" data-path="/challenges">Challenges</a>
          <a href="#/data" class="nav-link" data-path="/data">Open Data</a>
          <a href="#/leaderboard" class="nav-link" data-path="/leaderboard">Leaderboard</a>
          <a href="#/community" class="nav-link" data-path="/community">Community</a>
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-4">
          <span class="hidden sm:flex items-center gap-2 font-mono text-xs text-lime-400">
            <span class="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            Live Data
          </span>
          <a href="#/challenges" class="btn-primary text-xs py-2 px-5 clip-corner">
            Apply Now
          </a>
        </div>

        <!-- Mobile menu button -->
        <button id="mobile-menu-btn" class="md:hidden text-gray-400 hover:text-lime-400 transition-colors" aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-forest-600 bg-forest-900 px-6 py-4">
        <div class="flex flex-col gap-4">
          <a href="#/" class="nav-link" data-path="/">Home</a>
          <a href="#/challenges" class="nav-link" data-path="/challenges">Challenges</a>
          <a href="#/data" class="nav-link" data-path="/data">Open Data</a>
          <a href="#/leaderboard" class="nav-link" data-path="/leaderboard">Leaderboard</a>
          <a href="#/community" class="nav-link" data-path="/community">Community</a>
        </div>
      </div>
    </nav>

    <!-- Ticker bar -->
    <div class="fixed top-16 left-0 right-0 z-40 bg-forest-950 border-b border-forest-600 h-8 overflow-hidden flex items-center">
      <div class="ticker-inner flex items-center gap-16 font-mono text-[10px] text-gray-500">
        ${Array(2).fill(`
          <span>CO₂ REDUCTION <span class="text-lime-400">↓ 12.4%</span></span>
          <span class="text-forest-600">•</span>
          <span>WATER EFFICIENCY <span class="text-lime-400">↑ 8.2%</span></span>
          <span class="text-forest-600">•</span>
          <span>LAND USE OPTIMIZED <span class="text-gold-400">34.7K HA</span></span>
          <span class="text-forest-600">•</span>
          <span>ACTIVE STUDENTS <span class="text-lime-400">4,218</span></span>
          <span class="text-forest-600">•</span>
          <span>CHALLENGES OPEN <span class="text-lime-400">3</span></span>
          <span class="text-forest-600">•</span>
          <span>TOTAL PRIZE POOL <span class="text-gold-400">$250,000</span></span>
          <span class="text-forest-600">•</span>
          <span>UNIVERSITIES JOINED <span class="text-lime-400">127</span></span>
          <span class="text-forest-600">•</span>
          <span>DATA POINTS LIVE <span class="text-lime-400">2.4M</span></span>
          <span class="text-forest-600">•</span>
        `).join('')}
      </div>
    </div>
  `
}

export function initNav() {
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'))
  }

  // Close mobile menu on nav link click
  document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'))
  })
}
