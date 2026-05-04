export function renderHome() {
  return `
    <div class="page-transition">

      <!-- Hero -->
      <section class="relative min-h-screen flex items-center pt-24 overflow-hidden grid-lines">

        <!-- Background elements -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl animate-float"></div>
          <div class="absolute bottom-1/3 left-1/5 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl animate-float-delay"></div>
          <!-- Grid corner marks -->
          <div class="absolute top-32 left-6 w-6 h-6 border-t border-l border-lime-400/30"></div>
          <div class="absolute top-32 right-6 w-6 h-6 border-t border-r border-lime-400/30"></div>
          <div class="absolute bottom-12 left-6 w-6 h-6 border-b border-l border-lime-400/30"></div>
          <div class="absolute bottom-12 right-6 w-6 h-6 border-b border-r border-lime-400/30"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 w-full py-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <!-- Left: Text -->
            <div>
              <div class="section-label">Cargill Open Innovation</div>

              <h1 class="font-display text-7xl md:text-9xl text-white leading-none mb-6 tracking-wide">
                FARM<br/>
                <span class="text-lime-400">DATA</span><br/>
                FOR THE<br/>
                <span class="relative">
                  FUTURE
                  <span class="absolute -bottom-2 left-0 right-0 h-1 bg-lime-400/30"></span>
                </span>
              </h1>

              <p class="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                Real sustainability data from Cargill's global livestock operations — open to university students worldwide. Solve real problems. Win real prizes. Launch real careers.
              </p>

              <div class="flex flex-wrap gap-4 mb-12">
                <a href="#/challenges" class="btn-primary clip-corner">
                  <span>Join a Challenge</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </a>
                <a href="#/data" class="btn-outline clip-corner">
                  Explore Data
                </a>
              </div>

              <!-- Micro stats -->
              <div class="flex gap-8">
                <div>
                  <div class="font-display text-3xl text-lime-400">127+</div>
                  <div class="font-mono text-xs text-gray-500 tracking-wider">Universities</div>
                </div>
                <div class="w-px bg-forest-600"></div>
                <div>
                  <div class="font-display text-3xl text-lime-400">$250K</div>
                  <div class="font-mono text-xs text-gray-500 tracking-wider">Prize Pool</div>
                </div>
                <div class="w-px bg-forest-600"></div>
                <div>
                  <div class="font-display text-3xl text-lime-400">2.4M</div>
                  <div class="font-mono text-xs text-gray-500 tracking-wider">Live Data Points</div>
                </div>
              </div>
            </div>

            <!-- Right: Live Data Widget -->
            <div class="relative">
              <div class="bg-forest-800 border border-forest-600 clip-corner-lg p-6 glow-lime relative overflow-hidden">
                <!-- Header -->
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <div class="font-mono text-xs text-gray-500 tracking-widest uppercase mb-1">Live Dashboard</div>
                    <div class="font-display text-xl text-white tracking-wide">SUSTAINABILITY METRICS</div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                    <span class="font-mono text-xs text-lime-400">LIVE</span>
                  </div>
                </div>

                <!-- Metrics -->
                <div class="space-y-4">
                  ${[
                    { label: 'CO₂ Emissions', value: '−12.4%', progress: 76, unit: 'vs 2020 baseline', color: 'lime' },
                    { label: 'Water Use', value: '−8.2%', progress: 62, unit: 'liters per kg feed', color: 'lime' },
                    { label: 'Land Use Efficiency', value: '+23.1%', progress: 88, unit: 'hectares optimized', color: 'gold' },
                    { label: 'Energy Consumption', value: '−15.7%', progress: 71, unit: 'kWh per ton', color: 'lime' },
                  ].map(m => `
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <span class="font-mono text-xs text-gray-400">${m.label}</span>
                        <div class="flex items-center gap-3">
                          <span class="font-mono text-xs text-gray-600">${m.unit}</span>
                          <span class="font-mono text-sm font-bold ${m.color === 'gold' ? 'text-gold-400' : 'text-lime-400'}">${m.value}</span>
                        </div>
                      </div>
                      <div class="progress-bar">
                        <div class="progress-fill ${m.color === 'gold' ? 'bg-gold-400' : ''}" data-progress="${m.progress}" style="width:0%"></div>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- Farm selector -->
                <div class="mt-6 pt-6 border-t border-forest-600">
                  <div class="font-mono text-xs text-gray-500 mb-3 tracking-widest">LIVESTOCK SEGMENTS</div>
                  <div class="flex gap-2">
                    ${['Swine', 'Dairy', 'Poultry'].map((s, i) => `
                      <button class="flex-1 font-mono text-xs py-2 border transition-all duration-200 ${i === 0 ? 'border-lime-400 text-lime-400 bg-lime-400/10' : 'border-forest-600 text-gray-500 hover:border-gray-500'}">
                        ${s}
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Shimmer overlay -->
                <div class="absolute inset-0 shimmer pointer-events-none"></div>
              </div>

              <!-- Floating label -->
              <div class="absolute -top-3 -right-3 bg-gold-400 text-forest-900 font-mono text-xs px-3 py-1 font-bold">
                REAL DATA
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ticker divider -->
      <div class="border-y border-forest-600 bg-forest-800 py-3 flex items-center gap-8 overflow-hidden">
        <span class="font-mono text-xs text-lime-400 px-6 whitespace-nowrap border-r border-forest-600">AGLAB IMPACT</span>
        <div class="flex gap-12 font-mono text-xs text-gray-500">
          <span>SWINE OPERATIONS <span class="text-white">14 Countries</span></span>
          <span>DAIRY FARMS <span class="text-white">8,400+</span></span>
          <span>POULTRY PARTNERS <span class="text-white">2,100+</span></span>
          <span>DATA REFRESHED <span class="text-lime-400">Every 15 min</span></span>
        </div>
      </div>

      <!-- How it works -->
      <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="text-center mb-16">
          <div class="section-label justify-center">
            <span class="w-8 h-px bg-lime-400"></span>
            The Model
            <span class="w-8 h-px bg-lime-400"></span>
          </div>
          <h2 class="font-display text-6xl text-white tracking-wide">HOW AGLAB WORKS</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-forest-600 reveal">
          ${[
            {
              step: '01',
              title: 'Access Real Data',
              desc: 'Cargill opens its proprietary sustainability datasets — CO₂ emissions, water use, land efficiency, energy consumption — from 14 countries. This is data no student has ever had access to.',
              icon: '⬡',
              color: 'lime'
            },
            {
              step: '02',
              title: 'Build Real Solutions',
              desc: 'Use our Digital Twin sandbox to test your proposals against real farm models. Your ideas aren\'t just PowerPoints — they run against actual livestock operation data.',
              icon: '⬡',
              color: 'gold'
            },
            {
              step: '03',
              title: 'Launch Real Careers',
              desc: 'Win prize money, receive Cargill job offers, or get funded for 3-month co-development sprints. Your work might ship to farms in 14 countries.',
              icon: '⬡',
              color: 'soil'
            },
          ].map((step, i) => `
            <div class="p-8 ${i < 2 ? 'border-r border-forest-600' : ''} relative group hover:bg-forest-800 transition-colors duration-300">
              <div class="font-display text-8xl text-forest-700 absolute top-4 right-6 leading-none group-hover:text-forest-600 transition-colors">${step.step}</div>
              <div class="relative">
                <div class="font-mono text-3xl mb-4 ${step.color === 'lime' ? 'text-lime-400' : step.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">${step.icon}</div>
                <h3 class="font-display text-2xl text-white tracking-wide mb-4">${step.title}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Impact Stats -->
      <section class="bg-forest-800 border-y border-forest-600 py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            ${[
              { count: 4218, suffix: '', label: 'Active Students', sub: 'across 127 universities' },
              { count: 250, suffix: 'K', label: 'Prize Pool (USD)', sub: 'current cycle' },
              { count: 14, suffix: '', label: 'Countries', sub: 'with live farm data' },
              { count: 36, suffix: '', label: 'Ideas Deployed', sub: 'to real Cargill farms' },
            ].map(s => `
              <div class="text-center reveal">
                <div class="stat-number" data-count="${s.count}" data-suffix="${s.suffix}">0</div>
                <div class="font-display text-lg text-white tracking-wide mt-2">${s.label}</div>
                <div class="font-mono text-xs text-gray-500 mt-1">${s.sub}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Challenge tiers -->
      <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="mb-16">
          <div class="section-label">Career Pipeline</div>
          <div class="flex items-end justify-between">
            <h2 class="font-display text-6xl text-white tracking-wide leading-none">THREE LEVELS<br/>ONE PIPELINE</h2>
            <a href="#/challenges" class="btn-outline clip-corner hidden md:flex">View All Challenges</a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          ${[
            {
              level: 'L1',
              name: 'EXPLORER',
              tagline: 'Analyse. Discover. Share.',
              desc: 'Dive into Cargill\'s open datasets. Submit insights and sustainability analyses. Perfect entry point for any student with curiosity.',
              prize: '$5,000',
              timeline: '4 weeks',
              skills: ['Data Analysis', 'Sustainability', 'Visualization'],
              color: 'lime',
              open: true
            },
            {
              level: 'L2',
              name: 'INNOVATOR',
              tagline: 'Design. Model. Pitch.',
              desc: 'Build a working prototype or business model using our Digital Twin sandbox. Compete in interdisciplinary teams matched across universities.',
              prize: '$50,000',
              timeline: '8 weeks',
              skills: ['Systems Design', 'AgTech', 'Business Model'],
              color: 'gold',
              open: true
            },
            {
              level: 'L3',
              name: 'BUILDER',
              tagline: 'Build. Deploy. Impact.',
              desc: 'By invitation. A funded 3-month co-development sprint inside Cargill. Your solution ships to real farms. Comes with a job offer consideration.',
              prize: '$150,000',
              timeline: '3 months',
              skills: ['Full Implementation', 'Farm Integration', 'Leadership'],
              color: 'soil',
              open: false
            },
          ].map(t => `
            <div class="card-dark clip-corner-lg relative overflow-hidden group">
              <!-- Level badge -->
              <div class="font-display text-6xl text-forest-700 absolute top-2 right-4 leading-none">${t.level}</div>

              <div class="relative">
                <div class="flex items-center justify-between mb-4">
                  <span class="${t.color === 'lime' ? 'tag-green' : t.color === 'gold' ? 'tag-gold' : 'tag-soil'}">${t.open ? 'OPEN' : 'BY INVITE'}</span>
                  <span class="font-mono text-xs text-gray-600">${t.timeline}</span>
                </div>

                <div class="font-mono text-xs text-gray-500 tracking-widest mb-1">LEVEL ${t.level.replace('L', '')}</div>
                <h3 class="font-display text-3xl text-white tracking-wide mb-1">${t.name}</h3>
                <p class="${t.color === 'lime' ? 'text-lime-400' : t.color === 'gold' ? 'text-gold-400' : 'text-soil-400'} font-mono text-xs mb-4">${t.tagline}</p>
                <p class="text-gray-500 text-sm leading-relaxed mb-6">${t.desc}</p>

                <div class="flex flex-wrap gap-2 mb-6">
                  ${t.skills.map(s => `<span class="font-mono text-xs px-2 py-1 bg-forest-700 text-gray-400 border border-forest-600">${s}</span>`).join('')}
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-forest-600">
                  <div>
                    <div class="font-mono text-xs text-gray-600">Prize</div>
                    <div class="font-display text-2xl ${t.color === 'lime' ? 'text-lime-400' : t.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">${t.prize}</div>
                  </div>
                  <a href="#/challenges" class="font-mono text-xs ${t.open ? 'text-lime-400 hover:text-lime-300' : 'text-gray-600'} tracking-wider transition-colors">
                    ${t.open ? 'APPLY →' : 'LEARN MORE →'}
                  </a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="max-w-7xl mx-auto px-6 pb-24">
        <div class="bg-lime-400 clip-corner-lg p-12 md:p-16 relative overflow-hidden reveal">
          <div class="absolute top-0 right-0 bottom-0 w-1/2 opacity-10">
            <div class="grid-lines w-full h-full"></div>
          </div>
          <div class="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="font-mono text-xs text-forest-700 tracking-widest uppercase mb-2">Limited Spots Available</div>
              <h2 class="font-display text-5xl md:text-6xl text-forest-900 leading-none tracking-wide">
                DON'T JUST<br/>STUDY FARMS.<br/>CHANGE THEM.
              </h2>
            </div>
            <div class="flex flex-col gap-4">
              <p class="text-forest-700 leading-relaxed">
                Applications for Cycle 3 close June 30, 2025. Join 4,000+ students already working with live agricultural data.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#/challenges" class="inline-flex items-center gap-2 bg-forest-900 text-lime-400 font-bold py-3 px-8 text-sm tracking-widest uppercase clip-corner hover:bg-forest-800 transition-colors">
                  Apply Now →
                </a>
                <a href="#/community" class="inline-flex items-center gap-2 border border-forest-900/30 text-forest-900 font-bold py-3 px-8 text-sm tracking-widest uppercase hover:bg-forest-900/10 transition-colors">
                  Meet the Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `
}
