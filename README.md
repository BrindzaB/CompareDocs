<!-- README TOP -->
<div id="readme-top"></div>

<br />

<!-- PROJECT LOGO & TITLE -->
<div align="center">

  <h3 align="center">CompareDocs</h3>

  <p align="center">
    AI-powered document recognition and comparison platform
    <br />
    <strong>OCR + LLM + Full-Stack Workflow Demo</strong>
    <br />
    <br />
    <a href="#about-the-project">Explore the docs »</a>
    <br />
    <br />
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#project-architecture">Project Architecture</a>
      <ul>
        <li><a href="#repo-layout">Repo Layout</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#backend---run-locally">Backend Setup</a></li>
        <li><a href="#frontend---run-locally">Frontend Setup</a></li>
      </ul>
    </li>
    <li><a href="#api">API</a></li>
    <li><a href="#development-notes">Development Notes</a></li>
  </ol>
</details>

---

## About The Project

**CompareDocs** is a full-stack experiment that demonstrates **end-to-end document understanding and comparison** using **OCR and Large Language Models (LLMs)**.

The system allows users to upload two documents (e.g. invoices, delivery notes, receipts), extracts text using OCR, and then leverages an LLM (OpenAI) to:

- Parse structured invoice fields  
- Normalize document formats  
- Compare values  
- Generate a structured comparison result  

### Key Capabilities

- Upload and process PDFs and scanned images  
- OCR via Tesseract + PDF parsing tools  
- Structured data extraction using LLMs  
- Automated document comparison  
- Modern React frontend with smooth UI animations  
- Modular Express backend architecture  


