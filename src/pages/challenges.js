export function renderChallenges() {
  const challenges = [
    {
      id: 'swine-co2',
      level: 'L1',
      levelName: 'Explorer',
      title: 'Mapping Carbon Hotspots in Swine Operations',
      desc: 'Analyse CO₂ emission patterns across 3,200 swine farms in Europe and Southeast Asia. Identify the top 10% highest-emission operations and propose data-driven intervention strategies.',
      tags: ['Swine', 'CO₂', 'Europe', 'Southeast Asia'],
      prize: '$5,000',
      teams: 312,
      deadline: 'June 30, 2025',
      daysLeft: 47,
      difficulty: 'Beginner Friendly',
      color: 'lime',
      datasets: ['CO₂ Emission Records (2020–2024)', 'Farm Size & Density Data', 'Feed Conversion Ratios'],
      skills: ['Python / R', 'Data Visualization', 'Sustainability Analysis'],
    },
    {
      id: 'dairy-water',
      level: 'L1',
      levelName: 'Explorer',
      title: 'Water Efficiency Benchmarking: Dairy 2025',
      desc: 'Build a benchmarking model comparing water consumption across Cargill\'s 8,400 dairy partner farms. Identify best practices and create a scalable efficiency playbook.',
      tags: ['Dairy', 'Water', 'Global'],
      prize: '$5,000',
      teams: 198,
      deadline: 'July 15, 2025',
      daysLeft: 62,
      difficulty: 'Beginner Friendly',
      color: 'lime',
      datasets: ['Water Usage Logs (Per-Farm)', 'Herd Size Data', 'Climate Zone Records'],
      skills: ['Excel / Tableau', 'Statistical Modeling', 'Report Writing'],
    },
    {
      id: 'poultry-digital',
      level: 'L2',
      levelName: 'Innovator',
      title: 'Digital Twin for Poultry House Climate Control',
      desc: 'Design a digital twin model for a 50,000-bird poultry house that optimizes energy use for heating/cooling while maintaining welfare standards. Test your model in our sandbox.',
      tags: ['Poultry', 'Energy', 'IoT', 'Digital Twin'],
      prize: '$50,000',
      teams: 87,
      deadline: 'August 1, 2025',
      daysLeft: 79,
      difficulty: 'Intermediate',
      color: 'gold',
      datasets: ['Real-Time Sensor Data (Temp, Humidity, CO₂)', 'Energy Bills 2020–2024', 'Welfare Compliance Records'],
      skills: ['Simulation Modeling', 'IoT / Sensor Data', 'Systems Engineering'],
    },
    {
      id: 'land-use-optimizer',
      level: 'L2',
      levelName: 'Innovator',
      title: 'Land Use Optimizer for Mixed Livestock Operations',
      desc: 'Build an AI-powered tool that recommends optimal land allocation for farms running mixed swine and dairy operations. Evaluate against Cargill\'s land use targets.',
      tags: ['Land Use', 'AI/ML', 'Swine', 'Dairy'],
      prize: '$50,000',
      teams: 64,
      deadline: 'August 15, 2025',
      daysLeft: 93,
      difficulty: 'Advanced',
      color: 'gold',
      datasets: ['GIS Farm Boundary Data', 'Yield & Output Records', 'Soil Health Indices'],
      skills: ['Machine Learning', 'GIS / Geospatial', 'Agricultural Science'],
    },
    {
      id: 'end-to-end-feed',
      level: 'L3',
      levelName: 'Builder',
      title: 'End-to-End Feed Formula Sustainability Engine',
      desc: 'By invitation only. Build a production-grade tool integrating with Cargill\'s feed formulation systems to minimize carbon footprint per unit of animal protein while maintaining nutrition standards.',
      tags: ['Feed', 'Carbon', 'Production-Grade', 'Invite-Only'],
      prize: '$150,000',
      teams: 12,
      deadline: 'Sept 30, 2025',
      daysLeft: null,
      difficulty: 'Expert',
      color: 'soil',
      datasets: ['Full Feed Ingredient Database', 'Nutritional Requirements Library', 'Scope 3 Emission Factors'],
      skills: ['Software Engineering', 'Nutritional Science', 'Supply Chain'],
    },
  ]

  return `
    <div class="page-transition pt-24">

      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Active Challenges</div>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 class="font-display text-7xl text-white tracking-wide leading-none">CHALLENGES</h1>
            <p class="text-gray-400 mt-4 max-w-lg">
              Real problems. Real data. Real stakes. Every challenge uses live Cargill sustainability data and awards real prizes — including job opportunities.
            </p>
          </div>
          <div class="flex gap-4 text-center">
            <div class="card-dark px-6 py-4">
              <div class="font-display text-3xl text-lime-400">5</div>
              <div class="font-mono text-xs text-gray-500">Open</div>
            </div>
            <div class="card-dark px-6 py-4">
              <div class="font-display text-3xl text-gold-400">$255K</div>
              <div class="font-mono text-xs text-gray-500">Prizes</div>
            </div>
            <div class="card-dark px-6 py-4">
              <div class="font-display text-3xl text-white">673</div>
              <div class="font-mono text-xs text-gray-500">Teams</div>
            </div>
          </div>
        </div>

        <!-- Filters -->
        <div class="flex flex-wrap gap-3 mt-8" data-tab-group="challenge-filter">
          ${['All', 'Explorer (L1)', 'Innovator (L2)', 'Builder (L3)', 'Swine', 'Dairy', 'Poultry'].map((f, i) => `
            <button
              data-tab-trigger="${f.toLowerCase().replace(/[^a-z0-9]/g, '')}"
              data-tab-group="challenge-filter"
              class="font-mono text-xs px-4 py-2 border transition-all duration-200 ${i === 0 ? 'bg-lime-400 text-forest-900 border-lime-400' : 'border-forest-600 text-gray-400 hover:border-gray-500'}"
            >
              ${f}
            </button>
          `).join('')}
        </div>
      </section>

      <!-- Challenge cards -->
      <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="space-y-6">
          ${challenges.map(c => `
            <div class="card-dark clip-corner-lg relative overflow-hidden reveal group">

              <!-- Level stripe -->
              <div class="absolute left-0 top-0 bottom-0 w-1 ${c.color === 'lime' ? 'bg-lime-400' : c.color === 'gold' ? 'bg-gold-400' : 'bg-soil-400'}"></div>

              <div class="pl-4">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  <!-- Main info -->
                  <div class="lg:col-span-2">
                    <div class="flex flex-wrap items-center gap-3 mb-3">
                      <span class="${c.color === 'lime' ? 'tag-green' : c.color === 'gold' ? 'tag-gold' : 'tag-soil'}">${c.level} · ${c.levelName}</span>
                      <span class="tag border-forest-600 text-gray-500">${c.difficulty}</span>
                      ${c.tags.map(t => `<span class="font-mono text-xs text-gray-600 px-2 py-0.5 bg-forest-700">${t}</span>`).join('')}
                    </div>

                    <h3 class="font-display text-2xl text-white tracking-wide mb-2 group-hover:text-lime-400 transition-colors">${c.title}</h3>
                    <p class="text-gray-500 text-sm leading-relaxed mb-4">${c.desc}</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div class="font-mono text-xs text-gray-600 tracking-wider mb-2">DATASETS PROVIDED</div>
                        <ul class="space-y-1">
                          ${c.datasets.map(d => `
                            <li class="flex items-center gap-2 font-mono text-xs text-gray-400">
                              <span class="${c.color === 'lime' ? 'text-lime-400' : c.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">▸</span>
                              ${d}
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                      <div>
                        <div class="font-mono text-xs text-gray-600 tracking-wider mb-2">SKILLS NEEDED</div>
                        <ul class="space-y-1">
                          ${c.skills.map(s => `
                            <li class="flex items-center gap-2 font-mono text-xs text-gray-400">
                              <span class="text-gray-600">○</span>
                              ${s}
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Side panel -->
                  <div class="border-l border-forest-600 pl-6 flex flex-col justify-between">
                    <div class="space-y-4">
                      <div class="data-row">
                        <span class="font-mono text-xs text-gray-600">Prize</span>
                        <span class="font-display text-2xl ${c.color === 'lime' ? 'text-lime-400' : c.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">${c.prize}</span>
                      </div>
                      <div class="data-row">
                        <span class="font-mono text-xs text-gray-600">Teams Entered</span>
                        <span class="font-mono text-sm text-white">${c.teams}</span>
                      </div>
                      <div class="data-row">
                        <span class="font-mono text-xs text-gray-600">Deadline</span>
                        <span class="font-mono text-sm text-white">${c.deadline}</span>
                      </div>
                      ${c.daysLeft ? `
                        <div>
                          <div class="flex justify-between mb-1">
                            <span class="font-mono text-xs text-gray-600">Time Remaining</span>
                            <span class="font-mono text-xs text-lime-400">${c.daysLeft} days</span>
                          </div>
                          <div class="progress-bar">
                            <div class="progress-fill" data-progress="${Math.floor((90 - c.daysLeft) / 90 * 100)}" style="width:0%"></div>
                          </div>
                        </div>
                      ` : `<div class="font-mono text-xs text-soil-400 py-2 border border-soil-400/30 px-3 text-center">INVITATION REQUIRED</div>`}
                    </div>

                    <button class="${c.color !== 'soil' ? 'btn-primary' : 'btn-outline'} clip-corner mt-6 justify-center text-xs">
                      ${c.color !== 'soil' ? 'Apply for This Challenge' : 'Request Invitation'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Team matchmaking CTA -->
      <section class="max-w-7xl mx-auto px-6 pb-24">
        <div class="bg-forest-800 border border-forest-600 clip-corner-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal">
          <div>
            <div class="section-label">Cross-University Matching</div>
            <h2 class="font-display text-4xl text-white tracking-wide">DON'T HAVE A TEAM?</h2>
            <p class="text-gray-400 mt-3 leading-relaxed">
              We match you with students from different universities and disciplines — because agriculture's problems need data scientists, agronomists, and business thinkers in one room.
            </p>
          </div>
          <div class="flex flex-col gap-3">
            ${[
              { role: 'Data Scientist', university: 'TU Delft, Netherlands', status: 'Looking for team' },
              { role: 'Agronomist', university: 'Wageningen University', status: 'Looking for team' },
              { role: 'Business Strategist', university: 'INSEAD, France', status: 'Looking for team' },
            ].map(p => `
              <div class="flex items-center justify-between bg-forest-900 px-4 py-3 border border-forest-600">
                <div>
                  <div class="font-mono text-xs text-lime-400">${p.role}</div>
                  <div class="font-mono text-xs text-gray-500">${p.university}</div>
                </div>
                <span class="tag-green text-xs">${p.status}</span>
              </div>
            `).join('')}
            <a href="#/community" class="btn-primary clip-corner justify-center text-xs mt-2">
              Find My Team →
            </a>
          </div>
        </div>
      </section>

    </div>
  `
}
