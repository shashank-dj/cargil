export function renderCommunity() {
  const mentors = [
    { name: 'Dr. Sarah Veldhuis', role: 'Head of Sustainability Science', org: 'Cargill Animal Nutrition', expertise: ['Carbon Accounting', 'LCA'], avatar: 'SV' },
    { name: 'Prof. Klaus Hoffmann', role: 'Chair of Precision Agriculture', org: 'Wageningen University', expertise: ['Digital Twins', 'IoT Sensors'], avatar: 'KH' },
    { name: 'Dr. Priya Nair', role: 'AgTech Venture Partner', org: 'Cargill Ventures', expertise: ['Startup Building', 'AgTech'], avatar: 'PN' },
    { name: 'Dr. Carlos Mendez', role: 'Director, Feed Innovation', org: 'Cargill LATAM', expertise: ['Feed Science', 'Operations'], avatar: 'CM' },
    { name: 'Dr. Mei Lin', role: 'Data Science Lead', org: 'Cargill Digital', expertise: ['ML for Agriculture', 'Forecasting'], avatar: 'ML' },
    { name: 'Prof. Anya Petrov', role: 'Animal Welfare Research', org: 'UC Davis', expertise: ['Livestock Behavior', 'Ethics'], avatar: 'AP' },
  ]

  const alumni = [
    { name: 'Thomas van der Berg', outcome: 'Hired as Sustainability Analyst, Cargill Netherlands', cycle: 'Cycle 1 Winner', flag: '🇳🇱', quote: 'AgLab gave me access to data I could never have studied in a classroom.' },
    { name: 'Aisha Okonkwo', outcome: 'Launched FeedMetrics — funded by Cargill Ventures', cycle: 'Cycle 1 Top 5', flag: '🇳🇬', quote: 'I built a startup from my AgLab submission. Cargill wrote the first check.' },
    { name: 'Lucas Ferreira', outcome: 'PhD at ESALQ-USP, sponsored by Cargill', cycle: 'Cycle 2 Runner-up', flag: '🇧🇷', quote: 'My research is now directly connected to decisions on 3,000 Brazilian farms.' },
  ]

  const students = [
    { name: 'Amara K.', university: 'University of Nairobi', role: 'Data Scientist', looking: 'Team for Land Use Challenge', flag: '🇰🇪', skills: ['Python', 'GIS', 'ML'] },
    { name: 'Jin W.', university: 'Nanjing Agricultural Univ.', role: 'Agronomist', looking: 'Team for Poultry Twin', flag: '🇨🇳', skills: ['Animal Science', 'R', 'Stats'] },
    { name: 'Emre T.', university: 'Middle East Technical Univ.', role: 'Engineer', looking: 'Team for Feed Challenge', flag: '🇹🇷', skills: ['Simulation', 'Python', 'IoT'] },
    { name: 'Sofia M.', university: 'University of Buenos Aires', role: 'Business Strategist', looking: 'Any L2 Challenge', flag: '🇦🇷', skills: ['Strategy', 'Finance', 'Spanish/English'] },
    { name: 'Ravi S.', university: 'IIT Bombay', role: 'Full-Stack Dev', looking: 'Digital Twin challenge', flag: '🇮🇳', skills: ['React', 'FastAPI', 'Cloud'] },
    { name: 'Chiara B.', university: 'Politecnico di Milano', role: 'Sustainability Engineer', looking: 'Any team', flag: '🇮🇹', skills: ['LCA', 'Excel', 'Carbon Accounting'] },
  ]

  return `
    <div class="page-transition pt-24">

      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Community Hub</div>
        <h1 class="font-display text-7xl text-white tracking-wide leading-none mb-4">COMMUNITY</h1>
        <p class="text-gray-400 max-w-xl leading-relaxed">
          127 universities. 14 countries. One shared mission. Find your team, meet mentors from Cargill, and see where AgLab can take your career.
        </p>
      </section>

      <!-- Team Matchmaking -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Team Matchmaking</div>
        <div class="flex items-end justify-between mb-8">
          <h2 class="font-display text-4xl text-white tracking-wide">FIND YOUR TEAM</h2>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            <span class="font-mono text-xs text-lime-400">6 students looking now</span>
          </div>
        </div>

        <!-- Profile filter -->
        <div class="flex flex-wrap gap-3 mb-8">
          ${['All Roles', 'Data Scientists', 'Agronomists', 'Business', 'Engineers'].map((f, i) => `
            <button class="font-mono text-xs px-4 py-2 border transition-all duration-200 ${i === 0 ? 'bg-lime-400 text-forest-900 border-lime-400' : 'border-forest-600 text-gray-400 hover:border-gray-500'}">
              ${f}
            </button>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
          ${students.map(s => `
            <div class="card-dark clip-corner group hover:border-lime-400/40">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-forest-700 border border-forest-600 flex items-center justify-center font-display text-lg text-lime-400 shrink-0 clip-corner">
                  ${s.flag}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-mono text-sm text-white">${s.name}</div>
                  <div class="font-mono text-xs text-gray-500 truncate">${s.university}</div>
                  <div class="font-mono text-xs text-lime-400 mt-0.5">${s.role}</div>
                </div>
                <span class="tag-green text-xs shrink-0">Open</span>
              </div>
              <div class="mt-4 pt-4 border-t border-forest-600">
                <div class="font-mono text-xs text-gray-600 mb-2">LOOKING FOR</div>
                <div class="font-mono text-xs text-gray-300 mb-3">${s.looking}</div>
                <div class="flex flex-wrap gap-1">
                  ${s.skills.map(sk => `<span class="font-mono text-xs px-2 py-0.5 bg-forest-700 text-gray-400 border border-forest-600">${sk}</span>`).join('')}
                </div>
              </div>
              <button class="mt-4 w-full font-mono text-xs text-lime-400 py-2 border border-forest-600 hover:border-lime-400/50 hover:bg-lime-400/5 transition-all">
                CONNECT →
              </button>
            </div>
          `).join('')}
        </div>

        <div class="mt-6 text-center">
          <button class="btn-outline clip-corner text-xs">Add Your Profile to Matchmaking</button>
        </div>
      </section>

      <!-- Mentors -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Expert Network</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">MENTORS & EXPERTS</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          ${mentors.map(m => `
            <div class="card-dark clip-corner group">
              <div class="flex items-start gap-4 mb-4">
                <div class="w-14 h-14 bg-forest-700 border border-forest-600 flex items-center justify-center font-display text-xl text-lime-400 shrink-0 group-hover:border-lime-400/40 transition-colors clip-corner">
                  ${m.avatar}
                </div>
                <div>
                  <div class="font-mono text-sm text-white">${m.name}</div>
                  <div class="font-mono text-xs text-lime-400">${m.role}</div>
                  <div class="font-mono text-xs text-gray-500">${m.org}</div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1">
                ${m.expertise.map(e => `<span class="tag-green text-xs">${e}</span>`).join('')}
              </div>
              <button class="mt-4 w-full font-mono text-xs text-gray-500 py-2 border border-forest-600 hover:border-gray-500 hover:text-gray-300 transition-all">
                VIEW PROFILE →
              </button>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Alumni stories -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Career Pipeline</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">ALUMNI STORIES</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          ${alumni.map(a => `
            <div class="card-dark clip-corner-lg relative overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div class="relative">
                <div class="font-mono text-4xl mb-4">${a.flag}</div>
                <div class="font-mono text-xs text-lime-400 mb-1">${a.cycle}</div>
                <h3 class="font-display text-xl text-white tracking-wide mb-2">${a.name}</h3>
                <p class="text-gray-500 text-xs leading-relaxed mb-4 italic">"${a.quote}"</p>
                <div class="pt-4 border-t border-forest-600">
                  <div class="font-mono text-xs text-gray-600 mb-1">NOW</div>
                  <div class="font-mono text-xs text-lime-400">${a.outcome}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- University hub & professor resources -->
      <section class="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">

          <!-- Professor hub -->
          <div class="bg-forest-800 border border-forest-600 clip-corner-lg p-8">
            <div class="section-label">For Educators</div>
            <h3 class="font-display text-3xl text-white tracking-wide mb-4">PROFESSOR HUB</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Integrate AgLab into your courses. We provide ready-made datasets, syllabi modules, and guided projects for sustainability, data science, and agri-business programs.
            </p>
            <ul class="space-y-3 mb-6">
              ${[
                'Ready-made lecture modules for 12 disciplines',
                'Pre-cleaned datasets sized for classroom use',
                'Auto-graded submission tools',
                'Priority access to Cargill guest lecturers',
                'Research partnership opportunities',
              ].map(item => `
                <li class="flex items-start gap-3 font-mono text-xs text-gray-400">
                  <span class="text-lime-400 mt-0.5">✓</span>
                  ${item}
                </li>
              `).join('')}
            </ul>
            <button class="btn-outline clip-corner text-xs">Register as a Professor →</button>
          </div>

          <!-- AgTech launchpad -->
          <div class="bg-forest-800 border border-gold-400/20 clip-corner-lg p-8">
            <div class="section-label" style="--tw-text-opacity:1; color: rgb(245 200 66 / var(--tw-text-opacity))">
              <span class="w-8 h-px bg-gold-400 block"></span>
              For Entrepreneurs
            </div>
            <h3 class="font-display text-3xl text-white tracking-wide mb-4">AGTECH LAUNCHPAD</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Not ready to join Cargill? Winners who want to build independently can pitch to Cargill Ventures for seed funding and join our 6-month AgTech incubator.
            </p>
            <div class="space-y-4 mb-6">
              ${[
                { label: 'Seed Funding Available', value: 'Up to $500K' },
                { label: 'Incubator Duration', value: '6 months' },
                { label: 'Startups Funded So Far', value: '3 (Cycle 1 & 2)' },
                { label: 'Cargill as First Customer', value: 'For qualifying ideas' },
              ].map(item => `
                <div class="data-row">
                  <span class="font-mono text-xs text-gray-600">${item.label}</span>
                  <span class="font-mono text-xs text-gold-400">${item.value}</span>
                </div>
              `).join('')}
            </div>
            <button class="inline-flex items-center gap-2 bg-gold-400 text-forest-900 font-bold py-3 px-8 text-xs tracking-widest uppercase clip-corner hover:bg-gold-300 transition-colors">
              Apply to Launchpad →
            </button>
          </div>
        </div>

        <!-- University map placeholder -->
        <div class="mt-6 bg-forest-800 border border-forest-600 clip-corner-lg p-8 reveal">
          <div class="section-label">Global Network</div>
          <h3 class="font-display text-3xl text-white tracking-wide mb-2">127 UNIVERSITIES. 6 CONTINENTS.</h3>
          <p class="text-gray-500 text-sm mb-6">From Wageningen to Nairobi to São Paulo — the world's agricultural talent is already here.</p>
          <div class="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            ${[
              { region: 'Europe', count: 42, flag: '🇪🇺' },
              { region: 'N. America', count: 28, flag: '🇺🇸' },
              { region: 'Asia', count: 24, flag: '🌏' },
              { region: 'S. America', count: 18, flag: '🌎' },
              { region: 'Africa', count: 11, flag: '🌍' },
              { region: 'Oceania', count: 4, flag: '🇦🇺' },
            ].map(r => `
              <div class="card-dark py-4 clip-corner">
                <div class="text-2xl mb-1">${r.flag}</div>
                <div class="font-display text-2xl text-lime-400">${r.count}</div>
                <div class="font-mono text-xs text-gray-500">${r.region}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

    </div>
  `
}
