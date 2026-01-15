// =====================================================
// GRC Dashboard - Main Logic
// =====================================================

// NEU: Implementierungsschritte pro Regulatorik
const IMPLEMENTATION_STEPS = {
    isms: [
        "Phase 1: Gap-Analyse nach ISO 27001:2022 und Root-Cause-Identifikation durchführen",
        "Phase 2: ISMS-Roadmap mit Meilensteinen und Verantwortlichkeiten erstellen",
        "Phase 3: Kontrollmechanismen (Access Control, Logging, Incident Response) implementieren",
        "Phase 4: Security-Schulungen und Phishing-Simulationen durchführen",
        "Phase 5: Quarterly ISMS-Review und externe Zertifizierungsvorbereitung"
    ],
    nis2: [
        "Phase 1: NIS2-Kritikalitäts- und Asset-Assessment durchführen",
        "Phase 2: Governance- und Reporting-Struktur für NIS2 etablieren",
        "Phase 3: Cybersecurity-Maßnahmen (Perimeter, EDR, SIEM) priorisieren und umsetzen",
        "Phase 4: Incident-Response-Playbooks und Meldeprozesse implementieren",
        "Phase 5: Halbjährliche NIS2-Compliance-Reviews und Audit-Trail pflegen"
    ],
    dora: [
        "Phase 1: RTO/RPO-Gap-Analyse: aktuelle vs. Zielwerte erfassen",
        "Phase 2: DORA-Resilience-Roadmap mit BCP/DR-Szenarien definieren",
        "Phase 3: Redundante Systeme, Automatisierung und Monitoring aufbauen",
        "Phase 4: Regelmäßige DR-Tests (mind. 4x/Jahr) mit Lessons Learned durchführen",
        "Phase 5: DORA-Reporting und Management-Attestierung einführen"
    ],
    cer: [
        "Phase 1: Kritische Ressourcen und Infrastrukturen nach CER identifizieren",
        "Phase 2: Resilienz- und Verwundbarkeitsanalyse durchführen",
        "Phase 3: Redundanz- und Failover-Konzepte umsetzen",
        "Phase 4: Notfall- und Krisenübungen mit allen Stakeholdern durchführen",
        "Phase 5: Jährliche CER-Compliance-Bewertung und Anpassung der Maßnahmen"
    ],
    dsa: [
        "Phase 1: Transparenzanforderungen und Pflichten nach DSA analysieren",
        "Phase 2: Prozesse für Notice & Action, Appeals und User Notifications aufsetzen",
        "Phase 3: Monitoring- und Logging-Systeme für Content Moderation implementieren",
        "Phase 4: Schulung der Moderationsteams zu DSA-Policies durchführen",
        "Phase 5: Regelmäßige DSA-Compliance-Reviews und Reporting etablieren"
    ],
    eu_ai_act: [
        "Phase 1: High-Risk AI Use Cases identifizieren und klassifizieren",
        "Phase 2: AI Impact Assessments (AIRA) mit Risikomodell durchführen",
        "Phase 3: Governance-Framework und Human Oversight definieren",
        "Phase 4: Transparenz- und Dokumentationsanforderungen technisch umsetzen",
        "Phase 5: Conformity Assessment und kontinuierliche AI-Compliance-Reviews"
    ],
    it_grundschutz: [
        "Phase 1: Ist-Situation gegen BSI IT-Grundschutz-Bausteine mappen",
        "Phase 2: Baseline-Sicherheitsniveau und Priorisierung der Maßnahmen festlegen",
        "Phase 3: Technische und organisatorische Maßnahmen implementieren",
        "Phase 4: Gap-Analyse und Nachbesserung der fehlenden Kontrollen",
        "Phase 5: Vorbereitung auf IT-Grundschutz-Audit und Zertifizierung"
    ],
    bcms: [
        "Phase 1: Business Impact Analysis (BIA) für kritische Prozesse durchführen",
        "Phase 2: RTO/RPO pro Prozess definieren und verifizieren",
        "Phase 3: BCP- und DR-Pläne für alle kritischen Services erstellen",
        "Phase 4: Regelmäßige BC-Tests und Simulationen durchführen",
        "Phase 5: BCMS-Review und ISO 22301-Konformitätschecks etablieren"
    ],
    iso42001: [
        "Phase 1: AI-Systeme inventarisieren und Scope des AIMS festlegen",
        "Phase 2: AI-Risiken und Use Cases bewerten und priorisieren",
        "Phase 3: Kontrollen und Prozesse gemäß ISO 42001 implementieren",
        "Phase 4: Dokumentation, Rollen und Verantwortlichkeiten festschreiben",
        "Phase 5: Interne Audits und externe Zertifizierung vorbereiten"
    ],
    dsgvo: [
        "Phase 1: Verzeichnis von Verarbeitungstätigkeiten (Art. 30) erstellen/aktualisieren",
        "Phase 2: Rechtsgrundlagen und Löschkonzepte für alle Datenklassen definieren",
        "Phase 3: Prozesse für Betroffenenrechte und Data Breach Handling implementieren",
        "Phase 4: Privacy-by-Design in Projekten verankern und schulen",
        "Phase 5: Regelmäßige DSGVO-Audits und DPO-Reports durchführen"
    ],
    sovereign_it: [
        "Phase 1: Bestehende Provider und Datenstandorte erfassen und bewerten",
        "Phase 2: Zielbild für IT-Souveränität (Daten in DE/EU) festlegen",
        "Phase 3: Migration kritischer Workloads zu souveränen Plattformen planen",
        "Phase 4: Schlüsselmanagement und Verschlüsselung anpassen",
        "Phase 5: Laufende Überwachung der Souveränitäts-Anforderungen etablieren"
    ],
    sovereign_ws: [
        "Phase 1: Geräte- und Softwarelandschaft auf Souveränitäts-Kriterien prüfen",
        "Phase 2: Standardisierte, souveräne Arbeitsplatz-Images definieren",
        "Phase 3: Rollout über MDM/Endpoint-Management durchführen",
        "Phase 4: User-Schulungen zu sicherem und souveränem Arbeiten",
        "Phase 5: Regelmäßige Reviews von Hardware/Software-Compliance"
    ],
    wcag: [
        "Phase 1: WCAG 2.2 Accessibility Audit mit Tools (axe, WAVE) durchführen",
        "Phase 2: Farbkontrast, Typografie und Layout an 4.5:1/AAA anpassen",
        "Phase 3: Keyboard-Navigation und ARIA-Attribute optimieren",
        "Phase 4: Mobile Touch-Targets und Responsiveness verbessern",
        "Phase 5: Kontinuierliches Accessibility-Testing und Nutzerfeedback einholen"
    ]
};

