// Lamurina Luxury Lighting Gallery — Core Application Logic (V2 Final)

const LAMURINA_PRODUCTS = [
  {
    id: 'lam-01',
    slug: 'palazzo-amber-murano-chandelier',
    title: 'لوستر مورانو کلاسیک Palazzo کهربایی دوطبقه',
    subtitle: 'Murano Hand-Blown Amber Glass · 12 Lights',
    category: 'murano',
    categoryLabel: 'لوستر مورانو',
    image: '/assets/products/product-01.jpg',
    diameterCm: 95,
    heightCm: 110,
    lights: '۱۲ شعله (۲ طبقه)',
    material: 'شیشه دست‌ساز مورانو کهربایی و عسلی + برنج آبکاری طلایی',
    minCeilingM: 3.1,
    spaces: ['پذیرایی لوکس', 'ویلا', 'سالن کلاسیک'],
    priceLabel: 'استعلام قیمت روز',
    description: 'شاخه‌های پیچ‌خورده شیشه‌ای به رنگ کهربایی گرم با آویزهای قطره‌ای دست‌ساز که نوری گرم، اشرافی و معمارانه در فضای پذیرایی پخش می‌کند.'
  },
  {
    id: 'lam-02',
    slug: 'linear-champagne-ring-crystal-chandelier',
    title: 'آویز خطی کریستالی Ring Cascade شامپاینی',
    subtitle: 'Linear Dining Ring Chandelier · 7 Rings',
    category: 'linear',
    categoryLabel: 'خطی و مدرن',
    image: '/assets/products/product-02.jpg',
    diameterCm: 125,
    heightCm: 65,
    lights: '۷ حلقه نوری کریستالی',
    material: 'حلقه‌های شیشه شامپاینی + منشورهای کریستال تراش‌خورده و استیل آینه‌ای',
    minCeilingM: 2.7,
    spaces: ['میز ناهارخوری', 'جزیره آشپزخانه', 'نشیمن مدرن'],
    priceLabel: '۴۸,۵۰۰,۰۰۰ تومان',
    description: 'فرم خطی و متوازن با هفت حلقه شیشه‌ای شامپاینی و آویزهای کریستالی کشیده؛ انتخابی بی‌نقص برای تمرکز نور گرم روی میز ناهارخوری ۶ تا ۱۲ نفره.'
  },
  {
    id: 'lam-03',
    slug: 'crystal-rain-cascade-table-lamp',
    title: 'آباژور و چراغ ایستاده کریستالی بارانی Rain Cascade',
    subtitle: 'Crystal Rain Cascade Stand Lamp · Chrome Base',
    category: 'table-lamp',
    categoryLabel: 'آباژور و رومیزی',
    image: '/assets/products/product-03.jpg',
    diameterCm: 42,
    heightCm: 88,
    lights: '۴ شعله مخفی در آبشار کریستال',
    material: 'رشته‌های کریستال شفاف آبشاری + پایه کروم نقره‌ای صیقلی',
    minCeilingM: 2.5,
    spaces: ['کنار مبل', 'کنسول ورودی', 'اتاق خواب مستر'],
    priceLabel: '۲۲,۱۰۰,۰۰۰ تومان',
    description: 'رشته‌های ظریف کریستال همچون باران نور از تاج چراغ آویزان شده‌اند و در کنار مبلمان یا کنسول ورودی، درخششی شاعرانه ایجاد می‌کنند.'
  },
  {
    id: 'lam-04',
    slug: 'baccarat-maria-theresa-clear-chandelier',
    title: 'لوستر کریستال شفاف Maria Theresa سبک باکارات',
    subtitle: 'Grand Clear Crystal Chandelier · 18 Lights',
    category: 'baccarat',
    categoryLabel: 'لوستر باکارات',
    image: '/assets/products/product-04.jpg',
    diameterCm: 105,
    heightCm: 120,
    lights: '۱۸ شعله (۲ طبقه)',
    material: 'کریستال درجه یک شفاف با گوی مرکزی تراش‌خورده و زنجیر کروم',
    minCeilingM: 3.2,
    spaces: ['پذیرایی بزرگ', 'لابی', 'تارهای نئوکلاسیک'],
    priceLabel: 'استعلام قیمت روز',
    description: 'اصالت طراحی نئوکلاسیک اروپایی با بازوهای شیشه‌ای شفاف و منشورهای چندوجهی که شکست نور خیره‌کننده‌ای در فضاهای وسیع می‌سازد.'
  },
  {
    id: 'lam-05',
    slug: 'botanical-crystal-leaf-linear-pendant',
    title: 'آویز خطی شاخه و برگ کریستالی Botanical Leaf',
    subtitle: 'Sculptural Gold Branch & Crystal Discs · Linear',
    category: 'linear',
    categoryLabel: 'خطی و مدرن',
    image: '/assets/products/product-05.jpg',
    diameterCm: 135,
    heightCm: 75,
    lights: '۱۰ شعله در میان شاخه‌های طلایی',
    material: 'بدنه برنجی شاخه‌ای دست‌ساز + برگ‌های کریستالی تراش‌خورده',
    minCeilingM: 2.8,
    spaces: ['میز غذاخوری لوکس', 'پذیرایی مدرن', 'فضای مهمان‌نواز'],
    priceLabel: '۵۴,۸۰۰,۰۰۰ تومان',
    description: 'ترکیب طبیعت و معماری؛ شاخه‌های طلایی با صدها برگ کریستالی دست‌ساز که بالای میز غذاخوری یا نشیمن حس یک اثر هنری معلق را ایجاد می‌کنند.'
  },
  {
    id: 'lam-06',
    slug: 'imperial-smoke-baccarat-zenith-chandelier',
    title: 'لوستر امپریال باکارات دودی چهارطبقه Zenith Smoke',
    subtitle: 'Imperial 4-Tier Smoke Crystal Chandelier · 36 Lights',
    category: 'baccarat',
    categoryLabel: 'لوستر باکارات',
    image: '/assets/products/product-06.jpg',
    diameterCm: 130,
    heightCm: 165,
    lights: '۳۶ شعله (۴ طبقه امپریال)',
    material: 'کریستال دودی و خاکستری تیره دست‌تراش + زنگوله‌های باکارات',
    minCeilingM: 3.8,
    spaces: ['لابی مجلل', 'ویلا دوبلکس', 'پنت‌هاوس'],
    priceLabel: 'استعلام قیمت ویژه پروژه',
    description: 'شاهکار چهارطبقه با کریستال‌های دودی و منشورهای نیزه‌ای که برای سقف‌های بلند، وید دوبلکس و لابی‌های شاخص معماری طراحی شده است.'
  },
  {
    id: 'lam-07',
    slug: 'baccarat-ruby-crystal-chandelier',
    title: 'لوستر باکارات کریستال و یاقوت سرخ Zenith Ruby',
    subtitle: 'Baccarat Heritage Clear & Ruby Red · 24 Lights',
    category: 'baccarat',
    categoryLabel: 'لوستر باکارات',
    image: '/assets/products/product-07.jpg',
    diameterCm: 115,
    heightCm: 135,
    lights: '۲۴ شعله با شیدهای کریستالی',
    material: 'کریستال شفاف الماسی + آویزهای یاقوت سرخ امضای باکارات',
    minCeilingM: 3.3,
    spaces: ['پذیرایی اشرافی', 'سالن پذیرایی رسمی', 'لابی هتل'],
    priceLabel: 'استعلام قیمت روز',
    description: 'امضای اصیل سبک باکارات فرانسه؛ ترکیب کریستال‌های شفاف الماسی با آویزهای سرخ یاقوتی و لاله‌های کریستالی تراش‌خورده.'
  },
  {
    id: 'lam-08',
    slug: 'frosted-prism-tiered-brass-chandelier',
    title: 'لوستر منشوری مات و فریم برنجی Frosted Prism',
    subtitle: 'Architectural Frosted Glass Prisms · Brass Frame',
    category: 'crystal',
    categoryLabel: 'کریستالی آبشاری',
    image: '/assets/products/product-08.jpg',
    diameterCm: 80,
    heightCm: 85,
    lights: '۱۰ شعله (نور نرم و غیرمستقیم)',
    material: 'تیغه‌های شیشه‌ای منشوری مات + شاسی برنجی طلایی',
    minCeilingM: 2.8,
    spaces: ['نشیمن نئوکلاسیک', 'اتاق خواب مستر', 'ورودی'],
    priceLabel: '۳۹,۴۰۰,۰۰۰ تومان',
    description: 'چیدمان آبشاری تیغه‌های منشوری مات روی فریم طلایی که بدون خیرگی چشم، نوری مخملی و یکنواخت در فضا پخش می‌کند.'
  },
  {
    id: 'lam-09',
    slug: 'rezzonico-golden-leaf-murano-chandelier',
    title: 'لوستر مورانو Rezzonico برگ طلایی و عسلی',
    subtitle: 'Venetian Rezzonico Blown Glass · 10 Lights',
    category: 'murano',
    categoryLabel: 'لوستر مورانو',
    image: '/assets/products/product-09.jpg',
    diameterCm: 92,
    heightCm: 105,
    lights: '۱۰ شعله ونیزی',
    material: 'شیشه دمیده‌شده مورانو با برگ‌ها و شکوفه‌های دست‌ساز طلایی',
    minCeilingM: 3.0,
    spaces: ['پذیرایی کلاسیک و نئوکلاسیک', 'غذاخوری رسمی'],
    priceLabel: 'استعلام قیمت روز',
    description: 'اصالت هنر شیشه‌گری ونیز؛ بازوهای پوشیده از قطعات شیشه‌ای Bosso و برگ‌های طلایی برآمده که هر شاخه آن با دست فرم گرفته است.'
  },
  {
    id: 'lam-10',
    slug: 'crystal-rain-drum-chandelier',
    title: 'لوستر سقفی کریستالی آبشاری Crystal Rain Drum',
    subtitle: 'Modern Circular Crystal Rain · Mirror Chrome',
    category: 'crystal',
    categoryLabel: 'کریستالی آبشاری',
    image: '/assets/products/product-10.jpg',
    diameterCm: 75,
    heightCm: 55,
    lights: '۱۲ شعله داخلی LED / E14',
    material: 'منشورهای عمودی و گوی‌های کریستال K9 + طوق استیل کروم',
    minCeilingM: 2.6,
    spaces: ['پذیرایی سقف استاندارد', 'ناهارخوری گرد', 'اتاق خواب'],
    priceLabel: '۳۶,۹۰۰,۰۰۰ تومان',
    description: 'طراحی استوانه‌ای کم‌ارتفاع با تراکم بالای رشته‌های کریستال؛ انتخابی عالی برای سقف‌های ۲.۶۰ تا ۳ متر که درخشش لوکس می‌خواهند.'
  },
  {
    id: 'lam-11',
    slug: 'murano-frosted-shell-petal-chandelier',
    title: 'لوستر گلبرگی مورانو صدف سفید Petal Shell',
    subtitle: 'Italian Silk Frosted Petal Glass · Sculptural',
    category: 'murano',
    categoryLabel: 'لوستر مورانو',
    image: '/assets/products/product-11.jpg',
    diameterCm: 85,
    heightCm: 82,
    lights: '۸ شعله با پخش نور ابریشمی',
    material: 'گلبرگ‌های شیشه‌ای صدفی دست‌ساز مورانو + ستون مرکزی شیشه پیچ',
    minCeilingM: 2.75,
    spaces: ['پذیرایی مینیمال روشن', 'نشیمن مدرن', 'فضای آرامش‌بخش'],
    priceLabel: '۴۴,۲۰۰,۰۰۰ تومان',
    description: 'گلبرگ‌های شیشه‌ای مواج به رنگ سفید صدفی که نور را همچون پارچه ابریشمی نرم می‌کنند؛ هماهنگ با دکوراسیون‌های مینیمال، مدرن و نئوکلاسیک روشن.'
  },
  {
    id: 'lam-12',
    slug: 'venetian-ruby-blossom-murano-chandelier',
    title: 'لوستر مورانو ونیزی شکوفه یاقوتی Venetian Blossom',
    subtitle: 'Champagne Filigree & Ruby Flowers · 12 Lights',
    category: 'murano',
    categoryLabel: 'لوستر مورانو',
    image: '/assets/products/product-12.jpg',
    diameterCm: 98,
    heightCm: 102,
    lights: '۱۲ شعله (۲ طبقه)',
    material: 'شیشه شامپاینی بافت‌دار مورانو + شکوفه‌های شیشه‌ای سفید و یاقوتی',
    minCeilingM: 3.0,
    spaces: ['پذیرایی هنری', 'سالن کلاسیک', 'ویلا'],
    priceLabel: 'استعلام قیمت روز',
    description: 'ترکیب ظرافت جام‌های مشبک شامپاینی با شکوفه‌های دست‌ساز یاقوتی و سفید؛ اثری کلکسیونی که نقطه کانونی هر فضای لوکسی می‌شود.'
  }
];

