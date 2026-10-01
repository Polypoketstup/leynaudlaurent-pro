// Système de traductions FR/EN pour le portfolio Laurent Leynaud
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_experience: "Expérience", 
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_lab: "Laboratoire",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Ingénieur Photovoltaïque",
        hero_description: "<strong>17 ans d'expérience</strong> dans le développement, l'exploitation et l'optimisation de centrales photovoltaïques. Spécialisé en audit technique et maintenance des systèmes photovoltaïques.",
        hero_btn_experience: "Voir mon expérience",
        hero_btn_projects: "Mes projets",
        hero_btn_cv: "Télécharger CV",
        
        // Stats
        stats_years: "Années d'expérience",
        stats_power: "Puissance gérée", 
        stats_plants: "Centrales auditées",
        stats_rd: "Innovation continue",
        
        // Experience Section
        exp_title: "Expérience Professionnelle",
        exp_subtitle: "Un parcours de 17 ans dans l'industrie photovoltaïque, de la technique à la R&D",
        exp_achievements: "Réalisations Clés",
        exp_impact: "Impact Quantifié",
        
        // Experience items - Feedgy
        exp_feedgy_title: "Ingénieur Photovoltaïque",
        exp_feedgy_company: "Feedgy (Paris) - Home Office",
        exp_feedgy_desc1: "Chef de projets R&D",
        exp_feedgy_desc2: "Audit de centrales PV (rétrofit, mise en service)",
        exp_feedgy_desc3: "Support technique multi-niveaux (commerciaux, BE, clients finaux)",
        exp_feedgy_desc4: "Instrumentation (LoRaWan, Modbus, capteurs analogiques)",
        exp_feedgy_desc5: "Développement solution détection défauts d'isolement",
        exp_feedgy_key: "Réalisations Clés",
        exp_feedgy_key1: "• Développement solutions de détection de défauts",
        exp_feedgy_key2: "• Optimisation performances centrales", 
        exp_feedgy_key3: "• Solutions IoT intégrées",
        
        // Experience items - Soligest  
        exp_soligest_title: "Chargé d'Exploitation",
        exp_soligest_company: "Soligest - Montélimar (26)",
        exp_soligest_desc1: "Exploitation parc 110 centrales PV (23MWc)",
        exp_soligest_desc2: "Audit de centrales photovoltaïques",
        exp_soligest_desc3: "Diagnostic, réparation et maintenance onduleurs (strings et centraux)",
        exp_soligest_desc4: "Systèmes communication (HTA, Modbus)",
        exp_soligest_impact1: "• <strong>110 centrales</strong> gérées",
        exp_soligest_impact2: "• <strong>23 MWc</strong> de puissance",
        exp_soligest_impact3: "• Maintenance préventive optimisée",
        
        // Experience items - Samsolar
        exp_samsolar_title: "Chef de Projet", 
        exp_samsolar_company: "Samsolar - Montélimar (26) - Contrat de professionnalisation",
        exp_samsolar_desc1: "Développement du suivi de production des centrales",
        exp_samsolar_desc2: "Exploitation d'un parc de 50 centrales photovoltaïques (7MWc)",
        exp_samsolar_desc3: "Suivi d'un contrat de recherche avec l'INES (CEA) sur l'optimisation des centrales PV",
        exp_samsolar_desc4: "Etudes d'installations raccordées au réseau",
        exp_samsolar_key1: "• Collaboration avec l'INES (CEA)",
        exp_samsolar_key2: "• Optimisation centrales PV",
        exp_samsolar_key3: "• <strong>7 MWc</strong> sous gestion",
        
        // Experience items - ID Solaire
        exp_idsolaire_title: "Technicien Études",
        exp_idsolaire_company: "ID Solaire - Aubenas (07)",
        exp_idsolaire_desc: "Étude et installation de systèmes photovoltaïques - Acquisition des bases techniques et opérationnelles du secteur PV",
        
        exp_soligest_title: "Chargé d'Exploitation",
        exp_soligest_company: "Soligest - Montélimar (26)",
        exp_soligest_desc1: "Exploitation parc 110 centrales PV (23MWc)",
        exp_soligest_desc2: "Audit de centrales photovoltaïques",
        exp_soligest_desc3: "Diagnostic, réparation et maintenance onduleurs (strings et centraux)",
        exp_soligest_desc4: "Systèmes communication (HTA, Modbus)",
        exp_soligest_impact: "Impact Quantifié",
        exp_soligest_impact1: "• <strong>110 centrales</strong> gérées",
        exp_soligest_impact2: "• <strong>23 MWc</strong> de puissance",
        exp_soligest_impact3: "• Maintenance préventive optimisée",
        
        // Projects Section
        projects_title: "Projets & Réalisations",
        projects_subtitle: "Découvrez quelques-uns de mes projets marquants dans le domaine photovoltaïque",
        
        // Skills Section  
        skills_title: "Compétences & Expertise",
        skills_subtitle: "17 ans d'expérience m'ont permis de développer une solide maîtrise dans le secteur photovoltaïque",
        skills_technical: "Compétences Techniques",
        skills_tools: "Technologies & Outils",
        
        skills_pv_systems: "Systèmes Photovoltaïques",
        skills_audit: "Audit et Diagnostic", 
        skills_inverters: "Diagnostic & Réparation Onduleurs",
        skills_iot: "IoT & Instrumentation",
        skills_communication: "Systèmes de Communication",
        
        skills_level_confirmed: "Confirmé",
        skills_level_advanced: "Avancé",
        
        // Education Section
        education_title: "Formation & Certifications",
        education_academic: "Formation Académique",
        education_certifications: "Habilitations",
        education_languages: "Langues",
        
        // Lab Section
        lab_title: "Installation & Laboratoire Personnel",
        lab_subtitle: "Laboratoire de test et installation solaire personnelle",
        
        lab_testbench_title: "Banc de Test Personnel",
        lab_testbench_subtitle: "Modules PV & Capteurs",
        lab_testbench_desc1: "Test de modules photovoltaïques",
        lab_testbench_subdesc1: "Caractérisation et validation des performances",
        lab_testbench_desc2: "Instrumentation capteurs",
        lab_testbench_subdesc2: "Test et étalonnage de capteurs analogiques",
        lab_testbench_desc3: "Analyse de données",
        lab_testbench_subdesc3: "Mesures et validation expérimentale",
        
        lab_battery_title: "Installation d'une Batterie Solaire 14,5kWh",
        lab_battery_subtitle: "Montage complet",
        lab_battery_desc1: "Test et optimisation des paramétrages",
        lab_battery_subdesc1: "Ajustement et validation des configurations",
        lab_battery_desc2: "Montage complet", 
        lab_battery_subdesc2: "Assemblage et mise en service du système",
        lab_battery_desc3: "Autonomie énergétique",
        lab_battery_subdesc3: "Application pratique de l'expertise PV",
        
        lab_validation_title: "Laboratoire de Validation",
        lab_validation_subtitle: "Espace personnel dédié à l'expérimentation et la validation d'équipements photovoltaïques",
        lab_validation_equipment: "Équipements de Test",
        lab_validation_equipment_desc: "Instruments de mesure et validation",
        lab_validation_protocols: "Protocoles de Test", 
        lab_validation_protocols_desc: "Méthodes de caractérisation",
        lab_validation_innovation: "Innovation Continue",
        lab_validation_innovation_desc: "Développement et amélioration",
        
        lab_quote: "Cette installation personnelle me permet d'expérimenter, de valider et d'approfondir continuellement mes connaissances techniques, principalement dans le cadre professionnel.",
        
        // Contact Section
        contact_title: "Contactez-moi",
        contact_subtitle: "Intéressé par mon profil ? Discutons de vos projets photovoltaïques et énergies renouvelables",
        contact_info: "Informations de Contact",
        contact_availability: "Disponibilité",
        contact_form_title: "Envoyez-moi un message",
        
        contact_email: "Email",
        contact_phone: "Téléphone", 
        contact_linkedin: "LinkedIn",
        contact_location: "Localisation",
        contact_location_value: "Upié (26) - Drôme - Télétravail disponible",
        
        contact_available1: "Missions de conseil et d'expertise",
        contact_available2: "Projets R&D collaboratifs",
        contact_available3: "Audits techniques spécialisés", 
        contact_available4: "Formations techniques",
        
        // Form fields
        form_name: "Nom",
        form_firstname: "Prénom", 
        form_email: "Email",
        form_company: "Entreprise",
        form_subject: "Sujet",
        form_message: "Message",
        form_send: "Envoyer le message",
        form_choose_subject: "Choisissez un sujet",
        form_consulting: "Conseil et expertise",
        form_audit: "Audit technique",
        form_rd: "Projet R&D",
        form_training: "Formation",
        form_other: "Autre",
        form_placeholder_name: "Votre nom",
        form_placeholder_firstname: "Votre prénom",
        form_placeholder_email: "votre.email@exemple.com",
        form_placeholder_company: "Nom de votre entreprise",
        form_placeholder_message: "Décrivez votre projet ou vos besoins...",
        
        // Footer
        footer_description: "Ingénieur Photovoltaïque - Expert en Énergies Renouvelables",
        footer_copyright: "Tous droits réservés. | Portfolio Professionnel",
        
        // Contact download
        contact_btn_cv: "Télécharger CV PDF"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_experience: "Experience",
        nav_projects: "Projects", 
        nav_skills: "Skills",
        nav_lab: "Laboratory",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Photovoltaic Engineer",
        hero_description: "<strong>17 years of experience</strong> in development, operation and optimization of photovoltaic power plants. Specialized in technical auditing and photovoltaic systems maintenance.",
        hero_btn_experience: "View my experience",
        hero_btn_projects: "My projects",
        hero_btn_cv: "Download CV",
        
        // Stats
        stats_years: "Years of experience",
        stats_power: "Power managed",
        stats_plants: "Plants audited", 
        stats_rd: "Continuous innovation",
        
        // Experience Section
        exp_title: "Professional Experience",  
        exp_subtitle: "A 17-year journey in the photovoltaic industry, from technical to R&D",
        exp_achievements: "Key Achievements",
        exp_impact: "Quantified Impact",
        
        // Experience items - Feedgy
        exp_feedgy_title: "Photovoltaic Engineer",
        exp_feedgy_company: "Feedgy (Paris) - Remote Work",
        exp_feedgy_desc1: "R&D Project Manager",
        exp_feedgy_desc2: "PV power plant audits (retrofit, commissioning)",
        exp_feedgy_desc3: "Multi-level technical support (sales, engineering, end clients)",
        exp_feedgy_desc4: "Instrumentation (LoRaWan, Modbus, analog sensors)",
        exp_feedgy_desc5: "Development of insulation fault detection solution",
        exp_feedgy_key: "Key Achievements",
        exp_feedgy_key1: "• Fault detection solutions development",
        exp_feedgy_key2: "• Power plant performance optimization",
        exp_feedgy_key3: "• Integrated IoT solutions",
        
        // Experience items - Soligest
        exp_soligest_title: "Operations Manager", 
        exp_soligest_company: "Soligest - Montélimar, France",
        exp_soligest_desc1: "Operation of 110 PV power plants (23MWp)",
        exp_soligest_desc2: "Photovoltaic power plant audits",
        exp_soligest_desc3: "Diagnosis, repair and maintenance of inverters (string and central)",
        exp_soligest_desc4: "Communication systems (MV, Modbus)",
        exp_soligest_impact1: "• <strong>110 power plants</strong> managed",
        exp_soligest_impact2: "• <strong>23 MWp</strong> of power",
        exp_soligest_impact3: "• Optimized preventive maintenance",
        
        // Experience items - Samsolar
        exp_samsolar_title: "Project Manager",
        exp_samsolar_company: "Samsolar - Montélimar, France - Professional Training Contract",
        exp_samsolar_desc1: "Development of power plant production monitoring",
        exp_samsolar_desc2: "Operation of 50 photovoltaic power plants (7MWp)",
        exp_samsolar_desc3: "Research contract monitoring with INES (CEA) on PV power plant optimization", 
        exp_samsolar_desc4: "Grid-connected installation studies",
        exp_samsolar_key1: "• Collaboration with INES (CEA)",
        exp_samsolar_key2: "• PV power plant optimization",
        exp_samsolar_key3: "• <strong>7 MWp</strong> under management",
        
        // Experience items - ID Solaire
        exp_idsolaire_title: "Engineering Technician",
        exp_idsolaire_company: "ID Solaire - Aubenas, France",
        exp_idsolaire_desc: "Study and installation of photovoltaic systems - Gained foundational technical and operational skills in the PV sector",
        
        exp_soligest_title: "Operations Manager",
        exp_soligest_company: "Soligest - Montélimar (26)",
        exp_soligest_desc1: "Operation of 110 PV power plants (23MWp)",
        exp_soligest_desc2: "Photovoltaic power plant audits",
        exp_soligest_desc3: "Diagnosis, repair and maintenance of inverters (string and central)",
        exp_soligest_desc4: "Communication systems (MV, Modbus)",
        exp_soligest_impact: "Quantified Impact",
        exp_soligest_impact1: "• <strong>110 power plants</strong> managed",
        exp_soligest_impact2: "• <strong>23 MWp</strong> of power",
        exp_soligest_impact3: "• Optimized preventive maintenance",
        
        // Projects Section
        projects_title: "Projects & Achievements",
        projects_subtitle: "Discover some of my outstanding projects in the photovoltaic field",
        
        // Skills Section
        skills_title: "Skills & Expertise", 
        skills_subtitle: "17 years of experience have allowed me to develop solid expertise in the photovoltaic sector",
        skills_technical: "Technical Skills",
        skills_tools: "Technologies & Tools",
        
        skills_pv_systems: "Photovoltaic Systems",
        skills_audit: "Audit and Diagnosis",
        skills_inverters: "Inverter Diagnosis & Repair",
        skills_iot: "IoT & Instrumentation", 
        skills_communication: "Communication Systems",
        
        skills_level_confirmed: "Proficient",
        skills_level_advanced: "Advanced",
        
        // Education Section
        education_title: "Education & Certifications",
        education_academic: "Academic Background",
        education_certifications: "Certifications",
        education_languages: "Languages",
        
        // Lab Section
        lab_title: "Personal Installation & Laboratory",
        lab_subtitle: "Test laboratory and personal solar installation",
        
        lab_testbench_title: "Personal Test Bench",
        lab_testbench_subtitle: "PV Modules & Sensors",
        lab_testbench_desc1: "Photovoltaic module testing",
        lab_testbench_subdesc1: "Characterization and performance validation",
        lab_testbench_desc2: "Sensor instrumentation",
        lab_testbench_subdesc2: "Testing and calibration of analog sensors",
        lab_testbench_desc3: "Data analysis",
        lab_testbench_subdesc3: "Measurements and experimental validation",
        
        lab_battery_title: "14.5kWh Solar Battery Installation",
        lab_battery_subtitle: "Complete assembly",
        lab_battery_desc1: "Testing and parameter optimization",
        lab_battery_subdesc1: "Configuration adjustment and validation",
        lab_battery_desc2: "Complete assembly",
        lab_battery_subdesc2: "System assembly and commissioning",
        lab_battery_desc3: "Energy autonomy",
        lab_battery_subdesc3: "Practical application of PV expertise",
        
        lab_validation_title: "Validation Laboratory",
        lab_validation_subtitle: "Personal space dedicated to experimentation and validation of photovoltaic equipment",
        lab_validation_equipment: "Test Equipment",
        lab_validation_equipment_desc: "Measurement and validation instruments",
        lab_validation_protocols: "Test Protocols",
        lab_validation_protocols_desc: "Characterization methods",
        lab_validation_innovation: "Continuous Innovation",
        lab_validation_innovation_desc: "Development and improvement",
        
        lab_quote: "This personal installation allows me to experiment, validate and continuously deepen my technical knowledge, mainly in a professional context.",
        
        // Contact Section
        contact_title: "Contact me",
        contact_subtitle: "Interested in my profile? Let's discuss your photovoltaic and renewable energy projects",
        contact_info: "Contact Information",
        contact_availability: "Availability",
        contact_form_title: "Send me a message",
        
        contact_email: "Email",
        contact_phone: "Phone",
        contact_linkedin: "LinkedIn", 
        contact_location: "Location",
        contact_location_value: "Upié (26) - Drôme - Remote work available",
        
        contact_available1: "Consulting and expertise missions",
        contact_available2: "Collaborative R&D projects",
        contact_available3: "Specialized technical audits",
        contact_available4: "Technical training",
        
        // Form fields
        form_name: "Last Name",
        form_firstname: "First Name",
        form_email: "Email", 
        form_company: "Company",
        form_subject: "Subject",
        form_message: "Message",
        form_send: "Send message",
        form_choose_subject: "Choose a subject",
        form_consulting: "Consulting and expertise",
        form_audit: "Technical audit",
        form_rd: "R&D Project",
        form_training: "Training",
        form_other: "Other",
        form_placeholder_name: "Your last name",
        form_placeholder_firstname: "Your first name",
        form_placeholder_email: "your.email@example.com",
        form_placeholder_company: "Your company name",
        form_placeholder_message: "Describe your project or needs...",
        
        // Footer
        footer_description: "Photovoltaic Engineer - Renewable Energy Expert",
        footer_copyright: "All rights reserved. | Professional Portfolio",
        
        // Contact download  
        contact_btn_cv: "Download CV PDF"
    }
};