const REGULATIONS = {
    isms: { name: 'ISMS (ISO 27001)', short: 'ISMS', compliance: 73, target: 95, owner: 'CISO', governance: 'Monthly Security Review', kpis: [
        { id: 'isms_risk', name: 'Abgeschlossene Risikobewertungen', value: 88, unit: '%', target: '>95%', status: 'warning', regulation: 'ISO 27001 - Jährliche Neubewertung' },
        { id: 'isms_incident', name: 'Incident Response SLA eingehalten', value: 92, unit: '%', target: '>98%', status: 'warning', regulation: 'ISO 27001 A.16 - Response Procedures' },
        { id: 'isms_access', name: 'MFA-geschützte Konten', value: 85, unit: '%', target: '>95%', status: 'warning', regulation: 'ISO 27001 A.6 - IAM Governance' },
        { id: 'isms_vulnerability', name: 'Kritische Schwachstellen gepatcht (SLA)', value: 81, unit: '%', target: '>90%', status: 'warning', regulation: 'BSI M6.234 - Patch Management' },
        { id: 'isms_training', name: 'Security Awareness Schulung', value: 76, unit: '%', target: '>90%', status: 'warning', regulation: 'ISO 27001 A.7 - Competence' }
    ]},
    nis2: { name: 'NIS2 Richtlinie', short: 'NIS2', compliance: 68, target: 95, owner: 'CISO', governance: 'Quarterly Review', kpis: [
        { id: 'nis2_detection', name: 'Mean Detection Time', value: 3.2, unit: 'Min', target: '<5 min', status: 'good', regulation: 'NIS2 Art. 23 - Detektion' },
        { id: 'nis2_crisis', name: 'Krisenmanagementplan Aktualität', value: 78, unit: '%', target: '>90%', status: 'warning', regulation: 'NIS2 Art. 21 - Plans' },
        { id: 'nis2_supply', name: 'Third-Party-Risikobewertungen', value: 72, unit: '%', target: '>85%', status: 'warning', regulation: 'NIS2 Art. 28 - Third-party' },
        { id: 'nis2_reporting', name: 'Incidents an ENISA gemeldet', value: 85, unit: '%', target: '>95%', status: 'warning', regulation: 'NIS2 Art. 19 - Meldepflicht' },
        { id: 'nis2_audit', name: 'Annual Audit Completion', value: 82, unit: '%', target: '>95%', status: 'warning', regulation: 'NIS2 Art. 20 - Audits' }
    ]},
    dora: { name: 'DORA (Digital Resilience)', short: 'DORA', compliance: 79, target: 95, owner: 'Chief Risk Officer', governance: 'Monthly Risk Committee', kpis: [
        { id: 'dora_mttr', name: 'Mittlere Wiederherstellungszeit (MTTR)', value: 2.3, unit: 'h', target: '<1h', status: 'critical', regulation: 'DORA Art. 17 - 230% über Ziel' },
        { id: 'dora_availability', name: 'Systemverfügbarkeit', value: 99.2, unit: '%', target: '>99.5%', status: 'warning', regulation: 'DORA Art. 6-15 - 0.3% Lücke' },
        { id: 'dora_thirdparty', name: 'CSPT Audit-Abdeckung', value: 82, unit: '%', target: '>95%', status: 'warning', regulation: 'DORA Art. 28 - 13.7% Lücke' },
        { id: 'dora_testing', name: 'DR-Test-Fertigstellung', value: 76, unit: '%', target: '>90%', status: 'warning', regulation: 'DORA Art. 18 - 15.6% Lücke' },
        { id: 'dora_incident_response', name: 'IKT-Incident-Response-Zeit', value: 8.5, unit: 'h', target: '<4h', status: 'warning', regulation: 'DORA Art. 17 - 112% über Ziel' },
        { id: 'dora_concentration', name: 'Vendor-Konzentrationrisiko', value: 68, unit: '%', target: '<20%', status: 'critical', regulation: 'DORA Art. 28 - 240% über Ziel' }
    ]},
    cer: { name: 'CER Directive', short: 'CER', compliance: 58, target: 95, owner: 'Risk Management', governance: 'Quarterly Board Review', kpis: [
        { id: 'cer_risk', name: 'Infrastruktur-Risikobewertungen', value: 72, unit: '%', target: '>95%', status: 'warning', regulation: 'CER Art. 4 - 24.2% Lücke' },
        { id: 'cer_inventory', name: 'Kritische Vermögenswerte inventarisiert', value: 68, unit: '%', target: '>95%', status: 'critical', regulation: 'CER Art. 2 - 28.4% Lücke' },
        { id: 'cer_supply', name: 'Supply-Chain-Risikoüberwachung', value: 65, unit: '%', target: '>90%', status: 'warning', regulation: 'CER Art. 10 - 27.8% Lücke' },
        { id: 'cer_reporting', name: 'Incidents den Behörden gemeldet', value: 78, unit: '%', target: '>95%', status: 'warning', regulation: 'CER Art. 13 - 17.9% Lücke' },
        { id: 'cer_testing', name: 'Resilienz-Test-Fertigstellung', value: 62, unit: '%', target: '>85%', status: 'critical', regulation: 'CER Art. 7 - 27.1% Lücke' }
    ]},
    dsa: { name: 'DSA (Digital Services)', short: 'DSA', compliance: 52, target: 95, owner: 'Legal', governance: 'Monthly Compliance', kpis: [
        { id: 'dsa_removal', name: 'Illegal Content Removal Time', value: 18, unit: 'h', target: '<24h', status: 'good', regulation: 'DSA Art. 17 - 25% unter Ziel' },
        { id: 'dsa_report', name: 'User Report Response Time', value: 38, unit: 'h', target: '<48h', status: 'good', regulation: 'DSA Art. 17 - 20% unter Ziel' },
        { id: 'dsa_transparency', name: 'Algorithm Transparency Score', value: 55, unit: '%', target: '>85%', status: 'critical', regulation: 'DSA Art. 35 - 35.3% Lücke' },
        { id: 'dsa_moderation', name: 'Content Moderation Audit Coverage', value: 68, unit: '%', target: '>95%', status: 'warning', regulation: 'DSA Art. 13-17 - 28.4% Lücke' },
        { id: 'dsa_doma', name: 'DOMA Compliance Score', value: 72, unit: '%', target: '>90%', status: 'warning', regulation: 'DSA Art. 36 - 20% Lücke' }
    ]},
    eu_ai_act: { name: 'EU AI Act', short: 'EU AI Act', compliance: 42, target: 90, owner: 'AI Ethics Board', governance: 'Bi-weekly AI Assessment', kpis: [
        { id: 'ai_classification', name: 'High-Risk AI Systems Classified', value: 68, unit: '%', target: '>95%', status: 'critical', regulation: 'EU AI Art. 6 - 28.4% Lücke' },
        { id: 'ai_docs', name: 'Technical Documentation Completeness', value: 52, unit: '%', target: '>95%', status: 'critical', regulation: 'EU AI Art. 10 - 45.3% Lücke' },
        { id: 'ai_bias', name: 'Bias Testing & Mitigation Coverage', value: 45, unit: '%', target: '>90%', status: 'critical', regulation: 'EU AI Art. 19-24 - 50% Lücke' },
        { id: 'ai_conformity', name: 'Conformity Assessment Completion', value: 38, unit: '%', target: '>90%', status: 'critical', regulation: 'EU AI Art. 43 - 57.8% Lücke' },
        { id: 'ai_data_quality', name: 'Training Data Quality Score', value: 56, unit: '%', target: '>85%', status: 'critical', regulation: 'EU AI Art. 10 - 34.1% Lücke' },
        { id: 'ai_monitoring', name: 'Model Performance Monitoring', value: 48, unit: '%', target: '>90%', status: 'critical', regulation: 'EU AI Art. 24 - 46.7% Lücke' }
    ]},
    it_grundschutz: { name: 'IT-Grundschutz', short: 'IT-Grundschutz', compliance: 71, target: 95, owner: 'IT Security', governance: 'Quarterly BSI Check', kpis: [
        { id: 'itg_maturity', name: 'IT-Grundschutz Reifegradstufe', value: 72, unit: '/100', target: '>85', status: 'warning', regulation: 'BSI C5:2020 - 15.3% Lücke' },
        { id: 'itg_control', name: 'Control Implementation Rate', value: 78, unit: '%', target: '>95%', status: 'warning', regulation: 'BSI Katalog - 17.9% Lücke' },
        { id: 'itg_docs', name: 'Documentation Quality', value: 68, unit: '%', target: '>90%', status: 'warning', regulation: 'BSI Standards - 24.4% Lücke' },
        { id: 'itg_audit', name: 'C5 Audit Readiness', value: 58, unit: '%', target: '>90%', status: 'critical', regulation: 'BSI Zertifizierung - 35.6% Lücke' },
        { id: 'itg_evidence', name: 'Evidence Collection Rate', value: 81, unit: '%', target: '>95%', status: 'warning', regulation: 'BSI Audits - 14.7% Lücke' }
    ]},
    bcms: { name: 'BCMS', short: 'BCMS', compliance: 77, target: 95, owner: 'BC Manager', governance: 'Bi-annual DR Testing', kpis: [
        { id: 'bcms_rto', name: 'RTO Achievement Rate', value: 94, unit: '%', target: '>98%', status: 'warning', regulation: 'ISO 22301 - 4.1% Lücke' },
        { id: 'bcms_testing', name: 'DR Testing Completion', value: 88, unit: '%', target: '>95%', status: 'warning', regulation: 'ISO 22301 - 7.4% Lücke' },
        { id: 'bcms_plans', name: 'BC Plans Updated & Current', value: 92, unit: '%', target: '>98%', status: 'warning', regulation: 'ISO 22301 - 6.1% Lücke' },
        { id: 'bcms_rpo', name: 'RPO Achievement Rate', value: 85, unit: '%', target: '>95%', status: 'warning', regulation: 'Backup & Restore - 10.5% Lücke' },
        { id: 'bcms_stakeholder', name: 'Stakeholder Training Completion', value: 76, unit: '%', target: '>90%', status: 'warning', regulation: 'ISO 22301 - 15.6% Lücke' }
    ]},
    iso42001: { name: 'ISO 42001 (KI-Management)', short: 'ISO 42001', compliance: 48, target: 90, owner: 'AI Governance', governance: 'Monatliches KI-Ethik-Review', kpis: [
        { id: 'ai_validation', name: 'Modellvalidierung & Test-Abdeckung', value: 68, unit: '%', target: '>90%', status: 'warning', regulation: 'ISO 42001 - 24.4% Lücke' },
        { id: 'ai_governance', name: 'KI-Governance-Framework Reife', value: 52, unit: '%', target: '>90%', status: 'critical', regulation: 'ISO 42001 - 42.2% Lücke' },
        { id: 'ai_accountability', name: 'Verantwortlichkeits-Audit Fertigstellung', value: 48, unit: '%', target: '>85%', status: 'critical', regulation: 'ISO 42001 - 43.5% Lücke' },
        { id: 'ai_training', name: 'KI-Literacy-Schulung Fertigstellung', value: 58, unit: '%', target: '>80%', status: 'warning', regulation: 'ISO 42001 - 27.5% Lücke' },
        { id: 'ai_risk_assessment', name: 'KI-Risikobewertung Fertigstellung', value: 64, unit: '%', target: '>95%', status: 'critical', regulation: 'ISO 42001 - 32.6% Lücke' },
        { id: 'ai_incident_response', name: 'KI-Incident-Response-Plan getestet', value: 42, unit: '%', target: '>85%', status: 'critical', regulation: 'ISO 42001 - 50.6% Lücke' }
    ]},
    dsgvo: { name: 'DSGVO', short: 'DSGVO', compliance: 82, target: 95, owner: 'DPO', governance: 'Monthly DPO Review', kpis: [
        { id: 'dsgvo_dpia', name: 'DPIA Completion Rate', value: 92, unit: '%', target: '>98%', status: 'warning', regulation: 'DSGVO Art. 35 - 6.1% Lücke' },
        { id: 'dsgvo_rights', name: 'Data Subject Rights Requests (SLA)', value: 88, unit: '%', target: '>95%', status: 'warning', regulation: 'DSGVO Art. 12-22 - 7.4% Lücke' },
        { id: 'dsgvo_privacy', name: 'Privacy by Design Implementation', value: 85, unit: '%', target: '>95%', status: 'warning', regulation: 'DSGVO Art. 25 - 10.5% Lücke' },
        { id: 'dsgvo_breach', name: 'Breach Notification (72h SLA)', value: 96, unit: '%', target: '>98%', status: 'good', regulation: 'DSGVO Art. 33 - 2% Lücke' },
        { id: 'dsgvo_dpo_audit', name: 'DPO Audit Completion', value: 78, unit: '%', target: '>90%', status: 'warning', regulation: 'DSGVO Art. 39 - 13.3% Lücke' }
    ]},
    sovereign_it: { name: 'IT-Souveränität', short: 'Souveränität', compliance: 54, target: 90, owner: 'Infrastructure', governance: 'Quarterly Vendor Risk', kpis: [
        { id: 'sov_cloud', name: 'EU-Compliant Cloud Services', value: 78, unit: '%', target: '>95%', status: 'warning', regulation: 'Schrems II - 17.9% Lücke' },
        { id: 'sov_residency', name: 'Data Residency (Germany/EU)', value: 72, unit: '%', target: '>95%', status: 'warning', regulation: 'Behörden-Cloud - 24.2% Lücke' },
        { id: 'sov_vendor', name: 'German/European Vendor Share', value: 65, unit: '%', target: '>90%', status: 'warning', regulation: 'IT-SiG 2.0 - 27.8% Lücke' },
        { id: 'sov_encryption', name: 'EU-controlled Encryption Keys', value: 58, unit: '%', target: '>95%', status: 'critical', regulation: 'Post-Quantum Krypto - 38.9% Lücke' },
        { id: 'sov_independence', name: 'IT Independence Score', value: 52, unit: '%', target: '>85%', status: 'critical', regulation: 'Souveränität - 38.8% Lücke' }
    ]},
    sovereign_ws: { name: 'SouvAP', short: 'SouvAP', compliance: 51, target: 90, owner: 'IT Ops', governance: 'Monthly Deployment Review', kpis: [
        { id: 'sws_os', name: 'Open Source OS Deployed (Linux)', value: 72, unit: '%', target: '>95%', status: 'warning', regulation: 'OZG/BSI - 24.2% Lücke' },
        { id: 'sws_migration', name: 'Migration Completion Progress', value: 68, unit: '%', target: '>90%', status: 'warning', regulation: '10-Jahr-Plan - 24.4% Lücke' },
        { id: 'sws_adoption', name: 'User Adoption Rate', value: 58, unit: '%', target: '>80%', status: 'warning', regulation: 'Change Mgmt - 27.5% Lücke' },
        { id: 'sws_support', name: 'Internal Support Capability', value: 52, unit: '%', target: '>85%', status: 'critical', regulation: 'Team Schulung - 38.8% Lücke' },
        { id: 'sws_satisfaction', name: 'User Satisfaction Score', value: 64, unit: '%', target: '>80%', status: 'warning', regulation: 'UX Monitoring - 20% Lücke' }
    ]},
    wcag: { name: 'Web Accessibility (WCAG 2.2)', short: 'WCAG', compliance: 64, target: 95, owner: 'Digital Accessibility Officer', governance: 'Monatliches Barrierefreiheits-Audit', kpis: [
        { id: 'wcag_conformance', name: 'WCAG 2.2 Level AA Konformität', value: 71, unit: '%', target: '>95%', status: 'warning', regulation: 'WCAG 2.2 AA - W3C Standard' },
        { id: 'wcag_contrast', name: 'Farbkontrast-Verhältnis', value: 88, unit: '%', target: '>95%', status: 'warning', regulation: 'WCAG 2.2 1.4.3 - 4.5:1 Verhältnis' },
        { id: 'wcag_keyboard', name: 'Tastaturnavigation-Abdeckung', value: 82, unit: '%', target: '>95%', status: 'warning', regulation: 'WCAG 2.2 2.1.1 - Tastatur' },
        { id: 'wcag_aria', name: 'ARIA-Label-Vollständigkeit', value: 68, unit: '%', target: '>90%', status: 'warning', regulation: 'WCAG 2.2 1.3.1 - Semantik' },
        { id: 'wcag_testing', name: 'Automatisierte Test-Abdeckung', value: 54, unit: '%', target: '>85%', status: 'critical', regulation: 'EN 301 549 - Barrierefreiheits-Tests' },
        { id: 'wcag_user_testing', name: 'Benutzertests mit Behinderungen', value: 42, unit: '%', target: '>80%', status: 'critical', regulation: 'WCAG 2.2 3.2 - Benutzer-Testing' },
        { id: 'wcag_mobile', name: 'Mobile Barrierefreiheit Score', value: 76, unit: '%', target: '>95%', status: 'warning', regulation: 'WCAG 2.2 Mobile - Touch-Ziele' }
    ]}
};

