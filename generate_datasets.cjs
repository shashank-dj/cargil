const fs = require('fs');

const categories = ['Emissions', 'Water', 'Energy', 'Land', 'Feed', 'Health', 'Production'];
const segments = ['Swine', 'Dairy', 'Poultry', 'Beef', 'Aquaculture'];
const accesses = ['Open', 'Challenge Participants', 'Private'];
const formats = [['CSV', 'JSON'], ['CSV', 'Parquet'], ['GeoJSON', 'Shapefile'], ['REST API', 'WebSocket'], ['JSON', 'API']];
const colors = ['lime', 'gold', 'soil'];

const datasets = [];

for (let i = 1; i <= 300; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const segment = segments[Math.floor(Math.random() * segments.length)];
  const access = accesses[Math.floor(Math.random() * accesses.length)];
  const format = formats[Math.floor(Math.random() * formats.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  datasets.push({
    id: `dataset-${i}`,
    name: `${segment} ${category} Data ${i}`,
    description: `Historical and real-time data covering ${category.toLowerCase()} metrics for ${segment.toLowerCase()} operations.`,
    category,
    segment,
    records: Math.floor(Math.random() * 10) + '.' + Math.floor(Math.random() * 9) + 'M',
    updated: Math.floor(Math.random() * 24) + ' hours ago',
    countries: Math.floor(Math.random() * 20) + 1,
    years: '2015–2025',
    fields: ['farm_id', 'timestamp', 'metric_value', 'location'],
    format,
    access,
    color,
    price: Math.floor(Math.random() * 100) + 10 // Mocking some additional data if needed like in the screenshot
  });
}

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

fs.writeFileSync('public/datasets.json', JSON.stringify(datasets, null, 2));
console.log('Datasets generated successfully.');
