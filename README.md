# Blur Teknoloji - Enterprise Management System

Bu proje, Blur Teknoloji için geliştirilmiş modern bir şirket yönetim sistemidir. Frontend React ve Backend .NET 9.0 teknolojileri kullanılarak geliştirilmiştir.

## 🚀 HIZLI BAŞLANGIÇ - PROJEYİ ÇALIŞTIRMAK İÇİN

### ⚠️ ÖNEMLİ: İki Terminal Gerekli

Bu projeyi çalıştırmak için **İKİ AYRI TERMİNAL** açmanız gerekiyor. Biri backend, diğeri frontend için.

### 📋 Gerekli Yazılımlar
- **Node.js** (v18 veya üzeri) - [İndir](https://nodejs.org/)
- **.NET 9.0 SDK** - [İndir](https://dotnet.microsoft.com/download/dotnet/9.0)
- **Git** - [İndir](https://git-scm.com/)

> **Not:** Bu proje **Microsoft SQL Server** kullanmaktadır. Veritabanı kurulumu gereklidir.

### 🗄️ Veritabanı Kurulumu

Bu proje **Microsoft SQL Server** kullanmaktadır. Kurulum için:

1. **SQL Server LocalDB** kurun: [İndir](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/sql-server-express-localdb)
2. **SQL Server Express** kurun: [İndir](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
3. **SQL Server Developer Edition** kurun: [İndir](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

**Veritabanı Bağlantı Bilgileri:**
- **Sunucu:** `localhost\MSSQLSERVER01`
- **Veritabanı:** `BlurApiDb`
- **Kimlik Doğrulama:** Windows Authentication

Kurulum sonrası:
```bash
# Migration oluşturun
dotnet ef migrations add InitialCreate

# Veritabanını oluşturun
dotnet ef database update
```

### 🔧 Kurulum Adımları

#### 1. Backend Kurulumu (İlk Terminal)

```bash
# 1. Backend klasörüne gidin
cd BlurApi-main

# 2. Bağımlılıkları yükleyin
dotnet restore

# 3. Projeyi derleyin
dotnet build

# 4. Backend'i çalıştırın
dotnet run
```

**Backend başarıyla çalıştığında şu mesajları göreceksiniz:**
```
Connected to database.
Now listening on: http://localhost:5153
Application started. Press Ctrl+C to shut down.
```

> **SQL Server Veritabanı:** Veritabanı SQL Server'da `BlurApiDb` adıyla oluşturulur.

#### 2. Frontend Kurulumu (İkinci Terminal)

```bash
# 1. Yeni bir terminal açın ve frontend klasörüne gidin
cd blur-challenge-frontend-main

# 2. Bağımlılıkları yükleyin
npm install

# 3. Frontend'i çalıştırın
npm run dev
```

**Frontend başarıyla çalıştığında şu mesajları göreceksiniz:**
```
Local:   http://localhost:5173/
```

### 🌐 Erişim Adresleri

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5153

### ✅ Test Etme

1. Tarayıcınızda `http://localhost:5173` adresine gidin
2. "Şirketler Sayfasına Git" butonuna tıklayın
3. "Yeni Şirket" butonu ile test şirketi oluşturun
4. CRUD işlemlerini test edin

### 🛠️ Sorun Giderme

#### Backend Çalışmıyorsa:
```bash
cd BlurApi-main
dotnet clean
dotnet restore
dotnet build
dotnet run
```

#### Frontend Çalışmıyorsa:
```bash
cd blur-challenge-frontend-main
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Port Çakışması Varsa:
- Backend için: `dotnet run --urls "http://localhost:5154"`
- Frontend için: `npm run dev -- --port 5174`

## 🚀 Teknolojiler

### Frontend
- **React v19.1** - Modern UI kütüphanesi
- **Vite v6.3.5** - Hızlı build tool
- **React Router v7.6.2** - Sayfa yönlendirme
- **TailwindCSS v4.1.10** - Utility-first CSS framework
- **DaisyUI v5.0.43** - TailwindCSS component kütüphanesi

### Backend
- **.NET 9.0** - Modern .NET framework
- **Entity Framework Core v9** - ORM
- **EF SQL Server v9** - SQL Server provider
- **Microsoft SQL Server** - Veritabanı (kurulum gerekli)

## 📁 Proje Yapısı

### Frontend Klasör Yapısı
```
src/
├── components/     # Dışa aktarılan bileşenler
├── contexts/       # React Context'ler
├── requests/       # API çağrıları
├── routes/         # Sayfa yapıları
└── utils/          # Yardımcı fonksiyonlar
```

### Backend Klasör Yapısı
```
├── Controllers/    # API endpoint'leri
├── Models/         # Veri modelleri
├── Data/           # EF veritabanı tanımları
└── Services/       # İş mantığı servisleri
```

## 🛠️ Detaylı Kurulum ve Çalıştırma

### Backend Kurulumu

1. **Proje dizinine gidin:**
   ```bash
   cd BlurApi-main
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   dotnet restore
   ```

3. **Projeyi derleyin:**
   ```bash
   dotnet build
   ```

4. **Uygulamayı çalıştırın:**
   ```bash
   dotnet run
   ```

Backend uygulaması `http://localhost:5153` adresinde çalışacaktır.

> **Veritabanı:** SQL Server veritabanı `BlurApiDb` adıyla oluşturulur. Windows Authentication kullanılır.

### Frontend Kurulumu

1. **Proje dizinine gidin:**
   ```bash
   cd blur-challenge-frontend-main
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Uygulamayı çalıştırın:**
   ```bash
   npm run dev
   ```

Frontend uygulaması `http://localhost:5173` adresinde çalışacaktır.

## 📋 Özellikler

### Şirket Yönetimi
- ✅ Yeni şirket oluşturma
- ✅ Şirket listesi görüntüleme
- ✅ Şirket detaylarını görüntüleme
- ✅ Şirket durumunu değiştirme (aktif/pasif)
- ✅ Şirket silme
- ✅ Form doğrulama

### Veri Doğrulama
- ✅ E-posta formatı kontrolü
- ✅ Telefon numarası kontrolü (90 ile başlayan 12 haneli)
- ✅ Vergi numarası kontrolü (10 haneli)
- ✅ Bakiye kontrolü (en fazla 2 ondalık basamak)
- ✅ Zorunlu alan kontrolü

### Kullanıcı Arayüzü
- ✅ Modern ve responsive tasarım
- ✅ Modal pencereler
- ✅ Loading durumları
- ✅ Hata mesajları
- ✅ Tablo görünümü
- ✅ DaisyUI bileşenleri

## 🗄️ Veri Yapısı

### Enterprise Model
```json
{
    "id": "string (UUID4)",
    "title": "string - Şirket adı",
    "phone": "string - Telefon (90xxxxxxxxxx)",
    "email": "string - E-posta",
    "balance": "decimal - Bakiye (TL)",
    "verified": "boolean - Doğrulandı (otomatik true)",
    "address": "string - Adres",
    "taxNumber": "long - Vergi numarası (10 haneli)",
    "taxProvince": "string - Vergi dairesi ili",
    "taxDistrict": "string - Vergi dairesi ilçesi",
    "createdAt": "DateTime - Oluşturulma tarihi",
    "disabled": "boolean - Devre dışı/aktif"
}
```

## 🔌 API Endpoints

### Enterprise Endpoints
- `GET /api/enterprise` - Tüm şirketleri listele
- `GET /api/enterprise/{id}` - Şirket detayını getir
- `POST /api/enterprise` - Yeni şirket oluştur
- `PUT /api/enterprise/{id}` - Şirket güncelle
- `PATCH /api/enterprise/{id}/toggle-status` - Şirket durumunu değiştir
- `DELETE /api/enterprise/{id}` - Şirket sil

## 🎯 Kullanım

1. **Ana Sayfa:** `http://localhost:5173/`
   - Şirketler sayfasına yönlendiren buton

2. **Şirketler Sayfası:** `http://localhost:5173/enterprises`
   - Şirket listesi
   - Yeni şirket oluşturma
   - Şirket detayları
   - Şirket yönetimi

## 🔧 Geliştirme

### Yeni Özellik Ekleme
1. Backend'de model ve controller oluşturun
2. Frontend'de component ve route ekleyin
3. API çağrılarını requests klasörüne ekleyin
4. Context'e yeni state'leri ekleyin

### Veritabanı Değişiklikleri
1. Model'i güncelleyin
2. Migration oluşturun: `dotnet ef migrations add MigrationName`
3. Veritabanını güncelleyin: `dotnet ef database update`

## 📝 Notlar

- Şirketler otomatik olarak doğrulanmış olarak oluşturulur
- Tarih formatı: HH:mm dd.MM.yyyy
- Telefon numaraları 90 ile başlamalı ve 12 haneli olmalıdır
- Vergi numaraları 10 haneli olmalıdır
- Bakiye en fazla 2 ondalık basamaklı olabilir

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje Blur Teknoloji için geliştirilmiştir.

---

**Geliştirici:** Emircan Bulut  
**Tarih:** 2025  
**Versiyon:** 1.0.0

### 📞 İletişim

Proje hakkında detaylı bilgi için: **emircanbulut04@gmail.com**

### 🎯 Önemli Notlar

- Backend ve frontend aynı anda çalışmalıdır
- Backend: http://localhost:5153
- Frontend: http://localhost:5173
- **SQL Server veritabanı kurulumu gerekli** - SQL Server Express/LocalDB kurulmalı
- Tüm CRUD işlemleri (Create, Read, Update, Delete) çalışır durumda
- Veritabanı: SQL Server'da `BlurApiDb`