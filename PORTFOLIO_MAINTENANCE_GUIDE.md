# 🚀 Ramesh Doddi — Portfolio Documentation & Future Maintenance Guide

This document records **everything that was done to create, configure, and deploy your portfolio**, along with a **step-by-step cheatsheet for updating it in the future**.

---

## 📌 1. Key Links & Locations

* **Live Website URL**: [https://ramesh-doddi.github.io/](https://ramesh-doddi.github.io/)
* **GitHub Repository**: [https://github.com/Ramesh-doddi/Ramesh-doddi.github.io](https://github.com/Ramesh-doddi/Ramesh-doddi.github.io)
* **Local Project Directory**: `C:\Users\rames\.gemini\antigravity-ide\scratch\software-engineer-portfolio`

---

## 📁 2. File Structure & Responsibilities

| File | Purpose | What to edit here |
| :--- | :--- | :--- |
| **`index.html`** | Structure & Content | Update text, skills, projects, experience, contact info, and education. |
| **`style.css`** | Aesthetics & Layout | Colors, dark mode styles, typography, spacing, mobile responsiveness. |
| **`script.js`** | Interactivity | Copy email button, mobile menu toggle, current footer year, form handling. |
| **`resume.pdf`** | Downloadable Resume | Your active resume downloaded when visitors click "Download Resume". |
| **`README.md`** | Repository Overview | Overview displayed on your GitHub repo page. |
| **`PORTFOLIO_MAINTENANCE_GUIDE.md`** | Maintenance Guide | This comprehensive guide for your reference. |

---

## 🛠️ 3. Summary of What Was Done (End-to-End Log)

1. **Information Extraction**:
   * Extracted complete career history, technical skills, and achievements from your desktop resume (`updated resume.docx`).
   * Copied your latest `updated resume 11.pdf` as `resume.pdf` directly into the portfolio root.

2. **Custom Portfolio Development**:
   * Engineered a responsive, modern dark-themed web application using clean HTML5, CSS3, and JavaScript.
   * Highlighted your core software engineering strengths:
     * **C#, .NET 8, Blazor Server, Syncfusion, MudBlazor**.
     * **Azure Cloud-Native Microservices** (Container Apps, App Services, API Management, Service Bus, Key Vault).
     * **Applied AI & Clinical Interoperability** (Azure OpenAI, Semantic Kernel, AI Scribe, FHIR standard).
     * **Time-Series Anomaly Detection Engine** (AutoETS, Conformal Prediction at DataDios).
     * **Academic Record**: B.Tech at GITAM University (CGPA: 9.29), IBM, AICTE, and TCS iON certifications.

3. **Tooling & Git Setup**:
   * Initialized a dedicated Git repository on branch `main` inside the project folder.
   * Installed **GitHub CLI** (`gh` v2.102.0) via Windows Package Manager (`winget`).
   * Authenticated your machine with GitHub account `Ramesh-doddi` using device flow.
   * Configured `gh auth setup-git` to manage authentication permanently.

4. **Deployment & GitHub Pages Hosting**:
   * Created remote link to `https://github.com/Ramesh-doddi/Ramesh-doddi.github.io.git`.
   * Pushed all files to `main`.
   * GitHub Pages automatically built and served the website at [https://ramesh-doddi.github.io/](https://ramesh-doddi.github.io/) with free HTTPS.

---

## 🔄 4. How to Update Your Portfolio in the Future

Whenever you want to add a new project, change a company, update a skill, or upload a new resume:

### Step 4.1: Make Your Changes Locally
1. Navigate to:
   `C:\Users\rames\.gemini\antigravity-ide\scratch\software-engineer-portfolio`
2. **To change content**: Open `index.html` in your editor and update the text.
3. **To update your resume**: Save your new resume as `resume.pdf` in this folder (replace the existing one).

### Step 4.2: Preview Before Publishing
* Double-click `index.html` to open it in your browser.
* Refresh (`Ctrl + R`) to verify how your changes look.

### Step 4.3: Push Updates to Live Site (Only 3 Commands)
Open PowerShell or your terminal and run:
```powershell
cd C:\Users\rames\.gemini\antigravity-ide\scratch\software-engineer-portfolio
git add .
git commit -m "Update portfolio: added new project"
git push
```
*(Or simply ask Antigravity: "I updated index.html, push the changes to GitHub" and it will be pushed automatically!)*

### Step 4.4: Check the Live Website
* Within **30 to 60 seconds**, GitHub Pages will automatically deploy your updates to:
  [https://ramesh-doddi.github.io/](https://ramesh-doddi.github.io/)
* *Tip: If you don't see the new changes right away, press `Ctrl + Shift + R` (Hard Refresh) to clear browser cache.*

---

## 📋 5. Code Snippet Cheatsheet (Quick Copy-Paste)

### Adding a New Skill Pill in `index.html`:
Find the `<div class="skill-tags">` inside `#skills` and add:
```html
<span class="skill-pill">New Skill Name</span>
```

### Adding a New Project Card in `index.html`:
Find the `<div class="projects-grid">` inside `#projects` and add:
```html
<article class="project-card">
  <div class="project-banner banner-1">
    <span class="banner-badge">Domain / Category</span>
  </div>
  <div class="project-body">
    <h3 class="project-title">Project Name</h3>
    <p class="project-summary">
      Short description of what problem this project solves and the architecture used.
    </p>
    <div class="project-tags">
      <span>C#</span>
      <span>Azure</span>
      <span>React</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/Ramesh-doddi/repo-name" target="_blank" class="link-btn">Code ↗</a>
      <a href="https://demo-link.com" target="_blank" class="link-btn primary-link">Live Demo ↗</a>
    </div>
  </div>
</article>
```

### Adding a New Work Experience Timeline Item in `index.html`:
Find `<div class="timeline">` inside `#experience` and add:
```html
<div class="timeline-item">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <span class="timeline-period">Year — Present</span>
    <h3 class="timeline-role">Role Title</h3>
    <h4 class="timeline-company">Company Name</h4>
    <ul class="experience-list">
      <li>Key achievement or responsibility 1.</li>
      <li>Key achievement or responsibility 2.</li>
    </ul>
  </div>
</div>
```

---

## 📬 6. Enabling Real Email Forwarding for Contact Form (Free)

Right now, the contact form simulates a successful submission. To receive messages directly in your personal inbox (`ramesh.r.doddi@gmail.com`):
1. Go to [formspree.io](https://formspree.io) and sign up for free.
2. Click **Create Form** $\rightarrow$ name it "Portfolio Contact".
3. Copy your Form ID endpoint (e.g., `https://formspree.io/f/mqazkxyz`).
4. In `index.html`, locate line ~340:
   ```html
   <form class="contact-form" id="contactForm">
   ```
   and change it to:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Commit and push. Now, every submission will be delivered straight to your email!

---

## 💡 7. Where Your Portfolio is Configured to Be Shared

* **Resume Header**: `https://ramesh-doddi.github.io/`
* **LinkedIn**: Add under "View my portfolio" custom button and Featured section.
* **GitHub Profile**: Set as your primary website on [github.com/Ramesh-doddi](https://github.com/Ramesh-doddi).
* **Job Applications**: Enter in all "Portfolio / Website" fields.