// Langue actuelle
let currentLang = 'fr';

// Fonction pour changer de langue
function switchLanguage(lang) {
    currentLang = lang;
    
    // Mettre à jour les boutons de langue desktop
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-white/20');
        btn.classList.add('text-white/70');
    });
    
    document.getElementById(`lang-${lang}`).classList.add('active', 'bg-white/20');
    document.getElementById(`lang-${lang}`).classList.remove('text-white/70');
    
    // Mettre à jour les boutons de langue mobile
    document.querySelectorAll('.lang-btn-mobile').forEach(btn => {
        btn.classList.remove('active', 'bg-white/20');
        btn.classList.add('text-white/70');
    });
    
    const mobileLangBtn = document.getElementById(`lang-${lang}-mobile`);
    if (mobileLangBtn) {
        mobileLangBtn.classList.add('active', 'bg-white/20');
        mobileLangBtn.classList.remove('text-white/70');
    }
    
    // Appliquer les traductions
    applyTranslations(lang);
    
    // Sauvegarder la préférence
    localStorage.setItem('portfolioLang', lang);
}

// Fonction pour appliquer les traductions
function applyTranslations(lang) {
    const trans = translations[lang];
    
    // Traductions avec sélecteurs spécifiques
    const translationMap = {
        // Navigation
        '[data-nav="home"]': trans.nav_home,
        '[data-nav="experience"]': trans.nav_experience,
        '[data-nav="projects"]': trans.nav_projects,
        '[data-nav="skills"]': trans.nav_skills,
        '[data-nav="lab"]': trans.nav_lab,
        '[data-nav="contact"]': trans.nav_contact,
        
        // Hero section
        '[data-hero="title"]': trans.hero_title,
        '[data-hero="btn-experience"] span': trans.hero_btn_experience,
        '[data-hero="btn-projects"] span': trans.hero_btn_projects,
        '[data-hero="btn-cv"] span': trans.hero_btn_cv,
        
        // Stats
        '[data-stats="years"]': trans.stats_years,
        '[data-stats="power"]': trans.stats_power,
        '[data-stats="plants"]': trans.stats_plants,
        '[data-stats="rd"]': trans.stats_rd,
        
        // Sections principales
        '[data-exp="title"]': trans.exp_title,
        '[data-exp="subtitle"]': trans.exp_subtitle,
        '[data-projects="title"]': trans.projects_title,
        '[data-projects="subtitle"]': trans.projects_subtitle,
        '[data-skills="title"]': trans.skills_title,
        '[data-skills="subtitle"]': trans.skills_subtitle,
        '[data-skills="technical"]': trans.skills_technical,
        '[data-skills="tools"]': trans.skills_tools,
        '[data-skills="education"]': trans.education_title,
        '[data-lab="title"]': trans.lab_title,
        '[data-lab="subtitle"]': trans.lab_subtitle,
        '[data-contact="title"]': trans.contact_title,
        '[data-contact="subtitle"]': trans.contact_subtitle,
        '[data-contact="info"]': trans.contact_info,
        '[data-contact="availability"]': trans.contact_availability,
        '[data-contact="form-title"]': trans.contact_form_title,
        '[data-contact="btn-cv"]': trans.contact_btn_cv,
        
        // Form labels et éléments
        '[data-form="lastname"]': trans.form_name,
        '[data-form="firstname"]': trans.form_firstname,
        '[data-form="email"]': trans.form_email,
        '[data-form="company"]': trans.form_company,
        '[data-form="subject"]': trans.form_subject,
        '[data-form="message"]': trans.form_message,
        '[data-form="send"]': trans.form_send,
        '[data-form="choose-subject"]': trans.form_choose_subject,
        '[data-form="consulting"]': trans.form_consulting,
        '[data-form="audit"]': trans.form_audit,
        '[data-form="rd"]': trans.form_rd,
        '[data-form="training"]': trans.form_training,
        '[data-form="other"]': trans.form_other,
        
        // Footer
        '[data-footer="description"]': trans.footer_description,
        '[data-footer="copyright"]': trans.footer_copyright
    };
    
    // Appliquer toutes les traductions
    Object.entries(translationMap).forEach(([selector, translation]) => {
        updateText(selector, translation);
    });
    
    // Hero description avec HTML
    updateHTML('[data-hero="description"]', trans.hero_description);
    
    // Traductions spécifiques du contenu détaillé
    translateDetailedContent(lang);
    
    // Mettre à jour les liens de CV selon la langue
    updateCVLinks(lang);
}

