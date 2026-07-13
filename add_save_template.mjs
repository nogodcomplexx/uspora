import { readFileSync, writeFileSync } from 'fs';

const dir = 'c:/Users/LeosK/Downloads/Kimi_Agent_USPORA-FVE Site Redesign';

const files = [
  'Cenová nabídka editovatelna + radek navic.html',
  'cenova_nabidka editovatelna podpis.html',
];

// CSS for the template save button
const templateBtnCSS = `
.template-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 210mm; margin: 10px auto;
  padding: 16px 32px;
  background: linear-gradient(135deg, #10B981, #059669);
  color: #fff; font-family: inherit; font-size: 16px; font-weight: 800;
  border: none; border-radius: 12px; cursor: pointer;
  transition: all 0.2s;
}
.template-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(16,185,129,0.35); }
.template-btn:active { transform: scale(0.98); }
.template-btn svg { width: 20px; height: 20px; }

.admin-banner {
  width: 210mm; margin: 20px auto 10px;
  background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05));
  border: 1px solid rgba(16,185,129,0.3);
  border-radius: 12px; padding: 14px 20px;
  display: flex; align-items: center; gap: 10px;
  font-family: 'Inter', sans-serif;
}
.admin-banner-icon { font-size: 20px; }
.admin-banner-text { font-size: 13px; font-weight: 600; color: #10B981; }
.admin-banner-sub { font-size: 11px; color: #94A3B8; margin-top: 2px; }
`;

// The save-as-template JavaScript function
const saveTemplateJS = `
function saveAsTemplate() {
  const fileName = prompt('Zadejte název souboru (bez .html):', 'nabidka_zakaznik');
  if (!fileName) return;

  // Clone the document
  const clone = document.documentElement.cloneNode(true);

  // 1) Bake current input values into HTML and lock budget/price fields
  const budgetTable = clone.querySelector('.budget-table');
  if (budgetTable) {
    budgetTable.querySelectorAll('input[type="text"]').forEach(inp => {
      const val = document.querySelector('.budget-table').querySelector(
        'input[value="' + CSS.escape(inp.getAttribute('value')) + '"]'
      );
      // Find the matching input in original DOM to get live value
      const td = inp.closest('td');
      const tr = td.closest('tr');
      const tbody = tr.closest('tbody');
      const rowIdx = Array.from(tbody.children).indexOf(tr);
      const cellIdx = Array.from(tr.children).indexOf(td);
      const origRow = document.querySelector('.budget-table tbody').children[rowIdx];
      if (origRow) {
        const origCell = origRow.children[cellIdx];
        const origInput = origCell ? origCell.querySelector('input') : null;
        if (origInput) {
          const liveVal = origInput.value;
          if (liveVal && liveVal.trim()) {
            // Replace input with static text
            const span = document.createElement('span');
            span.textContent = liveVal;
            inp.replaceWith(span);
          } else {
            // Empty row - remove entire row
            tr.remove();
          }
        }
      }
    });
  }

  // Re-query after modifications - lock total price on page 1
  const totalPriceInput = clone.querySelector('.total-price input');
  if (totalPriceInput) {
    const origTotalInput = document.querySelector('.total-price input');
    const livePrice = origTotalInput ? origTotalInput.value : totalPriceInput.getAttribute('value');
    const span = document.createElement('span');
    span.textContent = livePrice;
    totalPriceInput.replaceWith(span);
  }

  // Lock price on page 2 (Cena celkem)
  clone.querySelectorAll('.order-detail').forEach((detail, idx) => {
    const label = detail.querySelector('label');
    if (label && label.textContent.trim() === 'Cena celkem') {
      const inp = detail.querySelector('input');
      if (inp) {
        const origDetails = document.querySelectorAll('.order-detail');
        const origInp = origDetails[idx] ? origDetails[idx].querySelector('input') : null;
        const liveVal = origInp ? origInp.value : inp.getAttribute('value');
        const div = document.createElement('div');
        div.className = 'val-highlight';
        div.style.marginTop = '3px';
        div.textContent = liveVal;
        inp.replaceWith(div);
      }
    }
  });

  // 2) Remove admin-only elements
  clone.querySelectorAll('.admin-banner, .template-btn').forEach(el => el.remove());

  // 3) Remove the saveAsTemplate function from script
  const scripts = clone.querySelectorAll('script');
  scripts.forEach(scr => {
    if (scr.textContent.includes('saveAsTemplate')) {
      scr.textContent = scr.textContent.replace(/\\nfunction saveAsTemplate[\\s\\S]*?\\n\\}\\n/, '\\n');
    }
  });

  // 4) Change the hint banner text for customer
  const hintBanner = clone.querySelector('.no-print[style*="accent-dim"]');
  // Keep it as is - it says "fill highlighted fields"

  // Build final HTML
  const finalHTML = '<!DOCTYPE html>\\n<html lang="cs">\\n' + clone.innerHTML + '\\n</html>';

  // Download
  const blob = new Blob([finalHTML], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName + '.html';
  a.click();
  URL.revokeObjectURL(url);

  alert('Šablona "' + fileName + '.html" byla uložena!\\nRozpočet a ceny jsou v uloženém souboru zamknuté.');
}
`;

for (const file of files) {
  let html = readFileSync(`${dir}/${file}`, 'utf-8');

  // 1) Add template button CSS before </style>
  html = html.replace('</style>', templateBtnCSS + '</style>');

  // 2) Add admin banner and template button before the save-as-PDF button
  const adminBannerHTML = `
<div class="admin-banner no-print">
  <span class="admin-banner-icon">🛠️</span>
  <div>
    <div class="admin-banner-text">Režim šablony – Upravte rozpočet a cenu, poté klikněte "Uložit šablonu"</div>
    <div class="admin-banner-sub">Uložený soubor bude mít zamknutý rozpočet a cenu. Zákazník bude moci vyplnit pouze zvýrazněná pole.</div>
  </div>
</div>

<button class="template-btn no-print" onclick="saveAsTemplate()">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
  Uložit šablonu pro zákazníka
</button>
`;

  html = html.replace(
    '<button class="save-btn no-print" onclick="window.print()">',
    adminBannerHTML + '\n<button class="save-btn no-print" onclick="window.print()">'
  );

  // 3) Add the saveAsTemplate function to the script
  html = html.replace('</script>', '\n' + saveTemplateJS + '\n</script>');

  writeFileSync(`${dir}/${file}`, html, 'utf-8');
  console.log(`✅ Updated: ${file}`);
}

console.log('\nDone! Both templates now have a "Save template" button.');
