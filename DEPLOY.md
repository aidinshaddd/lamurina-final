# راهنمای Auto-Deploy گالری لامورینا (`aidinshaddd/lamurina-final`)

این ریپوزیتوری دارای پایپ‌لاین خودکار ۴ مرحله‌ای (`developer` → `test` → `stage` → `main`) است که با هر Push یا اجرای دستی در GitHub Actions، تمام فایل‌ها، سایت‌مپ‌های XML و ۱۲ تصویر استودیویی را تست کرده و بستهٔ آمادهٔ انتشار را می‌سازد و روی سرور لایو (`https://lamurinagallery.com/`) منتشر می‌کند.

---

## ۱. چرخه ۴ برنچ و محیط‌ها

| برنچ | محیط (Environment) | مسیر روی سرور (cPanel / FTP) | دامنه مقصد |
|---|---|---|---|
| `developer` | Development | `/dev.lamurinagallery.com/` | `https://dev.lamurinagallery.com` |
| `test` | QA & Automated Testing | `/test.lamurinagallery.com/` | `https://test.lamurinagallery.com` |
| `stage` | Pre-Production Staging | `/stage.lamurinagallery.com/` | `https://stage.lamurinagallery.com` |
| `main` | **Live Production** | `/public_html/` | **`https://lamurinagallery.com`** |

---

## ۲. روش‌های اتصال خودکار به هاست `lamurinagallery.com`

پایپ‌لاین [`.github/workflows/pipeline.yml`](./.github/workflows/pipeline.yml) هر ۳ روش زیر را به‌صورت خودکار پشتیبانی می‌کند:

### روش اول: اتصال مستقیم از طریق FTP در GitHub Secrets (پیشنهادی برای cPanel)
در گیت‌هاب وارد `aidinshaddd/lamurina-final` → **Settings** → **Secrets and variables** → **Actions** شوید و ۳ متغیر زیر را اضافه کنید:
- `FTP_SERVER`: آدرس FTP هاست (مثلاً `ftp.lamurinagallery.com`)
- `FTP_USERNAME`: نام کاربری FTP یا cPanel
- `FTP_PASSWORD`: رمز عبور FTP

به محض ثبت این ۳ مقدار، هر Push روی `main` تمام فایل‌های `public/` و `.htaccess` را خودکار روی `/public_html/` آپلود می‌کند.

### روش دوم: استفاده از cPanel Git™ Version Control (با فایل `.cpanel.yml`)
فایل [`.cpanel.yml`](./.cpanel.yml) در ریشه ریپوزیتوری قرار داده شده است:
1. وارد **cPanel** → **Git™ Version Control** شوید.
2. ریپوزیتوری `https://github.com/aidinshaddd/lamurina-final.git` (برنچ `main`) را Clone کنید.
3. دکمه **Deploy HEAD Commit** را بزنید (یا Webhook گیت‌هاب را فعال کنید)؛ فایل `.cpanel.yml` به‌صورت خودکار محتویات `public/` را در `public_html` و افزونه `lamurina-live-sync` را در `wp-content/plugins/` کپی می‌کند.

### روش سوم: افزونه وردپرس `lamurina-live-sync` (برای اصلاح آنی وردپرس فعلی + Webhook)
در پوشه [`deploy/lamurina-live-sync/lamurina-live-sync.php`](./deploy/lamurina-live-sync/lamurina-live-sync.php) افزونه اختصاصی وردپرس قرار دارد که:
1. واحد پول ووکامرس را به **تومان (`IRT`)** بدون اعشار تغییر می‌دهد (رفع باگ `$22,100,000.00`).
2. پاراگراف‌های تکراری («نکته تکمیلی ۱ تا ۱۰») را از صفحات `/chandelier-installation/` و `/service-area/` پاک می‌کند.
3. کش LiteSpeed را خالی می‌کند و اندپوینت `/wp-json/lamurina/v1/deploy` را برای دریافت مستقیم دستور Deploy از GitHub Actions فعال می‌سازد.
