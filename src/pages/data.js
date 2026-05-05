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
      
        <div class="flex flex-col md:flex-row gap-4">
          
          <!-- Search Input -->
          <div class="relative flex-1" id="searchContainer">
            <input 
              id="datasetSearch"
              type="text"
              autocomplete="off"
              placeholder="Search by name, category, segment..."
              class="w-full bg-forest-950 border border-forest-600 text-white px-4 py-3 pr-10 font-mono text-sm focus:outline-none focus:border-lime-400 relative z-20"
            />
            <span id="searchClear" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer hidden z-20 hover:text-lime-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </span>
            
            <!-- Search Dropdown -->
            <div id="searchDropdown" class="hidden absolute top-full left-0 right-0 mt-1 bg-white text-gray-900 rounded-b shadow-2xl z-50 overflow-hidden border border-gray-200" style="min-height: 320px; max-height: 450px;">
              <div class="flex h-full" style="min-height: 320px;">
                <!-- Left Pane: Popular Searches -->
                <div class="w-2/5 bg-gray-50 p-6 border-r border-gray-200">
                  <h4 class="text-xs font-bold text-gray-800 mb-4 tracking-wider uppercase">Popular Searches</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-100 cursor-pointer font-medium popular-search-item rounded px-2 py-2 transition-colors">
                      <iconify-icon icon="solar:magnifer-line-duotone" width="18" class="text-green-600 shrink-0"></iconify-icon>
                      <span>swine emissions</span>
                      <iconify-icon icon="solar:arrow-right-up-line-duotone" width="16" class="ml-auto text-green-600 opacity-40"></iconify-icon>
                    </li>
                    <li class="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-100 cursor-pointer font-medium popular-search-item rounded px-2 py-2 transition-colors">
                      <iconify-icon icon="solar:magnifer-line-duotone" width="18" class="text-green-600 shrink-0"></iconify-icon>
                      <span>dairy water</span>
                      <iconify-icon icon="solar:arrow-right-up-line-duotone" width="16" class="ml-auto text-green-600 opacity-40"></iconify-icon>
                    </li>
                    <li class="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-100 cursor-pointer font-medium popular-search-item rounded px-2 py-2 transition-colors">
                      <iconify-icon icon="solar:magnifer-line-duotone" width="18" class="text-green-600 shrink-0"></iconify-icon>
                      <span>poultry feed efficiency</span>
                      <iconify-icon icon="solar:arrow-right-up-line-duotone" width="16" class="ml-auto text-green-600 opacity-40"></iconify-icon>
                    </li>
                    <li class="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-100 cursor-pointer font-medium popular-search-item rounded px-2 py-2 transition-colors">
                      <iconify-icon icon="solar:magnifer-line-duotone" width="18" class="text-green-600 shrink-0"></iconify-icon>
                      <span>beef land use</span>
                      <iconify-icon icon="solar:arrow-right-up-line-duotone" width="16" class="ml-auto text-green-600 opacity-40"></iconify-icon>
                    </li>
                    <li class="flex items-center gap-3 text-sm text-gray-700 hover:text-green-700 hover:bg-gray-100 cursor-pointer font-medium popular-search-item rounded px-2 py-2 transition-colors">
                      <iconify-icon icon="solar:magnifer-line-duotone" width="18" class="text-green-600 shrink-0"></iconify-icon>
                      <span>aquaculture health</span>
                      <iconify-icon icon="solar:arrow-right-up-line-duotone" width="16" class="ml-auto text-green-600 opacity-40"></iconify-icon>
                    </li>
                  </ul>
                </div>
                
                <!-- Right Pane: Datasets -->
                <div class="w-3/5 p-6 overflow-y-auto bg-white">
                  <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xs font-bold text-gray-800 tracking-wider uppercase">Datasets</h4>
                    <span id="searchResultsCount" class="text-xs text-green-700 cursor-pointer hover:underline font-medium">See more datasets →</span>
                  </div>
                  <div id="searchResultsList" class="space-y-1">
                    <!-- Results rendered here -->
                    <div class="text-sm text-gray-500 py-4">Type to start searching...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Dropdown Filter -->
          <select 
            id="datasetFilter"
            class="bg-forest-950 border border-forest-600 text-white px-4 py-3 font-mono text-sm focus:outline-none focus:border-lime-400 md:w-48"
          >
            <option value="all">All Categories</option>
            <option value="carbon">Carbon</option>
            <option value="feed">Feed</option>
            <option value="health">Health</option>
            <option value="water">Water</option>
          </select>
      
        </div>
      </section>

      <!-- Signup Modal -->
      <div id="signupModal" class="fixed inset-0 z-[100] hidden items-center justify-center" style="background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">
        <div class="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden" style="animation: fadeUp 0.3s ease both;">
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-green-700 to-green-900 p-6 text-white">
            <div class="flex items-center gap-3 mb-3">
              <iconify-icon icon="solar:lock-keyhole-bold-duotone" width="28" class="text-lime-300"></iconify-icon>
              <h3 class="font-display text-2xl tracking-wide">ACCESS REQUIRED</h3>
            </div>
            <p class="text-green-200 text-sm leading-relaxed">This dataset is available to registered challenge participants. Sign up to get full access to all datasets and the REST API.</p>
          </div>
          <!-- Modal Body -->
          <div class="p-6">
            <div id="modalDatasetInfo" class="mb-5 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <!-- Filled dynamically -->
            </div>
            <div class="space-y-3">
              <a href="#/challenges" id="modalSignupBtn" class="flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm tracking-wide">
                <iconify-icon icon="solar:user-plus-bold-duotone" width="20"></iconify-icon>
                SIGN UP FOR THE CHALLENGE
              </a>
              <button id="modalCloseBtn" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors text-sm">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
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