// Sauvegarder le contenu français original au chargement
let originalFrenchContent = null;

// Fonction pour traduire le contenu détaillé
function translateDetailedContent(lang) {
    // Sauvegarder le contenu français original si pas encore fait
    if (!originalFrenchContent && lang === 'en') {
        originalFrenchContent = document.querySelector('#experience').innerHTML;
    }
    
    // Traductions pour les autres sections (projets, skills, lab, contact, etc.)
    // Déclarée au niveau de la fonction pour être réutilisable dans les deux sens (EN et FR).
    const otherSectionTranslations = [
            // === PHRASES LONGUES PRIORITAIRES ===
            // (placées en premier pour éviter que des mots courts déjà traduits
            //  ne cassent la correspondance de la phrase complète)
            { fr: 'Oscilloscope numérique, multimètres de précision et analyseurs de performance photovoltaïque', en: 'Digital oscilloscope, precision multimeters and photovoltaic performance analyzers' },
            { fr: 'Caractérisation IV, analyse harmonique et validation des performances énergétiques', en: 'IV characterization, harmonic analysis and energy performance validation' },
            { fr: 'Développement de méthodes de diagnostic et amélioration des techniques d\'analyse', en: 'Development of diagnostic methods and improvement of analysis techniques' },
            { fr: 'Utilisation d\'agents et d\'outils IA (cloud et local) pour créer des outils métiers appliqués au PV : analyse de performance, support technique, capitalisation des retours d\'expérience.', en: 'Use of AI agents and tools (cloud and local) to build business tools applied to PV: performance analysis, technical support, capitalization of field feedback.' },
            { fr: 'Conception d\'outils métiers basés sur des agents et outils IA (cloud et local) : analyse de performance des centrales, support technique et capitalisation des retours d\'expérience terrain.', en: 'Design of business tools based on AI agents and tools (cloud and local): power plant performance analysis, technical support and capitalization of field feedback.' },
            { fr: 'Protocoles de Mesure', en: 'Measurement Protocols' },

            // === SECTION PROJETS ===
            // Titres de projets
            { fr: 'Système de Détection de Défauts', en: 'Fault Detection System' },
            { fr: 'Optimisation Parc 23MWc', en: '23MWp Plant Fleet Optimization' },
            { fr: 'Recherche INES-CEA', en: 'INES-CEA Research' },
            { fr: 'Solutions IoT Intégrées', en: 'Integrated IoT Solutions' },
            { fr: 'Diagnostic & Réparation Onduleurs', en: 'Inverter Diagnosis & Repair' },
            { fr: 'Support Technique Multi-niveaux', en: 'Multi-level Technical Support' },
            { fr: 'Systèmes de Communication', en: 'Communication Systems' },
            { fr: 'Outils IA Métiers pour le PV', en: 'AI Business Tools for PV' },
            { fr: '2024-Présent - Feedgy', en: '2024-Present - Feedgy' },
            
            // Descriptions de projets
            { fr: 'Développement d\'une solution de détection et localisation de défauts d\'isolement pour centrales PV.', en: 'Development of an insulation fault detection and localization solution for PV power plants.' },
            { fr: 'Gestion et optimisation d\'un parc de 110 centrales photovoltaïques pour une puissance totale de 23 MWc.', en: 'Management and optimization of a fleet of 110 photovoltaic power plants for a total capacity of 23 MWp.' },
            { fr: 'Collaboration avec l\'INES (CEA) sur un contrat de recherche pour l\'optimisation des centrales photovoltaïques.', en: 'Collaboration with INES (CEA) on a research contract for photovoltaic power plant optimization.' },
            { fr: 'Développement et intégration de solutions IoT (LoRaWan, Modbus, capteurs analogiques) pour le monitoring.', en: 'Development and integration of IoT solutions (LoRaWan, Modbus, analog sensors) for monitoring.' },
            { fr: 'Expertise approfondie en diagnostic, réparation et maintenance d\'onduleurs photovoltaïques strings et centraux sur 110 centrales.', en: 'In-depth expertise in diagnosis, repair and maintenance of string and central photovoltaic inverters across 110 power plants.' },
            { fr: 'Support technique spécialisé pour équipes commerciales, bureaux d\'études et clients finaux sur systèmes photovoltaïques complexes.', en: 'Specialized technical support for commercial teams, design offices and end clients on complex photovoltaic systems.' },
            { fr: 'Développement et entretien des systèmes de communication HTA et Modbus pour centrales PV.', en: 'Development and maintenance of MV and Modbus communication systems for PV power plants.' },
            
            // Tags de projets
            { fr: 'Recherche', en: 'Research' },
            { fr: 'Développement', en: 'Development' },
            { fr: 'Exploitation', en: 'Operations' },
            { fr: 'Maintenance', en: 'Maintenance' },
            { fr: 'Performance', en: 'Performance' },
            { fr: 'Partenariat', en: 'Partnership' },
            { fr: 'Monitoring', en: 'Monitoring' },
            { fr: 'Diagnostic', en: 'Diagnosis' },
            { fr: 'Réparation', en: 'Repair' },
            { fr: 'Onduleurs', en: 'Inverters' },
            { fr: 'Support Client', en: 'Customer Support' },
            { fr: 'Expertise BE', en: 'Engineering Expertise' },
            { fr: 'Formation', en: 'Training' },
            { fr: 'Communication', en: 'Communication' },
            { fr: 'Agents', en: 'Agents' },
            
            // === SECTION LABORATOIRE ===
            { fr: 'Laboratoire de test et installation solaire personnelle', en: 'Test laboratory and personal solar installation' },
            { fr: 'Banc de Test Personnel', en: 'Personal Test Bench' },
            { fr: 'Modules PV & Capteurs', en: 'PV Modules & Sensors' },
            { fr: 'Test de modules photovoltaïques', en: 'Photovoltaic module testing' },
            { fr: 'Caractérisation et validation des performances', en: 'Characterization and performance validation' },
            { fr: 'Instrumentation capteurs', en: 'Sensor instrumentation' },
            { fr: 'Test et étalonnage de capteurs analogiques', en: 'Testing and calibration of analog sensors' },
            { fr: 'Analyse de données', en: 'Data analysis' },
            { fr: 'Mesures et validation expérimentale', en: 'Measurements and experimental validation' },
            { fr: 'Installation d\'une Batterie Solaire 14,5kWh', en: '14.5kWh Solar Battery Installation' },
            { fr: 'Montage complet', en: 'Complete assembly' },
            { fr: 'Test et optimisation des paramétrages', en: 'Testing and parameter optimization' },
            { fr: 'Ajustement et validation des configurations', en: 'Configuration adjustment and validation' },
            { fr: 'Assemblage et mise en service du système', en: 'System assembly and commissioning' },
            { fr: 'Autonomie énergétique', en: 'Energy autonomy' },
            { fr: 'Application pratique de l\'expertise PV', en: 'Practical application of PV expertise' },
            { fr: 'Laboratoire de Validation', en: 'Validation Laboratory' },
            { fr: 'Espace personnel dédié à l\'expérimentation et la validation d\'équipements photovoltaïques', en: 'Personal space dedicated to experimentation and validation of photovoltaic equipment' },
            { fr: 'Équipements de Test', en: 'Test Equipment' },
            { fr: 'Instruments de mesure et validation', en: 'Measurement and validation instruments' },
            { fr: 'Protocoles de Test', en: 'Test Protocols' },
            { fr: 'Méthodes de caractérisation', en: 'Characterization methods' },
            { fr: 'Innovation Continue', en: 'Continuous Innovation' },
            { fr: 'Développement et amélioration', en: 'Development and improvement' },
            { fr: 'Oscilloscope et équipements de mesure PV', en: 'Oscilloscope and PV measurement equipment' },
            { fr: 'Instruments', en: 'Instruments' },
            { fr: 'Cette installation personnelle me permet d\'expérimenter, de valider et d\'approfondir continuellement mes connaissances techniques, principalement dans le cadre professionnel.', en: 'This personal installation allows me to experiment, validate and continuously deepen my technical knowledge, mainly in a professional context.' },
            
            // === TIMELINE ID SOLAIRE ===
            { fr: 'Étude et installation de systèmes photovoltaïques - Acquisition des bases techniques et opérationnelles du secteur PV', en: 'Study and installation of photovoltaic systems - Gained foundational technical and operational skills in the PV sector' },
            
            // === SECTION COMPÉTENCES ===
            // Compétences techniques principales
            { fr: 'Systèmes Photovoltaïques', en: 'Photovoltaic Systems' },
            { fr: 'Audit et Diagnostic', en: 'Audit and Diagnosis' },
            { fr: 'IoT & Instrumentation', en: 'IoT & Instrumentation' },
            { fr: 'Diagnostic & Réparation Onduleurs', en: 'Inverter Diagnosis & Repair' },
            { fr: 'Systèmes de Communication', en: 'Communication Systems' },
            { fr: 'IA appliquée au Photovoltaïque', en: 'AI Applied to Photovoltaics' },
            
            // Niveaux de compétence
            { fr: 'Confirmé', en: 'Proficient' },
            { fr: 'Avancé', en: 'Advanced' },
            
            // Technologies et outils
            { fr: 'Simulation PV', en: 'PV Simulation' },
            { fr: 'Communication', en: 'Communication' },
            { fr: 'IoT Sans fil', en: 'Wireless IoT' },
            { fr: 'Bureautique', en: 'Office Suite' },
            { fr: 'Analogiques', en: 'Analog' },
            { fr: 'Performance', en: 'Performance' },
            { fr: 'Agents IA', en: 'AI Agents' },
            { fr: 'Cloud & Local', en: 'Cloud & Local' },
            
            // Formation et certifications
            { fr: 'Formation & Certifications', en: 'Education & Certifications' },
            { fr: 'Formation Académique', en: 'Academic Background' },
            { fr: 'Habilitations', en: 'Certifications' },
            { fr: 'Langues', en: 'Languages' },
            { fr: 'Ingénieur CNAM Énergétique', en: 'CNAM Energy Engineering' },
            { fr: 'Licence Énergie Éolienne & PV', en: 'Wind Energy & PV License' },
            { fr: 'Licence Pro Matériaux Polymères', en: 'Professional License Polymer Materials' },
            { fr: 'DUT Sciences et Génie des Matériaux', en: 'Materials Science & Engineering DUT' },
            { fr: 'Habilitation Électrique BR-H2V', en: 'Electrical Authorization BR-H2V' },
            { fr: 'Brevet Pilote Drone', en: 'Drone Pilot License' },
            { fr: 'SST & Travail en Hauteur', en: 'Safety & Height Work' },
            { fr: 'Permis Nacelle', en: 'Aerial Platform License' },
            { fr: 'Français', en: 'French' },
            { fr: 'Natif', en: 'Native' },
            { fr: 'Anglais', en: 'English' },
            { fr: 'Professionnel', en: 'Professional' },
            
            // === SECTION CONTACT ===
            { fr: 'Intéressé par mon profil ? Discutons de vos projets photovoltaïques et énergies renouvelables', en: 'Interested in my profile? Let\'s discuss your photovoltaic and renewable energy projects' },
            { fr: 'Informations de Contact', en: 'Contact Information' },
            { fr: 'Email', en: 'Email' },
            { fr: 'Téléphone', en: 'Phone' },
            { fr: 'LinkedIn', en: 'LinkedIn' },
            { fr: 'Localisation', en: 'Location' },
            { fr: 'Upié (26) - Drôme - Télétravail disponible', en: 'Upié (26) - Drôme - Remote work available' },
            { fr: 'Disponibilité', en: 'Availability' },
            { fr: 'Missions de conseil et d\'expertise', en: 'Consulting and expertise missions' },
            { fr: 'Projets R&D collaboratifs', en: 'Collaborative R&D projects' },
            { fr: 'Audits techniques spécialisés', en: 'Specialized technical audits' },
            { fr: 'Formations techniques', en: 'Technical training' },
            { fr: 'Envoyez-moi un message', en: 'Send me a message' },
            { fr: 'Nom', en: 'Last Name' },
            { fr: 'Prénom', en: 'First Name' },
            { fr: 'Entreprise', en: 'Company' },
            { fr: 'Sujet', en: 'Subject' },
            { fr: 'Message', en: 'Message' },
            { fr: 'Votre nom', en: 'Your last name' },
            { fr: 'Votre prénom', en: 'Your first name' },
            { fr: 'votre.email@exemple.com', en: 'your.email@example.com' },
            { fr: 'Nom de votre entreprise', en: 'Your company name' },
            { fr: 'Choisissez un sujet', en: 'Choose a subject' },
            { fr: 'Conseil et expertise', en: 'Consulting and expertise' },
            { fr: 'Audit technique', en: 'Technical audit' },
            { fr: 'Projet R&D', en: 'R&D Project' },
            { fr: 'Autre', en: 'Other' },
            { fr: 'Décrivez votre projet ou vos besoins...', en: 'Describe your project or needs...' },
            { fr: 'Envoyer le message', en: 'Send message' },
            { fr: 'Télécharger CV PDF', en: 'Download CV PDF' },
            { fr: 'Dossier de compétences', en: 'Skills Portfolio' }
        ];

    if (lang === 'en') {
        // Traduction spécifique pour la timeline d'expérience (méthode principale)
        translateTimelineSpecific();

        // Appliquer les traductions FR -> EN pour les autres sections
        otherSectionTranslations.forEach(({fr, en}) => {
            replaceTextInDocument(fr, en);
        });

        // Tags "IA" hors timeline (ex. carte projet) -> "AI"
        translateAiTags('en');

    } else if (lang === 'fr') {
        // Restaurer la timeline d'expérience à partir du contenu français original
        if (originalFrenchContent) {
            document.querySelector('#experience').innerHTML = originalFrenchContent;
            if (typeof initAnimations === 'function') {
                initAnimations();
            }
        }

        // Restaurer les autres sections en appliquant le remplacement inverse EN -> FR.
        // On parcourt la liste en sens inverse pour que les phrases longues soient
        // reconstruites avant les fragments courts (symétrique du passage en anglais).
        [...otherSectionTranslations].reverse().forEach(({fr, en}) => {
            replaceTextInDocument(en, fr);
        });

        // Tags "AI" hors timeline (ex. carte projet) -> "IA"
        translateAiTags('fr');
    }
}

