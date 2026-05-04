export function renderLeaderboard() {
  const teams = [
    { rank: 1, name: 'GreenHerd Collective', universities: ['Wageningen University', 'TU Delft'], country: '🇳🇱', score: 9840, challenge: 'Swine CO₂ Mapping', impact: 'Projected 18% CO₂ reduction', prize: '$5,000', badge: 'gold', status: 'Winner' },
    { rank: 2, name: 'Terra Flux', universities: ['ETH Zurich', 'University of Copenhagen'], country: '🇨🇭🇩🇰', score: 9510, challenge: 'Dairy Water Benchmarking', impact: '14% water savings model', prize: '$3,000', badge: 'silver', status: 'Runner-up' },
    { rank: 3, name: 'AgroMind Lab', universities: ['Purdue University', 'UC Davis'], country: '🇺🇸', score: 9210, challenge: 'Poultry Digital Twin', impact: 'Energy model ±3.2% accuracy', prize: '$2,000', badge: 'bronze', status: 'Top 3' },
    { rank: 4, name: 'DataSoil', universities: ['ESALQ-USP', 'FGV São Paulo'], country: '🇧🇷', score: 8870, challenge: 'Land Use Optimizer', impact: 'GIS model for 12 farm types', prize: 'Special Mention', badge: null, status: 'Top 10' },
    { rank: 5, name: 'FeedForward', universities: ['Ghent University', 'KU Leuven'], country: '🇧🇪', score: 8650, challenge: 'Swine CO₂ Mapping', impact: 'Feed-emission correlation model', prize: 'Special Mention', badge: null, status: 'Top 10' },
    { rank: 6, name: 'Carbon Zero Farms', universities: ['RMIT Australia', 'UQ Brisbane'], country: '🇦🇺', score: 8410, challenge: 'Dairy Water Benchmarking', impact: 'Real-time alert system', prize: '–', badge: null, status: 'Top 10' },
    { rank: 7, name: 'AgriSpark', universities: ['IIT Bombay', 'IIM Ahmedabad'], country: '🇮🇳', score: 8200, challenge: 'Land Use Optimizer', impact: 'ML land classification model', prize: '–', badge: null, status: 'Top 10' },
    { rank: 8, name: 'Nutriloop', universities: ['Nanjing Agricultural University'], country: '🇨🇳', score: 7990, challenge: 'Feed Conversion Analysis', impact: 'FCR optimization algorithm', prize: '–', badge: null, status: 'Top 10' },
    { rank: 9, name: 'SoilSense', universities: ['Nairobi University', 'ILRI Kenya'], country: '🇰🇪', score: 7740, challenge: 'Land Use Optimizer', impact: 'African smallholder adaptation', prize: '–', badge: null, status: 'Top 10' },
    { rank: 10, name: 'ClimateFeeder', universities: ['McGill University', 'UBC'], country: '🇨🇦', score: 7500, challenge: 'Poultry Digital Twin', impact: 'Climate stress simulation', prize: '–', badge: null, status: 'Top 10' },
  ]

  const impactStats = [
    { label: 'Total CO₂ Reduction Modeled', value: '124,000 tons', desc: 'If all top-10 solutions were deployed' },
    { label: 'Water Saved (Model)', value: '4.2B liters', desc: 'Annual projection across Cargill farms' },
    { label: 'Solutions Deployed to Farms', value: '36', desc: 'Cargill has adopted 36 student solutions' },
    { label: 'Graduates Hired by Cargill', value: '14', desc: 'Across Cycles 1 and 2' },
  ]

  return `
    <div class="page-transition pt-24">

      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Cycle 2 Results</div>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 class="font-display text-7xl text-white tracking-wide leading-none">LEADERBOARD</h1>
            <p class="text-gray-400 mt-4 max-w-lg">
              Ranked by impact score — a composite of data quality, projected sustainability improvement, feasibility, and innovation. Not just the best deck. The best ideas.
            </p>
          </div>
          <div class="flex gap-3">
            <select class="bg-forest-800 border border-forest-600 text-gray-400 font-mono text-xs px-4 py-2 focus:outline-none focus:border-lime-400">
              <option>Cycle 2 (Current)</option>
              <option>Cycle 1 (2024)</option>
            </select>
            <select class="bg-forest-800 border border-forest-600 text-gray-400 font-mono text-xs px-4 py-2 focus:outline-none focus:border-lime-400">
              <option>All Challenges</option>
              <option>Swine CO₂</option>
              <option>Dairy Water</option>
              <option>Poultry Energy</option>
            </select>
          </div>
        </div>
      </section>

      <!-- Impact summary -->
      <section class="bg-forest-800 border-b border-forest-600 py-12">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            ${impactStats.map(s => `
              <div class="text-center reveal">
                <div class="font-display text-3xl text-lime-400 mb-1">${s.value}</div>
                <div class="font-mono text-xs text-white mb-1">${s.label}</div>
                <div class="font-mono text-xs text-gray-600">${s.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Podium (top 3) -->
      <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="section-label">Top Teams</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          ${teams.slice(0, 3).map((team, i) => `
            <div class="card-dark clip-corner-lg relative overflow-hidden ${i === 0 ? 'border-gold-400/40 bg-gold-400/5' : i === 1 ? 'border-gray-400/20' : 'border-soil-400/20'} reveal">
              
              <!-- Rank badge -->
              <div class="absolute top-4 right-4 font-display text-5xl ${i === 0 ? 'text-gold-400/20' : i === 1 ? 'text-gray-600/20' : 'text-soil-400/20'}">#${team.rank}</div>

              <div class="relative">
                <div class="flex items-center gap-2 mb-3">
                  <span class="font-mono text-2xl">${['🥇', '🥈', '🥉'][i]}</span>
                  <span class="font-mono text-xs ${i === 0 ? 'text-gold-400' : i === 1 ? 'text-gray-400' : 'text-soil-400'} tracking-widest uppercase">${team.status}</span>
                </div>

                <h3 class="font-display text-2xl text-white tracking-wide mb-1">${team.name}</h3>
                <div class="font-mono text-xs text-gray-500 mb-4">
                  ${team.universities.join(' × ')} ${team.country}
                </div>

                <div class="space-y-2 mb-4">
                  <div class="data-row">
                    <span class="font-mono text-xs text-gray-600">Challenge</span>
                    <span class="font-mono text-xs text-white">${team.challenge}</span>
                  </div>
                  <div class="data-row">
                    <span class="font-mono text-xs text-gray-600">Impact</span>
                    <span class="font-mono text-xs text-lime-400">${team.impact}</span>
                  </div>
                  <div class="data-row">
                    <span class="font-mono text-xs text-gray-600">Score</span>
                    <span class="font-display text-xl ${i === 0 ? 'text-gold-400' : 'text-white'}">${team.score.toLocaleString()}</span>
                  </div>
                  <div class="data-row">
                    <span class="font-mono text-xs text-gray-600">Prize</span>
                    <span class="font-mono text-xs ${i === 0 ? 'text-gold-400' : 'text-white'} font-bold">${team.prize}</span>
                  </div>
                </div>

                <div class="progress-bar">
                  <div class="progress-fill ${i === 0 ? 'bg-gold-400' : ''}" data-progress="${Math.floor(team.score / 100)}" style="width:0%"></div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Full leaderboard table -->
        <div class="reveal">
          <div class="section-label">Full Rankings</div>
          <div class="bg-forest-800 border border-forest-600 clip-corner-lg overflow-hidden">
            <table class="w-full">
              <thead>
                <tr class="border-b border-forest-600 bg-forest-900">
                  <th class="text-left font-mono text-xs text-gray-600 tracking-widest px-6 py-4">RANK</th>
                  <th class="text-left font-mono text-xs text-gray-600 tracking-widest px-6 py-4">TEAM</th>
                  <th class="text-left font-mono text-xs text-gray-600 tracking-widest px-6 py-4 hidden md:table-cell">CHALLENGE</th>
                  <th class="text-left font-mono text-xs text-gray-600 tracking-widest px-6 py-4 hidden lg:table-cell">IMPACT</th>
                  <th class="text-right font-mono text-xs text-gray-600 tracking-widest px-6 py-4">SCORE</th>
                </tr>
              </thead>
              <tbody>
                ${teams.map((team, i) => `
                  <tr class="border-b border-forest-600/50 hover:bg-forest-700 transition-colors group">
                    <td class="px-6 py-4">
                      <span class="font-display text-2xl ${i < 3 ? 'text-gold-400' : 'text-gray-600'}">${String(team.rank).padStart(2, '0')}</span>
                    </td>
                    <td class="px-6 py-4">
                      <div class="font-mono text-sm text-white group-hover:text-lime-400 transition-colors">${team.name}</div>
                      <div class="font-mono text-xs text-gray-600 mt-0.5">${team.country} ${team.universities[0]}${team.universities[1] ? ' +1' : ''}</div>
                    </td>
                    <td class="px-6 py-4 hidden md:table-cell">
                      <span class="font-mono text-xs text-gray-400">${team.challenge}</span>
                    </td>
                    <td class="px-6 py-4 hidden lg:table-cell">
                      <span class="font-mono text-xs text-lime-400">${team.impact}</span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <span class="font-display text-xl text-white">${team.score.toLocaleString()}</span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Scoring explanation -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 reveal">
          <div class="md:col-span-1">
            <div class="section-label">How Scoring Works</div>
            <p class="text-gray-500 text-sm leading-relaxed">
              Submissions are judged on four dimensions by Cargill sustainability experts and external agronomists.
            </p>
          </div>
          ${[
            { dimension: 'Data Quality', weight: '25%', desc: 'Methodology rigor & data usage' },
            { dimension: 'Impact Projection', weight: '35%', desc: 'Real-world sustainability gain' },
            { dimension: 'Feasibility', weight: '25%', desc: 'Operational deployability' },
            { dimension: 'Innovation', weight: '15%', desc: 'Novel approaches and creativity' },
          ].map(s => `
            <div class="card-dark text-center clip-corner">
              <div class="font-display text-3xl text-lime-400 mb-1">${s.weight}</div>
              <div class="font-mono text-xs text-white mb-1">${s.dimension}</div>
              <div class="font-mono text-xs text-gray-600">${s.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

    </div>
  `
}
