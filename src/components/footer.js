export function renderFooter() {
  return `
    <footer class="bg-forest-950 border-t border-forest-600 mt-24">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <!-- Brand -->
          <div class="md:col-span-1">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-lime-400 flex items-center justify-center clip-corner">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="#0A2218"/>
                </svg>
              </div>
              <div>
                <span class="font-display text-xl text-white tracking-wider leading-none block">CARGILL</span>
                <span class="font-mono text-[9px] text-lime-400 tracking-[0.3em] leading-none">AGLAB</span>
              </div>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Where student minds meet real farm data. Building the next generation of agricultural innovators.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-8 h-8 border border-forest-600 flex items-center justify-center text-gray-500 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              </a>
              <a href="#" class="w-8 h-8 border border-forest-600 flex items-center justify-center text-gray-500 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" class="w-8 h-8 border border-forest-600 flex items-center justify-center text-gray-500 hover:border-lime-400 hover:text-lime-400 transition-colors">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              </a>
            </div>
          </div>

          <!-- Platform -->
          <div>
            <h4 class="font-mono text-xs tracking-widest text-lime-400 uppercase mb-4">Platform</h4>
            <ul class="space-y-2">
              ${['Open Data', 'Challenges', 'Leaderboard', 'Digital Twins', 'API Access'].map(item => `
                <li><a href="#" class="text-gray-500 text-sm hover:text-white transition-colors">${item}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h4 class="font-mono text-xs tracking-widest text-lime-400 uppercase mb-4">Community</h4>
            <ul class="space-y-2">
              ${['Student Teams', 'Professor Hub', 'Mentors', 'Alumni Network', 'AgTech Lab'].map(item => `
                <li><a href="#" class="text-gray-500 text-sm hover:text-white transition-colors">${item}</a></li>
              `).join('')}
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="font-mono text-xs tracking-widest text-lime-400 uppercase mb-4">Stay Updated</h4>
            <p class="text-gray-500 text-sm mb-4">New challenges, datasets, and opportunities delivered to your inbox.</p>
            <div class="flex">
              <input type="email" placeholder="your@university.edu" class="flex-1 bg-forest-800 border border-forest-600 border-r-0 px-4 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-lime-400 font-mono text-xs" />
              <button class="bg-lime-400 text-forest-900 px-4 font-bold text-xs hover:bg-lime-300 transition-colors">→</button>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-forest-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-mono text-xs text-gray-600">
            © 2025 Cargill AgLab. All rights reserved. A Cargill Animal Nutrition Initiative.
          </p>
          <div class="flex gap-8">
            <a href="#" class="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" class="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms</a>
            <a href="#" class="font-mono text-xs text-gray-600 hover:text-gray-400 transition-colors">Data Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `
}