export function initData() {
  const searchInput = document.getElementById('datasetSearch')
  const searchClear = document.getElementById('searchClear')
  const searchDropdown = document.getElementById('searchDropdown')
  const searchContainer = document.getElementById('searchContainer')
  const searchResultsList = document.getElementById('searchResultsList')
  const searchResultsCount = document.getElementById('searchResultsCount')
  const popularItems = document.querySelectorAll('.popular-search-item')
  const signupModal = document.getElementById('signupModal')
  const modalCloseBtn = document.getElementById('modalCloseBtn')
  const modalSignupBtn = document.getElementById('modalSignupBtn')
  const modalDatasetInfo = document.getElementById('modalDatasetInfo')
  
  let allDatasets = []

  // Icon mapping by category
  const categoryIcons = {
    'Emissions': 'solar:cloud-bolt-bold-duotone',
    'Water': 'solar:water-drops-bold-duotone',
    'Energy': 'solar:bolt-circle-bold-duotone',
    'Land': 'solar:earth-bold-duotone',
    'Feed': 'solar:leaf-bold-duotone',
    'Health': 'solar:heart-pulse-bold-duotone',
    'Production': 'solar:chart-square-bold-duotone',
    'Simulation': 'solar:cpu-bolt-bold-duotone',
  }

  const getCategoryIcon = (category) => categoryIcons[category] || 'solar:database-bold-duotone'

  // Show signup modal
  const showSignupModal = (dataset) => {
    modalDatasetInfo.innerHTML = `
      <div class="flex items-center gap-3">
        <iconify-icon icon="${getCategoryIcon(dataset.category)}" width="32" style="color: #15803d;"></iconify-icon>
        <div>
          <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">${dataset.category} · ${dataset.segment}</div>
          <div class="text-sm font-semibold text-gray-900">${dataset.name}</div>
          <div class="text-xs text-gray-500 mt-1">${dataset.records} records · Updated ${dataset.updated}</div>
        </div>
      </div>
    `
    signupModal.classList.remove('hidden')
    signupModal.classList.add('flex')
  }

  // Close modal
  modalCloseBtn.addEventListener('click', () => {
    signupModal.classList.add('hidden')
    signupModal.classList.remove('flex')
  })

  modalSignupBtn.addEventListener('click', () => {
    signupModal.classList.add('hidden')
    signupModal.classList.remove('flex')
  })

  // Close modal on backdrop click
  signupModal.addEventListener('click', (e) => {
    if (e.target === signupModal) {
      signupModal.classList.add('hidden')
      signupModal.classList.remove('flex')
    }
  })

  // Fetch the mock datasets
  fetch('/datasets.json')
    .then(res => res.json())
    .then(data => {
      allDatasets = data
    })
    .catch(err => console.error('Error fetching datasets:', err))

  const renderResults = (query) => {
    if (!query) {
      searchResultsList.innerHTML = '<div class="text-sm text-gray-500 py-4">Type to start searching...</div>'
      searchResultsCount.textContent = 'See more datasets →'
      return
    }

    const lowerQuery = query.toLowerCase()
    const filtered = allDatasets.filter(d => 
      d.name.toLowerCase().includes(lowerQuery) || 
      d.category.toLowerCase().includes(lowerQuery) || 
      d.segment.toLowerCase().includes(lowerQuery)
    )

    if (filtered.length === 0) {
      searchResultsList.innerHTML = '<div class="text-sm text-gray-500 py-4">No datasets found matching your search.</div>'
      searchResultsCount.textContent = '0 datasets'
      return
    }

    const remaining = filtered.length > 3 ? filtered.length - 3 : 0
    searchResultsCount.textContent = remaining > 0 ? `See ${remaining} more datasets →` : ''

    searchResultsList.innerHTML = filtered.slice(0, 3).map((d, i) => `
      <div class="search-result-item flex gap-4 items-center cursor-pointer hover:bg-gray-50 px-3 py-3 rounded-lg transition-colors border border-transparent hover:border-gray-200" data-index="${i}">
        <div class="w-11 h-11 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
          <iconify-icon icon="${getCategoryIcon(d.category)}" width="22" style="color: #15803d;"></iconify-icon>
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">${d.category}</div>
          <h5 class="text-sm font-semibold text-gray-900 truncate">${d.name}</h5>
          <div class="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
            <iconify-icon icon="solar:clock-circle-line-duotone" width="13" style="color: #9ca3af;"></iconify-icon>
            Updated ${d.updated}
          </div>
        </div>
        <iconify-icon icon="solar:arrow-right-line-duotone" width="18" style="color: #15803d; opacity: 0.5;"></iconify-icon>
      </div>
    `).join('')

    // Attach click handlers to results
    document.querySelectorAll('.search-result-item').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'))
        const dataset = filtered[idx]
        searchDropdown.classList.add('hidden')
        showSignupModal(dataset)
      })
    })
  }

  // Handle Input Events
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value
    if (value.trim().length > 0) {
      searchClear.classList.remove('hidden')
      searchDropdown.classList.remove('hidden')
    } else {
      searchClear.classList.add('hidden')
    }
    renderResults(value)
  })

  // Handle Focus/Blur
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0 || allDatasets.length > 0) {
      searchDropdown.classList.remove('hidden')
      renderResults(searchInput.value)
    }
  })

  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
      searchDropdown.classList.add('hidden')
    }
  })

  // Handle Clear
  searchClear.addEventListener('click', () => {
    searchInput.value = ''
    searchClear.classList.add('hidden')
    renderResults('')
    searchInput.focus()
  })
  
  // Handle Popular Items
  popularItems.forEach(item => {
    item.addEventListener('click', () => {
      const span = item.querySelector('span')
      const text = span ? span.textContent.trim() : item.textContent.trim()
      searchInput.value = text
      searchClear.classList.remove('hidden')
      renderResults(text)
    })
  })
}