const PROVINCE_DELIVERY_DATA = {
  'تهران': {
    title: 'تهران، شمیرانات، لواسان و کرج',
    deliveryTime: 'تحویل روزانه (۳ تا ۲۴ ساعت) + امکان بازدید حضوری شوروم',
    packaging: 'حمل اختصاصی با خودروی گالری + اعزام تیم نصاب تخصصی لوسترهای سنگین و مورانو',
    highlight: 'امکان مشاوره حضوری در شوروم ۱۵ خرداد غربی و بررسی نمونه شیشه و کریستال از نزدیک.'
  },
  'اصفهان': {
    title: 'استان اصفهان (اصفهان، کاشان، شاهین‌شهر)',
    deliveryTime: '۲۴ تا ۴۸ ساعت کاری با بیمه کامل مرسوله',
    packaging: 'فوم تزریقی چندلایه + جعبه چوبی/محافظ ضربه‌گیر مخصوص قطعات شیشه‌ای مورانو و کریستال',
    highlight: 'ارائه نقشه شماره‌گذاری‌شده نصب قطعات و پشتیبانی ویدئویی هنگام نصب.'
  },
  'فارس': {
    title: 'استان فارس (شیراز، مرودشت، جهرم)',
    deliveryTime: '۴۸ تا ۷۲ ساعت کاری با باربری VIP و بیمه ۱۰۰٪ سلامت فیزیکی',
    packaging: 'بسته‌بندی تفکیکی هر شاخه و گلبرگ شیشه‌ای در کارتن‌های ضدضربه مهندسی‌شده',
    highlight: 'تضمین جایگزینی فوری هر قطعه در صورت آسیب احتمالی در مسیر حمل.'
  },
  'خراسان رضوی': {
    title: 'استان خراسان رضوی (مشهد، نیشابور، طرقبه)',
    deliveryTime: '۴۸ تا ۷۲ ساعت کاری (ارسال زمینی ویژه یا هوایی بنا به درخواست)',
    packaging: 'پالت‌بندی ایمن برای لوسترهای امپریال، لابی و چندطبقه همراه با شناسنامه نصب',
    highlight: 'مشاوره رایگان پیش از ارسال بر اساس ارتفاع سقف و ابعاد پذیرایی.'
  },
  'مازندران و گیلان': {
    title: 'مازندران و گیلان (ویلاهای شمال، رشت، ساری، نوشهر، متل قو، چالوس)',
    deliveryTime: '۲۴ تا ۴۸ ساعت کاری با امکان ارسال مستقیم به پروژه ویلایی',
    packaging: 'آبکاری مقاوم در برابر رطوبت + بسته‌بندی ضدضربه VIP برای پروژه‌های دوبلکس و سقف بلند',
    highlight: 'هماهنگی مستقیم با مهندس ناظر یا طراح داخلی پروژه جهت تعیین دقیق ارتفاع زنجیر و قلاب سقف.'
  },
  'آذربایجان شرقی': {
    title: 'استان آذربایجان شرقی و غربی (تبریز، ارومیه)',
    deliveryTime: '۴۸ تا ۷۲ ساعت کاری با تضمین کامل سلامت شیشه و کریستال',
    packaging: 'بسته‌بندی استاندارد صادراتی با فوم فشرده و برچسب‌گذاری شماره‌دار شاخه‌ها',
    highlight: 'ارسال ویدئوی تست روشنایی و کنترل کیفیت محصول در شوروم پیش از بسته‌بندی.'
  },
  'سایر استان‌ها': {
    title: 'پوشش کامل ۳۱ استان ایران و ارسال بین‌المللی (Worldwide)',
    deliveryTime: '۴۸ تا ۹۶ ساعت کاری به تمام شهرهای ایران با بیمه ۱۰۰٪ سلامت تحویل',
    packaging: 'بسته‌بندی مهندسی چندلایه مخصوص حمل ایمن شیشه‌های دست‌ساز و کریستال‌های ظریف',
    highlight: 'پشتیبانی کامل تلفنی و واتساپی از لحظه انتخاب مدل تا روشن شدن لوستر در فضای شما.'
  }
};

