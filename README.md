# 🛡️ Multi-Regulatory GRC Dashboard

A comprehensive Governance, Risk & Compliance (GRC) dashboard for authorities and regulated organizations managing multiple EU and German regulatory frameworks.

English | German (below)

---

## 📋 Table of Contents

- [Features](#features)
- [Supported Regulations](#supported-regulations)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Usage Guide](#usage-guide)
- [KPI Reference](#kpi-reference)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Capabilities
- **13 Regulatory Frameworks** - ISMS, NIS2, DORA, CER, DSA, EU AI Act, IT-Grundschutz, BCMS, ISO 42001, DSGVO, IT-Sovereignty, Sovereign Workplace, WCAG 2.1
- **60+ Measurable KPIs** - Steerable, quantifiable compliance indicators per regulation
- **Real-time Monitoring** - Live compliance status tracking and gap analysis
- **Dark Mode Support** - System preference respecting dark/light theme toggle
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Modals** - Detailed KPI insights with regulatory mappings and specific implementation roadmaps (5 phases)

### Dashboard Sections
1. **Overview** - At-a-glance compliance scores for all regulations
2. **Alerts** - Priority action items and governance risks
3. **KPIs** - In-depth key performance indicators per regulation with modal deep-dives
4. **Risks** - Compliance status, governance structure, and risk assessment

---

## 📑 Supported Regulations

### EU Directives & Regulations
| Regulation | Scope | KPIs | Version |
|-----------|-------|------|---------|
| **NIS2** | EU-wide: 18 critical sectors | 5 | 2023 |
| **DORA** | EU Financial Sector | 6 | 2023 |
| **CER** | EU Critical Infrastructure (11 sectors) | 5 | 2023 |
| **DSA** | EU Digital Services & Platforms | 5 | 2024 |
| **EU AI Act** | EU High-Risk AI Systems | 6 | 2025* |
| **DSGVO** | EU Data Protection | 5 | 2018 |
| **WCAG 2.1** | Web Accessibility (Public Services) | 7 | 2023 |

### German Standards & Frameworks
| Framework | Scope | KPIs | Authority |
|-----------|-------|------|-----------|
| **IT-Grundschutz** | German Federal/State/Municipal IT Security | 5 | BSI |
| **ISMS (ISO 27001)** | German Authorities & Critical Infrastructure | 5 | ISO/BSI |
| **IT-Sovereignty** | German/EU Cloud & Data Residency | 5 | Federal |
| **Sovereign Workplace** | German Public Sector OS Migration | 5 | Federal |

### International Standards
| Standard | Scope | KPIs | Domain |
|----------|-------|------|--------|
| **BCMS (ISO 22301)** | Business Continuity Management | 5 | All sectors |
| **ISO 42001** | AI Management Systems | 6 | Organizations with AI |

*EU AI Act compliance monitoring Phase 2 (Enforcement Q3 2025)

---

## 🖼️ Screenshots

### Overview Section
- Compliance grid showing all 13 regulations with quick status indicators
- Color-coded badges: 🟢 On Track | 🟠 Review | 🔴 Critical

### KPI Details
- Tabbed navigation per regulation
- Interactive KPI cards with progress bars
- Modal windows with:
  - Regulatory references (specific articles/standards)
  - Gap analysis and priority calculations
  - **Specific 5-phase implementation roadmaps** for each regulation
  - Owner assignments and timelines

### Risk Management
- Comprehensive compliance status table
- Top governance risks with impact assessment
- Governance structure visualization (Executive → Strategic → Operational → Technical)

---

## 🚀 Quick Start

### Prerequisites
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No backend required (fully client-side)
- No external dependencies

---

## 📖 Usage Guide

### Navigation
1. **Sidebar Navigation**
   - Click sections: Overview → Alerts → KPIs → Risks
   - Top 3 regulations quick-access panel (dynamically updated)

2. **Compliance Overview**
   - Click any regulation card to jump directly to its KPI details
   - Color-coded status badges automatically calculated from KPI gaps

3. **KPI Details**
   - Tabs for each regulation (swappable via direct compliance card click)
   - Click any KPI card to open detailed modal with:
     - Current value vs. target
     - Regulatory article/standard reference
     - **Implementation steps (Specific 5-phase roadmap)**
     - Priority flag (Critical/High/Normal)

4. **Dark Mode**
   - Toggle via icon in header
   - Respects system preference on first load
   - Settings persist during session

### Status Calculations
- **🟢 Good**: Gap < 10% or KPI exceeding target
- **🟠 Warning**: Gap 10-25% (requires Q2/Q3 planning)
- **🔴 Critical**: Gap > 25% (immediate action required Q1)

---

## 📊 KPI Reference

### ISMS (ISO 27001) - 5 KPIs
| KPI | Target | Gap Threshold | Owner |
|-----|--------|---------------|-------|
| Risk Assessment Currency | >95% | -7% | CISO |
| Incident Response SLA | >98% | -6% | CISO |
| MFA Protected Accounts | >95% | -10% | IAM Team |
| Vulnerability Patching (SLA) | >90% | -9% | Security Ops |
| Security Awareness Training | >90% | -15% | HR/Security |

### DORA (Digital Operational Resilience) - 6 KPIs
| KPI | Target | Gap Threshold | Owner |
|-----|--------|---------------|-------|
| MTTR | <1h | +230% over | CRO |
| System Availability | >99.5% | -0.3% | Ops |
| CSPT Audit Coverage | >95% | -14% | Risk |
| DR Testing | >90% | -16% | BC Manager |
| ICT Response Time | <4h | +112% over | CISO |
| Vendor Concentration | <20% | +240% over | Procurement |

**→ See dashboard for complete KPI matrix across all 13 regulations**

---

## 🏗️ Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3 (CSS Variables, Flexbox, Grid), Vanilla JavaScript (ES6+)
- **Styling**: Custom design system with semantic color tokens
- **Theme Support**: Dark/Light mode with CSS media queries
- **State Management**: In-memory JavaScript objects (no persistence)
---

## 🔧 Customization

### Adding a New Regulation
1. Add entry to `REGULATIONS` object in `main.js`.
2. Add corresponding steps to `IMPLEMENTATION_STEPS` object.
3. Dashboard auto-renders in all sections.

### Modifying KPI Values
Edit values in `REGULATIONS` object in `main.js` → Dashboard updates automatically.

### Styling Changes
Edit CSS variables in `:root` section of `styles.css`.

---

## 🤝 Contributing

### Bug Reports
Report issues on GitHub with:
- Browser and version
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if UI-related

### Feature Requests
- New regulations/KPIs
- Enhanced reporting
- Export functionality (CSV/PDF)

---


**Disclaimer**: This dashboard is provided as-is for compliance monitoring and educational purposes. Regulatory compliance requires professional GRC consultants and legal review. Always verify requirements with official regulatory sources.

---
#################################################################
---

# 🛡️ Multi-Regulatorik GRC Dashboard

Ein umfassendes Governance, Risk & Compliance (GRC) Dashboard für regulierte Organisationen, die mehrere EU- und deutsche Regelwerke verwalten.

---

## 📋 Inhaltsverzeichnis

- [Features](#deutsch-features)
- [Unterstützte Regulatoriken](#deutsch-regulatoriken)
- [Screenshots](#deutsch-screenshots)
- [Schnelleinstieg](#deutsch-quickstart)
- [Bedienungsanleitung](#deutsch-bedienung)
- [KPI-Referenz](#deutsch-kpi)
- [Architektur](#deutsch-architektur)
- [Mitwirkende](#deutsch-contributing)
- [Lizenz](#deutsch-lizenz)

---

## ✨ Features

### Kernfunktionalität
- **13 Regelwerke** - ISMS, NIS2, DORA, CER, DSA, EU AI Act, IT-Grundschutz, BCMS, ISO 42001, DSGVO, IT-Souveränität, Souveräner Arbeitsplatz, WCAG 2.1
- **60+ steuerungsfähige KPIs** - Konkrete, messbare Compliance-Indikatoren pro Regelwerk
- **Echtzeit-Monitoring** - Live-Compliance-Status und Lückenanalyse
- **Dark Mode** - Automatische Anpassung an Systemeinstellungen
- **Responsive Design** - Desktop, Tablet und Mobile optimiert
- **Interaktive Modals** - Detaillierte KPI-Informationen mit regulatorischen Mappings und **spezifischen 5-Phasen-Implementierungsplänen**

### Dashboard-Bereiche
1. **Übersicht** - Schnelübersicht über alle Regelwerke
2. **Alerts** - Prioritäre Maßnahmenlisten und Governance-Risiken
3. **KPIs** - Detaillierte KPIs pro Regelwerk mit Modal-Ansichten
4. **Risiken** - Compliance-Status, Governance-Struktur und Risikobewertung

---

## 📑 Unterstützte Regulatoriken

### EU-Richtlinien & Verordnungen
| Regelwerk | Geltungsbereich | KPIs | Version |
|-----------|-----------------|------|---------|
| **NIS2** | EU-weit: 18 kritische Sektoren | 5 | 2023 |
| **DORA** | EU Finanzsektor | 6 | 2023 |
| **CER** | EU Kritische Infrastruktur (11 Sektoren) | 5 | 2023 |
| **DSA** | EU Digitale Dienste & Plattformen | 5 | 2024 |
| **EU AI Act** | EU High-Risk KI-Systeme | 6 | 2025* |
| **DSGVO** | EU Datenschutz | 5 | 2018 |
| **WCAG 2.1** | Webzugang (Öffentliche Services) | 7 | 2023 |

### Deutsche Standards & Rahmenwerke
| Regelwerk | Geltungsbereich | KPIs | Behörde |
|-----------|-----------------|------|---------|
| **IT-Grundschutz** | Deutsche Bundes-/Länder-/Kommunal-IT | 5 | BSI |
| **ISMS (ISO 27001)** | Deutsche Behörden & Kritische Infrastruktur | 5 | ISO/BSI |
| **IT-Souveränität** | Deutsche/EU Cloud & Datenresidenz | 5 | Bund |
| **Souveräner Arbeitsplatz** | Öffentlicher Sektor OS-Migration | 5 | Bund |

### Internationale Standards
| Standard | Geltungsbereich | KPIs | Bereich |
|----------|-----------------|------|---------|
| **BCMS (ISO 22301)** | Business Continuity Management | 5 | Alle Sektoren |
| **ISO 42001** | KI-Management-Systeme | 6 | KI-Organisationen |

*EU AI Act Phase 2 Monitoring (Enforcement Q3 2025)

---

## 🚀 Schnelleinstieg

### Anforderungen
- Moderner Browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Keine Backend-Anforderungen (vollständig Client-seitig)
- Keine externen Abhängigkeiten


## 📖 Bedienungsanleitung

### Navigation
1. **Seitennavigation**
   - Klicken Sie auf Abschnitte: Übersicht → Alerts → KPIs → Risiken
   - Top-3-Regelwerke Schnellzugriff

2. **Compliance-Übersicht**
   - Klicken Sie auf eine Regulatorik-Karte, um direkt zu ihren KPI-Details zu springen

3. **KPI-Details**
   - Registerkarten für jedes Regelwerk
   - Klicken Sie auf eine KPI-Karte, um das Modal mit Details zu öffnen
   - Modal zeigt **spezifische Implementierungsschritte** für die jeweilige Regulatorik an

4. **Dark Mode**
   - Toggle über Icon im Header
   - Respektiert System-Einstellung beim ersten Load

### Status-Berechnung
- **🟢 Gut**: Lücke < 10%
- **🟠 Warnung**: Lücke 10-25%
- **🔴 Kritisch**: Lücke > 25%

---

## 📊 KPI-Referenz

### Alle 13 Regelwerke mit 60+ KPIs
[Siehe Dashboard oder main.js Datei für vollständige KPI-Matrix]

---

## 🏗️ Architektur

### Technologie-Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Custom Design-System mit semantischen Farbtokens
- **State Management**: In-Memory JavaScript Objects (`REGULATIONS`, `IMPLEMENTATION_STEPS` in `main.js`)

---

**Disclaimer**: Dieses Dashboard wird als Governance-, Risk- & Compliance-Monitoring-Tool bereitgestellt. Die regulatorische Compliance erfordert professionelle GRC-Beratung und rechtliche Überprüfung.
