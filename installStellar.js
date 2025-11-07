#!/bin/bash
# ================================================
#       AUTO INSTALLER THEME STELLAR
# ================================================
# Author : VanzRyuichi
# ================================================

# Warna
BLUE='\033[0;34m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

clear
echo -e "${BLUE}[+] =============================================== [+]${NC}"
echo -e "${BLUE}[+]              INSTALL THEME STELLAR             [+]${NC}"
echo -e "${BLUE}[+]                © VanzRyuichi                  [+]${NC}"
echo -e "${BLUE}[+] =============================================== [+]${NC}"
echo -e ""

# Konfirmasi awal
read -p "Apakah Anda yakin ingin menginstall tema Stellar? [y/n]: " jawab
if [[ "$jawab" != "y" && "$jawab" != "Y" ]]; then
    echo -e "${RED}❌ Instalasi dibatalkan.${NC}"
    exit 0
fi

# Pastikan direktori /var/www/pterodactyl ada
if [ ! -d "/var/www/pterodactyl" ]; then
    echo -e "${RED}Direktori /var/www/pterodactyl tidak ditemukan! Pastikan panel sudah terinstall.${NC}"
    exit 1
fi

# Bersihkan folder lama
if [ -e /root/pterodactyl ]; then
    sudo rm -rf /root/pterodactyl
fi

# Download file Stellar
echo -e "${YELLOW}📦 Mengunduh file tema Stellar...${NC}"
wget -q "https://github.com/VannDC/Autoinstaller-Theme-Pterodactyl/raw/main/stellar.zip" -O /root/stellar.zip

if [ ! -f "/root/stellar.zip" ]; then
    echo -e "${RED}❌ Gagal mengunduh file stellar.zip${NC}"
    exit 1
fi

# Ekstrak dan salin ke direktori panel
echo -e "${BLUE}📂 Mengekstrak tema dan menerapkan ke panel...${NC}"
unzip -o /root/stellar.zip -d /root/ >/dev/null 2>&1
sudo cp -rfT /root/pterodactyl /var/www/pterodactyl

# Install Node.js & Yarn
echo -e "${BLUE}⚙️ Menginstall Node.js & Yarn...${NC}"
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - >/dev/null 2>&1
sudo apt install -y nodejs >/dev/null 2>&1
sudo npm i -g yarn >/dev/null 2>&1

# Build tema
echo -e "${BLUE}🔧 Membangun tema Stellar...${NC}"
cd /var/www/pterodactyl
yarn add react-feather >/dev/null 2>&1
php artisan migrate --force >/dev/null 2>&1
yarn build:production >/dev/null 2>&1
php artisan view:clear >/dev/null 2>&1

# Bersihkan file sementara
sudo rm -rf /root/pterodactyl /root/stellar.zip

# Pesan sukses
echo -e ""
echo -e "${GREEN}[+] =============================================== [+]${NC}"
echo -e "${GREEN}[+]          INSTALL THEME STELLAR BERHASIL        [+]${NC}"
echo -e "${GREEN}[+] =============================================== [+]${NC}"
echo -e "${YELLOW}Tema Stellar telah terpasang di panel Anda.${NC}"
echo -e "${YELLOW}Silakan refresh panel untuk melihat perubahan.${NC}"
echo -e ""
exit 0