// ====== CHART.JS INITIALIZATION ======

function initDashChart() {
  const ctx = document.getElementById('weekChart');
  if (!ctx || ctx._chartInitialized) return;
  ctx._chartInitialized = true;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sen','Sel','Rab','Kam','Jum','Sab','Min'],
      datasets: [{
        label: 'Porsi Terkirim',
        data: [3820000, 3910000, 3780000, 3950000, 3847290, 0, 0],
        backgroundColor: ['#3B82F6','#3B82F6','#3B82F6','#3B82F6','#22C55E','#E2E8F0','#E2E8F0'],
        borderRadius: 6, 
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { 
          grid: { color: '#F1F5F9' }, 
          ticks: { 
            callback: v => (v/1000000).toFixed(1)+'Jt', 
            font: { size: 11 }, 
            color: '#94A3B8' 
          } 
        },
        x: { 
          grid: { display: false }, 
          ticks: { font: { size: 11 }, color: '#94A3B8' } 
        }
      }
    }
  });
}

function initNutriChart() {
  const ctx = document.getElementById('nutriChart');
  if (!ctx || ctx._chartInitialized) return;
  ctx._chartInitialized = true;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sen','Sel','Rab','Kam','Jum'],
      datasets: [
        { 
          label: 'Kalori (kkal)', 
          data: [560,590,545,610,580], 
          borderColor: '#3B82F6', 
          backgroundColor: 'rgba(59,130,246,0.08)', 
          tension: 0.4, 
          pointRadius: 4 
        },
        { 
          label: 'Protein (g)', 
          data: [22,25,20,27,24], 
          borderColor: '#22C55E', 
          backgroundColor: 'rgba(34,197,94,0.08)', 
          tension: 0.4, 
          pointRadius: 4 
        }
      ]
    },
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      plugins: { 
        legend: { 
          position: 'bottom', 
          labels: { font: { size: 11 }, boxWidth: 12 } 
        } 
      },
      scales: {
        y: { 
          grid: { color: '#F1F5F9' }, 
          ticks: { font: { size: 11 }, color: '#94A3B8' } 
        },
        x: { 
          grid: { display: false }, 
          ticks: { font: { size: 11 }, color: '#94A3B8' } 
        }
      }
    }
  });
}
