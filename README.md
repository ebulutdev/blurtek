# Blur Teknoloji - Enterprise Management System

Bu proje, Blur Teknoloji için geliştirilmiş modern bir şirket yönetim sistemidir. Frontend React ve Backend .NET 9.0 teknolojileri kullanılarak geliştirilmiştir.

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
- **SQL Server** - Veritabanı

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

## 🛠️ Kurulum ve Çalıştırma

### Backend Kurulumu

1. **Proje dizinine gidin:**
   ```bash
   cd BlurApi-main
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   dotnet restore
   ```

3. **Veritabanını oluşturun:**
   ```bash
   dotnet ef database update
   ```

4. **Uygulamayı çalıştırın:**
   ```bash
   dotnet run
   ```

Backend uygulaması `http://localhost:5000` adresinde çalışacaktır.

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

**Geliştirici:** [Adınız]  
**Tarih:** 2025  
**Versiyon:** 1.0.0
