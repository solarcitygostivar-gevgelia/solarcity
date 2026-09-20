/* =========================================================
   SolarCity — script.js
   Table of Contents:
   1. Language translations (EN / SQ / MK)
   2. Language switcher logic
   3. Navbar scroll effect
   4. Mobile hamburger menu
   5. Smooth scrolling for nav links
   6. Active link highlighting on scroll
   7. Scroll reveal animations
   8. Scroll progress bar
   9. Back to top button
   10. Contact form validation + Formspree submission
   ========================================================= */

/* ============ 1. LANGUAGE TRANSLATIONS ============ */
const translations = {
  en: {
    "nav.home": "Home", "nav.about": "About Us", "nav.services": "Services",
    "nav.projects": "Projects", "nav.contact": "Contact Us", "nav.quote": "Get a Quote",

    "hero.eyebrow": "Solar Energy Provider · Gostivar &amp; Gevgelija",
    "hero.title1": "Harness the Sun.", "hero.title2": "Power Your", "hero.title3": "Future.",
    "hero.desc": "SolarCity designs, installs and maintains premium solar energy systems for homes and businesses across North Macedonia — helping you cut energy costs while switching to clean, renewable power.",
    "hero.ctaPrimary": "Get a Free Quote", "hero.ctaSecondary": "Our Services",
    "hero.indicator1": "Clean Energy", "hero.indicator2": "Lower Energy Costs", "hero.indicator3": "Professional Installation",

    "about.eyebrow": "About Us",
    "about.title": "Trusted Solar Experts, Rooted in North Macedonia",
    "about.p1": "SolarCity is a solar energy company dedicated to helping homeowners and businesses in <strong>Gostivar</strong> and <strong>Gevgelija</strong> transition to clean, dependable solar power. From the first consultation to the final switch-on, our team manages every step of the process with precision, transparency and care.",
    "about.p2": "Solar energy is one of the most reliable ways to reduce electricity costs while lowering your environmental footprint. As energy prices rise and demand for sustainable solutions grows, investing in solar is no longer optional — it's a smart, long-term decision for your home or business.",
    "about.p3": "What sets SolarCity apart is our unwavering focus on <strong>quality equipment</strong>, <strong>reliable installation</strong> and <strong>genuine customer satisfaction</strong>. We don't just install solar panels — we build long-term energy partnerships with every client we serve.",
    "about.stat1Title": "Quality Installation", "about.stat1Desc": "Certified technicians and industry-grade components on every project.",
    "about.stat2Title": "Renewable Energy", "about.stat2Desc": "100% clean solar power designed to reduce your carbon footprint.",
    "about.stat3Title": "Customer Focus", "about.stat3Desc": "Transparent pricing and honest guidance from quote to installation.",
    "about.stat4Title": "Professional Service", "about.stat4Desc": "Full-service support — design, installation, and ongoing maintenance.",

    "services.eyebrow": "What We Offer", "services.title": "Our Solar Services",
    "services.subtitle": "Complete solar solutions tailored for homes and businesses across Gostivar and Gevgelija.",
    "services.s1Title": "Residential Solar Systems", "services.s1Desc": "Custom-designed solar systems for houses and apartments, built to reduce your monthly electricity bill and increase your property's energy independence.",
    "services.s2Title": "Commercial Solar Systems", "services.s2Desc": "Scalable solar solutions for businesses, offices and factories designed to lower operational costs and support long-term sustainability goals.",
    "services.s3Title": "Solar Panel Installation", "services.s3Desc": "Professional, safe and efficient installation carried out by certified technicians using premium equipment and industry best practices.",
    "services.s4Title": "System Maintenance", "services.s4Desc": "Regular inspections, cleaning and performance checks to keep your solar system running at peak efficiency for years to come.",
    "services.s5Title": "Solar Energy Consultation", "services.s5Desc": "Expert guidance to help you understand your energy needs, potential savings and the right solar solution for your property.",
    "services.s6Title": "System Design &amp; Planning", "services.s6Desc": "Detailed technical planning and layout design to maximize energy output based on your roof, location and energy consumption.",
    "services.learnMore": "Learn More →",

    "projects.eyebrow": "Our Work", "projects.title": "Recent Projects",
    "projects.subtitle": "A look at some of the residential and commercial solar systems we've delivered.",
    "projects.tagResidential": "Residential", "projects.tagCommercial": "Commercial", "projects.tagIndustrial": "Industrial",
    "projects.p1Title": "Residential Solar Installation", "projects.p1Loc": "Gostivar, North Macedonia",
    "projects.p1Desc": "A rooftop system designed to cover the majority of the household's daily energy consumption.", "projects.p1Cap": "Capacity: ~6.5 kW",
    "projects.p2Title": "Commercial Solar System", "projects.p2Loc": "Gevgelija, North Macedonia",
    "projects.p2Desc": "A large-scale installation built to reduce operational energy costs for a local business.", "projects.p2Cap": "Capacity: ~35 kW",
    "projects.p3Title": "Rooftop Solar Project", "projects.p3Loc": "Gostivar, North Macedonia",
    "projects.p3Desc": "A full rooftop array optimized for maximum sun exposure throughout the year.", "projects.p3Cap": "Capacity: ~9 kW",
    "projects.p4Title": "Industrial Solar Installation", "projects.p4Loc": "Gevgelija, North Macedonia",
    "projects.p4Desc": "A high-capacity solar array supporting the energy demands of an industrial facility.", "projects.p4Cap": "Capacity: ~80 kW",

    "why.eyebrow": "Why SolarCity", "why.title": "Why Customers Choose Us",
    "why.w1Title": "Professional Installation", "why.w1Desc": "Certified installers who follow strict safety and quality standards on every job.",
    "why.w2Title": "High-Quality Equipment", "why.w2Desc": "We use durable, high-performance panels and components built to last for decades.",
    "why.w3Title": "Reliable Service", "why.w3Desc": "Dependable timelines and clear communication from your first call to final handover.",
    "why.w4Title": "Energy Savings", "why.w4Desc": "Systems engineered to maximize your return on investment and lower monthly bills.",
    "why.w5Title": "Customer Support", "why.w5Desc": "Ongoing support and maintenance guidance long after installation is complete.",
    "why.w6Title": "Sustainable Energy", "why.w6Desc": "Helping North Macedonia move toward a cleaner, more sustainable energy future.",

    "how.eyebrow": "Our Process", "how.title": "How It Works",
    "how.subtitle": "A simple, transparent process from your first inquiry to a fully working solar system.",
    "how.step1Title": "Contact Us", "how.step1Desc": "Reach out through our contact form or phone to tell us about your energy needs.",
    "how.step2Title": "Site Assessment", "how.step2Desc": "Our team evaluates your property to determine the best solar setup for your space.",
    "how.step3Title": "System Design", "how.step3Desc": "We create a custom system design optimized for maximum energy production.",
    "how.step4Title": "Installation", "how.step4Desc": "Our certified technicians install your system safely, efficiently and on schedule.",

    "contact.eyebrow": "Get In Touch", "contact.title": "Contact Us",
    "contact.subtitle": "Ready to switch to solar? Send us a message and our team will get back to you shortly.",
    "contact.locationsLabel": "Locations", "contact.locationsValue": "Gostivar &amp; Gevgelija, North Macedonia",
    "contact.phoneLabel": "Phone", "contact.emailLabel": "Email",

    "form.fullName": 'Full Name <span class="required">*</span>',
    "form.email": 'Email <span class="required">*</span>',
    "form.phone": "Phone Number",
    "form.subject": 'Subject <span class="required">*</span>', "form.subjectPh": "Residential Solar Quote",
    "form.message": 'Message <span class="required">*</span>', "form.messagePh": "Tell us about your project...",
    "form.submit": "Send Message",
    "form.success": "✅ Thank you! Your message has been received. Our team will contact you shortly.",

    "footer.desc": "Professional solar energy systems for homes and businesses in Gostivar and Gevgelija, North Macedonia.",
    "footer.quickLinks": "Quick Links", "footer.services": "Services",
    "footer.svc1": "Residential Solar", "footer.svc2": "Commercial Solar", "footer.svc3": "Installation",
    "footer.svc4": "Maintenance", "footer.svc5": "Consultation",
    "footer.contact": "Contact", "footer.location": "Gostivar &amp; Gevgelija<br>North Macedonia",
    "footer.copyright": "&copy; 2026 SolarCity. All Rights Reserved."
  },

  sq: {
    "nav.home": "Ballina", "nav.about": "Rreth Nesh", "nav.services": "Shërbimet",
    "nav.projects": "Projektet", "nav.contact": "Na Kontaktoni", "nav.quote": "Kërko Ofertë",

    "hero.eyebrow": "Furnizues i Energjisë Solare · Gostivar &amp; Gevgelija",
    "hero.title1": "Shfrytëzo Diellin.", "hero.title2": "Fuqizo të Ardhmen", "hero.title3": "Tënde.",
    "hero.desc": "SolarCity dizajnon, instalon dhe mirëmban sisteme premium të energjisë solare për shtëpi dhe biznese në të gjithë Maqedoninë e Veriut — duke ju ndihmuar të ulni shpenzimet për energji ndërkohë që kaloni te energjia e pastër dhe e ripërtëritshme.",
    "hero.ctaPrimary": "Kërko Ofertë Falas", "hero.ctaSecondary": "Shërbimet Tona",
    "hero.indicator1": "Energji e Pastër", "hero.indicator2": "Kosto më të Ulëta", "hero.indicator3": "Instalim Profesional",

    "about.eyebrow": "Rreth Nesh",
    "about.title": "Ekspertë të Besuar të Energjisë Solare në Maqedoninë e Veriut",
    "about.p1": "SolarCity është një kompani e energjisë solare e dedikuar për t'i ndihmuar pronarët e shtëpive dhe bizneset në <strong>Gostivar</strong> dhe <strong>Gevgelija</strong> të kalojnë në energji solare të pastër dhe të qëndrueshme. Nga konsultimi i parë deri te ndezja finale, ekipi ynë menaxhon çdo hap të procesit me precizion, transparencë dhe kujdes.",
    "about.p2": "Energjia solare është një nga mënyrat më të besueshme për të ulur kostot e energjisë elektrike, duke ulur njëkohësisht ndikimin tuaj mjedisor. Ndërsa çmimet e energjisë rriten dhe kërkesa për zgjidhje të qëndrueshme rritet, investimi në energji solare nuk është më opsional — është një vendim i mençur dhe afatgjatë për shtëpinë apo biznesin tuaj.",
    "about.p3": "Ajo që e dallon SolarCity është fokusi ynë i palëkundur në <strong>pajisje cilësore</strong>, <strong>instalim të besueshëm</strong> dhe <strong>kënaqësi të vërtetë të klientit</strong>. Ne nuk instalojmë vetëm panele solare — ne ndërtojmë partneritete afatgjata energjetike me çdo klient që shërbejmë.",
    "about.stat1Title": "Instalim Cilësor", "about.stat1Desc": "Teknikë të certifikuar dhe komponentë të nivelit industrial në çdo projekt.",
    "about.stat2Title": "Energji e Ripërtëritshme", "about.stat2Desc": "100% energji solare e pastër, e dizajnuar për të ulur gjurmën tuaj të karbonit.",
    "about.stat3Title": "Fokus te Klienti", "about.stat3Desc": "Çmime transparente dhe udhëzim i sinqertë nga oferta deri te instalimi.",
    "about.stat4Title": "Shërbim Profesional", "about.stat4Desc": "Mbështetje e plotë — dizajn, instalim dhe mirëmbajtje e vazhdueshme.",

    "services.eyebrow": "Çfarë Ofrojmë", "services.title": "Shërbimet Tona Solare",
    "services.subtitle": "Zgjidhje të plota solare të përshtatura për shtëpi dhe biznese në Gostivar dhe Gevgelija.",
    "services.s1Title": "Sisteme Solare Rezidenciale", "services.s1Desc": "Sisteme solare të personalizuara për shtëpi dhe apartamente, të ndërtuara për të ulur faturën tuaj mujore të energjisë dhe për të rritur pavarësinë energjetike të pronës suaj.",
    "services.s2Title": "Sisteme Solare Komerciale", "services.s2Desc": "Zgjidhje solare të shkallëzueshme për biznese, zyra dhe fabrika, të dizajnuara për të ulur kostot operative dhe për të mbështetur qëllimet afatgjata të qëndrueshmërisë.",
    "services.s3Title": "Instalim i Paneleve Solare", "services.s3Desc": "Instalim profesional, i sigurt dhe efikas, i kryer nga teknikë të certifikuar duke përdorur pajisje premium dhe praktikat më të mira të industrisë.",
    "services.s4Title": "Mirëmbajtje e Sistemit", "services.s4Desc": "Inspektime të rregullta, pastrim dhe kontrolle të performancës për ta mbajtur sistemin tuaj solar duke funksionuar me efikasitet maksimal për vite me radhë.",
    "services.s5Title": "Konsultim për Energji Solare", "services.s5Desc": "Udhëzim ekspert që ju ndihmon të kuptoni nevojat tuaja energjetike, kursimet e mundshme dhe zgjidhjen e duhur solare për pronën tuaj.",
    "services.s6Title": "Dizajn &amp; Planifikim i Sistemit", "services.s6Desc": "Planifikim teknik i detajuar dhe dizajn i pozicionimit për të maksimizuar prodhimin e energjisë bazuar në çatinë, vendndodhjen dhe konsumin tuaj energjetik.",
    "services.learnMore": "Mëso Më Shumë →",

    "projects.eyebrow": "Puna Jonë", "projects.title": "Projektet e Fundit",
    "projects.subtitle": "Një vështrim në disa nga sistemet solare rezidenciale dhe komerciale që kemi realizuar.",
    "projects.tagResidential": "Rezidencial", "projects.tagCommercial": "Komercial", "projects.tagIndustrial": "Industrial",
    "projects.p1Title": "Instalim Solar Rezidencial", "projects.p1Loc": "Gostivar, Maqedonia e Veriut",
    "projects.p1Desc": "Sistem në çati i dizajnuar për të mbuluar shumicën e konsumit ditor të energjisë së shtëpisë.", "projects.p1Cap": "Kapaciteti: ~6.5 kW",
    "projects.p2Title": "Sistem Solar Komercial", "projects.p2Loc": "Gevgelija, Maqedonia e Veriut",
    "projects.p2Desc": "Instalim me shkallë të madhe i ndërtuar për të ulur kostot operative të energjisë për një biznes lokal.", "projects.p2Cap": "Kapaciteti: ~35 kW",
    "projects.p3Title": "Projekt Solar në Çati", "projects.p3Loc": "Gostivar, Maqedonia e Veriut",
    "projects.p3Desc": "Një sistem i plotë në çati i optimizuar për ekspozim maksimal ndaj diellit gjatë gjithë vitit.", "projects.p3Cap": "Kapaciteti: ~9 kW",
    "projects.p4Title": "Instalim Solar Industrial", "projects.p4Loc": "Gevgelija, Maqedonia e Veriut",
    "projects.p4Desc": "Sistem solar me kapacitet të lartë që mbështet nevojat energjetike të një objekti industrial.", "projects.p4Cap": "Kapaciteti: ~80 kW",

    "why.eyebrow": "Pse SolarCity", "why.title": "Pse Klientët na Zgjedhin Ne",
    "why.w1Title": "Instalim Profesional", "why.w1Desc": "Instalues të certifikuar që ndjekin standarde të rrepta sigurie dhe cilësie në çdo punë.",
    "why.w2Title": "Pajisje me Cilësi të Lartë", "why.w2Desc": "Ne përdorim panele dhe komponentë të qëndrueshëm e me performancë të lartë, të ndërtuar për të zgjatur dekada.",
    "why.w3Title": "Shërbim i Besueshëm", "why.w3Desc": "Afate kohore të besueshme dhe komunikim i qartë nga thirrja e parë deri te dorëzimi final.",
    "why.w4Title": "Kursim Energjie", "why.w4Desc": "Sisteme të inxhinieruara për të maksimizuar kthimin tuaj të investimit dhe për t'i ulur faturat mujore.",
    "why.w5Title": "Mbështetje për Klientët", "why.w5Desc": "Mbështetje dhe udhëzim i vazhdueshëm i mirëmbajtjes edhe pasi instalimi të ketë përfunduar.",
    "why.w6Title": "Energji e Qëndrueshme", "why.w6Desc": "Duke ndihmuar Maqedoninë e Veriut të lëvizë drejt një të ardhmeje energjetike më të pastër dhe të qëndrueshme.",

    "how.eyebrow": "Procesi Ynë", "how.title": "Si Funksionon",
    "how.subtitle": "Një proces i thjeshtë dhe transparent nga kërkesa juaj e parë deri te një sistem solar plotësisht funksional.",
    "how.step1Title": "Na Kontaktoni", "how.step1Desc": "Na kontaktoni përmes formularit ose telefonit për të na treguar për nevojat tuaja energjetike.",
    "how.step2Title": "Vlerësimi i Objektit", "how.step2Desc": "Ekipi ynë vlerëson pronën tuaj për të përcaktuar konfigurimin më të mirë solar për hapësirën tuaj.",
    "how.step3Title": "Dizajni i Sistemit", "how.step3Desc": "Ne krijojmë një dizajn të personalizuar të sistemit, të optimizuar për prodhim maksimal të energjisë.",
    "how.step4Title": "Instalimi", "how.step4Desc": "Teknikët tanë të certifikuar e instalojnë sistemin tuaj në mënyrë të sigurt, efikase dhe sipas orarit.",

    "contact.eyebrow": "Na Kontaktoni", "contact.title": "Kontakti",
    "contact.subtitle": "Gati të kaloni te energjia solare? Na dërgoni një mesazh dhe ekipi ynë do t'ju kontaktojë së shpejti.",
    "contact.locationsLabel": "Vendndodhjet", "contact.locationsValue": "Gostivar &amp; Gevgelija, Maqedonia e Veriut",
    "contact.phoneLabel": "Telefoni", "contact.emailLabel": "Email",

    "form.fullName": 'Emri i Plotë <span class="required">*</span>',
    "form.email": 'Email <span class="required">*</span>',
    "form.phone": "Numri i Telefonit",
    "form.subject": 'Subjekti <span class="required">*</span>', "form.subjectPh": "Ofertë për Sistem Solar Rezidencial",
    "form.message": 'Mesazhi <span class="required">*</span>', "form.messagePh": "Na tregoni për projektin tuaj...",
    "form.submit": "Dërgo Mesazhin",
    "form.success": "✅ Faleminderit! Mesazhi juaj u pranua. Ekipi ynë do t'ju kontaktojë së shpejti.",

    "footer.desc": "Sisteme profesionale të energjisë solare për shtëpi dhe biznese në Gostivar dhe Gevgelija, Maqedoni e Veriut.",
    "footer.quickLinks": "Lidhje të Shpejta", "footer.services": "Shërbimet",
    "footer.svc1": "Solar Rezidencial", "footer.svc2": "Solar Komercial", "footer.svc3": "Instalim",
    "footer.svc4": "Mirëmbajtje", "footer.svc5": "Konsultim",
    "footer.contact": "Kontakti", "footer.location": "Gostivar &amp; Gevgelija<br>Maqedonia e Veriut",
    "footer.copyright": "&copy; 2026 SolarCity. Të gjitha të drejtat e rezervuara."
  },

  mk: {
    "nav.home": "Почетна", "nav.about": "За Нас", "nav.services": "Услуги",
    "nav.projects": "Проекти", "nav.contact": "Контакт", "nav.quote": "Побарај Понуда",

    "hero.eyebrow": "Добавувач на Сончева Енергија · Гостивар &amp; Гевгелија",
    "hero.title1": "Искористи го Сонцето.", "hero.title2": "Зајакни ја Твојата", "hero.title3": "Иднина.",
    "hero.desc": "SolarCity дизајнира, инсталира и одржува премиум системи за сончева енергија за домови и бизниси низ цела Северна Македонија — помагајќи ви да ги намалите трошоците за енергија додека преминувате на чиста, обновлива енергија.",
    "hero.ctaPrimary": "Побарај Бесплатна Понуда", "hero.ctaSecondary": "Нашите Услуги",
    "hero.indicator1": "Чиста Енергија", "hero.indicator2": "Пониски Трошоци", "hero.indicator3": "Професионална Инсталација",

    "about.eyebrow": "За Нас",
    "about.title": "Доверливи Експерти за Сончева Енергија во Северна Македонија",
    "about.p1": "SolarCity е компанија за сончева енергија посветена на помагање на сопствениците на домови и бизниси во <strong>Гостивар</strong> и <strong>Гевгелија</strong> да преминат на чиста и сигурна сончева енергија. Од првата консултација до финалното вклучување, нашиот тим управува со секој чекор од процесот со прецизност, транспарентност и грижа.",
    "about.p2": "Сончевата енергија е еден од најсигурните начини за намалување на трошоците за електрична енергија, а истовремено ја намалува вашата еколошка отпечаток. Како што цените на енергијата растат и побарувачката за одржливи решенија расте, инвестирањето во сончева енергија повеќе не е опционално — тоа е паметна, долгорочна одлука за вашиот дом или бизнис.",
    "about.p3": "Она што ја издвојува SolarCity е нашиот непоколеблив фокус на <strong>квалитетна опрема</strong>, <strong>сигурна инсталација</strong> и <strong>вистинско задоволство на клиентите</strong>. Ние не само што инсталираме сончеви панели — градиме долгорочни енергетски партнерства со секој клиент.",
    "about.stat1Title": "Квалитетна Инсталација", "about.stat1Desc": "Сертифицирани техничари и компоненти од индустриско ниво на секој проект.",
    "about.stat2Title": "Обновлива Енергија", "about.stat2Desc": "100% чиста сончева енергија дизајнирана да го намали вашиот јаглероден отпечаток.",
    "about.stat3Title": "Фокус на Клиентот", "about.stat3Desc": "Транспарентни цени и искрено водство од понудата до инсталацијата.",
    "about.stat4Title": "Професионална Услуга", "about.stat4Desc": "Целосна поддршка — дизајн, инсталација и континуирано одржување.",

    "services.eyebrow": "Што Нудиме", "services.title": "Нашите Соларни Услуги",
    "services.subtitle": "Целосни соларни решенија прилагодени за домови и бизниси низ Гостивар и Гевгелија.",
    "services.s1Title": "Резиденцијални Соларни Системи", "services.s1Desc": "Соларни системи по мерка за куќи и станови, изградени да ја намалат вашата месечна сметка за струја и да ја зголемат енергетската независност на вашиот имот.",
    "services.s2Title": "Комерцијални Соларни Системи", "services.s2Desc": "Скалабилни соларни решенија за бизниси, канцеларии и фабрики дизајнирани да ги намалат оперативните трошоци и да ги поддржат долгорочните цели за одржливост.",
    "services.s3Title": "Инсталација на Соларни Панели", "services.s3Desc": "Професионална, безбедна и ефикасна инсталација извршена од сертифицирани техничари со користење на премиум опрема и најдобри индустриски практики.",
    "services.s4Title": "Одржување на Системот", "services.s4Desc": "Редовни инспекции, чистење и проверки на перформансите за да го одржите вашиот соларен систем на врвна ефикасност со години.",
    "services.s5Title": "Консултација за Сончева Енергија", "services.s5Desc": "Стручно водство кое ви помага да ги разберете вашите енергетски потреби, можните заштеди и вистинското соларно решение за вашиот имот.",
    "services.s6Title": "Дизајн &amp; Планирање на Системот", "services.s6Desc": "Детално техничко планирање и распоред за максимизирање на производството на енергија базирано на вашиот покрив, локација и потрошувачка на енергија.",
    "services.learnMore": "Дознај Повеќе →",

    "projects.eyebrow": "Нашата Работа", "projects.title": "Неодамнешни Проекти",
    "projects.subtitle": "Поглед на некои од резиденцијалните и комерцијалните соларни системи кои ги реализиравме.",
    "projects.tagResidential": "Резиденцијален", "projects.tagCommercial": "Комерцијален", "projects.tagIndustrial": "Индустриски",
    "projects.p1Title": "Резиденцијална Соларна Инсталација", "projects.p1Loc": "Гостивар, Северна Македонија",
    "projects.p1Desc": "Систем на покрив дизајниран да ја покрие поголемиот дел од дневната потрошувачка на енергија на домаќинството.", "projects.p1Cap": "Капацитет: ~6.5 kW",
    "projects.p2Title": "Комерцијален Соларен Систем", "projects.p2Loc": "Гевгелија, Северна Македонија",
    "projects.p2Desc": "Инсталација во голем обем изградена за намалување на оперативните трошоци за енергија на локален бизнис.", "projects.p2Cap": "Капацитет: ~35 kW",
    "projects.p3Title": "Соларен Проект на Покрив", "projects.p3Loc": "Гостивар, Северна Македонија",
    "projects.p3Desc": "Целосна низа на покрив оптимизирана за максимална изложеност на сонце во текот на целата година.", "projects.p3Cap": "Капацитет: ~9 kW",
    "projects.p4Title": "Индустриска Соларна Инсталација", "projects.p4Loc": "Гевгелија, Северна Македонија",
    "projects.p4Desc": "Соларна низа со висок капацитет која ги поддржува енергетските потреби на индустриски објект.", "projects.p4Cap": "Капацитет: ~80 kW",

    "why.eyebrow": "Зошто SolarCity", "why.title": "Зошто Клиентите Не Избираат",
    "why.w1Title": "Професионална Инсталација", "why.w1Desc": "Сертифицирани инсталатери кои следат строги стандарди за безбедност и квалитет на секоја работа.",
    "why.w2Title": "Висококвалитетна Опрема", "why.w2Desc": "Користиме издржливи панели и компоненти со високи перформанси, изградени да траат децении.",
    "why.w3Title": "Сигурна Услуга", "why.w3Desc": "Сигурни рокови и јасна комуникација од вашиот прв повик до финалната предаја.",
    "why.w4Title": "Заштеда на Енергија", "why.w4Desc": "Системи инженерирани да го максимизираат вашиот поврат на инвестицијата и да ги намалат месечните сметки.",
    "why.w5Title": "Поддршка за Клиенти", "why.w5Desc": "Континуирана поддршка и водство за одржување долго по завршувањето на инсталацијата.",
    "why.w6Title": "Одржлива Енергија", "why.w6Desc": "Помагаме на Северна Македонија да се движи кон почиста и поодржлива енергетска иднина.",

    "how.eyebrow": "Нашиот Процес", "how.title": "Како Функционира",
    "how.subtitle": "Едноставен, транспарентен процес од вашето прво барање до целосно функционален соларен систем.",
    "how.step1Title": "Контактирајте Нè", "how.step1Desc": "Контактирајте нè преку формуларот или телефон за да ни кажете за вашите енергетски потреби.",
    "how.step2Title": "Проценка на Локацијата", "how.step2Desc": "Нашиот тим го проценува вашиот имот за да го одреди најдобриот соларен распоред за вашиот простор.",
    "how.step3Title": "Дизајн на Системот", "how.step3Desc": "Ние креираме дизајн на систем по мерка, оптимизиран за максимално производство на енергија.",
    "how.step4Title": "Инсталација", "how.step4Desc": "Нашите сертифицирани техничари го инсталираат вашиот систем безбедно, ефикасно и по распоред.",

    "contact.eyebrow": "Стапете во Контакт", "contact.title": "Контакт",
    "contact.subtitle": "Подготвени за преминување на сончева енергија? Испратете ни порака и нашиот тим ќе ве контактира наскоро.",
    "contact.locationsLabel": "Локации", "contact.locationsValue": "Гостивар &amp; Гевгелија, Северна Македонија",
    "contact.phoneLabel": "Телефон", "contact.emailLabel": "Е-пошта",

    "form.fullName": 'Целосно Име <span class="required">*</span>',
    "form.email": 'Е-пошта <span class="required">*</span>',
    "form.phone": "Телефонски Број",
    "form.subject": 'Тема <span class="required">*</span>', "form.subjectPh": "Понуда за Резиденцијален Соларен Систем",
    "form.message": 'Порака <span class="required">*</span>', "form.messagePh": "Кажете ни за вашиот проект...",
    "form.submit": "Испрати Порака",
    "form.success": "✅ Ви благодариме! Вашата порака е примена. Нашиот тим ќе ве контактира наскоро.",

    "footer.desc": "Професионални системи за сончева енергија за домови и бизниси во Гостивар и Гевгелија, Северна Македонија.",
    "footer.quickLinks": "Брзи Линкови", "footer.services": "Услуги",
    "footer.svc1": "Резиденцијален Солар", "footer.svc2": "Комерцијален Солар", "footer.svc3": "Инсталација",
    "footer.svc4": "Одржување", "footer.svc5": "Консултација",
    "footer.contact": "Контакт", "footer.location": "Гостивар &amp; Гевгелија<br>Северна Македонија",
    "footer.copyright": "&copy; 2026 SolarCity. Сите права се задржани."
  }
};

