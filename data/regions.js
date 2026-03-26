// ====== REGION DATA ======

const regionData = {
  'DKI Jakarta': { schools: 1247, target: 1200, completion: 96, issues: 2, lastUpdate: '10 menit lalu' },
  'Jawa Barat': { schools: 2891, target: 2800, completion: 88, issues: 5, lastUpdate: '25 menit lalu' },
  'Jawa Tengah': { schools: 3102, target: 2900, completion: 84, issues: 8, lastUpdate: '1 jam lalu' },
  'Jawa Timur': { schools: 3456, target: 3200, completion: 79, issues: 12, lastUpdate: '2 jam lalu' },
  'Sumatera Utara': { schools: 1823, target: 1700, completion: 76, issues: 6, lastUpdate: '45 menit lalu' },
  'Papua': { schools: 487, target: 450, completion: 41, issues: 24, lastUpdate: '30 menit lalu' },
  'NTT': { schools: 612, target: 580, completion: 35, issues: 31, lastUpdate: '15 menit lalu' }
};

const regionCoords = {
  'DKI Jakarta': [-6.2, 106.8],
  'Jawa Barat': [-6.9, 107.6],
  'Jawa Tengah': [-7.1, 110.4],
  'Jawa Timur': [-7.3, 112.7],
  'Sumatera Utara': [1.5, 99],
  'Papua': [-4, 135],
  'NTT': [-8.7, 123.5]
};

const heroImages = [
  '01K2MG2WV40XF4AK4EKQ9VM6XV.png',
  '45172.jpg',
  'download.jpg',
  'Indonesian digital map with glowing details (1).png',
  'large_lt695f860704c39.jpg',
  'MBG-Antara.webp',
  'MBG.2-765x510.webp',
  'Untitled-6-1238651552.webp'
];

const regionStatus = {
  'DKI Jakarta': { pct: 96, schools: 1247, color: '#22C55E' },
  'Jawa Barat': { pct: 88, schools: 2891, color: '#22C55E' },
  'Jawa Tengah': { pct: 84, schools: 3102, color: '#22C55E' },
  'Jawa Timur': { pct: 79, schools: 3456, color: '#3B82F6' },
  'Sumatera Utara': { pct: 76, schools: 1823, color: '#3B82F6' },
  'Papua': { pct: 41, schools: 487, color: '#F97316' },
  'NTT': { pct: 35, schools: 612, color: '#DC2626' }
};
