// ====== FORM HANDLERS ======

function submitFeedback() {
  const form = document.querySelector('form') || {};
  const name = document.querySelector('input[placeholder*="Nama"]')?.value || 'Pengguna';
  const message = document.querySelector('textarea[placeholder*="Laporkan"]')?.value || '';
  
  if (!message.trim()) {
    alert('Silakan isi laporan terlebih dahulu');
    return;
  }
  
  alert(`Terima kasih ${name}! Laporan Anda telah diterima dan akan diverifikasi dalam 24 jam.`);
  document.querySelectorAll('form input, form textarea').forEach(el => el.value = '');
}

function trackReport() {
  const trackingId = document.querySelector('input[placeholder*="ID"]')?.value || '';
  if (!trackingId.trim()) {
    alert('Masukkan ID laporan atau nomor referensi');
    return;
  }
  alert(`Mencari status laporan: ${trackingId}`);
}

function searchRegion() {
  const searchTerm = document.querySelector('input[placeholder*="Cari"]')?.value || '';
  const rows = document.querySelectorAll('.region-row, .admin-table tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm.toLowerCase()) ? '' : 'none';
  });
}

function loadRegionDetail(region) {
  const data = regionData[region] || { schools: '0', completion: 0, issues: 0, lastUpdate: 'N/A' };
  const detailBody = document.getElementById('region-detail-body');
  
  if (detailBody) {
    detailBody.innerHTML = `
      <div style="padding: 10px 0;">
        <div style="margin-bottom: 16px;">
          <div style="font-size: 11px; color: #94A3B8; text-transform: uppercase; font-weight: 700; margin-bottom: 4px;">Wilayah</div>
          <div style="font-size: 18px; font-weight: 800; color: #0b2a21;">${region}</div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div style="padding: 12px; background: #f0fdf4; border-radius: 8px; border: 1px solid #dbeafe;">
            <div style="font-size: 10px; color: #64748B; font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Sekolah Aktif</div>
            <div style="font-size: 20px; font-weight: 800; color: #0f7e3b;">${data.schools}</div>
          </div>
          <div style="padding: 12px; background: #fef3c7; border-radius: 8px; border: 1px solid #fcd34d;">
            <div style="font-size: 10px; color: #64748B; font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Tingkat Selesai</div>
            <div style="font-size: 20px; font-weight: 800; color: #f59e0b;">${data.completion}%</div>
          </div>
          <div style="padding: 12px; background: #fee2e2; border-radius: 8px; border: 1px solid #fecaca;">
            <div style="font-size: 10px; color: #64748B; font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Isu Terbuka</div>
            <div style="font-size: 20px; font-weight: 800; color: #dc2626;">${data.issues}</div>
          </div>
          <div style="padding: 12px; background: #e0e7ff; border-radius: 8px; border: 1px solid #c7d2fe;">
            <div style="font-size: 10px; color: #64748B; font-weight: 600; margin-bottom: 4px; text-transform: uppercase;">Update Terakhir</div>
            <div style="font-size: 12px; font-weight: 700; color: #4f46e5;">${data.lastUpdate}</div>
          </div>
        </div>
        <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid #e5e7eb;">
          <button class="btn-action btn-blue" style="width: 100%; justify-content: center;" onclick="alert('Navigasi ke dashboard detail ${region}')">
            Lihat Detail Lengkap →
          </button>
        </div>
      </div>
    `;
  }
  showPage('region');
}
