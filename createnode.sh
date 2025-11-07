#!/bin/bash

# =========================================
# Pembuatan Lokasi & Node Pterodactyl By Vanzz
# =========================================

# Minta input dari pengguna
read -p "Masukkan nama lokasi: " location_name
read -p "Masukkan deskripsi lokasi: " location_description
read -p "Masukkan domain node (contoh: node.example.com): " domain
read -p "Masukkan nama node: " node_name
read -p "Masukkan RAM (dalam MB): " ram
read -p "Masukkan jumlah maksimum disk space (dalam MB): " disk_space
read -p "Masukkan LocID: " locid

# Pastikan direktori panel ada
cd /var/www/pterodactyl || { echo "❌ Direktori /var/www/pterodactyl tidak ditemukan!"; exit 1; }

# Membuat lokasi baru
echo "📍 Membuat lokasi baru..."
php artisan p:location:make <<EOF
$location_name
$location_description
EOF

# Membuat node baru
echo "🖥️ Membuat node baru..."
php artisan p:node:make <<EOF
$node_name
$location_description
$locid
https
$domain
yes
no
no
$ram
$ram
$disk_space
$disk_space
100
8080
2022
/var/lib/pterodactyl/volumes
EOF

echo "Proses pembuatan lokasi dan node telah selesai!"