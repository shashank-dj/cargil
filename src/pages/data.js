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
  ];

  setTimeout(() => {
    const searchInput = document.getElementById('datasetSearch');
    const datasetGrid = document.getElementById('datasetGrid');

    if (!searchInput || !datasetGrid) return;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const cards = datasetGrid.children;

      Array.from(cards).forEach((card, index) => {
        const dataset = datasets[index];

        const searchableText = `
          ${dataset.name}
          ${dataset.category}
          ${dataset.segment}
          ${dataset.fields.join(' ')}
        `.toLowerCase();

        card.style.display = searchableText.includes(query) ? 'block' : 'none';
      });
    });
  }, 0);

  return `
    <div class="page-transition pt-24">

      <!-- SAMPLE DATA (unchanged) -->
      <section class="max-w-7xl mx-auto px-6 py-16">
        <div class="section-label">Live Preview</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">SAMPLE DATA STREAM</h2>

        <div class="bg-forest-950 border border-forest-600 clip-corner-lg overflow-hidden">
          <div class="p-6 font-mono text-xs text-gray-300">
            // Sample streaming data preview...
          </div>
        </div>
      </section>

      <!-- ✅ SEARCH BAR -->
      <section class="max-w-7xl mx-auto px-6 pb-12">
        <div class="section-label">Search</div>
        <h2 class="font-display text-3xl text-white tracking-wide mb-6">FIND DATASETS</h2>

        <div class="relative max-w-xl">
          <input 
            id="datasetSearch"
            type="text"
            placeholder="Search by name, category, segment, fields..."
            class="w-full bg-forest-950 border border-forest-600 text-white px-4 py-3 pr-10 font-mono text-sm focus:outline-none focus:border-lime-400"
          />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
      </section>

      <!-- DATASET GRID -->
      <section class="max-w-7xl mx-auto px-6 pb-24">
        <div class="section-label">Dataset Catalog</div>
        <h2 class="font-display text-4xl text-white tracking-wide mb-8">ALL DATASETS</h2>

        <div id="datasetGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${datasets.map(d => `
            <div class="card-dark clip-corner">
              <h3 class="text-white font-display text-xl mb-2">${d.name}</h3>
              <p class="text-gray-500 text-sm">${d.category} • ${d.segment}</p>
              <div class="mt-3 text-xs text-gray-400">${d.fields.join(', ')}</div>
            </div>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}
