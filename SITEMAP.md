# معماری Sitemap و ساختار صفحات — گالری لامورینا (Lamurina Gallery)

> **کد سند:** `LAM-SITEMAP-V2-FINAL`  
> **دامنه رسمی:** `https://lamurinagallery.com`  
> **وضعیت Sitemap XML:** ساختار ۵گانه استاندارد (`sitemap_index.xml`) همراه با Schema.org JSON-LD

---

## ۱. نمودار درختی ساختار جدید سایت (Information Architecture)

```text
https://lamurinagallery.com/
│
├── /                                  # صفحه اصلی (Hero، کالکشن‌های شاخص، پیش‌نمایش AI Visualizer، استودیو، شوروم تهران)
│
├── /collections/                      # کالکشن‌های تخصصی گالری ایتالیایی
│   ├── /collections/murano-glass/     # لوستر و روشنایی شیشه‌ای مورانو (Murano Floral, Leaf, Classic Blue)
│   ├── /collections/baccarat/         # لوسترهای سبک باکارات و کریستال دست‌تراش
│   ├── /collections/crystal-rain/     # لوسترهای کریستالی آبشاری و خطی (Crystal Rain Series)
│   ├── /collections/classic-palazzo/  # لوسترهای کلاسیک و نئوکلاسیک (Palazzo Emerald & Clear)
│   ├── /collections/pendants/         # آویزهای دکوراتیو و مدرن (Smoke Glass, Petal Column, Petal Ring)
│   ├── /collections/table-floor-lamps/# آباژور و چراغ‌های رومیزی و کنار سالنی (Column Series, Petal Stand, Amber Lamp)
│   ├── /collections/wall-lamps/       # دیوارکوب‌های شیشه‌ای و کریستالی
│   └── /collections/decorative-art/   # پرنده‌های شیشه‌ای (Glass Birds)، آینه‌های ونیزی و اکسسوری لوکس
│
├── /shop/                             # فروشگاه و کاتالوگ کامل محصولات (با فیلتر زنده متریال، فضا، ابعاد و رنگ)
│   └── /product/{product-slug}/       # صفحه تکی محصول (گالری بزرگ، جدول فنی، محصولات ست، استعلام واتساپ و رزرو مشاوره)
│
├── /visualizer/                       # دستیار هوشمند AI Chandelier Visualizer (آپلود عکس فضا + پیشنهاد و تست زنده لوستر)
├── /finder/                           # محاسبه‌گر هوشمند ابعاد و ارتفاع لوستر (Smart Chandelier Calculator)
│
├── /studio/                           # استودیو طراحی و مشاوره رایگان بر اساس معماری فضا + طراحی سفارشی (Bespoke)
├── /projects/                         # پروژه‌های اجراشده (ویلا، پنت‌هاوس، لابی، هتل، رستوران) + منزل شما عزیزان
├── /gallery/                          # گالری ویدئویی «نور، شیشه و حرکت» (Video Lookbook)
├── /architects/                       # پورتال معماران و باشگاه طراحان داخلی (BOQ، کاتالوگ فنی، فایل‌های 3D/CAD)
│
├── /chandelier-installation/          # راهنمای مهندسی نصب ایمن، نوع سقف و استاندارد ارتفاع (نسخه پیرایش‌شده بدون تکرار)
├── /service-area/                     # ارسال ایمن و خدمات در ۳۱ استان ایران + لندینگ‌های سئو شهری
│   ├── /service-area/tehran/          # خرید لوستر لوکس و مورانو در تهران (بازدید حضوری شوروم + ارسال فوری)
│   ├── /service-area/isfahan/         # خرید لوستر در اصفهان
│   ├── /service-area/shiraz/          # خرید لوستر در شیراز
│   ├── /service-area/mashhad/         # خرید لوستر در مشهد
│   ├── /service-area/tabriz/          # خرید لوستر در تبریز
│   └── /service-area/mazandaran/      # خرید لوستر برای ویلاهای شمال و مازندران
│
├── /blog/                             # مجله تخصصی نور و معماری (Inspiration Center)
├── /contact/                          # شوروم تهران (۱۵ خرداد غربی، پلاک ۱۲۲۶)، رزرو بازدید حضوری و ارتباط مستقیم
├── /cart/                             # سبد خرید و لیست استعلام پروژه
└── /my-account/                       # حساب کاربری و ورود سریع با شماره موبایل (OTP)
```

---

## ۲. ساختار فایل‌های XML Sitemap (در پوشه `public/`)

| فایل | مسیر | محتوا و اولویت (Priority) |
|---|---|---|
| **Sitemap Index** | `/sitemap_index.xml` | فهرست مرجع ۵ نقشه سایت مجزا |
| **Page Sitemap** | `/page-sitemap.xml` | صفحات اصلی، استودیو، هوش مصنوعی، پورتال معماران، راهنمای نصب و تماس (`0.8` تا `1.0`) |
| **Collection Sitemap** | `/product_cat-sitemap.xml` | کالکشن‌های تخصصی لوستر مورانو، باکارات، کریستالی، آباژور و دکوراتیو (`0.9`) |
| **Product Sitemap** | `/product-sitemap.xml` | صفحات محصولات شاخص گالری لامورینا با تصاویر و متادیتای به‌روز (`0.85`) |
| **Post & Guide Sitemap** | `/post-sitemap.xml` | مقالات راهنمای انتخاب قطر لوستر، ارتفاع نصب، شناخت شیشه مورانو و نورپردازی (`0.75`) |
| **City & Local SEO Sitemap** | `/category-sitemap.xml` | صفحات لندینگ استان‌ها و کلیدواژه‌های محلی (تهران، لواسان، نیاوران، شیراز، اصفهان، مشهد، تبریز) (`0.8`) |

---

## ۳. تغییرات کلیدی نسبت به Sitemap قبلی

1. **افزودن مسیرهای ارزش‌آفرین پرامت لامورینا:** مسیرهای `/visualizer/` (تست هوشمند لوستر در عکس فضا)، `/finder/` (محاسبه‌گر ابعاد و ارتفاع)، `/architects/` (پورتال معماران و فایل‌های سهبعدی) و `/projects/` (پروژه‌های لابی، ویلا و منزل مشتریان) به معماری اطلاعات اضافه شدند.
2. **بهینه‌سازی دسته‌بندی محصولات (`product_cat-sitemap.xml`):** تفکیک دقیق بر اساس سبک و متریال (مورانو، کریستال بارانی، پالازو کلاسیک، آویز دودی، آباژور ستونی و پرنده‌های شیشه‌ای).
3. **پاک‌سازی محتوای تکراری SEO:** حذف بندهای کپی‌شده در `/chandelier-installation/` و `/service-area/` برای جلوگیری از جریمه Duplicate Content گوگل و ارتقای امتیاز کیفیت محتوا.
4. **افزودن داده‌های ساختاریافته (JSON-LD Schema):** پیاده‌سازی کامل `LocalBusiness`، `Organization`، `Product`، `FAQPage` و `BreadcrumbList`.