// Traduit uniquement les badges .tag-ai (ex. carte projet, hors timeline).
// Ciblage strict sur le textContent exact pour éviter tout faux positif.
function translateAiTags(lang) {
    document.querySelectorAll('.tag-ai').forEach(function(el) {
        // On ignore ceux de la timeline, déjà gérés par translateTimelineSpecific()
        if (el.closest('.timeline-item')) return;
        const txt = el.textContent.trim();
        if (lang === 'en' && txt === 'IA') el.textContent = 'AI';
        else if (lang === 'fr' && txt === 'AI') el.textContent = 'IA';
    });
}

// Fonction utilitaire pour remplacer du texte dans le document
function replaceTextInDocument(searchText, replaceText) {
    // Méthode 1: Remplacer dans les nœuds de texte
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.textContent.includes(searchText)) {
            textNodes.push(node);
        }
    }
    
    textNodes.forEach(node => {
        node.textContent = node.textContent.replace(new RegExp(escapeRegExp(searchText), 'g'), replaceText);
    });
    
    // Méthode 2: Remplacer aussi dans innerHTML pour capturer les éléments avec HTML
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        if (element.children.length === 0 && element.textContent.includes(searchText)) {
            element.textContent = element.textContent.replace(new RegExp(escapeRegExp(searchText), 'g'), replaceText);
        }
    });
}

