const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT || 3080);
const PUBLIC_DIR = path.join(__dirname, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const SPA_ROUTES = new Set([
  '/',
  '/shop',
  '/shop/',
  '/collections',
  '/collections/',
  '/visualizer',
  '/visualizer/',
  '/finder',
  '/finder/',
  '/studio',
  '/studio/',
  '/projects',
  '/projects/',
  '/gallery',
  '/gallery/',
  '/architects',
  '/architects/',
  '/chandelier-installation',
  '/chandelier-installation/',
  '/service-area',
  '/service-area/',
  '/blog',
  '/blog/',
  '/contact',
  '/contact/',
  '/cart',
  '/cart/',
  '/my-account',
  '/my-account/'
]);

const server = http.createServer((req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (urlPath === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      status: 'ok',
      project: 'lamurina-final',
      domain: 'https://lamurinagallery.com',
      branches: ['developer', 'test', 'stage', 'main'],
      sitemaps: [
        '/sitemap_index.xml',
        '/page-sitemap.xml',
        '/product-sitemap.xml',
        '/product_cat-sitemap.xml',
        '/post-sitemap.xml',
        '/category-sitemap.xml'
      ]
    }));
    return;
  }

  let targetFile = path.join(PUBLIC_DIR, urlPath);
  if (SPA_ROUTES.has(urlPath) || urlPath.startsWith('/collections/') || urlPath.startsWith('/product/') || urlPath.startsWith('/service-area/')) {
    targetFile = path.join(PUBLIC_DIR, 'index.html');
  }

  fs.stat(targetFile, (err, stats) => {
    if (err || !stats.isFile()) {
      const fallback = path.join(PUBLIC_DIR, 'index.html');
      fs.readFile(fallback, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(targetFile, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Lamurina Gallery Server running at http://localhost:${PORT}`);
});