// Validation error messages per language, used by the contact form
const validationMessages = {
  en: {
    nameRequired: "Please enter your full name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    phoneInvalid: "Please enter a valid phone number.",
    subjectRequired: "Please enter a subject.",
    messageRequired: "Please enter a message (at least 10 characters).",
    submitError: "Something went wrong sending your message. Please try again or contact us by phone.",
    sending: "Sending..."
  },
  sq: {
    nameRequired: "Ju lutemi shkruani emrin tuaj të plotë.",
    emailRequired: "Ju lutemi shkruani adresën tuaj email.",
    emailInvalid: "Ju lutemi shkruani një adresë email valide.",
    phoneInvalid: "Ju lutemi shkruani një numër telefoni valid.",
    subjectRequired: "Ju lutemi shkruani një subjekt.",
    messageRequired: "Ju lutemi shkruani një mesazh (të paktën 10 karaktere).",
    submitError: "Diçka shkoi keq gjatë dërgimit të mesazhit. Ju lutemi provoni përsëri ose na kontaktoni telefonikisht.",
    sending: "Duke dërguar..."
  },
  mk: {
    nameRequired: "Ве молиме внесете го вашето целосно име.",
    emailRequired: "Ве молиме внесете ја вашата е-пошта.",
    emailInvalid: "Ве молиме внесете валидна е-пошта.",
    phoneInvalid: "Ве молиме внесете валиден телефонски број.",
    subjectRequired: "Ве молиме внесете тема.",
    messageRequired: "Ве молиме внесете порака (најмалку 10 карактери).",
    submitError: "Нешто тргна наопаку при испраќањето на пораката. Обидете се повторно или контактирајте нè телефонски.",
    sending: "Се испраќа..."
  }
};

