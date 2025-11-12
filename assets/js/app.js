// assets/js/app.js
// Dados do cardápio (exemplos) - você pode substituir / carregar via JSON
const menuItems = [
  // Entradas
  {
    id: 1,
    category: 'entradas',
    name: 'Bruschetta de Tomate',
    desc: 'Pão artesanal, tomate confit, manjericão e azeite uruguaio.',
    price: 'AOA 3.500',
    img: 'https://images.unsplash.com/photo-1542385220-4b5b8c6a0b2d?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 2,
    category: 'entradas',
    name: 'Salada Caprese',
    desc: 'Tomate, mussarela de búfala, manjericão fresco e balsâmico.',
    price: 'AOA 4.000',
    img: 'https://images.unsplash.com/photo-1574343169004-bb70366a7076?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 3,
    category: 'entradas',
    name: 'Camarão ao Alho',
    desc: 'Camarões salteados com alho e azeite, servidos quentes.',
    price: 'AOA 6.500',
    img: 'https://images.unsplash.com/photo-1596547614534-1182283a0050?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 4,
    category: 'entradas',
    name: 'Tábua de Queijos',
    desc: 'Seleção de queijos nacionais e importados com frutas secas.',
    price: 'AOA 5.000',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80' // Mantido (Já funciona)
  },
  {
    id: 5,
    category: 'entradas',
    name: 'Rolinho Primavera',
    desc: 'Rolinhos crocantes recheados com legumes frescos.',
    price: 'AOA 3.000',
    img: 'https://images.unsplash.com/photo-1544026383-752136928e19?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },

  // Pratos Principais
  {
    id: 6,
    category: 'principais',
    name: 'Salmão ao Molho de Laranja',
    desc: 'Salmão grelhado com purê de batata doce e legumes na manteiga.',
    price: 'AOA 15.000',
    img: 'https://images.unsplash.com/photo-1596701831862-23c3b0d2a8a5?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 7,
    category: 'principais',
    name: 'Filé Mignon ao Vinho',
    desc: 'Filé mignon suculento com molho de vinho e batatas rústicas.',
    price: 'AOA 18.000',
    img: 'https://images.unsplash.com/photo-1604908177522-0d1c7f5c5b4e?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 8,
    category: 'principais',
    name: 'Frango Grelhado com Ervas',
    desc: 'Peito de frango grelhado com ervas finas, servido com arroz.',
    price: 'AOA 12.000',
    img: 'https://images.unsplash.com/photo-1597547144937-251147e44a95?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 9,
    category: 'principais',
    name: 'Lasanha à Bolonhesa',
    desc: 'Camadas de massa, molho bolonhesa e queijo gratinado.',
    price: 'AOA 13.500',
    img: 'https://images.unsplash.com/photo-1577968538600-0255c26b3e83?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 10,
    category: 'principais',
    name: 'Risoto de Cogumelos',
    desc: 'Risoto cremoso com mix de cogumelos e parmesão.',
    price: 'AOA 14.000',
    img: 'https://images.unsplash.com/photo-1543825832-601931061973?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },

  // Bebidas
  {
    id: 11,
    category: 'bebidas',
    name: 'Limonada Siciliana',
    desc: 'Limonada fresca com toque de alecrim.',
    price: 'AOA 2.500',
    img: 'https://images.unsplash.com/photo-1574921673891-b3b0d9f3796d?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 12,
    category: 'bebidas',
    name: 'Suco de Manga',
    desc: 'Suco natural de manga, refrescante e saudável.',
    price: 'AOA 2.000',
    img: 'https://images.unsplash.com/photo-1571212876100-84a1a3e6a908?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 13,
    category: 'bebidas',
    name: 'Café Expresso',
    desc: 'Café puro, extraído na hora.',
    price: 'AOA 1.500',
    img: 'https://images.unsplash.com/photo-1528734978833-1ec85c074780?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 14,
    category: 'bebidas',
    name: 'Chá Gelado de Hortelã',
    desc: 'Refrescante e natural, servido com gelo.',
    price: 'AOA 2.200',
    img: 'https://images.unsplash.com/photo-1583091913926-9a2c300f86b1?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 15,
    category: 'bebidas',
    name: 'Smoothie de Morango',
    desc: 'Smoothie cremoso de morango com iogurte natural.',
    price: 'AOA 3.000',
    img: 'https://images.unsplash.com/photo-1502479427-024c044439c3?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },

  // Sobremesas
  {
    id: 16,
    category: 'sobremesas',
    name: 'Cheesecake de Frutas Vermelhas',
    desc: 'Base crocante e creme leve com frutas ao topo.',
    price: 'AOA 4.500',
    img: 'https://images.unsplash.com/photo-1587393433967-0c7f3e8f9b9f?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 17,
    category: 'sobremesas',
    name: 'Brownie com Sorvete',
    desc: 'Brownie quentinho com bola de sorvete de creme.',
    price: 'AOA 4.000',
    img: 'https://images.unsplash.com/photo-1570535311287-2487372c72b5?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 18,
    category: 'sobremesas',
    name: 'Tiramisu Clássico',
    desc: 'Sobremesa italiana com café, queijo mascarpone e cacau.',
    price: 'AOA 4.800',
    img: 'https://images.unsplash.com/photo-1577968417088-e216260a28f7?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 19,
    category: 'sobremesas',
    name: 'Pudim de Leite',
    desc: 'Pudim cremoso com calda de caramelo.',
    price: 'AOA 3.500',
    img: 'https://images.unsplash.com/photo-1585805727653-b3c9748b0a99?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  },
  {
    id: 20,
    category: 'sobremesas',
    name: 'Sorvete de Baunilha',
    desc: 'Sorvete artesanal de baunilha com cobertura opcional.',
    price: 'AOA 3.000',
    img: 'https://images.unsplash.com/photo-1563806951203-1f144d15669f?auto=format&fit=crop&w=800&q=80' // Link Atualizado
  }
];

// Selectors
const grid = document.getElementById('menu-grid');
const tabs = document.querySelectorAll('.tab');
const searchInput = document.getElementById('search');

// small safety checks (in case DOM ids/classes changed)
if (!grid) throw new Error('Elemento #menu-grid não encontrado no DOM.');
if (!searchInput) throw new Error('Elemento #search não encontrado no DOM.');

// Render function
function renderItems(items) {
  grid.innerHTML = '';
  if (items.length === 0) {
    grid.innerHTML = `<p class="text-center text-slate-500 col-span-full">Nenhum item encontrado.</p>`;
    return;
  }

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card p-4';
    div.innerHTML = `
      <div class="flex flex-col h-full">
        <div class="w-full rounded-lg overflow-hidden mb-3">
          <img loading="lazy" src="${item.img}" alt="${escapeHtml(item.name)}" class="w-full h-44 object-cover">
        </div>
        <div class="mt-auto">
          <h4 class="font-semibold mb-1">${escapeHtml(item.name)} <span class="price-badge float-right">${escapeHtml(item.price)}</span></h4>
          <p class="text-sm text-slate-600">${escapeHtml(item.desc)}</p>
        </div>
      </div>
    `;
    grid.appendChild(div);
  });
}

// Helpers
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Initial render - all
renderItems(menuItems);

// Tabs behaviour
if (tabs && tabs.length > 0) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');
      const cat = tab.dataset.cat;
      applyFilters(cat, searchInput.value.trim());
    });
  });
}

