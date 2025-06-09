# GhostreX AI

GhostreX adalah chatbot AI cerdas berbasis DeepSeek, dikembangkan oleh **GhostreX Indonesia**.

## 🚀 Cara Deploy ke Render.com

1. Push proyek ini ke GitHub
2. Login ke [Render.com](https://render.com)
3. Buat Web Service baru → pilih repo ini
4. Tambahkan *Environment Variable* berikut:
   - `DEEPSEEK_API_KEY = (masukkan API Key dari DeepSeek)`
5. Klik "Deploy"
6. Selesai! Website chatbot GhostreX aktif 🎉

## 🖥️ Cara Menjalankan Secara Lokal

```bash
git clone https://github.com/namamu/ghostrex-ai.git
cd ghostrex-ai
npm install
echo "DEEPSEEK_API_KEY=masukkan_api_key_kamu" > .env
npm start