// State
let activeCategory = 'all';
let searchQuery = '';
let inquiryCart = [];
let visualizerProduct = LAMURINA_PRODUCTS[0];
let visualizerScale = 220;
let visualizerGlow = 0.45;
let visualizerRoomPreset = 'modern-living';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHeroThumbs();
  renderProducts();
  initVisualizer();
  initSmartFinder();
  initProvinceGuide();
  initNavigation();
});

// Theme Toggle
function initTheme() {
  const saved = localStorage.getItem('lamurina_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeButtonLabel(saved);

  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lamurina_theme', next);
      updateThemeButtonLabel(next);
    });
  }
}

function updateThemeButtonLabel(theme) {
  const label = document.getElementById('theme-toggle-label');
  if (label) {
    label.textContent = theme === 'dark' ? 'تم روشن گالری' : 'تم تیره لوکس';
  }
}

// Hero Showcase Thumbs
function renderHeroThumbs() {
  const heroItems = [
    LAMURINA_PRODUCTS[0],
    LAMURINA_PRODUCTS[5],
    LAMURINA_PRODUCTS[6],
    LAMURINA_PRODUCTS[1],
    LAMURINA_PRODUCTS[10]
  ];
  const container = document.getElementById('hero-thumbs');
  const mainImg = document.getElementById('hero-main-img');
  const mainTitle = document.getElementById('hero-piece-title');
  const mainSub = document.getElementById('hero-piece-meta');

  if (!container || !mainImg) return;

  container.innerHTML = heroItems.map((item, idx) => `
    <button type="button" class="hero-thumb ${idx === 0 ? 'active' : ''}" data-id="${item.id}" title="${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="eager" />
    </button>
  `).join('');

  container.querySelectorAll('.hero-thumb').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.hero-thumb').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const prod = heroItems[idx];
      mainImg.src = prod.image;
      mainImg.alt = prod.title;
      if (mainTitle) mainTitle.textContent = prod.title;
      if (mainSub) mainSub.textContent = `${prod.lights} · قطر ${prod.diameterCm} سانتی‌متر`;
    });
  });
}