let currentFilters = { sector: '', regulation: '' };
let darkModeEnabled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    applyDarkMode();
}

function applyDarkMode() {
    const scheme = darkModeEnabled ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', scheme);
    const toggle = document.getElementById('darkModeToggle');
    if (darkModeEnabled) {
        toggle.classList.add('enabled');
        toggle.classList.remove('disabled');
    } else {
        toggle.classList.remove('enabled');
        toggle.classList.add('disabled');
    }
}

function renderComplianceOverview() {
    const container = document.getElementById('complianceOverview');
    let html = '';
    for (const [key, reg] of Object.entries(REGULATIONS)) {
        const pct = reg.compliance;
        const status = pct >= 85 ? 'status-good' : pct >= 70 ? 'status-warning' : 'status-critical';
        const statusText = pct >= 85 ? 'On Track' : pct >= 70 ? 'Review' : 'Critical';
        html += `<div class="compliance-item" onclick="filterByRegulation('${key}')">
            <div class="compliance-label">${reg.short}</div>
            <div class="compliance-value">${pct}%</div>
            <div class="compliance-status"><span class="badge-status ${status}">${statusText}</span></div>
        </div>`;
    }
    container.innerHTML = html;
}

function renderAlerts() {
    const container = document.getElementById('alertsContainer');
    html = '<div class="alert alert-info"><strong>📋 Kritische Maßnahmen - Governance & Operative Risiken:</strong></div>';
    html += '<div class="regulatory-section"><h4>🔴 Kritische Maßnahmen</h4>';
    html += '<table><tr><th>Regulatorik</th><th>Maßnahme</th><th>Owner</th><th>Status</th></tr>';
    html += '<tr style="background-color: rgba(192, 21, 47, 0.05);"><td><strong>EU AI Act</strong></td><td>KI-Systeme klassifizieren</td><td>Data Governance</td><td><span style="background: #f59e0b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px;">PLANNED</span></td></tr>';
    html += '<tr style="background-color: rgba(192, 21, 47, 0.05);"><td><strong>SouvAP</strong></td><td>Sovereign OS Migration</td><td>IT Operations</td><td><span style="background: #f59e0b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px;">PLANNED</span></td></tr>';
    html += '<tr style="background-color: rgba(192, 21, 47, 0.05);"><td><strong>CER</strong></td><td>Infrastruktur identifizieren</td><td>Risk Mgmt</td><td><span style="background: #f59e0b; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px;">PLANNED</span></td></tr>';
    html += '</table></div>';
    html += '<div class="regulatory-section"><h4>⚠️ Wichtige Maßnahmen</h4>';
    html += '<table><tr><th>Regulatorik</th><th>Maßnahme</th><th>Owner</th><th>Status</th></tr>';
    html += '<tr><td><strong>NIS2</strong></td><td>Incident Response optimieren</td><td>CISO</td><td><span style="background: #059669; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px;">IN PROGRESS</span></td></tr>';
    html += '<tr><td><strong>IT-Grundschutz</strong></td><td>Reifegradmodell umsetzen</td><td>Security</td><td><span style="background: #059669; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px;">IN PROGRESS</span></td></tr>';
    html += '</table></div>';
    container.innerHTML = html;
}