// Fonction pour échapper les caractères spéciaux regex
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Fonction spécifique pour traduire la timeline avec approche robuste
function translateTimelineSpecific() {
    
    // Approche directe : replacements simples sans regex complexes
    const simpleTranslations = [
        // Phrases complètes prioritaires
        ['Développement solution détection défauts d\'isolement', 'Insulation fault detection solution development'],
        ['Construction d\'un agent IA avec Hermes : support technique, capitalisation des retours d\'expérience terrain et calculs de performance des centrales rétrofitées', 'Building of an AI agent with Hermes: technical support, capitalization of field feedback and performance calculations for retrofitted power plants'],
        ['• Agent IA développé avec Hermes pour le support technique', '• AI agent built with Hermes for technical support'],
        ['Support technique multi-niveaux (commerciaux, BE, clients finaux)', 'Multi-level technical support (sales, engineering, end clients)'],
        ['Audit de centrales PV (rétrofit, mise en service)', 'PV power plant audits (retrofit, commissioning)'],
        ['Instrumentation (LoRaWan, Modbus, capteurs analogiques)', 'Instrumentation (LoRaWan, Modbus, analog sensors)'],
        ['Exploitation parc 110 centrales PV (23MWc)', 'Operation of 110 PV power plants (23MWp)'],
        ['Diagnostic, réparation et maintenance onduleurs (strings et centraux)', 'Diagnosis, repair and maintenance of inverters (string and central)'],
        ['Systèmes communication (HTA, Modbus)', 'Communication systems (MV, Modbus)'],
        ['Développement suivi de production', 'Production monitoring development'],
        ['Exploitation parc 50 centrales (7MWc)', 'Operation of 50 power plants (7MWp)'],
        ['Contrat recherche avec l\'INES (CEA)', 'Research contract with INES (CEA)'],
        ['Études installations raccordées réseau', 'Grid-connected installation studies'],
        ['Étude et installation de systèmes photovoltaïques - Acquisition des bases techniques et opérationnelles du secteur PV', 'Study and installation of photovoltaic systems - Gained foundational technical and operational skills in the PV sector'],
        
        // Entreprises
        ['Feedgy (Paris) - Home Office', 'Feedgy (Paris) - Remote Work'],
        ['Soligest - Montélimar (26)', 'Soligest - Montélimar, France'],
        ['Samsolar - Montélimar (26)', 'Samsolar - Montélimar, France'],
        ['ID Solaire - Aubenas (07)', 'ID Solaire - Aubenas, France'],
        
        // Titres de poste
        ['Ingénieur Photovoltaïque', 'Photovoltaic Engineer'],
        ['Chargé d\'Exploitation', 'Operations Manager'],
        ['Chef de Projet', 'Project Manager'],
        ['Technicien Études', 'Engineering Technician'],
        ['Chef de projets R&D', 'R&D Project Manager'],

        // Tags (contexte HTML pour éviter les faux positifs)
        ['tag tag-ai">IA</span>', 'tag tag-ai">AI</span>'],

        // Sections
        ['Réalisations Clés', 'Key Achievements'],
        ['Impact Quantifié', 'Quantified Impact'],
        ['Partenariats R&D', 'R&D Partnerships'],
        ['Fondations Techniques', 'Technical Foundations'],
        
        // Bullet points complets
        ['• Innovation en détection de défauts', '• Fault detection innovation'],
        ['• Optimisation performances centrales', '• Power plant performance optimization'],
        ['• Solutions IoT intégrées', '• Integrated IoT solutions'],
        ['• <strong>110 centrales</strong> gérées', '• <strong>110 power plants</strong> managed'],
        ['• <strong>23 MWc</strong> de puissance', '• <strong>23 MWp</strong> of power'],
        ['• Maintenance préventive optimisée', '• Optimized preventive maintenance'],
        ['• Collaboration avec l\'INES (CEA)', '• Collaboration with INES (CEA)'],
        ['• Optimisation centrales PV', '• PV power plant optimization'],
        ['• <strong>7 MWc</strong> sous gestion', '• <strong>7 MWp</strong> under management'],
        ['• Premières expertises PV', '• First PV expertise'],
        ['• Maîtrise des installations', '• Installation mastery'],
        ['• Approche terrain', '• Field approach'],
        
        // Fragments sans bullet
        ['Innovation en détection de défauts', 'Fault detection innovation'],
        ['Optimisation performances centrales', 'Power plant performance optimization'],
        ['Solutions IoT intégrées', 'Integrated IoT solutions'],
        ['Maintenance préventive optimisée', 'Optimized preventive maintenance'],
        ['Optimisation centrales PV', 'PV power plant optimization']
    ];
    
    // Traiter chaque élément timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        let html = item.innerHTML;
        
        // Appliquer les remplacements
        simpleTranslations.forEach(([fr, en]) => {
            if (html.includes(fr)) {
                html = html.replaceAll(fr, en);
            }
        });
        
        // Mettre à jour l'élément si nécessaire
        if (html !== item.innerHTML) {
            item.innerHTML = html;
        }
    });
}