// Product Catalog Rendering & Filtering
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const countEl = document.getElementById('catalog-count');
  if (!grid) return;

  const filtered = LAMURINA_PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchQuery = !q ||
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.spaces.some(s => s.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  if (countEl) {
    countEl.textContent = `نمایش ${filtered.length} اثر منتخب از کلکسیون ۲۳۸+ محصول گالری لامورینا`;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card" id="product-${p.id}">
      <div class="product-img-box">
        <span class="product-category-tag">${p.categoryLabel}</span>
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <button type="button" class="product-try-btn" onclick="loadIntoVisualizer('${p.id}')">
          ✨ تست در فضای شما
        </button>
      </div>
      <div class="product-body">
        <div class="product-meta-line font-serif-en">${p.subtitle}</div>
        <h3 class="product-title">${p.title}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-specs-mini">
          <div><span>قطر</span><strong>${p.diameterCm} cm</strong></div>
          <div><span>ارتفاع</span><strong>${p.heightCm} cm</strong></div>
          <div><span>حداقل سقف</span><strong>${p.minCeilingM} m</strong></div>
        </div>
        <div class="product-footer">
          <div class="product-price">${p.priceLabel}</div>
          <div class="product-actions">
            <button type="button" class="btn btn-outline btn-sm" onclick="openProductModal('${p.id}')">جزئیات فنی</button>
            <button type="button" class="btn btn-primary btn-sm" onclick="addToInquiry('${p.id}')">استعلام</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Bind category pills
  document.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-filter-cat]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter-cat');
      renderProducts();
    };
  });

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = 'true';
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }
}

