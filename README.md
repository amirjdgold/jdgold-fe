# jdgold-fe

Vite + React site. Deploy the frontend and API on **Vercel** as separate projects.

## Local

```bash
npm install
npm run dev
```

Leave `VITE_API_URL` empty locally (Vite proxies `/api` → `http://localhost:3001`).

## Deploy to Vercel

1. In the Vercel dashboard, choose **Add New → Project** and import the frontend repository.
2. Configure the project:

| Setting | Value |
|---------|--------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | `/` (repo root) |

3. Add this environment variable for Production and any Preview environments that should use the deployed API:

| Name | Value |
|------|--------|
| `VITE_API_URL` | your Vercel API origin, e.g. `https://jdgold-be.vercel.app` (no trailing slash) |

   `VITE_API_URL` is a Vite build-time variable. Changing it in Vercel does not update an existing static bundle; redeploy the frontend after every change.
4. Deploy the project.
5. Add the frontend's Vercel URL to `CORS_ORIGINS` on the backend and redeploy the backend if that value changed.

`vercel.json` serves existing static files from `dist` first, then falls back to `index.html` for client-side routes.
