# jdgold-fe

Vite + React site. Deploy on **Cloudflare Pages**. API on Vercel.

## Local

```bash
npm install
npm run dev
```

Leave `VITE_API_URL` empty locally (Vite proxies `/api` → `http://localhost:3001`).

## Deploy to Cloudflare Pages (dashboard)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect to Git
2. Select repo `amirjdgold/jdgold-fe`
3. Build settings:

| Setting | Value |
|---------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |

4. Environment variables (Production):

| Name | Value |
|------|--------|
| `VITE_API_URL` | your Vercel API origin, e.g. `https://jdgold-be.vercel.app` (no trailing slash) |

5. Save and deploy
6. Copy the `*.pages.dev` URL → set it as `CORS_ORIGINS` on the Vercel backend, then redeploy backend (or just update env)

SPA routing is handled by `public/_redirects`.