window.filterByCategoryAndScroll = function(cat) {
  activeCategory = cat;
  document.querySelectorAll('[data-filter-cat]').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter-cat') === cat);
  });
  renderProducts();
  const sec = document.getElementById('shop');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
};

// Product Technical Modal
window.openProductModal = function(productId) {
  const p = LAMURINA_PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-modal-content');
  if (!modal || !content) return;

  const waText = encodeURIComponent(`سلام گالری لامورینا، برای مدل «${p.title}» (کد ${p.id}) درخواست استعلام قیمت و مشاوره ابعاد دارم.`);

  content.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; align-items: start;">
      <div style="background:#FFFFFF; border-radius:16px; padding:1.25rem; text-align:center;">
        <img src="${p.image}" alt="${p.title}" style="max-width:100%; max-height:380px; object-fit:contain;" />
      </div>
      <div>
        <span class="eyebrow font-serif-en">${p.subtitle}</span>
        <h2 style="font-size:1.55rem; margin-bottom:0.75rem;">${p.title}</h2>
        <p style="color:var(--text-secondary); margin-bottom:1.25rem;">${p.description}</p>
        <div style="background:var(--bg-elevated); border:1px solid var(--border-card); border-radius:12px; padding:1rem; margin-bottom:1.25rem; display:grid; gap:0.55rem; font-size:0.9rem;">
          <div style="display:flex; justify-content:space-between;"><span>قطر محصول:</span><strong>${p.diameterCm} سانتی‌متر</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>ارتفاع تنه:</span><strong>${p.heightCm} سانتی‌متر (قابل رگلاژ زنجیر)</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>تعداد شعله:</span><strong>${p.lights}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>متریال و شیشه:</span><strong>${p.material}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>حداقل ارتفاع سقف پیشنهادی:</span><strong>${p.minCeilingM} متر</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>فضاهای مناسب:</span><strong>${p.spaces.join(' · ')}</strong></div>
          <div style="display:flex; justify-content:space-between; padding-top:0.45rem; border-top:1px solid var(--border-card);"><span>وضعیت قیمت:</span><strong style="color:var(--gold-secondary);">${p.priceLabel}</strong></div>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.75rem;">
          <a href="https://wa.me/989124882493?text=${waText}" target="_blank" rel="noopener" class="btn btn-primary">
            استعلام قیمت و سفارش در واتساپ
          </a>
          <button type="button" class="btn btn-outline" onclick="loadIntoVisualizer('${p.id}'); closeModal('product-detail-modal');">
            تست در عکس فضای شما
          </button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('open');
};

