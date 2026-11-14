const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'DESIGN.md',
  'SITEMAP.md',
  'public/index.html',
  'public/styles.css',
  'public/app.js',
  'public/sitemap_index.xml',
  'public/page-sitemap.xml',
  'public/product-sitemap.xml',
  'public/product_cat-sitemap.xml',
  'public/post-sitemap.xml',
  'public/category-sitemap.xml',
  'public/robots.txt',
  'public/.htaccess',
  'public/assets/images/logo.jpg',
  '.cpanel.yml',
  'DEPLOY.md',
  'deploy/lamurina-live-sync/lamurina-live-sync.php'
];

for (const rel of requiredFiles) {
  const full = path.join(__dirname, '..', rel);
  if (!fs.existsSync(full)) {
    console.error(`Missing required file: ${rel}`);
    process.exit(1);
  }
}

for (let i = 1; i <= 12; i++) {
  const num = String(i).padStart(2, '0');
  const prodImg = path.join(__dirname, '..', `public/assets/products/product-${num}.jpg`);
  if (!fs.existsSync(prodImg)) {
    console.error(`Missing product image: product-${num}.jpg`);
    process.exit(1);
  }
}

console.log('All Lamurina Sitemap V2, Design System, and 12 Studio Product Assets verified successfully.');
