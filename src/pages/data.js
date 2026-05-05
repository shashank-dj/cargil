export function renderData() {
  const datasets = [
    {
      id: 'co2-swine',
      name: 'Swine CO₂ Emissions',
      category: 'Emissions',
      segment: 'Swine',
      records: '4.2M',
      updated: '15 min ago',
      countries: 14,
      years: '2018–2025',
      fields: ['farm_id', 'timestamp', 'co2_kg_per_head', 'herd_size', 'housing_type', 'country'],
      format: ['CSV', 'JSON', 'Parquet'],
      access: 'Open',
      color: 'lime'
    },
    {
      id: 'water-dairy',
      name: 'Dairy Water Consumption',
      category: 'Water',
      segment: 'Dairy',
      records: '8.1M',
      updated: '1 hour ago',
      countries: 11,
      years: '2019–2025',
      fields: ['farm_id', 'date', 'liters_per_cow', 'herd_count', 'milk_yield_kg', 'water_source'],
      format: ['CSV', 'JSON'],
      access: 'Open',
      color: 'lime'
    },
    {
      id: 'energy-poultry',
      name: 'Poultry Energy Use',
      category: 'Energy',
      segment: 'Poultry',
      records: '2.9M',
      updated: '30 min ago',
      countries: 9,
      years: '2020–2025',
      fields: ['house_id', 'timestamp', 'kwh_total', 'bird_count', 'temp_setpoint', 'ventilation_mode'],
      format: ['CSV', 'JSON', 'Parquet', 'API'],
      access: 'Open',
      color: 'gold'
    },
    {
      id: 'land-use',
      name: 'Land Use & Efficiency Index',
      category: 'Land',
      segment: 'All',
      records: '1.1M',
      updated: '24 hours ago',
      countries: 14,
      years: '2015–2025',
      fields: ['farm_id', 'year', 'hectares_total', 'productivity_score', 'land_class', 'biodiversity_index'],
      format: ['CSV', 'GeoJSON', 'Shapefile'],
      access: 'Open',
      color: 'lime'
    },
    {
      id: 'feed-efficiency',
      name: 'Feed Conversion Ratios',
      category: 'Feed',
      segment: 'All',
      records: '6.7M',
      updated: '2 hours ago',
      countries: 14,
      years: '2018–2025',
      fields: ['farm_id', 'batch_id', 'fcr_value', 'feed_type', 'species', 'avg_daily_gain'],
      format: ['CSV', 'JSON'],
      access: 'Open',
      color: 'gold'
    },
    {
      id: 'digital-twin-api',
      name: 'Digital Twin Sandbox API',
      category: 'Simulation',
      segment: 'All',
      records: 'Live',
      updated: 'Real-time',
      countries: 3,
      years: '2025',
      fields: ['Modeled farm environment', 'Scenario simulation', 'Impact calculator'],
      format: ['REST API', 'WebSocket'],
      access: 'Challenge Participants',
      color: 'soil'
    },
  ]

  return `
    <div class="page-transition pt-24">

      <!-- Header -->
      <section class="max-w-7xl mx-auto px-6 py-16 border-b border-forest-600">
        <div class="section-label">Cargill Open Data Initiative</div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h1 class="font-display text-7xl text-white tracking-wide leading-none">
              OPEN<br/><span class="text-lime-400">DATA</span><br/>EXPLORER
            </h1>
            <p class="text-gray-400 mt-6 leading-relaxed max-w-md">
              Cargill's first public sustainability data release. Millions of records from 14 countries, updated in near-real-time. Free to use for research and challenge submissions.
            </p>
          </div>

          <!-- Summary cards -->
          <div class="grid grid-cols-2 gap-4">
            ${[
              { label: 'Total Records', value: '22.9M', color: 'lime' },
              { label: 'Live Datasets', value: '6', color: 'lime' },
              { label: 'Countries', value: '14', color: 'gold' },
              { label: 'Years of History', value: '10', color: 'gold' },
            ].map(s => `
              <div class="card-dark text-center clip-corner">
                <div class="font-display text-4xl ${s.color === 'lime' ? 'text-lime-400' : 'text-gold-400'} mb-1">${s.value}</div>
                <div class="font-mono text-xs text-gray-500 tracking-wider">${s.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Interactive Data Preview -->
      <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="section-label">Live Preview</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">SAMPLE DATA STREAM</h2>

        <div class="bg-forest-950 border border-forest-600 clip-corner-lg overflow-hidden reveal">
          <!-- Terminal header -->
          <div class="flex items-center gap-3 px-4 py-3 border-b border-forest-600 bg-forest-900">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <span class="font-mono text-xs text-gray-500">aglab-api.cargill.com/v1/data/swine/co2?limit=5</span>
            <span class="ml-auto flex items-center gap-2">
              <span class="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
              <span class="font-mono text-xs text-lime-400">streaming</span>
            </span>
          </div>
          <!-- Data output -->
          <div class="p-6 font-mono text-xs overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-gray-600 border-b border-forest-800">
                  <th class="text-left py-2 pr-6">farm_id</th>
                  <th class="text-left py-2 pr-6">timestamp</th>
                  <th class="text-left py-2 pr-6">co2_kg_per_head</th>
                  <th class="text-left py-2 pr-6">herd_size</th>
                  <th class="text-left py-2 pr-6">country</th>
                  <th class="text-left py-2">housing_type</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">
                ${[
                  ['SWN-NL-00412', '2025-05-04 09:12:33', '2.847', '4,200', 'NL', 'indoor_confined'],
                  ['SWN-DE-01872', '2025-05-04 09:12:31', '3.104', '6,100', 'DE', 'indoor_enriched'],
                  ['SWN-PH-00321', '2025-05-04 09:12:29', '4.221', '2,800', 'PH', 'semi_open'],
                  ['SWN-US-00934', '2025-05-04 09:12:28', '2.991', '8,400', 'US', 'indoor_confined'],
                  ['SWN-BR-00156', '2025-05-04 09:12:26', '3.678', '5,200', 'BR', 'indoor_enriched'],
                ].map((row, i) => `
                  <tr class="border-b border-forest-800/50 hover:bg-forest-800/30 transition-colors" style="animation: fadeUp 0.4s ease ${i * 0.1}s both">
                    <td class="py-2 pr-6 text-lime-400">${row[0]}</td>
                    <td class="py-2 pr-6 text-gray-500">${row[1]}</td>
                    <td class="py-2 pr-6 text-gold-400">${row[2]}</td>
                    <td class="py-2 pr-6">${row[3]}</td>
                    <td class="py-2 pr-6 text-gray-400">${row[4]}</td>
                    <td class="py-2 text-gray-500">${row[5]}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="mt-4 text-gray-600">// Showing 5 of 4,234,812 records · Updated 15 seconds ago · <span class="text-lime-400">cursor: SWN-BR-00156</span></div>
          </div>
        </div>
      </section>
      <!-- Search Bar -->
      <section class="max-w-7xl mx-auto px-6 pb-12">
        <div class="section-label">Search</div>
        <h2 class="font-display text-3xl text-white tracking-wide mb-6">FIND DATASETS</h2>
      
        <div class="flex flex-col md:flex-row gap-4 max-w-2xl">
          
          <!-- Search Input -->
          <div class="relative flex-1">
            <input 
              id="datasetSearch"
              type="text"
              placeholder="Search by name, category, segment..."
              class="w-full bg-forest-950 border border-forest-600 text-white px-4 py-3 pr-10 font-mono text-sm focus:outline-none focus:border-lime-400"
            />
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></span>
          </div>
      
          <!-- Dropdown Filter -->
          <select 
            id="datasetFilter"
            class="bg-forest-950 border border-forest-600 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-lime-400"
          >
            <option value="all">All Categories</option>
            <option value="carbon">Carbon</option>
            <option value="feed">Feed</option>
            <option value="health">Health</option>
            <option value="water">Water</option>
          </select>
      
        </div>
      </section>
      <!-- Dataset catalog -->
      <section class="max-w-7xl mx-auto px-6 pb-24">
        <div class="section-label">Dataset Catalog</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">ALL DATASETS</h2>

        <div id="datasetGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${datasets.map(d => `
            <div class="card-dark clip-corner reveal">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="${d.color === 'lime' ? 'tag-green' : d.color === 'gold' ? 'tag-gold' : 'tag-soil'}">${d.access}</span>
                    <span class="tag border-forest-600 text-gray-500">${d.category}</span>
                  </div>
                  <h3 class="font-display text-xl text-white tracking-wide">${d.name}</h3>
                </div>
                <div class="text-right">
                  <div class="font-display text-2xl ${d.color === 'lime' ? 'text-lime-400' : d.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">${d.records}</div>
                  <div class="font-mono text-xs text-gray-600">records</div>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div class="font-mono text-xs text-gray-600">Countries</div>
                  <div class="font-mono text-sm text-white">${d.countries}</div>
                </div>
                <div>
                  <div class="font-mono text-xs text-gray-600">Range</div>
                  <div class="font-mono text-sm text-white">${d.years}</div>
                </div>
                <div>
                  <div class="font-mono text-xs text-gray-600">Updated</div>
                  <div class="font-mono text-sm ${d.color === 'lime' ? 'text-lime-400' : d.color === 'gold' ? 'text-gold-400' : 'text-soil-400'}">${d.updated}</div>
                </div>
              </div>

              <div class="mb-4">
                <div class="font-mono text-xs text-gray-600 mb-2">FIELDS</div>
                <div class="flex flex-wrap gap-1">
                  ${d.fields.map(f => `
                    <span class="font-mono text-xs px-2 py-0.5 bg-forest-700 text-gray-400 border border-forest-600">${f}</span>
                  `).join('')}
                </div>
              </div>

              <div class="flex items-center justify-between pt-4 border-t border-forest-600">
                <div class="flex gap-2">
                  ${d.format.map(f => `<span class="font-mono text-xs text-gray-600 px-2 py-0.5 border border-forest-600">${f}</span>`).join('')}
                </div>
                <button class="font-mono text-xs text-lime-400 hover:text-lime-300 tracking-wider transition-colors">
                  EXPLORE →
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- API access info -->
        <div class="mt-12 bg-forest-800 border border-lime-400/20 clip-corner-lg p-8 reveal">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div class="md:col-span-2">
              <div class="section-label">For Developers</div>
              <h3 class="font-display text-3xl text-white tracking-wide mb-3">REST API ACCESS</h3>
              <p class="text-gray-500 text-sm leading-relaxed mb-4">
                Query all datasets programmatically. Registered challenge participants get higher rate limits and access to the real-time streaming endpoint.
              </p>
              <div class="bg-forest-950 border border-forest-600 p-4 font-mono text-xs text-lime-400">
                curl https://aglab-api.cargill.com/v1/data/swine/co2 \\<br/>
                &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \\<br/>
                &nbsp;&nbsp;-G -d "country=NL&limit=100&format=json"
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <a href="#/challenges" class="btn-primary clip-corner justify-center text-xs">Get API Key</a>
              <a href="#" class="btn-outline clip-corner justify-center text-xs">Read Docs</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  `
}
