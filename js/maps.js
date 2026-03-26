// ====== LEAFLET MAP INITIALIZATION ======

function initIndonesiaMap() {
  if (window.indonesiaMap) return;

  const mapContainer = document.getElementById('indonesiaMapContainer');
  if (!mapContainer) return;

  try {
    window.indonesiaMap = L.map('indonesiaMapContainer').setView([-2.5, 113.5], 4);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(window.indonesiaMap);

    window.mapMarkers = [];

    Object.entries(regionCoords).forEach(([region, coords]) => {
      const data = regionStatus[region];
      const color = data.color || '#94A3B8';

      const markerIcon = L.divIcon({
        html: `<div style="background: ${color}; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.25); font-size: 12px; font-weight: bold; color: white;">${data.pct}%</div>`,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      const marker = L.marker(coords, { icon: markerIcon })
        .bindPopup(`<div style="text-align: center; padding: 10px;">
                      <strong>${region}</strong><br>
                      <span style="font-size: 20px; color: ${color}; font-weight: bold;">${data.pct}%</span><br>
                      <span style="font-size: 12px; color: #666;">${data.schools} sekolah</span><br>
                      <button onclick="loadRegionDetail('${region}')" style="margin-top: 10px; padding: 6px 12px; background: #0b6b66; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Lihat Detail</button>
                    </div>`)
        .on('click', function() {
          loadRegionDetail(region);
        })
        .addTo(window.indonesiaMap);

      window.mapMarkers.push(marker);
    });

    L.control.scale().addTo(window.indonesiaMap);
  } catch (e) {
    console.error('Map initialization error:', e);
  }
}