function renderRegulationTabs() {
    const tabContainer = document.getElementById('regulationTabs');
    const contentContainer = document.getElementById('tabContents');
    let tabsHtml = '', contentsHtml = '';
    let index = 0;
    for (const [key, reg] of Object.entries(REGULATIONS)) {
        const activeClass = index === 0 ? 'active' : '';
        tabsHtml += `<button class="tab ${activeClass}" onclick="switchTab('${key}')">${reg.short}</button>`;
        contentsHtml += `<div class="tab-content ${activeClass}" id="content-${key}">
            <h3>${reg.name}</h3>
            <p>Compliance: <strong style="color: var(--color-primary);">${reg.compliance}%</strong> / Ziel: ${reg.target}%</p>
            <div class="grid">`;
        if (reg.kpis && reg.kpis.length > 0) {
            reg.kpis.forEach(kpi => {
                const pct = kpi.unit === '%' ? kpi.value : 50;
                const statusClass = kpi.status === 'good' ? 'status-good' : kpi.status === 'warning' ? 'status-warning' : 'status-critical';
                contentsHtml += `<div class="card" onclick="showKPIModal('${key}', '${kpi.id}')">
                    <div class="card-header">
                        <h3 class="card-title">${kpi.name}</h3>
                        <span class="badge-status ${statusClass}">${kpi.status.toUpperCase()}</span>
                    </div>
                    <div class="kpi-value">${kpi.value}${kpi.unit}</div>
                    <div class="kpi-target">Ziel: ${kpi.target}</div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%"></div></div>
                </div>`;
            });
        } else {
            contentsHtml += `<p style="color: var(--color-text-secondary);">Keine KPI-Daten verfügbar.</p>`;
        }
        contentsHtml += `</div></div>`;
        index++;
    }
    tabContainer.innerHTML = tabsHtml;
    contentContainer.innerHTML = contentsHtml;
}

