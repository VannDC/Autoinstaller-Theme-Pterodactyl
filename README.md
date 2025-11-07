
---

<h1 align="center">🐦 Pterodactyl Theme Auto Installer + 🛡️ Protect</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.3-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Status-Stable-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/Author-VANZ%20RYUICHI-critical?style=for-the-badge">
</p>

---


> 🔧 Script otomatis untuk menginstall berbagai tema **Pterodactyl Panel**,  
> lengkap dengan fitur **Protect** yang mencegah penghapusan admin utama dan server penting.  


---

## ✨ Fitur Auto Installer

- 🔖 Install Tema **Stellar**  
- 🔖 Install Tema **Billing**  
- 🔖 Install Tema **Enigma**  
- 🧹 Uninstall Tema  

---

## 🛡️ Fitur Protect (Anti Delete Admin)

- 🔒 Mencegah penghapusan **Admin Utama**
- 🔒 Mencegah penghapusan **Server** oleh non-admin utama
- 🧱 Menambahkan validasi keamanan otomatis di:
  - `app/Http/Controllers/Admin/UserController.php`
  - `app/Services/Servers/ServerDeletionService.php`

- 💾 Auto backup file `.bak` sebelum modifikasi  
- ⚙️ Auto build panel setelah patch  
- 🧠 Bisa restore balik dari backup  
- 🧩 Versi Proteksi: **v1.3**

---

## 🧩 Menu Protect Script

| 🔢 Opsi | ⚙️ Fungsi | 📘 Keterangan |
|:-------:|:---------------------------|:----------------------------------------------|
| **1** | Pasang Protect & Build Panel | Tambah proteksi admin utama dan rebuild panel |
| **2** | Restore dari Backup | Pulihkan file asli dan rebuild ulang panel |
| **3** | Pasang Protect Admin Eksternal | Menjalankan script tambahan dari Protect |

---

## 💻 System Support

| 🖥️ OS | Versi | Status |
|:------|:--------|:--------|
| **Ubuntu** | 20.04 / 22.04 | ☑️ |
| **Debian** | 10 / 11 / 12 | ☑️ |

---

## 🧠 Panduan Cepat

### 🔹 Install Tema
```bash
bash <(curl -s https://raw.githubusercontent.com/VannDC/Autoinstaller-Theme-Pterodactyl/main/install.sh)
```

### 🔹 Install Protect (Anti Delete Admin)
```bash
bash <(curl -s https://raw.githubusercontent.com/VannDC/Autoinstaller-Theme-Pterodactyl/main/antidel.sh)
```

---

### 📜 Langkah-langkah

1️⃣ Pilih opsi `1`  
2️⃣ Masukkan **User ID Admin Utama**  
3️⃣ Tunggu proses patch & build selesai 🎉  

---

### 🧱 Build Manual (Jika Diperlukan)
```bash
cd /var/www/pterodactyl
yarn build:production --progress
```

---

### 🎬 Demo Preview

<p align="center">
  <img src="https://files.catbox.moe/mq7er8.jpg" alt="Preview Panel" width="700"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/VannDC/Autoinstaller-Theme-Pterodactyl/main/.github/install-demo.gif" alt="Demo Install" width="700"/>
</p>

---

## 👑 Credits

| 💀 Kontributor | 📎 Link |
|----------------|---------|
| **VANZ RYUICHI** | [GitHub](https://github.com/Vanxzofc) |
| **Project** | [Autoinstaller-Theme-Pterodactyl](https://github.com/VannDC/Autoinstaller-Theme-Pterodactyl) |

---

🧩 *Script ini dibuat untuk mempermudah instalasi dan perlindungan Pterodactyl Panel.*  