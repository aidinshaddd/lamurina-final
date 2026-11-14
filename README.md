# گالری لوستر لامورینا | Lamurina Luxury Lighting Gallery (`lamurina-final`)

**وب‌سایت رسمی:** [https://lamurinagallery.com/](https://lamurinagallery.com/)  
**مخزن نهایی:** [`aidinshaddd/lamurina-final`](https://github.com/aidinshaddd/lamurina-final) · [`aidinshaddd/lamurina`](https://github.com/aidinshaddd/lamurina)  
**پیام برند:** «نور، امضای فضای شماست.»

---

## ۱. ساختار شاخه‌ها و محیط‌های انتشار (Git Branches)

این مخزن دارای ۴ شاخه استاندارد برای چرخه توسعه تا انتشار زنده (Live) است:

| شاخه (Branch) | محیط هدف | کاربرد |
|---|---|---|
| `developer` | Development | توسعه قابلیت‌های جدید، کامپوننت‌های دیزاین و Sitemap |
| `test` | QA & Testing | تست کنترل کیفیت، بررسی موبایل/RTL و تست لینک‌های Sitemap |
| `stage` | Staging / Pre-Live | پیش‌نمایش نهایی پیش از انتقال به محیط اصلی |
| `main` | Production (Live) | نسخه نهایی آماده انتشار روی دامنه `lamurinagallery.com` |

---

## ۲. مستندات و بخش‌های به‌روزرسانی‌شده

- **[DESIGN.md](./DESIGN.md):** راهنمای جامع سیستم طراحی نسخه ۲ (تم دوگانه Dark Italian Luxury `#0A0A0A` / `#D4AF37` و Architectural Teal `#102F3A` / `#F5F7F5`، تایپوگرافی، استاندارد کارت محصول و حذف کامل متون تکراری).
- **[SITEMAP.md](./SITEMAP.md):** معماری اطلاعات جدید سایت شامل صفحات اصلی، کالکشن‌های تخصصی مورانو و باکارات، تست هوشمند در فضا (`/visualizer/`)، محاسبه‌گر مهندسی لوستر (`/finder/`)، پورتال معماران (`/architects/`)، راهنمای مهندسی نصب (`/chandelier-installation/`) و پوشش ۳۱ استان (`/service-area/`).
- **نقشه‌های XML استاندارد (`public/`):**
  - `public/sitemap_index.xml`
  - `public/page-sitemap.xml`
  - `public/product-sitemap.xml`
  - `public/product_cat-sitemap.xml`
  - `public/post-sitemap.xml`
  - `public/category-sitemap.xml`

---

## ۳. اجرای محلی و تست

```bash
npm test
npm start
# Server runs on http://localhost:3080
```
