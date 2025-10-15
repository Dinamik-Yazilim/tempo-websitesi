# TEMPO - iOS & Android Mobil ERP Çözümü

**Dinamik Barkod ve Yazılım Ltd. Şti.** tarafından geliştirilen TEMPO, Mikro ERP ile tam entegre çalışan iOS ve Android uyumlu mobil ERP çözümüdür.

## 🎯 Proje Özeti

TEMPO, işletmelerin ERP süreçlerini mobil cihazlarda kolayca yönetebilmesi için geliştirilmiş modern bir web sitesidir. ConnectorAbi altyapısı ile güvenli ve hızlı performans sunar.

## 🛠️ Teknoloji Stack

### Frontend

- **Next.js 15.5.5** - React framework (Turbopack ile)
- **React 18** - UI kütüphanesi
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Google Fonts** - Rubik Maze & Inter fontları

### Özellikler

- **Responsive Design** - Mobile-first yaklaşım
- **Dark/Light Theme** - CSS custom properties ile tema yönetimi
- **Image Modal Gallery** - Popup ile resim gösterimi
- **Smooth Scrolling Navigation** - Yumuşak sayfa içi navigasyon
- **WhatsApp Integration** - Direkt WhatsApp iletişimi
- **Custom Favicon** - SVG tabanlı T harfi logo

## 📁 Proje Yapısı

```
tempo-websitesi/
├── client/                     # Next.js uygulaması
│   ├── public/
│   │   ├── images/             # Uygulama ekran görüntüleri
│   │   │   ├── dinamiktempo-01.png
│   │   │   ├── dinamiktempo-02.png
│   │   │   └── ... (8 adet)
│   │   ├── favicon.svg         # Ana favicon (32x32)
│   │   └── favicon-16x16.svg   # Küçük favicon
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx      # Root layout & metadata
│   │   │   ├── page.tsx        # Ana sayfa komponenti
│   │   │   └── globals.css     # Global CSS & tema değişkenleri
│   │   ├── components/
│   │   │   └── Navigation.tsx  # Header navigasyon
│   │   └── contexts/
│   │       └── ThemeContext.tsx # Tema state yönetimi
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── next.config.ts
└── README.md
```

## 🎨 Tasarım Sistemi

### Renkler

- **Primary Blue:** `#2563eb` (Dinamik mavi)
- **Primary Orange:** `#f97316` (TEMPO turuncu)
- **Dark Background:** `#1e1b4b` → `#020617` (Gradient)
- **Light Background:** `#ffffff` / `#f9fafb`

### Tipografi

- **Headings:** Rubik Maze (TEMPO logosu için)
- **Body:** Inter (okunabilirlik için)
- **Font Weights:** 400, 500, 600, 700, 800

### Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- Yarn veya npm

### Kurulum

```bash
# Repository'i klonlayın
git clone https://github.com/Dinamik-Yazilim/tempo-websitesi.git

# Client dizinine gidin
cd tempo-websitesi/client

# Bağımlılıkları yükleyin
yarn install
# veya
npm install
```

### Development

```bash
# Development server başlatın
yarn dev
# veya
npm run dev

# http://localhost:3001 adresinde çalışır
```

### Production Build

```bash
# Production build alın
yarn build
# veya
npm run build

# Build'i başlatın
yarn start
# veya
npm start
```

## 📱 Özellikler

### 🎯 Ana Bölümler

1. **Hero Section** - TEMPO tanıtımı ve CTA butonları
2. **Features** - Özellikler grid layout ile
3. **Pricing** - Kiralık ve satın alma seçenekleri
4. **Gallery** - Uygulama ekran görüntüleri (popup modal)
5. **Contact** - İletişim bilgileri ve form
6. **Footer** - Sosyal medya ve linkler

### 🔧 Teknik Özellikler

- **Client-Side Rendering** - React hooks ile state yönetimi
- **Image Optimization** - Next.js Image component
- **SEO Optimized** - Meta tags ve structured data
- **Accessibility** - ARIA labels ve keyboard navigation
- **Performance** - Turbopack ile hızlı build

### 📞 İletişim Entegrasyonları

- **Email:** info@dinamikotomasyon.com
- **Telefon:** +90 342 322 54 85
- **WhatsApp:** +90 532 729 88 27 (Direkt chat açılır)

## 🎨 Tema Sistemi

### CSS Custom Properties

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #f97316;
  --color-background: #ffffff;
  --color-text: #1f2937;
}

html.dark {
  --color-background: #111827;
  --color-text: #f9fafb;
}
```

### Theme Context

- React Context API ile global tema state
- localStorage ile tema tercihi kalıcılığı
- HTML class manipülasyonu ile instant switching

## 🖼️ Galeri Sistemi

### Modal Implementation

- `useState` ile seçili resim state'i
- ESC tuşu ve overlay click ile kapatma
- Body scroll lock modal açıkken
- Responsive image sizing

### Image Assets

- 8 adet uygulama ekran görüntüsü
- Optimized PNG format
- Consistent naming: `dinamiktempo-0X.png`

## 📈 SEO & Performance

### Meta Tags

```html
<title>TEMPO - iOS & Android Mobil ERP Çözümü | Dinamik Barkod</title>
<meta
  name="description"
  content="Dinamik Barkod tarafından geliştirilen iOS ve Android uyumlu Mikro ERP..."
/>
```

### Favicon System

- SVG format için modern browser desteği
- Multiple sizes (16x16, 32x32)
- Dark gradient background
- Bold T typography

## 🔒 Güvenlik

- **noopener noreferrer** external linkler için
- XSS protection ile secure rendering
- TypeScript ile type safety
- ESLint rules ile code quality

## 📊 Browser Desteği

- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **Fallbacks:** CSS Grid ve Flexbox desteği

## 🚧 Geliştirme Notları

### Kod Standartları

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits
- Component-based architecture

### Dosya Organizasyonu

- Atomic design principles
- Context providers
- Custom hooks
- Utility functions

## 📞 Destek

**Dinamik Barkod ve Yazılım Ltd. Şti.**

- 📍 **Teknopark:** Çamtepe Mah. Mahmut Tevfik Atay Bulvarı 4/A Blok No: 206 Şahinbey, Gaziantep
- 📍 **Merkez:** Güvenevler, 29004. Sk. No:2, 27560 Şehitkamil, Gaziantep
- 📧 **Email:** info@dinamikotomasyon.com
- 📱 **WhatsApp:** [+90 532 729 88 27](https://api.whatsapp.com/send?phone=905327298827)

## 📄 Lisans

© 2025 Dinamik Barkod ve Yazılım Ltd. Şti. Tüm hakları saklıdır.
