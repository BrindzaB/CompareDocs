# CompareDocs

![Main UI Screenshot](frontend/public/images/screenshots/main_page.png)


CompareDocs is a full‑stack document matching tool that compares two business documents (invoice vs. delivery note) using OCR + LLM extraction. It focuses on practical matching signals like date, company name, and amount, and returns a structured comparison result.

[![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=flat-square)](https://github.com)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=000000)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![OCR](https://img.shields.io/badge/OCR-Tesseract-3A3A3A?style=flat-square)](https://github.com/tesseract-ocr/tesseract)
[![LLM](https://img.shields.io/badge/LLM-OpenAI-412991?style=flat-square&logo=openai&logoColor=white)](https://openai.com/)

## Highlights
- Upload two documents (invoice + delivery note) and compare them instantly
- OCR pipeline converts PDFs/images into text
- LLM extracts structured fields and checks document consistency
- Clean UI built with React, Vite, and Tailwind

## How It Works
1. **Upload** two documents in the frontend.
2. **OCR layer** extracts raw text from files.
3. **LLM layer** extracts structured invoice fields.
4. **Comparator** evaluates field-level consistency and returns a result.

## Repo Layout
- `backend/`: Express backend for upload, OCR, and LLM compare
  - `server.js`: API entrypoint
  - `routes/`: invoice compare routes
  - `controllers/`: orchestration layer
  - `services/`: OCR, PDF utilities, OpenAI integration
  - `documents/`: uploaded files
  - `temp/`: intermediate artifacts
- `frontend/`: React + Vite UI with Tailwind styling
  - `src/components/`: Upload form, loader, UI elements
  - `src/fetch/`: API client helpers

## Prerequisites
- Node.js 18+
- OpenAI API key (backend `.env`)

## Run Locally
### Backend
```bash
cd backend
npm install
npm run dev
```

Create `.env` in `backend/`:
```
OPENAI_API_KEY=your_openai_key_here
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL (usually `http://localhost:5173`).

## API
`POST /api/invoices/compare`
- multipart form‑data: `invoice1`, `invoice2`, `lang`
- returns JSON with extracted fields and a match decision

## Notes
- OCR quality can affect extraction accuracy; PDF scans may need higher resolution.
- Prompts live in `backend/prompts/` and can be tuned for better field extraction.

## Screenshots
![Uploaded Documents](frontend/public/images/screenshots/docs_uploaded.png)
![Comparison Result](frontend/public/images/screenshots/comparison_summary.png)
![PDF export](frontend/public/images/screenshots/pdf_export.png)