function switchTab(regulationKey) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`[onclick="switchTab('${regulationKey}')"]`)?.classList.add('active');
    document.getElementById(`content-${regulationKey}`)?.classList.add('active');
}

function filterByRegulation(regulationKey) {
    currentFilters.regulation = regulationKey;
    showSection('kpis');
    setTimeout(() => switchTab(regulationKey), 100);
}

function showKPIModal(regulationKey, kpiId) {
    const reg = REGULATIONS[regulationKey];
    const kpi = reg.kpis.find(k => k.id === kpiId);
    if (!kpi) return;
    
    const modal = document.getElementById('kpiModal');
    document.getElementById('modalTitle').textContent = `${reg.name} - ${kpi.name}`;
    
    const gap = kpi.target.replace(/[^0-9.]/g, '') - kpi.value;
    const gapText = gap > 0 ? `+${gap.toFixed(1)}` : gap.toFixed(1);
    
    // Implementierungsschritte abrufen
    const steps = IMPLEMENTATION_STEPS[regulationKey] || [
        "Phase 1: Gap-Analyse durchführen",
        "Phase 2: Roadmap erstellen",
        "Phase 3: Maßnahmen implementieren",
        "Phase 4: Schulung und Awareness",
        "Phase 5: Review und Zertifizierung"
    ];

    let stepsHtml = '';
    steps.forEach(step => {
        stepsHtml += `<li>${step}</li>`;
    });

    let html = `<div class="regulatory-section">
        <h4>📊 KPI Details</h4>
        <p><strong>Regulatorik:</strong> ${kpi.regulation || reg.name}</p>
        <p><strong>Metrik:</strong> ${kpi.name}</p>
        <p><strong>Aktueller Wert:</strong> <span style="color: var(--color-primary); font-weight: 600;">${kpi.value}${kpi.unit}</span></p>
        <p><strong>Zielwert:</strong> ${kpi.target}</p>
        <p><strong>Lücke:</strong> <span style="color: ${gap > 15 ? '#ef4444' : gap > 5 ? '#f59e0b' : '#059669'}; font-weight: 600;">${gapText}${kpi.unit.includes('%') || kpi.unit.includes('h') || kpi.unit.includes('Min') ? '' : kpi.unit}</span></p>
        <p><strong>Status:</strong> <span class="badge-status status-${kpi.status}">${kpi.status.toUpperCase()}</span></p>
    </div>
    <div class="regulatory-section">
        <h4>🎯 Regulatorischer Hintergrund</h4>
        <p style="font-size: 12px; color: var(--color-text-secondary);">${kpi.regulation || 'Siehe Regulatorik'}</p>
    </div>
    <div class="regulatory-section">
        <h4>✅ Implementierungsschritte (${reg.short})</h4>
        <ul style="margin: var(--space-12) 0; padding-left: 20px;">
            ${stepsHtml}
        </ul>
    </div>
    <div class="regulatory-section">
        <h4>⏱️ Priorität</h4>
        <p>${gap > 30 ? '🔴 <strong>KRITISCH:</strong> Sofortige Maßnahmen erforderlich (Q1 2025)' : gap > 15 ? '🟠 <strong>HOCH:</strong> Planung im laufenden Quartal' : '🟢 <strong>NORMAL:</strong> Regelmäßige Überwachung'}</p>
    </div>`;
    
    document.getElementById('modalBody').innerHTML = html;
    modal.classList.add('active');
}

