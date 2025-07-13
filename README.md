# Aplikasi Kasir Sederhana

Website ini adalah contoh aplikasi kasir (point of sale) sederhana berbasis HTML, CSS, dan JavaScript murni (tanpa framework).

## Cara Menjalankan

1. Pastikan Anda sudah berada di direktori project ini.
2. Jalankan server statis, misalnya dengan Python 3:

```bash
python3 -m http.server 8000
```

3. Buka browser dan akses `http://localhost:8000`.
4. Tambahkan produk ke keranjang dan klik Checkout untuk simulasi pembayaran.

Anda bebas menambah atau mengubah daftar produk langsung di file `main.js`. Untuk deployment, cukup unggah tiga file `index.html`, `main.js`, dan `styles.css` ke hosting statis (mis. GitHub Pages, Vercel, Netlify).