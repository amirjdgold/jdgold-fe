# jdg-web frontend

Vite + React site for JD Gold. Deploy to **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev
```

By default the Vite proxy forwards `/api`, `/admin`, and `/uploads` to `http://localhost:3001` (the backend). Leave `VITE_API_URL` empty locally.

## Production (Cloudflare Pages)

1. Set build command: `npm run build`
2. Set output directory: `dist`
3. Set env var `VITE_API_URL` to your Vercel backend origin (no trailing slash), e.g. `https://your-api.vercel.app`

`public/_redirects` enables SPA routing on Cloudflare Pages.
