/**
 * RAMESH DODDI — PORTFOLIO CORE CLIENT JAVASCRIPT
 * Interactive Case Studies Studio · Mermaid Diagram Engine · Journal Filters
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Navigation Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Copy Email Functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailVal = document.getElementById('emailVal');
  if (copyBtn && emailVal) {
    copyBtn.addEventListener('click', () => {
      const emailText = emailVal.textContent.trim();
      navigator.clipboard.writeText(emailText).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.background = '#10b981';
        copyBtn.style.color = '#fff';

        setTimeout(() => {
          copyBtn.textContent = orig;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      }).catch(err => {
        console.error('Copy failed: ', err);
      });
    });
  }

  // 4. Contact Form Feedback Simulation
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');
  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      
      formFeedback.style.color = '#34d399';
      formFeedback.textContent = `Thank you, ${name}! Your inquiry has been received. You can also reach me directly at ramesh.r.doddi@gmail.com.`;
      contactForm.reset();

      setTimeout(() => {
        formFeedback.textContent = '';
      }, 7000);
    });
  }

  // -------------------------------------------------------------
  // 5. FLAGSHIP CASE STUDIES DATA & DYNAMIC RENDERING STUDIO
  // -------------------------------------------------------------
  const caseStudiesData = {
    fhir: {
      num: "CASE STUDY 01",
      title: "Generic FHIR Interoperability Gateway",
      summary: "A provider-pluggable .NET 8 backend designed to connect internal healthcare applications with Azure FHIR Service and external EHR platforms such as Epic and Cerner—without rewriting the execution path for every provider.",
      chips: ["C# / .NET 8", "Azure API Management", "HL7 FHIR R4", "Factory + Strategy", "mTLS · RBAC", "Token Caching"],
      problem: "Healthcare integrations often differ at the provider boundary. Duplicating workflows for each EHR increases maintenance and makes security onboarding harder to standardize.",
      design: [
        "Provider drivers selected through Factory and Strategy design patterns.",
        "Generic FHIR execution engine with dedicated mapping layers between internal models and HL7 FHIR R4 resources.",
        "Automated Azure API Management provisioning for tenant resources, subscription keys, and mTLS certificate onboarding.",
        "Intelligent bearer-token caching with background refresh to eliminate repeated authentication roundtrips."
      ],
      security: "Layered access controls combining API Management subscription keys, Mutual TLS (mTLS), and fine-grained FHIR RBAC. Keeps internal business models strictly isolated from external standards.",
      impact: "Eliminated bespoke provider code; enabled rapid onboarding of new EHR targets while standardizing HIPAA-compliant audit trails and token caching across all downstream requests.",
      diagram: `flowchart LR
A[Internal Healthcare Apps] --> B[.NET 8 FHIR Gateway]
B --> C[Mapping Layer]
C --> D[Generic FHIR Executor]
D --> E[Provider Strategy]
E --> F[Azure FHIR Service]
E --> G[Epic / Cerner Adapters]
H[Azure API Management] -. policies .-> B
I[Token Cache + Refresh] -. auth .-> D
J[Subscription Keys · mTLS · RBAC] -. security boundary .-> H`,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7486656983580864512"
    },

    erx: {
      num: "CASE STUDY 02",
      title: "Ensora (NewCrop) Electronic Prescribing Integration",
      summary: "An end-to-end e-prescribing workflow combining REST token authorization, strict NCScript XML generation, auto-submitting browser forms, SOAP medication history retrieval, and automated local reconciliation.",
      chips: ["REST + SOAP", "NCScript XML", "HTML Form-POST", "Medication Reconciliation", "Drug / Allergy Catalogs"],
      problem: "Clinicians require a unified one-click prescribing journey inside the EHR, while the external certification provider enforces multiple communication protocols across different stages of the encounter.",
      design: [
        "Authenticate through JSON REST APIs to securely acquire short-lived session access tokens.",
        "Generate strict NCScript XML payloads containing patient demographics, clinician credentials (DEA, NPI, state license), active allergies, and active medications.",
        "Launch the Ensora prescribing interface via auto-submitting HTML Form-POST embedded in the EHR context.",
        "Retrieve complete patient medication history through SOAP web services upon encounter completion.",
        "Reconcile external prescriptions with local database records: create new, update existing, and safely retire discontinued records."
      ],
      security: "Validation of strict XML structures and required state licenses; protected token transmission; encounter-based authorization checks; and full audit trails on medication reconciliation updates.",
      impact: "Seamlessly unified 4 disparate communication protocols into a frictionless user experience, ensuring compliance with DEA/state regulations while eliminating duplicate prescribing entries.",
      diagram: `flowchart TD
A[Clinician selects Prescribe] --> B[JSON REST Authentication]
B --> C[Build NCScript XML with DEA/NPI]
C --> D[HTML Form-POST to Ensora UI]
D --> E[Prescribing Session Completes]
E --> F[SOAP Medication History Call]
F --> G[Reconciliation Engine]
G --> H[Create / Update / Retire Local Rx]
I[Master Drug & Allergy Catalogs] --> A`,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7486650859599134721"
    },

    vault: {
      num: "CASE STUDY 03",
      title: "Zero-Trust Azure Key Vault Pattern Across Microservices",
      summary: "A standardized secret-access convention across distributed .NET microservices that completely removes hardcoded credentials, utilizing Azure Managed Identities and environment-aware configuration pipelines.",
      chips: ["Azure Key Vault", "Managed Identity", "Environment-Aware Pipeline", "Microservices", "DevSecOps"],
      problem: "As service counts and environments multiply, database connection strings, third-party API keys, and certificates become difficult to distribute safely without hindering local developer velocity.",
      design: [
        "Standardize Azure Key Vault client integration across all .NET services.",
        "Use Azure Managed Identities so microservices authenticate without embedded secrets or passwords.",
        "Design environment-aware secret loading pipelines across Local Development, QA, Staging, and Production.",
        "Ensure smooth local developer experience while keeping strict production zero-trust security intact."
      ],
      security: "Enforces least-privilege vault access policies, secret rotation, access auditing, and strict exclusion of connection strings from application configuration files and logs.",
      impact: "Completely eliminated plain-text credentials and hardcoded keys across production repositories, creating a frictionless template for onboarding new microservices securely.",
      diagram: `flowchart TD
A[.NET Microservice] --> B[Azure Managed Identity]
B --> C[Azure AD Authentication]
C --> D[Azure Key Vault]
D --> E[Environment-Scoped Secrets]
E --> F[Runtime Service Configuration]
G[Local / QA / Staging / Production] --> H[Environment Pipeline]
H --> A
I[Least Privilege · Secret Rotation · Audit Logs] -. controls .-> D`,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7486648787600433152"
    },

    shard: {
      num: "CASE STUDY 04",
      title: "Organization-Based Multi-Tenant Database Sharding",
      summary: "A high-scale data access architecture for a cloud Electronic Health Record (EHR) platform, utilizing organization-based database shards, dynamic connection resolution, and tenant isolation in Entity Framework Core.",
      chips: ["Multi-Tenancy", "Entity Framework Core", "Dynamic Routing", "Database Sharding", "Cloud EHR"],
      problem: "A growing multi-clinic EHR platform serving thousands of patient records requires horizontal scalability and ironclad tenant isolation to prevent accidental cross-tenant data leakage.",
      design: [
        "Resolve organization/clinic context dynamically before instantiating the database context.",
        "Map tenant identities to dedicated database shards and isolated connection configurations.",
        "Configure Entity Framework Core with tenant-aware connection selection and dynamic migration support.",
        "Maintain explicit tenant boundaries across request middleware and repository layers."
      ],
      security: "Fail-closed validation if tenant context is missing; tenant identities derived strictly from trusted claims rather than client parameters; automated boundary testing against cross-tenant queries.",
      impact: "Enabled linear database scaling for enterprise healthcare organizations while providing cryptographic separation and compliance with strict HIPAA healthcare privacy regulations.",
      diagram: `flowchart TD
A[Authenticated Request with JWT Claims] --> B[Extract Organization Context]
B --> C[Tenant-to-Shard Mapping Service]
C --> D[Dynamic Connection Resolver]
D --> E[EF Core Tenant DbContext]
E --> F[(Clinic A Dedicated Shard)]
E --> G[(Clinic B Dedicated Shard)]
E --> H[(Clinic N Dedicated Shard)]
I[Fail-Closed Checks · Multi-Tenant Isolation] -. guard .-> B`,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7486503630288633856"
    },

    scribe: {
      num: "CASE STUDY 05",
      title: "AI Clinical Scribe with Microsoft Semantic Kernel",
      summary: "An ambient clinical documentation assistant transforming live doctor–patient conversations into structured medical encounter notes, featuring real-time SSE progress streaming and Azure Service Bus queue failover.",
      chips: ["Azure OpenAI", "Azure Cognitive Services", "Semantic Kernel", "SSE Streaming", "Service Bus Fallback"],
      problem: "Ambient clinical transcription faces long inference latencies, rate limits, audio drops, and clinician interruption. A naive synchronous API call risks losing patient encounter recordings.",
      design: [
        "Orchestrate Azure Cognitive Services (Speech) and Azure OpenAI using Microsoft Semantic Kernel.",
        "Stream live processing status to clinicians via Server-Sent Events (SSE).",
        "Implement prompt-caching and contextual token minimization to control LLM cost and latency.",
        "Offload long-running summaries into background worker queues with Azure Service Bus for retry resilience.",
        "Configure multi-region model deployments with latency-aware fallback routing."
      ],
      security: "Strict end-to-end encryption of conversational audio and generated draft notes; PHI scrubbing in log streams; required clinician review and signature before notes become authoritative.",
      impact: "Reduced clinician documentation overhead while guaranteeing zero data loss through distributed queue fallback during transient OpenAI quota spikes.",
      diagram: `flowchart TD
A[Doctor-Patient Audio Conversation] --> B[Cognitive Services Speech-to-Text]
B --> C[Semantic Kernel Orchestrator]
C --> D[Azure OpenAI LLM]
D --> E[Structured Medical Note Draft]
E --> F[Clinician Review & Signature]
F --> G[EHR Permanent Medical Record]
C --> H[SSE Live Progress Streaming]
C --> I[Deferred Processing Pipeline]
I --> J[Azure Service Bus Queue]
J --> K[Async Retry Worker]
D -. Quota / Regional Spike .-> L[Multi-Region Failover Model]
L --> D`,
      url: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7486500532904374272"
    },

    anomaly: {
      num: "CASE STUDY 06",
      title: "Multi-Model Time-Series Anomaly Detection Engine",
      summary: "An enterprise anomaly detection engine built at DataDios.ai combining AutoETS statistical forecasting with Conformal Prediction intervals to detect point, contextual, and collective metric shifts across multiple cadences.",
      chips: ["Python", "AutoETS", "Conformal Prediction", "Time-Series ML", "DataDios.ai", "KPI Intelligence"],
      problem: "Static threshold alerting causes severe fatigue: it fails to recognize weekly seasonality, business hours, and evolving metric distributions across daily, weekly, and monthly enterprise indicators.",
      design: [
        "Ingest, clean, and validate enterprise time-series metrics across daily, weekly, and monthly intervals.",
        "Fit AutoETS (Error, Trend, Seasonal) models to learn dynamic baseline seasonal behavior.",
        "Construct statistically valid Conformal Prediction intervals around forecasts without assuming Gaussian noise.",
        "Classify observations outside prediction bands into point, contextual, and collective anomalies.",
        "Deliver actionable alerts containing metric name, time horizon, and expected confidence bounds."
      ],
      security: "Data validation pipelines to protect against metric poisoning; model version tracking; audit logging for all detected anomalies; and drift monitoring for retraining.",
      impact: "Delivered robust, low-noise anomaly detection across enterprise KPIs, drastically reducing false positives while detecting subtle sustained shifts invisible to static alert thresholds.",
      diagram: `flowchart LR
A[Enterprise Metric Ingestion] --> B[Cadence Validation & Normalization]
B --> C[AutoETS Forecasting Model]
C --> D[Conformal Prediction Intervals]
A --> E[Observed Time-Series Values]
D --> F[Compare Observations vs Prediction Bands]
E --> F
F --> G[Point Anomaly]
F --> H[Contextual Anomaly]
F --> I[Collective Anomaly]
G --> J[High-Signal Alerting & Root Cause Dashboard]
H --> J
I --> J`,
      url: null
    }
  };

  // Render Studio Function
  function renderCaseStudy(key) {
    const study = caseStudiesData[key];
    const panel = document.getElementById('caseDisplayPanel');
    if (!study || !panel) return;

    panel.innerHTML = `
      <div class="c-case-tag">${study.num}</div>
      <h3 class="c-case-title">${study.title}</h3>
      <p class="c-case-summary">${study.summary}</p>
      
      <div class="c-case-chips">
        ${study.chips.map(chip => `<span class="c-chip">${chip}</span>`).join('')}
      </div>

      <div class="c-case-grid">
        <div class="c-col">
          <h4>Business Problem & Constraints</h4>
          <p>${study.problem}</p>
          <h4 style="margin-top: 1.25rem;">Key Architectural Decisions</h4>
          <ul>
            ${study.design.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <div class="c-col">
          <h4>Security, Reliability & Privacy</h4>
          <p>${study.security}</p>
          <h4 style="margin-top: 1.25rem;">Demonstrated Production Impact</h4>
          <p>${study.impact}</p>
        </div>
      </div>

      <div class="c-diagram-container">
        <div class="c-diagram-header">
          <span class="diagram-tag">LIVE SYSTEM FLOWCHART</span>
          <span>MERMAID ENGINE</span>
        </div>
        <pre class="mermaid">${study.diagram}</pre>
        <div class="c-diagram-caption">Conceptual architecture reconstructed from verified engineering archive and LinkedIn technical publications.</div>
      </div>

      ${study.url ? `
        <a href="${study.url}" target="_blank" rel="noreferrer" class="c-post-link">
          <span>Read Verified Post on LinkedIn</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
        </a>
      ` : `
        <span class="c-diagram-caption" style="display:inline-block;margin-top:0.5rem;">Documented from DataDios production engineering experience.</span>
      `}
    `;

    // Highlight active tab
    document.querySelectorAll('.case-tab-btn').forEach(btn => {
      const isActive = btn.dataset.case === key;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Re-run Mermaid rendering
    if (window.mermaid) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        securityLevel: 'strict',
        themeVariables: {
          primaryColor: '#172033',
          primaryTextColor: '#f1f5f9',
          primaryBorderColor: '#6366f1',
          lineColor: '#06b6d4',
          secondaryColor: '#111827',
          tertiaryColor: '#1a2234',
          fontFamily: 'Plus Jakarta Sans'
        }
      });
      mermaid.run({ querySelector: '#caseDisplayPanel .mermaid' }).catch(err => {
        console.warn('Mermaid rendering notice:', err);
      });
    }
  }

  // Bind tab click events
  document.querySelectorAll('.case-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderCaseStudy(btn.dataset.case);
    });
  });

  // Initial render with first case study
  renderCaseStudy('fhir');

  // -------------------------------------------------------------
  // 6. ENGINEERING JOURNAL CATEGORY FILTER
  // -------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const journalCards = document.querySelectorAll('.journal-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.dataset.filter;
      journalCards.forEach(card => {
        if (filterCategory === 'all' || card.dataset.category === filterCategory) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
