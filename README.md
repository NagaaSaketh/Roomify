# Roomify

An AI-first design tool where you upload a 2D floor plan and get back a photorealistic, top-down 3D architectural render — with a before/after compare slider, project history, and export.
Built with React Router (SSR), Puter.js for auth and storage, and Puter AI (Gemini image model) for rendering.

---

## Demo Link

[Live Demo](https://puter.com/app/roomify-22)

---

## Login

Roomify uses [Puter](https://puter.com) for authentication — click **Login** in the navbar and sign in (or create a free account) through the Puter popup. There is no separate username/password for this app.

---

## Quick Start

```
git clone https://github.com/NagaaSaketh/Roomify.git
cd Roomify
npm install
npm run dev
```

Create a `.env.local` with your Puter worker URL:

```
VITE_PUTER_WORKER_URL=https://<your-worker>.puter.site
```

Your application will be available at `http://localhost:5173`.

## Technologies
- React 19 + React Router 7 (SSR framework mode)
- Vite
- Tailwind CSS
- Puter.js (auth, key-value storage, file hosting, AI)
- Puter Workers (serverless backend, see `lib/puter.worker.js`)
- Gemini image model (`gemini-2.5-flash-image-preview`) via `puter.ai.txt2img`
- Docker for deployment

## Features
**Home**
- Upload a floor plan image (JPG/PNG, up to 10MB)
- Browse your project history with thumbnails and timestamps

**Visualizer**
- Automatically generates a photorealistic top-down 3D render from the uploaded floor plan
- Before/after comparison slider (drag to reveal)
- Re-render and export the generated image as PNG

**Authentication**
- Sign in / out via Puter's hosted auth (no custom password storage)
- Projects are scoped to the signed-in Puter user

**Storage**
- Source and rendered images are uploaded to Puter hosting
- Project metadata is persisted in Puter's key-value store via a Puter Worker

## API Reference

These endpoints are served by the Puter Worker (`lib/puter.worker.js`), invoked from the client via `puter.workers.exec`.

### **POST /api/projects/save**
Create or update a project for the authenticated user<br>
Sample Response:<br>
```{ saved: true, id, project: { id, name, sourceImage, renderedImage, timestamp, ... } }```

### **GET /api/projects/list**
List all projects belonging to the authenticated user<br>
Sample Response:<br>
```{ projects: [{ id, name, sourceImage, renderedImage, timestamp, ... }, …] }```

### **GET /api/projects/get?id=:id**
Get a single project by id<br>
Sample Response:<br>
```{ project: { id, name, sourceImage, renderedImage, timestamp, ... } }```

## Contact
For bugs or feature requests, please reach out to vadlamanisaketh25@gmail.com