// Fonction pour mettre à jour les liens de CV
function updateCVLinks(lang) {
    const cvLinkHero = document.getElementById('cv-download-link');
    const cvLinkContact = document.getElementById('cv-download-contact');
    
    if (lang === 'fr') {
        if (cvLinkHero) cvLinkHero.href = 'cv-laurent-leynaud-fr.html';
        if (cvLinkContact) cvLinkContact.href = 'cv-laurent-leynaud-fr.html';
    } else {
        if (cvLinkHero) cvLinkHero.href = 'cv-laurent-leynaud-en.html';
        if (cvLinkContact) cvLinkContact.href = 'cv-laurent-leynaud-en.html';
    }
}

// Fonction utilitaire pour mettre à jour le texte
function updateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

// Fonction utilitaire pour mettre à jour le HTML
function updateHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html;
    }
}

// Fonction de test pour vérifier la traduction
function testTranslation() {
    console.log('=== TEST DE TRADUCTION DÉTAILLÉ ===');
    
    // Chercher d'abord les textes français problématiques
    const problematicTexts = [
        'Innovation en détection de défauts',
        'Optimisation performances centrales',
        '110 centrales',
        'Réalisations Clés'
    ];
    
    console.log('📝 Recherche des textes français avant traduction:');
    problematicTexts.forEach(text => {
        const found = document.body.textContent.includes(text);
        console.log(`  ${found ? '✅' : '❌'} "${text}"`);
    });
    
    console.log('\n🔄 Basculement vers l\'anglais...');
    switchLanguage('en');
    
    setTimeout(() => {
        console.log('\n📝 Vérification après traduction EN:');
        problematicTexts.forEach(text => {
            const stillFound = document.body.textContent.includes(text);
            console.log(`  ${stillFound ? '❌ PROBLÈME' : '✅ OK'} "${text}" ${stillFound ? 'encore présent!' : 'correctement traduit'}`);
        });
        
        // Vérifier aussi les traductions anglaises
        const englishTexts = [
            'Fault detection innovation',
            'Power plant performance optimization',
            '110 power plants',
            'Key Achievements'
        ];
        
        console.log('\n📝 Vérification présence traductions EN:');
        englishTexts.forEach(text => {
            const found = document.body.textContent.includes(text);
            console.log(`  ${found ? '✅' : '❌'} "${text}"`);
        });
        
        console.log('\n🔄 Retour au français...');
        switchLanguage('fr');
    }, 2000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Charger la langue sauvegardée ou français par défaut
    const savedLang = localStorage.getItem('portfolioLang') || 'fr';
    
    // Ajouter les event listeners desktop
    document.getElementById('lang-fr').addEventListener('click', () => switchLanguage('fr'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    
    // Ajouter les event listeners mobile
    const frMobile = document.getElementById('lang-fr-mobile');
    const enMobile = document.getElementById('lang-en-mobile');
    if (frMobile) frMobile.addEventListener('click', () => switchLanguage('fr'));
    if (enMobile) enMobile.addEventListener('click', () => switchLanguage('en'));
    
    // Appliquer la langue
    switchLanguage(savedLang);
    
    // Initialiser les liens CV dès le chargement
    updateCVLinks(savedLang);
    
    // Exposer la fonction de test globalement (développement uniquement)
    window.testTranslation = testTranslation;
});