window.closeModal = function(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
};

// Inquiry List / Cart
window.addToInquiry = function(productId) {
  const p = LAMURINA_PRODUCTS.find(item => item.id === productId);
  if (!p) return;
  if (!inquiryCart.some(item => item.id === productId)) {
    inquiryCart.push(p);
  }
  updateCartBadge();
  openCartModal();
};

window.removeFromInquiry = function(productId) {
  inquiryCart = inquiryCart.filter(item => item.id !== productId);
  updateCartBadge();
  renderCartModal();
};

function updateCartBadge() {
  const badge = document.getElementById('cart-badge-count');
  if (badge) badge.textContent = inquiryCart.length;
}

window.openCartModal = function() {
  renderCartModal();
  const modal = document.getElementById('inquiry-cart-modal');
  if (modal) modal.classList.add('open');
};

function renderCartModal() {
  const box = document.getElementById('inquiry-cart-items');
  if (!box) return;
  if (inquiryCart.length === 0) {
    box.innerHTML = `<p style="color:var(--text-secondary); padding:1.5rem 0; text-align:center;">سبد استعلام و مشاوره شما خالی است. مدل‌های مورد علاقه خود را از بخش کالکشن‌ها انتخاب کنید تا کارشناسان لامورینا پیش‌فاکتور و پیشنهاد ابعاد را برایتان ارسال کنند.</p>`;
    return;
  }

  const names = inquiryCart.map(i => `• ${i.title} (قطر ${i.diameterCm}cm)`).join('\n');
  const waMsg = encodeURIComponent(`سلام گالری لامورینا، برای مدل‌های زیر درخواست استعلام قیمت و مشاوره تناسب با فضا دارم:\n${names}`);

  box.innerHTML = `
    <div style="display:grid; gap:0.85rem; margin-bottom:1.5rem;">
      ${inquiryCart.map(item => `
        <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:0.75rem; background:var(--bg-elevated); border-radius:12px; border:1px solid var(--border-card);">
          <div style="display:flex; align-items:center; gap:0.85rem;">
            <img src="${item.image}" alt="${item.title}" style="width:56px; height:56px; object-fit:contain; background:#FFF; border-radius:8px; padding:4px;" />
            <div>
              <strong style="display:block; font-size:0.95rem;">${item.title}</strong>
              <span style="font-size:0.8rem; color:var(--text-muted);">قطر ${item.diameterCm} سانتی‌متر · ${item.priceLabel}</span>
            </div>
          </div>
          <button type="button" class="btn btn-outline btn-sm" onclick="removeFromInquiry('${item.id}')">حذف</button>
        </div>
      `).join('')}
    </div>
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <span style="font-size:0.88rem; color:var(--text-secondary);">ارسال مستقیم لیست به استودیو طراحی و فروش لامورینا:</span>
      <a href="https://wa.me/989124882493?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-primary">
        ارسال لیست در واتساپ (09124882493)
      </a>
    </div>
  `;
}

