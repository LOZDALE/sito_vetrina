# 🚀 Portfolio Personale & Sito Vetrina

Un portfolio web moderno, dinamico e ad alte prestazioni progettato per presentare progetti, competenze tecniche ed esperienze come sviluppatore.

Questa applicazione unisce una resa estetica d'avanguardia con una struttura software reattiva e completamente multilingua (Italiano/Inglese).

---

## 🛠️ Tecnologie Utilizzate

Il progetto è costruito sfruttando le ultime tecnologie e framework del panorama frontend:

- **🟢 Vue 3 (Composition API & `<script setup>`)**: Framework JavaScript progressivo per lo sviluppo dell'interfaccia utente.
- **⚡ Vite**: Strumento di build ultra-veloce ed efficiente.
- **🎨 Tailwind CSS v4**: L'ultima versione del framework CSS utility-first, che garantisce uno styling super performante e moderno tramite compilazione nativa Vite.
- **💎 PrimeVue v4 & PrimeIcons**: Libreria di componenti UI ricca, flessibile ed accessibile, con un tema scuro personalizzato basato su `@primevue/themes`.
- **🌌 tsParticles**: Sistema di sfondo particellare dinamico e interattivo.
- **✉️ EmailJS**: Servizio client-side per l'invio sicuro di email direttamente dal form di contatto senza necessità di un server backend.
- **📈 GSAP & Animate.css**: Integrazione di animazioni fluide per migliorare l'esperienza utente.

---

## 📁 Struttura del Progetto

L'organizzazione dei file segue gli standard di settore per progetti basati su Vue 3:

```text
sito_vetrina/
├── public/                 # Risorse statiche servite direttamente (immagini, icone)
│   ├── siParte.png         # Screenshot del progetto "Si Parte - webapp"
│   └── bird.png            # Screenshot del progetto "Flappy Bird APK"
├── src/
│   ├── assets/             # Stili globali CSS e configurazioni Tailwind
│   ├── components/         # Componenti Vue riutilizzabili per le sezioni della pagina
│   │   ├── Navbar.vue          # Menu di navigazione con controllo lingua (IT/EN)
│   │   ├── HeroSection.vue     # Sezione principale d'impatto con CTA
│   │   ├── ProjectsSection.vue # Griglia dei progetti (reazione immediata al cambio lingua)
│   │   ├── ProjectCard.vue     # Card singola di presentazione del progetto basata su PrimeVue Card
│   │   ├── SkillsSection.vue   # Sezione con le competenze tecniche categorizzate
│   │   ├── ContactSection.vue  # Form di contatto interattivo collegato ad EmailJS
│   │   ├── ParticleCanvas.vue  # Sfondo particellare dinamico interattivo
│   │   └── FooterSection.vue   # Footer con i link social dell'utente
│   ├── composables/        # Logica riutilizzabile (Composition API)
│   │   └── useI18n.js          # Sistema leggero di traduzione reattiva per il multilingua
│   ├── router/             # Configurazione del router per eventuali percorsi aggiuntivi
│   ├── views/              # Viste principali dell'applicazione
│   ├── App.vue             # Componente radice principale
│   └── main.js             # Entrypoint dell'applicazione e configurazione dei plugin
├── index.html              # Template HTML principale con meta-tag SEO
├── package.json            # Dipendenze e script NPM del progetto
└── vite.config.js          # File di configurazione di Vite
```

---

## 📂 Progetti Evidenziati

Il portfolio include una selezione di progetti che dimostrano diverse competenze tecniche:

1. **Si Parte - webapp**:
   - **Descrizione**: Un'applicazione web interattiva progettata per aiutare gli utenti a trovare la loro destinazione ideale.
   - **Tech Stack**: JavaScript, Docker, PHP, MySQL.
   - **Repository**: [LOZDALE/si_parte_webapp](https://github.com/LOZDALE/si_parte_webapp)

2. **Flappy Bird APK**:
   - **Descrizione**: Una versione mobile e desktop del celebre gioco Flappy Bird sviluppata interamente in Python.
   - **Tech Stack**: Python, Kivy, pygame, buildozer, Android.
   - **Repository**: [LOZDALE/pymobile](https://github.com/LOZDALE/pymobile/tree/main)
---

## 🚀 Installazione & Sviluppo Locale

Segui questi passaggi per configurare ed avviare il progetto sul tuo computer locale.

### Prerequisiti

Assicurati di aver installato:
- [Node.js](https://nodejs.org/) (versione 18 o superiore consigliata)
- [npm](https://www.npmjs.com/)

### 1. Clonazione del repository
```bash
git clone https://github.com/LOZDALE/sito_vetrina.git
cd sito_vetrina
```

### 2. Installazione delle dipendenze
```bash
npm install
```

### 3. Avvio in locale
Per lanciare il server di sviluppo di Vite:
```bash
npm run dev
```
L'applicazione sarà disponibile su `http://localhost:5173`.

### 4. Build per la Produzione
Per generare la build ottimizzata e pronta per il deploy:
```bash
npm run build
```
Questo comando creerà la directory `dist` pronta per l'hosting.
