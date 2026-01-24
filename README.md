# CompareDocs

CompareDocs is a small full-stack experiment that parses, recognizes and compares documents (invoices, delivery notes etc.) using OCR and LLM services. The project demonstrates an end-to-end flow: upload two documents in the frontend, the backend extracts text using Tesseract/PDF tools, and an LLM (OpenAI) is used to compare and extract structured invoice fields.

## Repo layout

- `backend/` - Express backend that handles upload, OCR processing and LLM conversations.
  - `server.js` - App entrypoint and routes mounting.
  - `routes/invoiceRoutes.js` - API routes for comparing invoices.
  - `controllers/` - Controllers that orchestrate file handling and services.
  - `services/` - Logic for Tesseract, OpenAI and PDF parsing.
  - `documents/` - Documents uploaded for comparison.
  - `temp/` - Temporary working folder created at runtime for intermediate files.

- `frontend/` - React + Vite frontend with Tailwind styling and small animated components.
  - `index.html`, `vite.config.js` - Vite setup and entry.
  - `src/` - React source files.
    - `App.jsx`, `main.jsx` - Router and root app.
    - `components/` - UI components including `UploadForm`, `FileInput`, `LoaderElement`, and design elements like `AIFog`.
    - `fetch/uploadFetching.js` - Client-side API helper to upload files to the backend.

## Prerequisites

- Node.js (v18+) and npm or yarn
- An OpenAI API key if you want to use the OpenAI integration (set in `.env` for the backend).
## Backend - run locally

1. Change directory and install dependencies:

```bash
cd backend
npm install
```

2. Create a `.env` file (example `.env` keys used in the codebase):

```
OPENAI_API_KEY=your_openai_key_here
```

3. Start the server in development (with auto-reload):

```bash
npm run dev
```

The backend listens on port `3000` by default. The server will create `documents/` and `temp/` folders if they don't exist.

API endpoint:
- `POST /api/invoices/compare` - accepts multipart form data (`invoice1`, `invoice2`, `lang`) and returns a comparison result JSON. See `routes/invoiceRoutes.js` and `controllers/invoiceController.js` for details.

## Frontend - run locally

1. Install dependencies and start the dev server:

```bash
cd frontend
npm install
npm run dev
```

2. Open the address printed by Vite (usually `http://localhost:5173`).

## Development notes

- The frontend router is configured in `main.jsx` and uses React Router v6's `createBrowserRouter` and `Outlet` in `App.jsx`.
- The backend uses `multer` for file uploads and `tesseract.js` (and pdf utilities) for OCR and PDF conversions.
- Prompts for the LLM are stored in `backend/prompts/` — helpful when tuning how the LLM extracts fields or compares invoices.