// AI Chandelier Visualizer
function initVisualizer() {
  const selectEl = document.getElementById('visualizer-product-select');
  const scaleInput = document.getElementById('visualizer-scale-range');
  const glowInput = document.getElementById('visualizer-glow-range');
  const roomSelect = document.getElementById('visualizer-room-select');
  const uploadInput = document.getElementById('visualizer-room-upload');
  const overlayEl = document.getElementById('visualizer-chandelier-box');

  if (!selectEl) return;

  selectEl.innerHTML = LAMURINA_PRODUCTS.map(p => `
    <option value="${p.id}">${p.title} (قطر ${p.diameterCm}cm)</option>
  `).join('');

  selectEl.addEventListener('change', (e) => {
    const found = LAMURINA_PRODUCTS.find(p => p.id === e.target.value);
    if (found) {
      visualizerProduct = found;
      updateVisualizerView();
    }
  });

  if (scaleInput) {
    scaleInput.addEventListener('input', (e) => {
      visualizerScale = Number(e.target.value);
      updateVisualizerView();
    });
  }

  if (glowInput) {
    glowInput.addEventListener('input', (e) => {
      visualizerGlow = Number(e.target.value) / 100;
      updateVisualizerView();
    });
  }

  if (roomSelect) {
    roomSelect.addEventListener('change', (e) => {
      visualizerRoomPreset = e.target.value;
      applyRoomPreset(visualizerRoomPreset);
    });
  }

  if (uploadInput) {
    uploadInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const backdrop = document.getElementById('visualizer-room-backdrop');
        const svgScene = document.getElementById('visualizer-svg-scene');
        if (backdrop) {
          backdrop.style.backgroundImage = `url('${ev.target.result}')`;
        }
        if (svgScene) {
          svgScene.style.opacity = '0.15';
        }
      };
      reader.readAsDataURL(file);
    });
  }

  // Dragging support on room stage
  if (overlayEl) {
    let isDragging = false;
    const stage = document.getElementById('visualizer-stage');
    overlayEl.addEventListener('pointerdown', (e) => {
      isDragging = true;
      overlayEl.setPointerCapture(e.pointerId);
    });
    overlayEl.addEventListener('pointermove', (e) => {
      if (!isDragging || !stage) return;
      const rect = stage.getBoundingClientRect();
      const xPct = Math.min(82, Math.max(18, ((e.clientX - rect.left) / rect.width) * 100));
      const yPct = Math.min(55, Math.max(2, ((e.clientY - rect.top) / rect.height) * 100));
      overlayEl.style.left = `${xPct}%`;
      overlayEl.style.top = `${yPct}%`;
    });
    overlayEl.addEventListener('pointerup', () => {
      isDragging = false;
    });
  }

  applyRoomPreset(visualizerRoomPreset);
  updateVisualizerView();
}

function applyRoomPreset(preset) {
  const backdrop = document.getElementById('visualizer-room-backdrop');
  const svgScene = document.getElementById('visualizer-svg-scene');
  if (!backdrop) return;
  backdrop.style.backgroundImage = 'none';
  if (svgScene) svgScene.style.opacity = '1';

  const palettes = {
    'modern-living': 'linear-gradient(180deg, #17242C 0%, #0E171D 68%, #1C1915 100%)',
    'luxury-dining': 'linear-gradient(180deg, #1F1B18 0%, #14110F 70%, #261F19 100%)',
    'duplex-lobby': 'linear-gradient(180deg, #0E1D24 0%, #091318 72%, #172026 100%)',
    'classic-salon': 'linear-gradient(180deg, #241E1A 0%, #181411 70%, #2B231C 100%)'
  };
  backdrop.style.background = palettes[preset] || palettes['modern-living'];
}

function updateVisualizerView() {
  const img = document.getElementById('visualizer-chandelier-img');
  const box = document.getElementById('visualizer-chandelier-box');
  const glow = document.getElementById('visualizer-warm-glow');
  const titleEl = document.getElementById('visualizer-active-name');
  const recEl = document.getElementById('visualizer-ai-recommendation');
  const scaleVal = document.getElementById('visualizer-scale-val');

  if (img) img.src = visualizerProduct.image;
  if (box) box.style.width = `${visualizerScale}px`;
  if (glow) glow.style.opacity = String(visualizerGlow);
  if (titleEl) titleEl.textContent = visualizerProduct.title;
  if (scaleVal) scaleVal.textContent = `${visualizerProduct.diameterCm} cm`;

  if (recEl) {
    recEl.innerHTML = `
      <strong>تحلیل هوشمند استودیو لامورینا:</strong> مدل «${visualizerProduct.title}» با قطر <strong>${visualizerProduct.diameterCm} سانتی‌متر</strong> برای سقف‌های بالای <strong>${visualizerProduct.minCeilingM} متر</strong> و فضای <strong>${visualizerProduct.spaces.join(' یا ')}</strong> ایده‌آل است. دمای نور پیشنهادی: <strong>۲۷۰۰ تا ۳۰۰۰ کلوین (گرم طبیعی)</strong>.
    `;
  }
}

window.loadIntoVisualizer = function(productId) {
  const found = LAMURINA_PRODUCTS.find(p => p.id === productId);
  if (!found) return;
  visualizerProduct = found;
  const selectEl = document.getElementById('visualizer-product-select');
  if (selectEl) selectEl.value = found.id;
  updateVisualizerView();
  const sec = document.getElementById('visualizer');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
};

// Smart Chandelier Finder Calculator
function initSmartFinder() {
  const btn = document.getElementById('finder-calc-btn');
  if (!btn) return;
  btn.addEventListener('click', calculateSmartFinder);
  calculateSmartFinder();
}