let currentLang = 'en';

/* ============ 2. LANGUAGE SWITCHER LOGIC ============ */
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[lang][key];
    if (text !== undefined) {
      el.setAttribute('placeholder', text);
    }
  });

  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === lang);
  });

  const htmlRoot = document.getElementById('htmlRoot');
  if (htmlRoot) htmlRoot.setAttribute('lang', lang);

  try {
    localStorage.setItem('solarcity_lang', lang);
  } catch (e) {
    // localStorage unavailable — language just won't persist across visits
  }
}

document.addEventListener('DOMContentLoaded', function () {

  // Flag that JS is running successfully. The scroll-reveal animation
  // (see .reveal-up / .js-ready in style.css) only hides elements once
  // this class is present, so content never gets stuck invisible if
  // JavaScript fails to load.
  document.body.classList.add('js-ready');

  // Load saved language preference, or default to English
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('solarcity_lang') || 'en';
  } catch (e) {
    savedLang = 'en';
  }
  applyLanguage(savedLang);

  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  /* ============ 3. NAVBAR SCROLL EFFECT ============ */
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);


  /* ============ 4. MOBILE HAMBURGER MENU ============ */
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbarLinks');

  function toggleMenu() {
    const isOpen = navbarLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMenu);

  document.querySelectorAll('.navbar-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarLinks.classList.contains('open')) {
        toggleMenu();
      }
    });
  });


  /* ============ 5. SMOOTH SCROLLING FOR NAV LINKS ============ */
  const navHeight = navbar.offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length <= 1) return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - (navHeight - 10);

      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });


  /* ============ 6. ACTIVE LINK HIGHLIGHTING ON SCROLL ============ */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightActiveLink() {
    let currentSectionId = '';
    const scrollPos = window.scrollY + navHeight + 40;

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink();


  /* ============ 7. SCROLL REVEAL ANIMATIONS ============ */
  const revealElements = document.querySelectorAll('.reveal-up');

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const delay = (entry.target.dataset.revealIndex || 0) * 60;
        setTimeout(function () {
          entry.target.classList.add('in-view');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach(function (el, index) {
    el.dataset.revealIndex = index % 6;
    revealObserver.observe(el);
  });


  /* ============ 8. SCROLL PROGRESS BAR ============ */
  const scrollProgress = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();


  /* ============ 9. BACK TO TOP BUTTON ============ */
  const backToTopBtn = document.getElementById('backToTop');

  function toggleBackToTop() {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ============ 10. CONTACT FORM VALIDATION + FORMSPREE ============ */
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbgradpl';

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = contactForm.querySelector('.btn-submit');

  const formError = document.createElement('p');
  formError.className = 'form-submit-error';
  formError.style.color = '#d94848';
  formError.style.fontSize = '0.85rem';
  formError.style.marginTop = '12px';
  formError.style.display = 'none';
  contactForm.appendChild(formError);

  const fields = {
    fullName: {
      input: document.getElementById('fullName'), error: document.getElementById('fullNameError'),
      validate: function (value) {
        return value.trim().length >= 2 ? '' : validationMessages[currentLang].nameRequired;
      }
    },
    email: {
      input: document.getElementById('email'), error: document.getElementById('emailError'),
      validate: function (value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') return validationMessages[currentLang].emailRequired;
        return emailPattern.test(value.trim()) ? '' : validationMessages[currentLang].emailInvalid;
      }
    },
    phone: {
      input: document.getElementById('phone'), error: document.getElementById('phoneError'),
      validate: function (value) {
        if (value.trim() === '') return '';
        const phonePattern = /^[0-9+\-\s()]{6,20}$/;
        return phonePattern.test(value.trim()) ? '' : validationMessages[currentLang].phoneInvalid;
      }
    },
    subject: {
      input: document.getElementById('subject'), error: document.getElementById('subjectError'),
      validate: function (value) {
        return value.trim().length >= 3 ? '' : validationMessages[currentLang].subjectRequired;
      }
    },
    message: {
      input: document.getElementById('message'), error: document.getElementById('messageError'),
      validate: function (value) {
        return value.trim().length >= 10 ? '' : validationMessages[currentLang].messageRequired;
      }
    }
  };

  function validateField(fieldKey) {
    const field = fields[fieldKey];
    const errorText = field.validate(field.input.value);

    if (errorText) {
      field.input.classList.add('input-error');
      field.error.textContent = errorText;
      return false;
    } else {
      field.input.classList.remove('input-error');
      field.error.textContent = '';
      return true;
    }
  }

  Object.keys(fields).forEach(function (fieldKey) {
    fields[fieldKey].input.addEventListener('blur', function () {
      validateField(fieldKey);
    });
    fields[fieldKey].input.addEventListener('input', function () {
      if (fields[fieldKey].input.classList.contains('input-error')) {
        validateField(fieldKey);
      }
    });
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFormValid = true;
    Object.keys(fields).forEach(function (fieldKey) {
      const fieldIsValid = validateField(fieldKey);
      if (!fieldIsValid) isFormValid = false;
    });

    if (!isFormValid) {
      formSuccess.classList.remove('visible');
      const firstInvalid = contactForm.querySelector('.input-error');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const formData = {
      fullName: fields.fullName.input.value.trim(),
      email: fields.email.input.value.trim(),
      phone: fields.phone.input.value.trim(),
      subject: fields.subject.input.value.trim(),
      message: fields.message.input.value.trim(),
      language: currentLang
    };

    formError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = validationMessages[currentLang].sending;

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Submission failed');

        formSuccess.classList.add('visible');
        contactForm.reset();

        setTimeout(function () {
          formSuccess.classList.remove('visible');
        }, 6000);
      })
      .catch(function () {
        formError.textContent = validationMessages[currentLang].submitError;
        formError.style.display = 'block';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang]['form.submit'];
      });
  });

});