function renderRiskManagement() {
    const container = document.getElementById('riskContainer');
    let html = '<div class="alert alert-info"><strong>📋 Risiko Management - Operative Risiken & Governance:</strong></div>';
    
    html += '<div class="regulatory-section"><h4>🎯 Compliance Status nach Regulatorik</h4>';
    html += '<table><tr><th>Regulatorik</th><th>Compliance</th><th>Ziel</th><th>Lücke</th><th>Owner</th><th>Governance</th><th>Risiko</th></tr>';
    for (const [key, reg] of Object.entries(REGULATIONS)) {
        const gap = reg.target - reg.compliance;
        const riskLevel = gap > 30 ? '🔴 KRITISCH' : gap > 15 ? '🟠 HOCH' : '🟢 NIEDRIG';
        html += `<tr style="${gap > 30 ? 'background-color: rgba(192, 21, 47, 0.08);' : ''}">
            <td><strong>${reg.short}</strong></td>
            <td style="color: var(--color-primary); font-weight: 600;">${reg.compliance}%</td>
            <td>${reg.target}%</td>
            <td style="color: #ef4444; font-weight: 600;">${gap}%</td>
            <td>${reg.owner}</td>
            <td style="font-size: 11px;">${reg.governance}</td>
            <td>${riskLevel}</td>
        </tr>`;
    }
    html += '</table></div>';
    
    html += '<div class="regulatory-section"><h4>⚠️ Top Governance Risiken</h4>';
    html += '<table><tr><th>Risiko</th><th>Betroffene Regulatoriken</th><th>Wahrscheinlichkeit</th><th>Impact</th><th>Mitigation</th></tr>';
    html += '<tr style="background-color: rgba(192, 21, 47, 0.08);"><td><strong>Unzureichende KI-Governance</strong></td><td>EU AI Act, ISO 42001</td><td style="color: #ef4444;">HOCH</td><td style="color: #ef4444;">KRITISCH</td><td>AI Ethics Board etablieren</td></tr>';
    html += '<tr><td><strong>Souveränität vs. Cloud-Abh.</strong></td><td>IT-Souveränität, CER</td><td>MITTEL</td><td style="color: #ef4444;">HOCH</td><td>Deutsche Cloud-Provider evaluieren</td></tr>';
    html += '<tr><td><strong>Behavioral Compliance Gap</strong></td><td>DSGVO, ISMS, NIS2</td><td>MITTEL</td><td>MITTEL</td><td>Regelmäßige Schulungen</td></tr>';
    html += '</table></div>';
    
    html += '<div class="regulatory-section"><h4>📊 Governance Struktur</h4>';
    html += '<ul>';
    html += '<li><strong>Executive:</strong> CRO verantwortlich für Gesamtstrategie</li>';
    html += '<li><strong>Strategic:</strong> Regulatorische Governance Board (monatlich)</li>';
    html += '<li><strong>Operational:</strong> Compliance Officer & Security Team (wöchentlich)</li>';
    html += '<li><strong>Technical:</strong> Automatisierte Compliance-Monitoring & Alerts</li>';
    html += '</ul></div>';
    
    container.innerHTML = html;
}

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    if (section === 'overview') {
        document.getElementById('overviewSection').style.display = 'block';
        document.querySelectorAll('.sidebar-item')[0].classList.add('active');
    } else if (section === 'alerts') {
        document.getElementById('alertsSection').style.display = 'block';
        document.querySelectorAll('.sidebar-item')[1].classList.add('active');
        renderAlerts();
    } else if (section === 'kpis') {
        document.getElementById('kpisSection').style.display = 'block';
        document.querySelectorAll('.sidebar-item')[2].classList.add('active');
        renderRegulationTabs();
        if (currentFilters.regulation) {
            setTimeout(() => switchTab(currentFilters.regulation), 50);
        }
    } else if (section === 'risks') {
        document.getElementById('risksSection').style.display = 'block';
        document.querySelectorAll('.sidebar-item')[3].classList.add('active');
        renderRiskManagement();
    }
}

function updateSidebarScore() {
    const avg = Object.values(REGULATIONS).reduce((sum, r) => sum + r.compliance, 0) / Object.keys(REGULATIONS).length;
    document.getElementById('complianceScore').textContent = Math.round(avg) + '%';
}

function populateSidebarRegulations() {
    const container = document.getElementById('sidebarRegulations');
    const sorted = Object.entries(REGULATIONS).sort((a, b) => b[1].compliance - a[1].compliance).slice(0, 3);
    let html = '';
    sorted.forEach(([key, reg]) => {
        const statusClass = reg.compliance >= 85 ? 'status-dot-good' : reg.compliance >= 70 ? 'status-dot-warning' : 'status-dot-critical';
        html += `<div class="sidebar-item" onclick="filterByRegulation('${key}')">
            <span><span class="sidebar-status-dot ${statusClass}"></span>${reg.short}</span>
            <span class="sidebar-value">${reg.compliance}%</span>
        </div>`;
    });
    container.innerHTML = html;
}

function closeModal() {
    document.getElementById('kpiModal').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    applyDarkMode();
    renderComplianceOverview();
    updateSidebarScore();
    populateSidebarRegulations();
    showSection('overview');
    
    // Close modal on background click
    const modal = document.getElementById('kpiModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});