function calculateSmartFinder() {
  const lengthM = parseFloat(document.getElementById('finder-length')?.value || '6');
  const widthM = parseFloat(document.getElementById('finder-width')?.value || '4.5');
  const heightM = parseFloat(document.getElementById('finder-height')?.value || '3.2');
  const spaceType = document.getElementById('finder-space')?.value || 'living';

  // Architectural formula: (Length + Width in meters) * 8.5 => ideal diameter in cm
  const idealDiameter = Math.round((lengthM + widthM) * 8.5);
  const minClearanceCm = spaceType === 'dining' ? 195 : 215;
  const maxFixtureHeightCm = Math.max(45, Math.round((heightM * 100) - minClearanceCm));
  const areaM2 = Math.round(lengthM * widthM);
  const recommendedLumens = areaM2 * 220;

  const dEl = document.getElementById('finder-res-diameter');
  const hEl = document.getElementById('finder-res-height');
  const lEl = document.getElementById('finder-res-lumens');
  const recList = document.getElementById('finder-recommended-products');

  if (dEl) dEl.textContent = `${idealDiameter - 10} تا ${idealDiameter + 10} cm`;
  if (hEl) hEl.textContent = `حداکثر ${maxFixtureHeightCm} cm`;
  if (lEl) lEl.textContent = `${recommendedLumens.toLocaleString('fa-IR')} لومن`;

  // Pick top 2 matching products
  const matches = LAMURINA_PRODUCTS
    .filter(p => p.minCeilingM <= heightM + 0.25)
    .sort((a, b) => Math.abs(a.diameterCm - idealDiameter) - Math.abs(b.diameterCm - idealDiameter))
    .slice(0, 2);

  if (recList) {
    recList.innerHTML = matches.map(m => `
      <div style="display:flex; align-items:center; justify-content:space-between; gap:0.75rem; background:rgba(255,255,255,0.08); padding:0.7rem; border-radius:10px;">
        <div style="display:flex; align-items:center; gap:0.7rem;">
          <img src="${m.image}" alt="${m.title}" style="width:48px; height:48px; border-radius:8px; background:#FFF; object-fit:contain; padding:3px;" />
          <div>
            <strong style="display:block; font-size:0.88rem;">${m.title}</strong>
            <span style="font-size:0.76rem; color:#C8A96A;">قطر ${m.diameterCm}cm · ارتفاع ${m.heightCm}cm</span>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="openProductModal('${m.id}')">مشاهده</button>
      </div>
    `).join('');
  }
}

// 31-Province Delivery Guide
function initProvinceGuide() {
  const container = document.getElementById('province-pills-container');
  const detailBox = document.getElementById('province-detail-box');
  if (!container || !detailBox) return;

  const keys = Object.keys(PROVINCE_DELIVERY_DATA);
  container.innerHTML = keys.map((k, idx) => `
    <button type="button" class="province-pill ${idx === 0 ? 'active' : ''}" data-prov="${k}">${k}</button>
  `).join('');

  function renderProv(key) {
    const info = PROVINCE_DELIVERY_DATA[key];
    if (!info) return;
    detailBox.innerHTML = `
      <h4 style="font-size:1.15rem; color:var(--gold-secondary); margin-bottom:0.65rem;">${info.title}</h4>
      <div style="display:grid; gap:0.5rem; font-size:0.92rem;">
        <div><strong>زمان و نحوه تحویل:</strong> ${info.deliveryTime}</div>
        <div><strong>استاندارد بسته‌بندی ایمن:</strong> ${info.packaging}</div>
        <div><strong>مزیت اختصاصی:</strong> ${info.highlight}</div>
      </div>
    `;
  }

  container.querySelectorAll('.province-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.province-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProv(btn.getAttribute('data-prov'));
    });
  });

  renderProv(keys[0]);
}

// Navigation & Forms
function initNavigation() {
  const otpForm = document.getElementById('otp-login-form');
  if (otpForm) {
    otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('otp-phone-input')?.value || '';
      const status = document.getElementById('otp-status-msg');
      if (status) {
        status.style.display = 'block';
        status.textContent = `کد تأیید ۶ رقمی برای شماره ${phone} ارسال شد. (پیش‌نمایش درگاه ورود پیامکی لامورینا)`;
      }
    });
  }

  const studioForm = document.getElementById('studio-consult-form');
  if (studioForm) {
    studioForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('studio-phone')?.value || '';
      const space = document.getElementById('studio-space')?.value || '';
      const ceiling = document.getElementById('studio-ceiling')?.value || '';
      const notes = document.getElementById('studio-notes')?.value || '';
      const waText = encodeURIComponent(
        `سلام استودیو لامورینا، درخواست مشاوره طراحی رایگان دارم:\n• شماره تماس: ${phone}\n• نوع فضا: ${space}\n• ارتفاع سقف: ${ceiling} متر\n• توضیحات: ${notes}`
      );
      window.open(`https://wa.me/989124882493?text=${waText}`, '_blank');
    });
  }
}
