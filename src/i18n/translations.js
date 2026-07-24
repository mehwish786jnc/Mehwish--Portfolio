// Translations for the portfolio. Language-neutral data (tech names, skill
// lists, tags, links, levels, icons) lives in data.js and is merged by index.
// Add a new language by copying the `en` block and translating the strings.

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export const translations = {
  /* ----------------------------- ENGLISH ----------------------------- */
  en: {
    dir: "ltr",
    role: "AI Core DevOps Engineer @ SAP Labs | M.Tech Software Engineering @ BITS Pilani",
    tagline:
      "AI Core DevOps Engineer | Full-Stack Developer | AI/ML & Computer Vision Enthusiast | Research Author | Member of Google for Developers",
    bio: "I'm Mehwish Sultana, an AI Core DevOps Engineer at SAP Labs India and M.Tech Software Engineering student at BITS Pilani. I build and maintain CI/CD pipelines, containerise services with Docker and Kubernetes, and develop full-stack applications using React, Node.js, and TypeScript on SAP Business Technology Platform. Previously I worked on real-time defence systems at HAL and BEL, and I've published research in Blockchain and AI/ML at international conferences.",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      publications: "Publications",
      certificates: "Certificates",
      play: "Play",
      contact: "Contact",
    },
    hero: {
      available: "Available at",
      greeting: "Hi, I'm",
      roles: [
        "AI Core DevOps Engineer",
        "Full-Stack Developer",
        "Cloud-Native Builder",
        "Computer Vision Enthusiast",
      ],
      downloadResume: "Download Resume",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      resume: "Resume",
    },
    about: {
      eyebrow: "About Me",
      title: "DevOps Engineer with full-stack capabilities",
      highlights: ["CI/CD Pipelines", "Cloud-Native", "Full-Stack Dev", "Docker & K8s"],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools & technologies I work with",
      subtitle:
        "From low-level automation to AI models and polished user interfaces.",
      programmingLanguages: "Programming Languages",
      categories: [
        "Frontend",
        "Backend",
        "DevOps & Cloud",
        "AI & Machine Learning",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "My professional journey",
      items: [
        {
          role: "AI Core DevOps Engineer",
          period: "Jun 2026 – Present",
          points: [
            "AI-powered enterprise application development",
            "CI/CD pipeline automation",
            "Cloud-native development on SAP BTP",
            "DevOps engineering & infrastructure",
          ],
        },
        {
          role: "Software Engineer — MD's Office",
          period: "Aug 2025 – Jun 2026",
          points: [
            "Built AI features for Learning Fest 2.0 with RAG integration",
            "Integrated SAP Joule AI into enterprise workflows",
            "Developed full-stack Unified Booking Application with RBAC",
            "Deployed & managed apps on SAP BTP",
          ],
        },
        {
          role: "Software Engineer Intern",
          period: "Jun 2024 – Jun 2025",
          points: [
            "Enterprise software engineering at SERT Globe",
          ],
        },
        {
          role: "SDE Intern",
          period: "May 2024",
          points: [
            "Software development for aerospace systems at HAL",
          ],
        },
        {
          role: "Deep Learning Intern",
          period: "Apr 2024 – May 2024",
          points: [
            "Deep learning research & model development at Estah Society",
          ],
        },
        {
          role: "Computer Vision Intern",
          period: "Aug 2023 – Sep 2023",
          points: [
            "Maritime AI & warship recognition system at BEL",
            "Best Intern Award",
          ],
        },
        {
          role: "AI Project Intern",
          period: "May 2023 – Jun 2023",
          points: [
            "AI & ML project development at Bharat Electronics Limited",
          ],
        },
        {
          role: "Web Developer",
          period: "Dec 2022 – Mar 2023",
          points: [
            "Web development at Kohli Media LLP",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured work",
      subtitle:
        "A selection of projects spanning AI, full-stack engineering, and DevOps.",
      code: "Code",
      liveDemo: "Live Demo",
      comingSoon: "Coming Soon",
      inProgress: "In Progress",
      items: [
        {
          title: "SkillSync – AI-Powered Collaboration & Hiring Platform",
          description:
            "Full-stack platform with AI-based job-candidate matching using NLP, real-time chat via WebSockets, and containerised CI/CD pipeline.",
          highlight: "In Progress",
        },
        {
          title: "Multi-Service Booking Platform",
          description:
            "Full-stack booking system with 40+ REST APIs, authentication, role-based access control, and scalable Docker deployment.",
          highlight: "40+ REST APIs",
        },
        {
          title: "Warship Recognition System (Indian Navy – BEL)",
          description:
            "93% accurate computer vision model built with PyTorch for secure offline maritime environments with improved object detection.",
          highlight: "93% Accuracy",
        },
        {
          title: "Sign Language Translator (English → ISL)",
          description:
            "NLP-based translation system converting English to Indian Sign Language with interactive visual outputs, improving accessibility for hearing-impaired users.",
          highlight: "Accessibility",
        },
        {
          title: "CI/CD Pipeline using Jenkins",
          description:
            "Built Freestyle and Pipeline jobs integrating GitHub repos, pipeline-as-code with Jenkinsfile (Build → Test → Deploy), and automated SCM polling triggers.",
          highlight: "DevOps",
        },
        {
          title: "Git Version Control & Workflow Automation",
          description:
            "Full Git lifecycle management: feature branching, merge conflict resolution, rebase workflows, and GitHub integration for clean version history.",
          highlight: "DevOps",
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      items: [
        {
          degree: "M.Tech Software Engineering",
          period: "2025 – 2027",
          detail: "Birla Institute of Technology and Science, Pilani",
        },
        {
          degree: "B.Tech Computer Science Engineering (AI & ML)",
          period: "2021 – 2025",
          detail: "Christ University, Bangalore · CGPA: 8.2",
        },
        {
          degree: "Pre-University (PCMCs)",
          period: "2018 – 2020",
          detail: "Jyoti Nivas College Autonomous, Bangalore",
        },
        {
          degree: "School",
          period: "",
          detail: "Good Samaritan Public School",
        },
      ],
    },
    publications: {
      eyebrow: "Publications",
      title: "Research & papers",
      readPaper: "Read paper",
      items: [
        { title: "Growing traction of biomaterials in spinal surgery" },
        { title: "AI: Crucial enabler to simplify healthcare delivery" },
        { title: "Security Enhancement Using ENIGMA" },
        { title: "Sign Language Translator for Learning Enhancement" },
      ],
    },
    certificates: {
      eyebrow: "Certifications",
      title: "Licences & certificates",
      items: [
        { title: "Machine Learning with Python" },
        { title: "Deep Learning with TensorFlow" },
        { title: "Problem Solving Certificate" },
        { title: "Deep Learning Essentials with Keras" },
        { title: "Deep Neural Networks with PyTorch" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Build Something Amazing Together",
      subtitle: "Have a project, role, or idea in mind? Drop me a message.",
      getInTouch: "Get in touch",
      intro:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Jane Doe",
      emailPlaceholder: "jane@example.com",
      subjectPlaceholder: "Let's collaborate",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      opening: "Opening your mail app...",
      defaultSubject: "Portfolio enquiry",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
      using: "using React + Tailwind CSS",
    },
    chatbot: {
      assistant: "'s Assistant",
      online: "online",
      thinking: "thinking…",
      askMeAnything: "Ask me anything",
      placeholder: "Ask me anything…",
      welcome: "Hi! 👋 I'm {name}'s AI assistant. What would you like to know?",
      suggestions: ["Skills", "Experience", "Projects", "Contact"],
      responses: {
        greet:
          "Hi there! 👋 I'm {name}'s AI assistant. She's a DevOps Engineer at SAP Labs India with full-stack skills. Ask me about her CI/CD work, tech stack, projects, or how to get in touch.",
        skillsIntro: "Core languages: {langs}.",
        contact:
          "You can reach {name} at {email}.\nLinkedIn: {linkedin}\nGitHub: {github}\nOr use the contact form below the projects section.",
        resume:
          "You can download the resume using the \"Download Resume\" button in the hero section, or the Resume button in the navbar.",
        thanks: "Happy to help! 😊 Anything else you'd like to know?",
        fallback:
          "I can tell you about {name}'s skills, DevOps work, full-stack projects, experience, education, certificates, publications, or contact details. Try asking one of those!",
      },
      keywords: {
        greet: ["hi", "hii", "hey", "hello", "greet"],
        about: ["who", "about", "yourself", "bio", "introduce", "devops", "fullstack", "full-stack", "full stack", "engineer"],
        skills: ["skill", "tech", "stack", "language", "know", "tools", "docker", "kubernetes", "k8s", "ci/cd", "pipeline", "react", "node", "typescript"],
        experience: ["experience", "work", "job", "career", "role", "company", "sap", "hal", "bel"],
        projects: ["project", "build", "built", "warship", "booking"],
        education: ["education", "study", "degree", "college", "university", "btech", "mtech", "bits", "cgpa"],
        publications: ["publication", "paper", "research", "ieee"],
        certificates: ["certificate", "cert", "certification", "licence", "license", "course", "pytorch", "keras", "tensorflow", "hackerrank"],
        contact: ["contact", "email", "reach", "hire", "message", "connect", "linkedin", "github"],
        resume: ["resume", "cv", "download"],
        thanks: ["thank", "thanks", "cool", "nice", "awesome"],
      },
    },
    game: {
      eyebrow: "Play",
      title: "Snake: Eat the Stack",
      subtitle:
        "Guide the snake to devour my tech stack. Arrow keys, WASD, or swipe.",
      start: "Start Game",
      pause: "Pause",
      resume: "Resume",
      restart: "Restart",
      score: "Score",
      highScore: "Best",
      gameOver: "Game Over",
      controlsHint: "Use arrow keys, WASD, or swipe to move. Eat the tech logos!",
      collected: "Collected",
    },
    language: "Language",
  },

  /* ----------------------------- GERMAN ----------------------------- */
  de: {
    dir: "ltr",
    role: "AI Core DevOps Engineer & Full-Stack Software Engineer",
    tagline:
      "AI Core DevOps Engineer | Full-Stack-Entwicklerin | Skalierbare KI- & Cloud-Lösungen",
    bio: "Leidenschaftliche Softwareentwicklerin mit Schwerpunkt auf KI, DevOps und Cloud-nativer Anwendungsentwicklung. Derzeit bei SAP Labs India tätig, wo ich KI-Lösungen für Unternehmen, CI/CD-Pipelines und skalierbare Cloud-Anwendungen entwickle. Erfahren in React, TypeScript, Node.js, Docker, Kubernetes, SAP BTP und modernen DevOps-Praktiken. Engagiert darin, komplexe Geschäftsprobleme durch innovative Technologie zu lösen.",
    nav: {
      home: "Start",
      about: "Über mich",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      projects: "Projekte",
      education: "Ausbildung",
      publications: "Publikationen",
      certificates: "Zertifikate",
      play: "Spielen",
      contact: "Kontakt",
    },
    hero: {
      available: "Verfügbar bei",
      greeting: "Hallo, ich bin",
      roles: [
        "AI Core DevOps Engineer",
        "Full-Stack-Entwicklerin",
        "Cloud-Native Entwicklerin",
        "Computer-Vision-Enthusiastin",
      ],
      downloadResume: "Lebenslauf herunterladen",
      viewProjects: "Projekte ansehen",
      contactMe: "Kontaktiere mich",
      resume: "Lebenslauf",
    },
    about: {
      eyebrow: "Über mich",
      title: "Ideen zu Produkten machen",
      highlights: ["Enterprise-KI", "Cloud-Native", "Full-Stack", "DevOps"],
    },
    skills: {
      eyebrow: "Fähigkeiten",
      title: "Werkzeuge & Technologien, mit denen ich arbeite",
      subtitle:
        "Von systemnaher Automatisierung über KI-Modelle bis zu ausgefeilten Benutzeroberflächen.",
      programmingLanguages: "Programmiersprachen",
      categories: [
        "Frontend",
        "Backend",
        "DevOps & Cloud",
        "KI & Maschinelles Lernen",
      ],
    },
    experience: {
      eyebrow: "Erfahrung",
      title: "Mein beruflicher Werdegang",
      items: [
        {
          role: "AI Core DevOps Engineer",
          period: "Aktuell",
          points: [
            "KI-gestützte Unternehmensanwendungen",
            "CI/CD-Automatisierung",
            "Cloud-native Entwicklung",
            "DevOps-Engineering",
          ],
        },
        {
          role: "Software Development Engineer",
          period: "Zuvor",
          points: ["Entwicklung von Unternehmensanwendungen"],
        },
        {
          role: "Praktikantin Computer Vision",
          period: "Praktikum",
          points: ["Maritime KI-Lösungen", "Auszeichnung als beste Praktikantin"],
        },
        {
          role: "Praktikantin Softwareentwicklung",
          period: "Praktikum",
          points: ["Softwareentwicklung im Luftfahrtbereich"],
        },
      ],
    },
    projects: {
      eyebrow: "Projekte",
      title: "Ausgewählte Arbeiten",
      subtitle:
        "Eine Auswahl von Projekten aus KI, Computer Vision und Full-Stack-Entwicklung.",
      code: "Code",
      liveDemo: "Live-Demo",
      comingSoon: "Demnächst",
      items: [
        {
          title: "Multi-Service-Buchungsplattform",
          description:
            "Full-Stack-Buchungssystem mit rollenbasierter Zugriffskontrolle und über 40 REST-APIs, containerisiert mit Docker.",
          highlight: "40+ REST-APIs",
        },
        {
          title: "System zur Kriegsschiff-Erkennung",
          description:
            "Deep-Learning-Computer-Vision-Modell zur Erkennung maritimer Kriegsschiffe, erstellt mit PyTorch.",
          highlight: "93 % Genauigkeit",
        },
        {
          title: "Learning Fest 2.0",
          description: "Demnächst — interne Enablement- und Lerninitiative.",
          highlight: "Platzhalter",
        },
        {
          title: "Joule-Integration",
          description: "Demnächst — Integration des SAP-Joule-KI-Assistenten.",
          highlight: "Platzhalter",
        },
        {
          title: "SAP BTP Cloud-Deployments",
          description: "Demnächst — Cloud-native Deployments auf SAP BTP.",
          highlight: "Platzhalter",
        },
      ],
    },
    education: {
      eyebrow: "Ausbildung",
      title: "Akademischer Hintergrund",
      items: [
        {
          degree: "M.Tech Software Engineering",
          period: "2025 – heute",
          detail: "",
        },
        {
          degree: "B.Tech Informatik (KI & ML)",
          period: "2021 – 2025",
          detail: "Notendurchschnitt: 8,2",
        },
      ],
    },
    publications: {
      eyebrow: "Publikationen",
      title: "Forschung & Veröffentlichungen",
      readPaper: "Paper lesen",
      items: [
        { title: "Wachstum von Biomaterialien in der Wirbelsäulenchirurgie" },
        { title: "KI: Wichtiger Enabler zur Vereinfachung der Gesundheitsversorgung" },
        { title: "Sicherheitsverbesserung mit ENIGMA" },
        { title: "Gebärdensprach-Übersetzer zur Lernförderung" },
      ],
    },
    certificates: {
      eyebrow: "Zertifikate",
      title: "Lizenzen & Zertifikate",
      items: [
        { title: "Maschinelles Lernen mit Python" },
        { title: "Deep Learning mit TensorFlow" },
        { title: "Problemlösungs-Zertifikat" },
        { title: "Deep Learning Grundlagen mit Keras" },
        { title: "Tiefe Neuronale Netze mit PyTorch" },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lass uns gemeinsam etwas Großartiges bauen",
      subtitle:
        "Ein Projekt, eine Rolle oder eine Idee im Kopf? Schreib mir eine Nachricht.",
      getInTouch: "Kontakt aufnehmen",
      intro:
        "Ich bin immer offen für neue Projekte, kreative Ideen oder Gelegenheiten, Teil deiner Vision zu sein.",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      namePlaceholder: "Max Mustermann",
      emailPlaceholder: "max@beispiel.de",
      subjectPlaceholder: "Lass uns zusammenarbeiten",
      messagePlaceholder: "Erzähl mir von deinem Projekt...",
      send: "Nachricht senden",
      opening: "Deine Mail-App wird geöffnet...",
      defaultSubject: "Portfolio-Anfrage",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      builtWith: "Erstellt mit",
      using: "mit React + Tailwind CSS",
    },
    chatbot: {
      assistant: "-Assistent",
      online: "online",
      thinking: "denkt nach…",
      askMeAnything: "Frag mich alles",
      placeholder: "Frag mich alles…",
      welcome:
        "Hallo! 👋 Ich bin der KI-Assistent von {name}. Was möchtest du wissen?",
      suggestions: ["Fähigkeiten", "Erfahrung", "Projekte", "Kontakt"],
      responses: {
        greet:
          "Hallo! 👋 Ich bin der KI-Assistent von {name}. Frag mich nach ihren Fähigkeiten, ihrer Erfahrung, ihren Projekten, ihrer Ausbildung oder wie du sie erreichst.",
        skillsIntro: "Kernsprachen: {langs}.",
        contact:
          "Du erreichst {name} unter {email}.\nLinkedIn: {linkedin}\nGitHub: {github}\nOder nutze das Kontaktformular unter dem Projektbereich.",
        resume:
          "Du kannst den Lebenslauf über den Button 'Lebenslauf herunterladen' im oberen Bereich oder über den Lebenslauf-Button in der Navigationsleiste herunterladen.",
        thanks: "Gerne geschehen! 😊 Möchtest du noch etwas wissen?",
        fallback:
          "Ich kann dir von {name}s Fähigkeiten, Erfahrung, Projekten, Ausbildung, Publikationen oder Kontaktdaten erzählen. Frag einfach danach!",
      },
      keywords: {
        greet: ["hallo", "hi", "hey", "servus", "moin", "guten"],
        about: ["wer", "über", "vorstellen", "bio"],
        skills: ["fähigkeit", "fahigkeit", "skill", "technologie", "sprache", "tools", "stack"],
        experience: ["erfahrung", "arbeit", "job", "beruf", "karriere", "unternehmen"],
        projects: ["projekt", "gebaut", "kriegsschiff", "buchung"],
        education: ["ausbildung", "studium", "abschluss", "universität", "hochschule"],
        publications: ["publikation", "paper", "forschung", "ieee"],
        certificates: ["zertifikat", "zertifizierung", "zertifikat", "kurs", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["kontakt", "email", "e-mail", "erreichen", "nachricht", "linkedin", "github"],
        resume: ["lebenslauf", "cv", "herunterladen"],
        thanks: ["danke", "toll", "super", "cool"],
      },
    },
    game: {
      eyebrow: "Spielen",
      title: "Snake: Friss den Stack",
      subtitle:
        "Führe die Schlange durch meinen Tech-Stack. Pfeiltasten, WASD oder Wischen.",
      start: "Spiel starten",
      pause: "Pause",
      resume: "Fortsetzen",
      restart: "Neu starten",
      score: "Punkte",
      highScore: "Bestwert",
      gameOver: "Game Over",
      controlsHint: "Pfeiltasten, WASD oder Wischen zum Bewegen. Iss die Tech-Logos!",
      collected: "Gesammelt",
    },
    language: "Sprache",
  },

  /* ----------------------------- FRENCH ----------------------------- */
  fr: {
    dir: "ltr",
    role: "Ingénieure AI Core DevOps & Développeuse Full-Stack",
    tagline:
      "Ingénieure AI Core DevOps | Développeuse Full-Stack | Création de solutions IA et cloud évolutives",
    bio: "Ingénieure logiciel passionnée, spécialisée en IA, DevOps et développement d'applications cloud-native. Actuellement chez SAP Labs India, je conçois des solutions d'IA d'entreprise, des pipelines CI/CD et des applications cloud évolutives. Expérimentée avec React, TypeScript, Node.js, Docker, Kubernetes, SAP BTP et les pratiques DevOps modernes. Déterminée à résoudre des problèmes métier complexes grâce à des technologies innovantes.",
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      education: "Formation",
      publications: "Publications",
      certificates: "Certificats",
      play: "Jouer",
      contact: "Contact",
    },
    hero: {
      available: "Disponible chez",
      greeting: "Bonjour, je suis",
      roles: [
        "Ingénieure AI Core DevOps",
        "Développeuse Full-Stack",
        "Créatrice Cloud-Native",
        "Passionnée de vision par ordinateur",
      ],
      downloadResume: "Télécharger le CV",
      viewProjects: "Voir les projets",
      contactMe: "Me contacter",
      resume: "CV",
    },
    about: {
      eyebrow: "À propos de moi",
      title: "Transformer des idées en produits",
      highlights: ["IA d'entreprise", "Cloud-Native", "Full-Stack", "DevOps"],
    },
    skills: {
      eyebrow: "Compétences",
      title: "Outils et technologies que j'utilise",
      subtitle:
        "De l'automatisation bas niveau aux modèles d'IA et aux interfaces soignées.",
      programmingLanguages: "Langages de programmation",
      categories: [
        "Frontend",
        "Backend",
        "DevOps et Cloud",
        "IA et Machine Learning",
      ],
    },
    experience: {
      eyebrow: "Expérience",
      title: "Mon parcours professionnel",
      items: [
        {
          role: "Ingénieure AI Core DevOps",
          period: "Actuel",
          points: [
            "Applications d'entreprise pilotées par l'IA",
            "Automatisation CI/CD",
            "Développement cloud-native",
            "Ingénierie DevOps",
          ],
        },
        {
          role: "Ingénieure en développement logiciel",
          period: "Précédent",
          points: ["Développement d'applications d'entreprise"],
        },
        {
          role: "Stagiaire en vision par ordinateur",
          period: "Stage",
          points: ["Solutions d'IA maritime", "Prix du meilleur stagiaire"],
        },
        {
          role: "Stagiaire en développement logiciel",
          period: "Stage",
          points: ["Développement de logiciels aérospatiaux"],
        },
      ],
    },
    projects: {
      eyebrow: "Projets",
      title: "Travaux en vedette",
      subtitle:
        "Une sélection de projets en IA, vision par ordinateur et ingénierie full-stack.",
      code: "Code",
      liveDemo: "Démo en direct",
      comingSoon: "Bientôt disponible",
      items: [
        {
          title: "Plateforme de réservation multi-services",
          description:
            "Système de réservation full-stack avec contrôle d'accès basé sur les rôles et plus de 40 API REST, conteneurisé avec Docker.",
          highlight: "40+ API REST",
        },
        {
          title: "Système de reconnaissance de navires de guerre",
          description:
            "Modèle de vision par ordinateur à apprentissage profond pour la reconnaissance de navires de guerre, construit avec PyTorch.",
          highlight: "93 % de précision",
        },
        {
          title: "Learning Fest 2.0",
          description: "Bientôt disponible — initiative interne de formation et de montée en compétences.",
          highlight: "Espace réservé",
        },
        {
          title: "Intégration de Joule",
          description: "Bientôt disponible — projet d'intégration de l'assistant IA SAP Joule.",
          highlight: "Espace réservé",
        },
        {
          title: "Déploiements cloud SAP BTP",
          description: "Bientôt disponible — déploiements cloud-native sur SAP BTP.",
          highlight: "Espace réservé",
        },
      ],
    },
    education: {
      eyebrow: "Formation",
      title: "Parcours académique",
      items: [
        {
          degree: "M.Tech en Génie logiciel",
          period: "2025 – présent",
          detail: "",
        },
        {
          degree: "B.Tech en Génie informatique (IA et ML)",
          period: "2021 – 2025",
          detail: "Moyenne : 8,2",
        },
      ],
    },
    publications: {
      eyebrow: "Publications",
      title: "Recherche et articles",
      readPaper: "Lire l'article",
      items: [
        { title: "Adoption croissante des biomatériaux en chirurgie spinale" },
        { title: "L'IA : un facilitateur clé pour simplifier les soins de santé" },
        { title: "Renforcement de la sécurité avec ENIGMA" },
        { title: "Traducteur de langue des signes pour l'apprentissage" },
      ],
    },
    certificates: {
      eyebrow: "Certifications",
      title: "Licences & certificats",
      items: [
        { title: "Apprentissage automatique avec Python" },
        { title: "Deep Learning avec TensorFlow" },
        { title: "Certificat de résolution de problèmes" },
        { title: "Fondamentaux du Deep Learning avec Keras" },
        { title: "Réseaux de neurones profonds avec PyTorch" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Créons quelque chose d'exceptionnel ensemble",
      subtitle: "Un projet, un poste ou une idée ? Envoyez-moi un message.",
      getInTouch: "Entrer en contact",
      intro:
        "Je suis toujours ouverte à discuter de nouveaux projets, d'idées créatives ou d'opportunités de participer à votre vision.",
      name: "Nom",
      email: "E-mail",
      subject: "Objet",
      message: "Message",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@exemple.com",
      subjectPlaceholder: "Collaborons",
      messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message",
      opening: "Ouverture de votre application de messagerie...",
      defaultSubject: "Demande depuis le portfolio",
    },
    footer: {
      rights: "Tous droits réservés.",
      builtWith: "Réalisé avec",
      using: "React + Tailwind CSS",
    },
    chatbot: {
      assistant: " — Assistant",
      online: "en ligne",
      thinking: "réflexion…",
      askMeAnything: "Posez-moi n'importe quelle question",
      placeholder: "Posez-moi n'importe quelle question…",
      welcome:
        "Bonjour ! 👋 Je suis l'assistant IA de {name}. Que souhaitez-vous savoir ?",
      suggestions: ["Compétences", "Expérience", "Projets", "Contact"],
      responses: {
        greet:
          "Bonjour ! 👋 Je suis l'assistant IA de {name}. Posez-moi des questions sur ses compétences, son expérience, ses projets, sa formation ou comment la contacter.",
        skillsIntro: "Langages principaux : {langs}.",
        contact:
          "Vous pouvez contacter {name} à {email}.\nLinkedIn : {linkedin}\nGitHub : {github}\nOu utilisez le formulaire de contact sous la section projets.",
        resume:
          "Vous pouvez télécharger le CV via le bouton « Télécharger le CV » dans la section d'accueil, ou le bouton CV dans la barre de navigation.",
        thanks: "Ravie d'avoir pu aider ! 😊 Autre chose que vous aimeriez savoir ?",
        fallback:
          "Je peux vous parler des compétences, de l'expérience, des projets, de la formation, des publications ou des coordonnées de {name}. Essayez l'un de ces sujets !",
      },
      keywords: {
        greet: ["bonjour", "salut", "coucou", "hey"],
        about: ["qui", "à propos", "a propos", "présente", "presente", "bio"],
        skills: ["compétence", "competence", "technologie", "langage", "outils", "stack"],
        experience: ["expérience", "experience", "travail", "emploi", "carrière", "carriere", "entreprise"],
        projects: ["projet", "réalisé", "realise", "navire", "réservation", "reservation"],
        education: ["formation", "études", "etudes", "diplôme", "diplome", "université", "universite"],
        publications: ["publication", "article", "recherche", "ieee"],
        certificates: ["certificat", "certification", "licence", "cours", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["contact", "email", "e-mail", "contacter", "message", "linkedin", "github"],
        resume: ["cv", "curriculum", "télécharger", "telecharger"],
        thanks: ["merci", "génial", "genial", "super", "cool"],
      },
    },
    game: {
      eyebrow: "Jouer",
      title: "Snake : Dévore la stack",
      subtitle:
        "Guide le serpent à travers ma stack technique. Flèches, WASD ou glisser.",
      start: "Commencer",
      pause: "Pause",
      resume: "Reprendre",
      restart: "Recommencer",
      score: "Score",
      highScore: "Record",
      gameOver: "Partie terminée",
      controlsHint: "Flèches, WASD ou glissement pour bouger. Mange les logos tech !",
      collected: "Collecté",
    },
    language: "Langue",
  },

  /* ----------------------------- SPANISH ----------------------------- */
  es: {
    dir: "ltr",
    role: "Ingeniera AI Core DevOps y Desarrolladora Full-Stack",
    tagline:
      "Ingeniera AI Core DevOps | Desarrolladora Full-Stack | Soluciones de IA y nube escalables",
    bio: "Ingeniera de software apasionada, especializada en IA, DevOps y desarrollo de aplicaciones cloud-native. Actualmente en SAP Labs India, donde creo soluciones de IA empresarial, pipelines CI/CD y aplicaciones en la nube escalables. Con experiencia en React, TypeScript, Node.js, Docker, Kubernetes, SAP BTP y prácticas modernas de DevOps. Comprometida con resolver problemas de negocio complejos mediante tecnología innovadora.",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
      publications: "Publicaciones",
      certificates: "Certificados",
      play: "Jugar",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible en",
      greeting: "Hola, soy",
      roles: [
        "Ingeniera AI Core DevOps",
        "Desarrolladora Full-Stack",
        "Creadora Cloud-Native",
        "Entusiasta de la visión por computadora",
      ],
      downloadResume: "Descargar CV",
      viewProjects: "Ver proyectos",
      contactMe: "Contáctame",
      resume: "CV",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Convertir ideas en productos",
      highlights: ["IA empresarial", "Cloud-Native", "Full-Stack", "DevOps"],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Herramientas y tecnologías que utilizo",
      subtitle:
        "Desde la automatización de bajo nivel hasta modelos de IA e interfaces pulidas.",
      programmingLanguages: "Lenguajes de programación",
      categories: [
        "Frontend",
        "Backend",
        "DevOps y Nube",
        "IA y Aprendizaje automático",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Mi trayectoria profesional",
      items: [
        {
          role: "Ingeniera AI Core DevOps",
          period: "Actual",
          points: [
            "Aplicaciones empresariales con IA",
            "Automatización CI/CD",
            "Desarrollo cloud-native",
            "Ingeniería DevOps",
          ],
        },
        {
          role: "Ingeniera de desarrollo de software",
          period: "Anterior",
          points: ["Desarrollo de aplicaciones empresariales"],
        },
        {
          role: "Practicante de visión por computadora",
          period: "Prácticas",
          points: ["Soluciones de IA marítima", "Premio a la mejor practicante"],
        },
        {
          role: "Practicante de desarrollo de software",
          period: "Prácticas",
          points: ["Desarrollo de software aeroespacial"],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajos destacados",
      subtitle:
        "Una selección de proyectos de IA, visión por computadora e ingeniería full-stack.",
      code: "Código",
      liveDemo: "Demo en vivo",
      comingSoon: "Próximamente",
      items: [
        {
          title: "Plataforma de reservas multiservicio",
          description:
            "Sistema de reservas full-stack con control de acceso basado en roles y más de 40 API REST, containerizado con Docker.",
          highlight: "40+ API REST",
        },
        {
          title: "Sistema de reconocimiento de buques de guerra",
          description:
            "Modelo de visión por computadora con aprendizaje profundo para el reconocimiento de buques de guerra, creado con PyTorch.",
          highlight: "93 % de precisión",
        },
        {
          title: "Learning Fest 2.0",
          description: "Próximamente — iniciativa interna de formación y capacitación.",
          highlight: "Marcador de posición",
        },
        {
          title: "Integración de Joule",
          description: "Próximamente — proyecto de integración del asistente de IA SAP Joule.",
          highlight: "Marcador de posición",
        },
        {
          title: "Despliegues en la nube SAP BTP",
          description: "Próximamente — despliegues cloud-native en SAP BTP.",
          highlight: "Marcador de posición",
        },
      ],
    },
    education: {
      eyebrow: "Formación",
      title: "Trayectoria académica",
      items: [
        {
          degree: "M.Tech en Ingeniería de Software",
          period: "2025 – presente",
          detail: "",
        },
        {
          degree: "B.Tech en Ingeniería Informática (IA y ML)",
          period: "2021 – 2025",
          detail: "Promedio: 8,2",
        },
      ],
    },
    publications: {
      eyebrow: "Publicaciones",
      title: "Investigación y artículos",
      readPaper: "Leer artículo",
      items: [
        { title: "Creciente uso de biomateriales en cirugía espinal" },
        { title: "IA: facilitador clave para simplificar la atención médica" },
        { title: "Mejora de la seguridad con ENIGMA" },
        { title: "Traductor de lengua de señas para el aprendizaje" },
      ],
    },
    certificates: {
      eyebrow: "Certificaciones",
      title: "Licencias y certificados",
      items: [
        { title: "Aprendizaje automático con Python" },
        { title: "Deep Learning con TensorFlow" },
        { title: "Certificado de resolución de problemas" },
        { title: "Fundamentos de Deep Learning con Keras" },
        { title: "Redes neuronales profundas con PyTorch" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos juntos algo increíble",
      subtitle: "¿Tienes un proyecto, un puesto o una idea? Escríbeme.",
      getInTouch: "Ponte en contacto",
      intro:
        "Siempre estoy abierta a hablar de nuevos proyectos, ideas creativas u oportunidades para formar parte de tu visión.",
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Juan Pérez",
      emailPlaceholder: "juan@ejemplo.com",
      subjectPlaceholder: "Colaboremos",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      opening: "Abriendo tu aplicación de correo...",
      defaultSubject: "Consulta desde el portafolio",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con",
      using: "con React + Tailwind CSS",
    },
    chatbot: {
      assistant: " — Asistente",
      online: "en línea",
      thinking: "pensando…",
      askMeAnything: "Pregúntame lo que quieras",
      placeholder: "Pregúntame lo que quieras…",
      welcome:
        "¡Hola! 👋 Soy el asistente de IA de {name}. ¿Qué te gustaría saber?",
      suggestions: ["Habilidades", "Experiencia", "Proyectos", "Contacto"],
      responses: {
        greet:
          "¡Hola! 👋 Soy el asistente de IA de {name}. Pregúntame por sus habilidades, experiencia, proyectos, formación o cómo contactarla.",
        skillsIntro: "Lenguajes principales: {langs}.",
        contact:
          "Puedes contactar con {name} en {email}.\nLinkedIn: {linkedin}\nGitHub: {github}\nO usa el formulario de contacto debajo de la sección de proyectos.",
        resume:
          "Puedes descargar el CV con el botón «Descargar CV» en la sección principal, o el botón CV en la barra de navegación.",
        thanks: "¡Encantada de ayudar! 😊 ¿Algo más que quieras saber?",
        fallback:
          "Puedo contarte sobre las habilidades, experiencia, proyectos, formación, publicaciones o datos de contacto de {name}. ¡Prueba con uno de ellos!",
      },
      keywords: {
        greet: ["hola", "buenas", "hey", "saludos"],
        about: ["quién", "quien", "sobre", "preséntate", "presentate", "bio"],
        skills: ["habilidad", "tecnología", "tecnologia", "lenguaje", "herramientas", "stack"],
        experience: ["experiencia", "trabajo", "empleo", "carrera", "empresa"],
        projects: ["proyecto", "construido", "buque", "reserva"],
        education: ["formación", "formacion", "estudio", "título", "titulo", "universidad"],
        publications: ["publicación", "publicacion", "artículo", "articulo", "investigación", "ieee"],
        certificates: ["certificado", "certificación", "certificacion", "curso", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["contacto", "correo", "email", "contactar", "mensaje", "linkedin", "github"],
        resume: ["cv", "currículum", "curriculum", "descargar"],
        thanks: ["gracias", "genial", "estupendo", "cool"],
      },
    },
    game: {
      eyebrow: "Jugar",
      title: "Snake: Devora el stack",
      subtitle:
        "Guía la serpiente por mi stack tecnológico. Flechas, WASD o deslizar.",
      start: "Comenzar",
      pause: "Pausa",
      resume: "Reanudar",
      restart: "Reiniciar",
      score: "Puntos",
      highScore: "Récord",
      gameOver: "Fin del juego",
      controlsHint: "Usa flechas, WASD o desliza para moverte. ¡Come los logos!",
      collected: "Recogido",
    },
    language: "Idioma",
  },

  /* ----------------------------- JAPANESE ----------------------------- */
  ja: {
    dir: "ltr",
    role: "AIコアDevOpsエンジニア兼フルスタックソフトウェアエンジニア",
    tagline:
      "AIコアDevOpsエンジニア | フルスタック開発者 | スケーラブルなAI・クラウドソリューションの構築",
    bio: "AI、DevOps、クラウドネイティブなアプリケーション開発を専門とする情熱的なソフトウェアエンジニアです。現在は SAP Labs India に所属し、エンタープライズ向け AI ソリューション、CI/CD パイプライン、スケーラブルなクラウドアプリケーションを構築しています。React、TypeScript、Node.js、Docker、Kubernetes、SAP BTP、そして最新の DevOps プラクティスに精通しています。革新的な技術を通じて複雑なビジネス課題を解決することに情熱を注いでいます。",
    nav: {
      home: "ホーム",
      about: "概要",
      skills: "スキル",
      experience: "経歴",
      projects: "プロジェクト",
      education: "学歴",
      publications: "論文",
      certificates: "資格・認定",
      play: "ゲーム",
      contact: "お問い合わせ",
    },
    hero: {
      available: "所属:",
      greeting: "こんにちは、",
      roles: [
        "AIコアDevOpsエンジニア",
        "フルスタック開発者",
        "クラウドネイティブビルダー",
        "コンピュータビジョン愛好家",
      ],
      downloadResume: "履歴書をダウンロード",
      viewProjects: "プロジェクトを見る",
      contactMe: "お問い合わせ",
      resume: "履歴書",
    },
    about: {
      eyebrow: "概要",
      title: "アイデアを製品へ",
      highlights: ["エンタープライズAI", "クラウドネイティブ", "フルスタック", "DevOps"],
    },
    skills: {
      eyebrow: "スキル",
      title: "私が使うツールと技術",
      subtitle: "低レベルの自動化から AI モデル、洗練された UI まで。",
      programmingLanguages: "プログラミング言語",
      categories: [
        "フロントエンド",
        "バックエンド",
        "DevOps・クラウド",
        "AI・機械学習",
      ],
    },
    experience: {
      eyebrow: "経歴",
      title: "私のキャリアの歩み",
      items: [
        {
          role: "AIコアDevOpsエンジニア",
          period: "現在",
          points: [
            "AI を活用したエンタープライズアプリケーション",
            "CI/CD 自動化",
            "クラウドネイティブ開発",
            "DevOps エンジニアリング",
          ],
        },
        {
          role: "ソフトウェア開発エンジニア",
          period: "以前",
          points: ["エンタープライズアプリケーション開発"],
        },
        {
          role: "コンピュータビジョン インターン",
          period: "インターンシップ",
          points: ["海洋 AI ソリューション", "最優秀インターン賞"],
        },
        {
          role: "ソフトウェア開発 インターン",
          period: "インターンシップ",
          points: ["航空宇宙ソフトウェア開発"],
        },
      ],
    },
    projects: {
      eyebrow: "プロジェクト",
      title: "注目の実績",
      subtitle:
        "AI、コンピュータビジョン、フルスタックエンジニアリングにわたるプロジェクトの一部。",
      code: "コード",
      liveDemo: "ライブデモ",
      comingSoon: "近日公開",
      items: [
        {
          title: "マルチサービス予約プラットフォーム",
          description:
            "ロールベースのアクセス制御と 40 以上の REST API を備えたフルスタック予約システム。Docker でコンテナ化。",
          highlight: "40+ REST API",
        },
        {
          title: "軍艦認識システム",
          description:
            "PyTorch で構築した、海洋軍艦を認識するディープラーニングのコンピュータビジョンモデル。",
          highlight: "精度 93%",
        },
        {
          title: "Learning Fest 2.0",
          description: "近日公開 — 社内のイネーブルメントおよび学習イニシアチブ。",
          highlight: "プレースホルダー",
        },
        {
          title: "Joule 連携",
          description: "近日公開 — SAP Joule AI アシスタント連携プロジェクト。",
          highlight: "プレースホルダー",
        },
        {
          title: "SAP BTP クラウド展開",
          description: "近日公開 — SAP BTP 上のクラウドネイティブ展開。",
          highlight: "プレースホルダー",
        },
      ],
    },
    education: {
      eyebrow: "学歴",
      title: "学歴",
      items: [
        {
          degree: "M.Tech ソフトウェアエンジニアリング",
          period: "2025 – 現在",
          detail: "",
        },
        {
          degree: "B.Tech コンピュータサイエンス工学（AI・ML）",
          period: "2021 – 2025",
          detail: "GPA: 8.2",
        },
      ],
    },
    publications: {
      eyebrow: "論文",
      title: "研究・論文",
      readPaper: "論文を読む",
      items: [
        { title: "脊椎手術におけるバイオマテリアルの普及" },
        { title: "AI：医療提供を簡素化する重要な推進力" },
        { title: "ENIGMA を用いたセキュリティ強化" },
        { title: "学習支援のための手話翻訳システム" },
      ],
    },
    certificates: {
      eyebrow: "資格・認定",
      title: "ライセンス・認定証",
      items: [
        { title: "Pythonによる機械学習" },
        { title: "TensorFlowによるディープラーニング" },
        { title: "問題解決能力認定証" },
        { title: "Kerasによるディープラーニング基礎" },
        { title: "PyTorchによる深層ニューラルネットワーク" },
      ],
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "一緒に素晴らしいものを作りましょう",
      subtitle:
        "プロジェクト、ポジション、アイデアはありますか？メッセージをお送りください。",
      getInTouch: "お問い合わせ",
      intro:
        "新しいプロジェクト、クリエイティブなアイデア、あなたのビジョンに参加する機会について、いつでもお話しできます。",
      name: "名前",
      email: "メール",
      subject: "件名",
      message: "メッセージ",
      namePlaceholder: "山田 太郎",
      emailPlaceholder: "taro@example.com",
      subjectPlaceholder: "協業しましょう",
      messagePlaceholder: "プロジェクトについて教えてください...",
      send: "メッセージを送信",
      opening: "メールアプリを開いています...",
      defaultSubject: "ポートフォリオに関するお問い合わせ",
    },
    footer: {
      rights: "全著作権所有。",
      builtWith: "作成:",
      using: "React + Tailwind CSS を使用",
    },
    chatbot: {
      assistant: " のアシスタント",
      online: "オンライン",
      thinking: "考え中…",
      askMeAnything: "何でも聞いてください",
      placeholder: "何でも聞いてください…",
      welcome:
        "こんにちは！👋 私は {name} の AI アシスタントです。何を知りたいですか？",
      suggestions: ["スキル", "経歴", "プロジェクト", "お問い合わせ"],
      responses: {
        greet:
          "こんにちは！👋 私は {name} の AI アシスタントです。スキル、経歴、プロジェクト、学歴、連絡方法などについて聞いてください。",
        skillsIntro: "主要言語: {langs}。",
        contact:
          "{name} には {email} で連絡できます。\nLinkedIn: {linkedin}\nGitHub: {github}\nまたはプロジェクトセクションの下にあるお問い合わせフォームをご利用ください。",
        resume:
          "履歴書は、ヒーローセクションの「履歴書をダウンロード」ボタン、またはナビゲーションバーの履歴書ボタンからダウンロードできます。",
        thanks: "お役に立ててうれしいです！😊 他に知りたいことはありますか？",
        fallback:
          "{name} のスキル、経歴、プロジェクト、学歴、論文、連絡先についてお伝えできます。ぜひ聞いてみてください！",
      },
      keywords: {
        greet: ["こんにちは", "やあ", "はじめまして", "hi", "hello"],
        about: ["誰", "について", "自己紹介", "プロフィール", "bio"],
        skills: ["スキル", "技術", "言語", "ツール", "得意"],
        experience: ["経歴", "経験", "仕事", "職歴", "キャリア", "会社"],
        projects: ["プロジェクト", "作品", "軍艦", "予約"],
        education: ["学歴", "学業", "学位", "大学", "教育"],
        publications: ["論文", "出版", "研究", "ieee"],
        certificates: ["資格", "認定", "証明", "修了", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["連絡", "問い合わせ", "メール", "linkedin", "github"],
        resume: ["履歴書", "レジュメ", "cv", "ダウンロード"],
        thanks: ["ありがとう", "感謝", "すごい", "いいね"],
      },
    },
    game: {
      eyebrow: "ゲーム",
      title: "スネーク：スタックを食べよう",
      subtitle:
        "ヘビを操って私の技術スタックを食べよう。矢印キー、WASD、スワイプで操作。",
      start: "スタート",
      pause: "一時停止",
      resume: "再開",
      restart: "リスタート",
      score: "スコア",
      highScore: "ベスト",
      gameOver: "ゲームオーバー",
      controlsHint: "矢印キー、WASD、またはスワイプで移動。技術ロゴを食べよう！",
      collected: "獲得",
    },
    language: "言語",
  },

  /* ----------------------------- KOREAN ----------------------------- */
  ko: {
    dir: "ltr",
    role: "AI 코어 DevOps 엔지니어 & 풀스택 소프트웨어 엔지니어",
    tagline:
      "AI 코어 DevOps 엔지니어 | 풀스택 개발자 | 확장 가능한 AI 및 클라우드 솔루션 구축",
    bio: "AI, DevOps, 클라우드 네이티브 애플리케이션 개발을 전문으로 하는 열정적인 소프트웨어 엔지니어입니다. 현재 SAP Labs India에서 엔터프라이즈 AI 솔루션, CI/CD 파이프라인, 확장 가능한 클라우드 애플리케이션을 구축하고 있습니다. React, TypeScript, Node.js, Docker, Kubernetes, SAP BTP 및 최신 DevOps 방식에 능숙합니다. 혁신적인 기술로 복잡한 비즈니스 문제를 해결하는 데 전념하고 있습니다.",
    nav: {
      home: "홈",
      about: "소개",
      skills: "기술",
      experience: "경력",
      projects: "프로젝트",
      education: "학력",
      publications: "논문",
      certificates: "자격증",
      play: "게임",
      contact: "연락처",
    },
    hero: {
      available: "근무처:",
      greeting: "안녕하세요, 저는",
      roles: [
        "AI 코어 DevOps 엔지니어",
        "풀스택 개발자",
        "클라우드 네이티브 빌더",
        "컴퓨터 비전 애호가",
      ],
      downloadResume: "이력서 다운로드",
      viewProjects: "프로젝트 보기",
      contactMe: "연락하기",
      resume: "이력서",
    },
    about: {
      eyebrow: "소개",
      title: "아이디어를 제품으로",
      highlights: ["엔터프라이즈 AI", "클라우드 네이티브", "풀스택", "DevOps"],
    },
    skills: {
      eyebrow: "기술",
      title: "제가 사용하는 도구와 기술",
      subtitle: "저수준 자동화부터 AI 모델과 세련된 사용자 인터페이스까지.",
      programmingLanguages: "프로그래밍 언어",
      categories: [
        "프론트엔드",
        "백엔드",
        "DevOps 및 클라우드",
        "AI 및 머신러닝",
      ],
    },
    experience: {
      eyebrow: "경력",
      title: "나의 커리어 여정",
      items: [
        {
          role: "AI 코어 DevOps 엔지니어",
          period: "현재",
          points: [
            "AI 기반 엔터프라이즈 애플리케이션",
            "CI/CD 자동화",
            "클라우드 네이티브 개발",
            "DevOps 엔지니어링",
          ],
        },
        {
          role: "소프트웨어 개발 엔지니어",
          period: "이전",
          points: ["엔터프라이즈 애플리케이션 개발"],
        },
        {
          role: "컴퓨터 비전 인턴",
          period: "인턴십",
          points: ["해양 AI 솔루션", "최우수 인턴상"],
        },
        {
          role: "소프트웨어 개발 인턴",
          period: "인턴십",
          points: ["항공우주 소프트웨어 개발"],
        },
      ],
    },
    projects: {
      eyebrow: "프로젝트",
      title: "주요 작업",
      subtitle:
        "AI, 컴퓨터 비전, 풀스택 엔지니어링을 아우르는 프로젝트 모음.",
      code: "코드",
      liveDemo: "라이브 데모",
      comingSoon: "출시 예정",
      items: [
        {
          title: "멀티 서비스 예약 플랫폼",
          description:
            "역할 기반 접근 제어와 40개 이상의 REST API를 갖춘 풀스택 예약 시스템, Docker로 컨테이너화.",
          highlight: "40+ REST API",
        },
        {
          title: "군함 인식 시스템",
          description:
            "PyTorch로 구축한 해양 군함 인식용 딥러닝 컴퓨터 비전 모델.",
          highlight: "정확도 93%",
        },
        {
          title: "Learning Fest 2.0",
          description: "출시 예정 — 사내 역량 강화 및 학습 이니셔티브.",
          highlight: "자리 표시자",
        },
        {
          title: "Joule 통합",
          description: "출시 예정 — SAP Joule AI 어시스턴트 통합 프로젝트.",
          highlight: "자리 표시자",
        },
        {
          title: "SAP BTP 클라우드 배포",
          description: "출시 예정 — SAP BTP의 클라우드 네이티브 배포.",
          highlight: "자리 표시자",
        },
      ],
    },
    education: {
      eyebrow: "학력",
      title: "학력",
      items: [
        {
          degree: "M.Tech 소프트웨어 공학",
          period: "2025 – 현재",
          detail: "",
        },
        {
          degree: "B.Tech 컴퓨터 공학 (AI & ML)",
          period: "2021 – 2025",
          detail: "학점: 8.2",
        },
      ],
    },
    publications: {
      eyebrow: "논문",
      title: "연구 및 논문",
      readPaper: "논문 읽기",
      items: [
        { title: "척추 수술에서 생체재료의 성장 동향" },
        { title: "AI: 의료 서비스 간소화를 위한 핵심 지원자" },
        { title: "ENIGMA를 활용한 보안 강화" },
        { title: "학습 향상을 위한 수어 번역기" },
      ],
    },
    certificates: {
      eyebrow: "자격증",
      title: "라이선스 & 자격증",
      items: [
        { title: "Python을 활용한 머신러닝" },
        { title: "TensorFlow를 활용한 딥러닝" },
        { title: "문제 해결 능력 자격증" },
        { title: "Keras를 활용한 딥러닝 기초" },
        { title: "PyTorch를 활용한 심층 신경망" },
      ],
    },
    contact: {
      eyebrow: "연락처",
      title: "함께 멋진 것을 만들어요",
      subtitle: "프로젝트, 채용 또는 아이디어가 있으신가요? 메시지를 남겨 주세요.",
      getInTouch: "연락하기",
      intro:
        "새로운 프로젝트, 창의적인 아이디어, 또는 당신의 비전에 함께할 기회에 대해 언제든 이야기 나누고 싶습니다.",
      name: "이름",
      email: "이메일",
      subject: "제목",
      message: "메시지",
      namePlaceholder: "홍길동",
      emailPlaceholder: "hong@example.com",
      subjectPlaceholder: "협업해요",
      messagePlaceholder: "프로젝트에 대해 알려주세요...",
      send: "메시지 보내기",
      opening: "메일 앱을 여는 중...",
      defaultSubject: "포트폴리오 문의",
    },
    footer: {
      rights: "모든 권리 보유.",
      builtWith: "제작:",
      using: "React + Tailwind CSS 사용",
    },
    chatbot: {
      assistant: " 어시스턴트",
      online: "온라인",
      thinking: "생각 중…",
      askMeAnything: "무엇이든 물어보세요",
      placeholder: "무엇이든 물어보세요…",
      welcome:
        "안녕하세요! 👋 저는 {name}의 AI 어시스턴트입니다. 무엇을 알고 싶으신가요?",
      suggestions: ["기술", "경력", "프로젝트", "연락처"],
      responses: {
        greet:
          "안녕하세요! 👋 저는 {name}의 AI 어시스턴트입니다. 기술, 경력, 프로젝트, 학력 또는 연락 방법을 물어보세요.",
        skillsIntro: "주요 언어: {langs}.",
        contact:
          "{name}에게 {email}로 연락할 수 있습니다.\nLinkedIn: {linkedin}\nGitHub: {github}\n또는 프로젝트 섹션 아래의 연락처 양식을 이용하세요.",
        resume:
          "이력서는 히어로 섹션의 '이력서 다운로드' 버튼이나 내비게이션 바의 이력서 버튼으로 다운로드할 수 있습니다.",
        thanks: "도움이 되어 기쁩니다! 😊 더 궁금한 점이 있나요?",
        fallback:
          "{name}의 기술, 경력, 프로젝트, 학력, 논문 또는 연락처를 알려드릴 수 있습니다. 하나 물어보세요!",
      },
      keywords: {
        greet: ["안녕", "반가", "하이", "hi", "hello"],
        about: ["누구", "소개", "자기소개", "프로필", "bio"],
        skills: ["기술", "스킬", "언어", "도구", "스택"],
        experience: ["경력", "경험", "일", "직장", "커리어", "회사"],
        projects: ["프로젝트", "작업", "군함", "예약"],
        education: ["학력", "학업", "학위", "대학", "교육"],
        publications: ["논문", "출판", "연구", "ieee"],
        certificates: ["자격증", "인증", "수료", "과정", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["연락", "문의", "이메일", "linkedin", "github"],
        resume: ["이력서", "cv", "다운로드"],
        thanks: ["감사", "고마", "멋지", "좋아"],
      },
    },
    game: {
      eyebrow: "게임",
      title: "스네이크: 스택을 먹어라",
      subtitle:
        "뱀을 조종해 나의 기술 스택을 먹어보세요. 방향키, WASD 또는 스와이프.",
      start: "시작",
      pause: "일시정지",
      resume: "계속",
      restart: "다시 시작",
      score: "점수",
      highScore: "최고 점수",
      gameOver: "게임 오버",
      controlsHint: "방향키, WASD 또는 스와이프로 이동하세요. 기술 로고를 먹어요!",
      collected: "획득",
    },
    language: "언어",
  },

  /* ----------------------------- CHINESE ----------------------------- */
  zh: {
    dir: "ltr",
    role: "AI 核心 DevOps 工程师兼全栈软件工程师",
    tagline:
      "AI 核心 DevOps 工程师 | 全栈开发者 | 构建可扩展的 AI 与云解决方案",
    bio: "热衷于 AI、DevOps 和云原生应用开发的软件工程师。目前就职于 SAP Labs India，负责构建企业级 AI 解决方案、CI/CD 流水线以及可扩展的云应用。精通 React、TypeScript、Node.js、Docker、Kubernetes、SAP BTP 以及现代 DevOps 实践。致力于通过创新技术解决复杂的业务问题。",
    nav: {
      home: "首页",
      about: "关于",
      skills: "技能",
      experience: "经历",
      projects: "项目",
      education: "教育",
      publications: "论文",
      certificates: "证书",
      play: "游戏",
      contact: "联系",
    },
    hero: {
      available: "任职于",
      greeting: "你好，我是",
      roles: [
        "AI 核心 DevOps 工程师",
        "全栈开发者",
        "云原生构建者",
        "计算机视觉爱好者",
      ],
      downloadResume: "下载简历",
      viewProjects: "查看项目",
      contactMe: "联系我",
      resume: "简历",
    },
    about: {
      eyebrow: "关于我",
      title: "将创意变为产品",
      highlights: ["企业级 AI", "云原生", "全栈", "DevOps"],
    },
    skills: {
      eyebrow: "技能",
      title: "我使用的工具与技术",
      subtitle: "从底层自动化到 AI 模型和精致的用户界面。",
      programmingLanguages: "编程语言",
      categories: [
        "前端",
        "后端",
        "DevOps 与云",
        "AI 与机器学习",
      ],
    },
    experience: {
      eyebrow: "经历",
      title: "我的职业历程",
      items: [
        {
          role: "AI 核心 DevOps 工程师",
          period: "至今",
          points: [
            "AI 驱动的企业应用",
            "CI/CD 自动化",
            "云原生开发",
            "DevOps 工程",
          ],
        },
        {
          role: "软件开发工程师",
          period: "此前",
          points: ["企业应用开发"],
        },
        {
          role: "计算机视觉实习生",
          period: "实习",
          points: ["海事 AI 解决方案", "最佳实习生奖"],
        },
        {
          role: "软件开发实习生",
          period: "实习",
          points: ["航空航天软件开发"],
        },
      ],
    },
    projects: {
      eyebrow: "项目",
      title: "精选作品",
      subtitle: "涵盖 AI、计算机视觉和全栈工程的精选项目。",
      code: "代码",
      liveDemo: "在线演示",
      comingSoon: "即将推出",
      items: [
        {
          title: "多服务预订平台",
          description:
            "具备基于角色的访问控制和 40 多个 REST API 的全栈预订系统，使用 Docker 容器化。",
          highlight: "40+ REST API",
        },
        {
          title: "军舰识别系统",
          description:
            "使用 PyTorch 构建的用于识别海上军舰的深度学习计算机视觉模型。",
          highlight: "准确率 93%",
        },
        {
          title: "Learning Fest 2.0",
          description: "即将推出 — 内部赋能与学习计划。",
          highlight: "占位内容",
        },
        {
          title: "Joule 集成",
          description: "即将推出 — SAP Joule AI 助手集成项目。",
          highlight: "占位内容",
        },
        {
          title: "SAP BTP 云部署",
          description: "即将推出 — 在 SAP BTP 上的云原生部署。",
          highlight: "占位内容",
        },
      ],
    },
    education: {
      eyebrow: "教育",
      title: "教育背景",
      items: [
        {
          degree: "软件工程硕士 (M.Tech)",
          period: "2025 – 至今",
          detail: "",
        },
        {
          degree: "计算机科学工程学士 (B.Tech，AI 与 ML)",
          period: "2021 – 2025",
          detail: "GPA：8.2",
        },
      ],
    },
    publications: {
      eyebrow: "论文",
      title: "研究与论文",
      readPaper: "阅读论文",
      items: [
        { title: "生物材料在脊柱外科中的应用趋势" },
        { title: "人工智能：简化医疗服务的关键推动者" },
        { title: "使用 ENIGMA 增强安全性" },
        { title: "用于提升学习的手语翻译器" },
      ],
    },
    certificates: {
      eyebrow: "证书",
      title: "执照与证书",
      items: [
        { title: "Python 机器学习" },
        { title: "TensorFlow 深度学习" },
        { title: "问题解决能力证书" },
        { title: "Keras 深度学习基础" },
        { title: "PyTorch 深度神经网络" },
      ],
    },
    contact: {
      eyebrow: "联系",
      title: "让我们一起创造精彩",
      subtitle: "有项目、职位或想法吗？给我留言吧。",
      getInTouch: "取得联系",
      intro:
        "我随时乐于讨论新项目、创意想法，或成为你愿景一部分的机会。",
      name: "姓名",
      email: "邮箱",
      subject: "主题",
      message: "留言",
      namePlaceholder: "张三",
      emailPlaceholder: "zhangsan@example.com",
      subjectPlaceholder: "一起合作吧",
      messagePlaceholder: "告诉我你的项目...",
      send: "发送消息",
      opening: "正在打开你的邮件应用...",
      defaultSubject: "作品集咨询",
    },
    footer: {
      rights: "版权所有。",
      builtWith: "使用",
      using: "React + Tailwind CSS 构建",
    },
    chatbot: {
      assistant: " 的助手",
      online: "在线",
      thinking: "思考中…",
      askMeAnything: "问我任何问题",
      placeholder: "问我任何问题…",
      welcome:
        "你好！👋 我是 {name} 的 AI 助手。你想了解什么？",
      suggestions: ["技能", "经历", "项目", "联系"],
      responses: {
        greet:
          "你好！👋 我是 {name} 的 AI 助手。可以问我关于她的技能、经历、项目、教育或联系方式。",
        skillsIntro: "核心语言：{langs}。",
        contact:
          "你可以通过 {email} 联系 {name}。\nLinkedIn：{linkedin}\nGitHub：{github}\n或使用项目部分下方的联系表单。",
        resume:
          "你可以通过首页的'下载简历'按钮，或导航栏中的简历按钮下载简历。",
        thanks: "很高兴能帮到你！😊 还想了解其他内容吗？",
        fallback:
          "我可以介绍 {name} 的技能、经历、项目、教育、论文或联系方式。试着问其中之一吧！",
      },
      keywords: {
        greet: ["你好", "您好", "嗨", "哈喽", "hi", "hello"],
        about: ["谁", "关于", "介绍", "简介", "bio"],
        skills: ["技能", "技术", "语言", "工具", "栈"],
        experience: ["经历", "经验", "工作", "职业", "公司"],
        projects: ["项目", "作品", "军舰", "预订"],
        education: ["教育", "学习", "学位", "大学", "学历"],
        publications: ["论文", "出版", "研究", "ieee"],
        certificates: ["证书", "认证", "资格", "课程", "certificate", "pytorch", "keras", "tensorflow"],
        contact: ["联系", "邮箱", "邮件", "linkedin", "github"],
        resume: ["简历", "cv", "下载"],
        thanks: ["谢谢", "感谢", "不错", "很棒"],
      },
    },
    game: {
      eyebrow: "游戏",
      title: "贪吃蛇：吃掉技术栈",
      subtitle: "操控贪吃蛇吃掉我的技术栈。方向键、WASD 或滑动操作。",
      start: "开始游戏",
      pause: "暂停",
      resume: "继续",
      restart: "重新开始",
      score: "得分",
      highScore: "最高分",
      gameOver: "游戏结束",
      controlsHint: "使用方向键、WASD 或滑动来移动。吃掉技术徽标！",
      collected: "已收集",
    },
    language: "语言",
  },
};