// Search behaviour (debounced)
let debounce;
searchInput.addEventListener('input', (e) => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    const q = e.target.value.trim();
    const activeTab = document.querySelector('.tab[aria-selected="true"]');
    const cat = activeTab ? activeTab.dataset.cat : 'all';
    applyFilters(cat, q);
  }, 180);
});

// Apply category + search
function applyFilters(category = 'all', query = '') {
  let filtered = menuItems.slice();
  if (category && category !== 'all') filtered = filtered.filter(i => i.category === category);
  if (query) filtered = filtered.filter(i => (i.name + ' ' + i.desc).toLowerCase().includes(query.toLowerCase()));
  renderItems(filtered);
}

// Accessibility: keyboard navigation for tabs (left/right) and Enter/Space activation
const tabList = document.querySelector('.tabs');
if (tabList) {
  const tabButtons = Array.from(tabList.querySelectorAll('.tab'));
  tabButtons.forEach((tab, idx) => {
    tab.setAttribute('tabindex', '0');
    tab.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key === 'ArrowRight' || key === 'ArrowLeft') {
        e.preventDefault();
        const nextIdx = key === 'ArrowRight' ? (idx + 1) % tabButtons.length : (idx - 1 + tabButtons.length) % tabButtons.length;
        tabButtons[nextIdx].focus();
      } else if (key === 'Enter' || key === ' ') {
        e.preventDefault();
        tab.click();
      }
    });
  });
}

// Small enhancement: preserve last tab in localStorage
const STORAGE_KEY = 'sabore-last-tab';
const lastTab = localStorage.getItem(STORAGE_KEY);
if (lastTab) {
  const target = document.querySelector(`.tab[data-cat="${lastTab}"]`);
  if (target) {
    // use setTimeout to ensure initial DOM scripts finish
    setTimeout(() => { target.click(); }, 50);
  }
}

// store tab when clicked
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  const cat = t.dataset.cat || 'all';
  localStorage.setItem(STORAGE_KEY, cat);
}));

// Optional: lazy-load images that are not in assets (in case user uses external URLs)
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset && img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  // observe images that may have data-src
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img[data-src]').forEach(img => io.observe(img));
  });
}

// small utility: if you want to load menu from a JSON file instead, you can call loadMenuFromJSON()
// Example: loadMenuFromJSON('assets/menu.json');
function loadMenuFromJSON(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Falha ao carregar menu JSON');
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data)) {
        // replace menuItems contents (mutate array or reassign as needed)
        // Here we reassign the global variable and re-render:
        window.menuItems = data;
        applyFilters(document.querySelector('.tab[aria-selected="true"]')?.dataset.cat || 'all', searchInput.value.trim());
      } else {
        console.warn('Formato inválido de menu.json — espere um array de itens');
      }
    })
    .catch(err => console.error(err));
}