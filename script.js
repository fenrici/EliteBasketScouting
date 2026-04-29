// Pro Basket Europa - JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            } else {
                mainNav.classList.add('active');
            }
        });
    }



    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.main-nav a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Language switching functionality
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLang = 'es'; // Default language
    
    // Translations object
    const translations = {
        es: {
            // Navigation
            'nav_home': 'Inicio',
            'nav_programs': 'Programas',
            'nav_teams': 'Equipos',
            'nav_about': 'Nosotros',
            'nav_testimonials': 'Testimonios',
            'nav_facilities': 'Instalaciones',
            'nav_contact': 'Solicitar',
            
            // Hero
            'hero_title': 'Tu Futuro en el Baloncesto Europeo',
            'hero_subtitle': 'Programas de entrenamiento de élite en los mejores clubes de España: Fuenlabrada, Baskonia, Unicaja, Valencia y Zentro Madrid',
            'hero_btn_explore': 'Explorar Programas',
            'hero_btn_apply': 'Solicitar Ahora',
            
            // Programs
            'programs_title': 'Programas de Entrenamiento',
            'programs_subtitle': 'Entrenamiento de baloncesto profesional masculino y femenino inmersivo en los mejores clubes de España',
            'program_featured_tag': 'Más Popular',
            'program_note': '* Aéreo no incluido',
            'program_medical_note': '* Cobertura médica a cargo del jugador',
            'program_apply_btn': 'Solicitar Ahora',
            
            // Program titles
            'program_1week_title': 'Programa Master (1 Semana)',
            'program_15days_title': 'Programa Pro (15 Días)',
            'program_1month_title': 'Programa Élite (1 Mes)',
            'program_2months_title': 'Programa Avanzado (2 Meses)',
            'program_3months_title': 'Programa Superior (3 Meses)',
            'program_annual_title': 'Programa Anual (12 Meses)',
            'program_1year_title': 'Programa Premium – 1 Año en España',
            'program_1year_price': '€25.500',
            'program_1year_description': 'Para jugadores que buscan dar el salto al baloncesto profesional europeo. Este programa está diseñado para integrar al jugador a la estructura oficial durante toda una temporada.',
            
            // Teams
            'teams_title': 'Nuestros Clubes Asociados',
            'teams_subtitle': 'Entrena con los mejores clubes de baloncesto de España',
            
            // About
            'about_title': 'Sobre Pro Basket Europa',
            'about_subtitle': 'Somos una organización especializada en el desarrollo de talentos de baloncesto, ofreciendo programas de entrenamiento de élite en los mejores clubes de España.',
            'about_mission_title': 'Nuestra Misión',
            'about_mission_text': 'Desarrollar jugadores de baloncesto de élite proporcionando entrenamiento profesional, evaluación técnica y oportunidades de exposición a ojeadores internacionales en los mejores clubes de España.',
            'about_vision_title': 'Nuestra Visión',
            'about_vision_text': 'Ser la referencia en el desarrollo de talentos de baloncesto en Europa, conectando jugadores prometedores con oportunidades profesionales en clubes de ACB y competiciones europeas.',
            'about_summary_text': 'Pro Basket Europa es la referencia en el desarrollo de talentos de baloncesto en Europa, conectando jugadores prometedores con oportunidades profesionales en clubes de ACB y competiciones europeas. Nuestro equipo, liderado por el Director Deportivo <strong>Eduardo Pascual</strong> con más de 30 años de experiencia organizando campus de baloncesto internacional para figuras como Luka Dončić y Pablo Prigioni, desarrolla jugadores de élite proporcionando entrenamiento profesional, evaluación técnica y oportunidades de exposición a ojeadores internacionales en los mejores clubes de España. Por su parte, <strong>Germán Enrici</strong>, Director de Relaciones Internacionales, es el nexo entre los diferentes países y culturas que se unen en nuestros proyectos, asegurando una comunicación cercana y una experiencia global de calidad.',
            'about_team_title': 'Nuestro Equipo',
            'about_team_text': 'Contamos con un equipo directivo de excelencia liderado por nuestro Director Deportivo, <strong>Eduardo Pascual</strong>, referente en el baloncesto internacional con más de 30 años de experiencia. Ha organizado y dirigido campus de alto rendimiento para estrellas como <strong>Luka Dončić</strong> y <strong>Pablo Prigioni</strong>, y ha colaborado con los clubes y entrenadores más prestigiosos de Europa.' +
                '<br><br>A nivel internacional, nos respalda la gestión de <strong>German Enrici</strong> como Representante Internacional, quien aporta una amplia red de contactos y experiencia en el desarrollo de talento y oportunidades para jugadores en el ámbito global.',
            'about_stat_players': 'Jugadores Entrenados',
            'about_stat_clubs': 'Clubes de Élite',
            'about_stat_success': 'Tasa de Éxito',
            
            // Testimonials
            'testimonials_title': 'Testimonios de Jugadores',
            'testimonials_subtitle': 'Lo que dicen nuestros jugadores sobre su experiencia',
            'testimonial_1_text': '"El programa de Pro Basket Europa cambió mi vida. El entrenamiento profesional en Baskonia y la exposición a ojeadores me abrió las puertas al baloncesto europeo."',
            'testimonial_1_name': 'Carlos R.',
            'testimonial_1_position': 'Base - Liga ACB',
            'testimonial_2_text': '"La metodología de entrenamiento en Valencia Basket es excepcional. Me ayudó a mejorar mi técnica y táctica de manera significativa."',
            'testimonial_2_name': 'María G.',
            'testimonial_2_position': 'Alera - Liga Femenina',
            'testimonial_3_text': '"Gracias a Pro Basket Europa conseguí mi primer contrato profesional en Unicaja. El programa es completo y profesional."',
            'testimonial_3_name': 'David L.',
            'testimonial_3_position': 'Pívot - LEB Oro',
            
            // Facilities
            'facilities_title': 'Instalaciones de Clubes Profesionales',
            'facilities_intro': 'Nuestros jugadores entrenan directamente en las instalaciones de clubes profesionales como Baskonia, Fuenlabrada, Valencia Basket, Zentro Madrid y Unicaja.',
            'facilities_experience': 'Gracias a esta experiencia única, acceden a espacios de élite utilizados por jugadores profesionales:',
            'facility_1_title': 'Pista Principal',
            'facility_1_description': 'Pista de baloncesto profesional con medidas oficiales y equipamiento de alta calidad.',
            'facility_2_title': 'Gimnasio',
            'facility_2_description': 'Gimnasio equipado con máquinas de última generación para entrenamiento de fuerza y acondicionamiento.',
            'facility_3_title': 'Sala de Recuperación',
            'facility_3_description': 'Sala especializada en recuperación con equipos de fisioterapia y masajes.',
            'facility_4_title': 'Sala de Análisis',
            'facility_4_description': 'Sala equipada para análisis de video y sesiones tácticas con tecnología avanzada.',
            
            // Contact
            'contact_title': 'Solicita Información',
            'contact_subtitle': 'Completa el formulario y nos pondremos en contacto contigo',
            'contact_name_label': 'Nombre completo',
            'contact_email_label': 'Email',
            'contact_phone_label': 'Teléfono',
            'contact_age_label': 'Edad',
            'contact_age_help': 'La edad debe estar entre 14 y 20 años',
            'contact_start_date_label': 'Fecha de inicio deseada',
            'contact_start_date_help': 'Selecciona una fecha futura para comenzar el programa',
            'contact_nationality_label': 'Nacionalidad',
            'contact_experience_label': 'Experiencia',
            'contact_position_label': 'Posición',
            'contact_position_placeholder': 'Selecciona tu posición',
            'contact_position_base': 'Base',
            'contact_position_escolta': 'Escolta',
            'contact_position_aler': 'Alero',
            'contact_position_ala_pivot': 'Ala-pívot',
            'contact_position_pivot': 'Pívot',
            'contact_team_label': 'Club de preferencia',
            'contact_team_placeholder': 'Selecciona un club',
            'contact_team_fuenlabrada': 'Fuenlabrada',
            'contact_team_baskonia': 'Baskonia',
            'contact_team_unicaja': 'Unicaja',
            'contact_team_valencia': 'Valencia',
            'contact_team_zentro': 'Zentro Madrid',
            'contact_program_label': 'Programa de interés',
            'contact_program_placeholder': 'Selecciona un programa',
            'contact_program_1week': 'Programa Master (1 Semana)',
            'contact_program_15days': 'Programa Pro (15 Días)',
            'contact_program_1month': 'Programa Élite (1 Mes)',
            'contact_program_2months': 'Programa Avanzado (2 Meses)',
            'contact_program_3months': 'Programa Superior (3 Meses)',
            'contact_program_annual': 'Programa Anual (12 Meses)',
            'contact_program_1year': 'Programa Premium (1 Año)',
            'contact_message_label': 'Mensaje (opcional)',
            'contact_submit_btn': 'Enviar Solicitud',
            'contact_info_title': 'Información de Contacto',
            'contact_address_title': 'Dirección',
            'contact_address': 'España',
            'contact_phone_title': 'Teléfono',
            'contact_email_title': 'Email',
            
            // Footer
            'footer_description': 'Desarrollo profesional de talentos de baloncesto en los mejores clubes de España.',
            'footer_programs_title': 'Programas',
            'footer_program_1week': '1 Semana',
            'footer_program_15days': '15 Días',
            'footer_program_1month': '1 Mes',
            'footer_program_1year': '1 Año',
            'footer_teams_title': 'Clubes',
            'footer_contact_title': 'Contacto',
            'footer_address': 'España',
            'footer_rights': 'Todos los derechos reservados.',
            // Características Programa 1 Semana
            program_1week_feature0: "Alojamiento y pensión completa",
            program_1week_feature1: "5 días de sesiones de entrenamiento de élite",
            program_1week_feature2: "Entrenamiento profesional con staff de clubes de ACB",
            program_1week_feature3: "Evaluación táctica y técnica",
            program_1week_feature4: "Plan de desarrollo personalizado",
            program_1week_feature5: "Kit de entrenamiento oficial del club",
            program_1week_feature6: "Sesión de análisis de video",

            // Características Programa 15 Días
            program_15days_feature0: "Alojamiento y pensión completa",
            program_15days_feature1: "10 días de sesiones intensivas de entrenamiento",
            program_15days_feature3: "Evaluación completa de habilidades",
            program_15days_feature4: "Plan de desarrollo personalizado",
            program_15days_feature5: "Programa de fuerza y acondicionamiento",
            program_15days_feature6: "Talleres de nutrición y recuperación",
            program_15days_feature7: "Partidos de entrenamiento con equipos juveniles",
            program_15days_feature8: "Sesiones de análisis de video",
            program_15days_feature9: "Paquete completo de kit de entrenamiento del club",
            program_15days_feature10: "Informe de ojeadores y ruta de desarrollo",

            // Características Programa 1 Mes
            program_1month_feature0: "Alojamiento y pensión completa",
            program_1month_feature1: "20 días de entrenamiento de nivel profesional",
            program_1month_feature2: "Integración con la estructura de entrenamiento del club",
            program_1month_feature4: "Desarrollo técnico y táctico integral",
            program_1month_feature5: "Evaluación y programa de condición física profesional",
            program_1month_feature6: "Plan personalizado de nutrición y recuperación",
            program_1month_feature7: "Sesiones de coaching",
            program_1month_feature8: "Partidos competitivos con equipos de la academia",
            program_1month_feature9: "Asistencia de ojeadores en los partidos de entrenamiento",
            program_1month_feature10: "Informe profesional de ojeadores",
            program_1month_feature11: "Posible recomendación a clubes/academias",
            program_1month_feature12: "Kit completo de entrenamiento y partido del club",

            // Características Programa 2 Meses
            program_2months_feature0: "Alojamiento y pensión completa",
            program_2months_feature1: "40 días de entrenamiento de nivel profesional",
            program_2months_feature2: "Integración con la estructura de entrenamiento del club",
            program_2months_feature4: "Desarrollo técnico y táctico integral",
            program_2months_feature5: "Evaluación y programa de condición física profesional",
            program_2months_feature6: "Plan personalizado de nutrición y recuperación",
            program_2months_feature7: "Sesiones de coaching",
            program_2months_feature8: "Partidos competitivos con equipos de la academia",
            program_2months_feature9: "Asistencia de ojeadores en los partidos de entrenamiento",
            program_2months_feature10: "Informe profesional de ojeadores",
            program_2months_feature11: "Posible recomendación a clubes/academias",
            program_2months_feature12: "Kit completo de entrenamiento y partido del club",

            // Características Programa 3 Meses
            program_3months_feature0: "Alojamiento y pensión completa",
            program_3months_feature1: "60 días de entrenamiento de nivel profesional",
            program_3months_feature2: "Integración con la estructura de entrenamiento del club",
            program_3months_feature4: "Desarrollo técnico y táctico integral",
            program_3months_feature5: "Evaluación y programa de condición física profesional",
            program_3months_feature6: "Plan personalizado de nutrición y recuperación",
            program_3months_feature7: "Sesiones de coaching",
            program_3months_feature8: "Partidos competitivos con equipos de la academia",
            program_3months_feature9: "Asistencia de ojeadores en los partidos de entrenamiento",
            program_3months_feature10: "Informe profesional de ojeadores",
            program_3months_feature11: "Posible recomendación a clubes/academias",
            program_3months_feature12: "Kit completo de entrenamiento y partido del club",

            // Características Programa Anual
            program_annual_feature0: "Alojamiento y pensión completa",
            program_annual_feature1: "240 días de entrenamiento de nivel profesional",
            program_annual_feature2: "Integración completa con la estructura de entrenamiento del club",
            program_annual_feature3: "Desarrollo técnico y táctico integral",
            program_annual_feature4: "Evaluación y programa de condición física profesional",
            program_annual_feature5: "Plan personalizado de nutrición y recuperación",
            program_annual_feature6: "Sesiones de coaching personalizadas",
            program_annual_feature7: "Partidos competitivos con equipos de la academia",
            program_annual_feature8: "Asistencia de ojeadores en los partidos de entrenamiento",
            program_annual_feature9: "Informe profesional de ojeadores",
            program_annual_feature10: "Posible recomendación a clubes/academias",
            program_annual_feature11: "Kit completo de entrenamiento y partido del club",
            program_annual_feature12: "Seguimiento académico y apoyo educativo",
            program_annual_feature13: "Participación en competiciones oficiales del club",
            program_annual_feature14: "Mentoría personalizada con jugadores profesionales",

            // Requisitos del Programa Anual
            program_annual_requirements_title: "Requisitos del programa ANUAL",
            program_annual_requirements_educational: "Requisitos Educativos",
            program_annual_requirements_documentation: "Requisitos de Documentación",
            program_annual_requirements_minors: "Menores en edad escolar:",
            program_annual_requirements_minors_desc: "Modalidad online en su país de origen",
            program_annual_requirements_adults: "Adultos con educación secundaria completa:",
            program_annual_requirements_adults_desc: "Acceso a universidades europeas asociadas",
            program_annual_requirements_passport: "Requisito indispensable:",
            program_annual_requirements_passport_desc: "Pasaporte o ciudadanía europea vigente",

            program_1year_feature1: "Alojamiento y pensión completa"
        },
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_programs': 'Programs',
            'nav_teams': 'Teams',
            'nav_about': 'About',
            'nav_testimonials': 'Testimonials',
            'nav_facilities': 'Facilities',
            'nav_contact': 'Apply',
            
            // Hero
            'hero_title': 'Your Future in European Basketball',
            'hero_subtitle': 'Elite training programs in the best clubs in Spain: Fuenlabrada, Baskonia, Unicaja, Valencia and Zentro Madrid',
            'hero_btn_explore': 'Explore Programs',
            'hero_btn_apply': 'Apply Now',
            
            // Programs
            'programs_title': 'Training Programs',
            'programs_subtitle': 'Professional basketball training for men and women in the best clubs in Spain',
            'program_featured_tag': 'Most Popular',
            'program_note': '* Airfare not included',
            'program_medical_note': '* Medical coverage at player\'s expense',
            'program_apply_btn': 'Apply Now',
            
            // Program titles
            'program_1week_title': 'Master Program (1 Week)',
            'program_15days_title': 'Pro Program (15 Days)',
            'program_1month_title': 'Elite Program (1 Month)',
            'program_2months_title': 'Advanced Program (2 Months)',
            'program_3months_title': 'Superior Program (3 Months)',
            'program_annual_title': 'Annual Program (12 Months)',
            'program_1year_title': 'Premium Program – 1 Year in Spain',
            'program_1year_price': '€25,500',
            'program_1year_description': 'For players looking to make the jump to European professional basketball. This program is designed to integrate the player into the official structure for an entire season.',
            
            // Teams
            'teams_title': 'Our Associated Clubs',
            'teams_subtitle': 'Train with the best basketball clubs in Spain',
            
            // About
            'about_title': 'About Pro Basket Europa',
            'about_subtitle': 'We are an organization specialized in basketball talent development, offering elite training programs in the best clubs in Spain.',
            'about_mission_title': 'Our Mission',
            'about_mission_text': 'Develop elite basketball players by providing professional training, technical evaluation and opportunities for exposure to international scouts in the best clubs in Spain.',
            'about_vision_title': 'Our Vision',
            'about_vision_text': 'To be the reference in basketball talent development in Europe, connecting promising players with professional opportunities in ACB clubs and European competitions.',
            'about_summary_text': 'Pro Basket Europa is the reference in basketball talent development in Europe, connecting promising players with professional opportunities in ACB clubs and European competitions. Our team, led by Sports Director <strong>Eduardo Pascual</strong> with over 30 years of experience organizing international basketball camps for figures such as Luka Dončić and Pablo Prigioni, develops elite players by providing professional training, technical evaluation and opportunities for exposure to international scouts in the best clubs in Spain. For his part, <strong>Germán Enrici</strong>, Director of International Relations, is the nexus between the different countries and cultures that come together in our projects, ensuring close communication and a quality global experience.',
            'about_team_title': 'Our Team',
            'about_team_text': 'We are proud to have an outstanding leadership team headed by our Sports Director, <strong>Eduardo Pascual</strong>—a renowned figure in international basketball with over 30 years of experience. He has organized and led elite training camps for top players such as <strong>Luka Dončić</strong> and <strong>Pablo Prigioni</strong>, and has worked alongside Europe\'s most prestigious clubs and coaches.' +
                '<br><br>On the international stage, our operations are strengthened by <strong>German Enrici</strong> as International Representative, bringing an extensive network and proven expertise in talent development and global player opportunities.',
            'about_stat_players': 'Players Trained',
            'about_stat_clubs': 'Elite Clubs',
            'about_stat_success': 'Success Rate',
            
            // Testimonials
            'testimonials_title': 'Player Testimonials',
            'testimonials_subtitle': 'What our players say about their experience',
            'testimonial_1_text': '"The Pro Basket Europa program changed my life. The professional training at Baskonia and exposure to scouts opened the doors to European basketball."',
            'testimonial_1_name': 'Carlos R.',
            'testimonial_1_position': 'Point Guard - ACB League',
            'testimonial_2_text': '"The training methodology at Valencia Basket is exceptional. It helped me improve my technique and tactics significantly."',
            'testimonial_2_name': 'María G.',
            'testimonial_2_position': 'Forward - Women\'s League',
            'testimonial_3_text': '"Thanks to Pro Basket Europa I got my first professional contract at Unicaja. The program is complete and professional."',
            'testimonial_3_name': 'David L.',
            'testimonial_3_position': 'Center - LEB Oro',
            
            // Facilities
            'facilities_title': 'Professional Club Facilities',
            'facilities_intro': 'Our players train directly in the facilities of professional clubs such as Baskonia, Fuenlabrada, Valencia Basket, Zentro Madrid, and Unicaja.',
            'facilities_experience': 'Thanks to this unique experience, they access elite spaces used by professional players:',
            'facility_1_title': 'Main Court',
            'facility_1_description': 'Professional basketball court with official measurements and high-quality equipment.',
            'facility_2_title': 'Gym',
            'facility_2_description': 'Gym equipped with state-of-the-art machines for strength and conditioning training.',
            'facility_3_title': 'Recovery Room',
            'facility_3_description': 'Specialized recovery room with physiotherapy equipment and massages.',
            'facility_4_title': 'Analysis Room',
            'facility_4_description': 'Room equipped for video analysis and tactical sessions with advanced technology.',
            
            // Contact
            'contact_title': 'Request Information',
            'contact_subtitle': 'Complete the form and we will contact you',
            'contact_name_label': 'Full name',
            'contact_email_label': 'Email',
            'contact_phone_label': 'Phone',
            'contact_age_label': 'Age',
            'contact_age_help': 'Age must be between 14 and 20 years',
            'contact_start_date_label': 'Desired start date',
            'contact_start_date_help': 'Select a future date to start the program',
            'contact_nationality_label': 'Nationality',
            'contact_experience_label': 'Experience',
            'contact_position_label': 'Position',
            'contact_position_placeholder': 'Select your position',
            'contact_position_base': 'Point Guard',
            'contact_position_escolta': 'Shooting Guard',
            'contact_position_aler': 'Small Forward',
            'contact_position_ala_pivot': 'Power Forward',
            'contact_position_pivot': 'Center',
            'contact_team_label': 'Preferred Club',
            'contact_team_placeholder': 'Select a club',
            'contact_team_fuenlabrada': 'Fuenlabrada',
            'contact_team_baskonia': 'Baskonia',
            'contact_team_unicaja': 'Unicaja',
            'contact_team_valencia': 'Valencia',
            'contact_team_zentro': 'Zentro Madrid',
            'contact_program_label': 'Program of interest',
            'contact_program_placeholder': 'Select a program',
            'contact_program_1week': 'Master Program (1 Week)',
            'contact_program_15days': 'Pro Program (15 Days)',
            'contact_program_1month': 'Elite Program (1 Month)',
            'contact_program_2months': 'Advanced Program (2 Months)',
            'contact_program_3months': 'Superior Program (3 Months)',
            'contact_program_annual': 'Annual Program (12 Months)',
            'contact_program_1year': 'Premium Program (1 Year)',
            'contact_message_label': 'Message (optional)',
            'contact_submit_btn': 'Send Request',
            'contact_info_title': 'Contact Information',
            'contact_address_title': 'Address',
            'contact_address': 'Spain',
            'contact_phone_title': 'Phone',
            'contact_email_title': 'Email',
            
            // Footer
            'footer_description': 'Professional basketball talent development in the best clubs in Spain.',
            'footer_programs_title': 'Programs',
            'footer_program_1week': '1 Week',
            'footer_program_15days': '15 Days',
            'footer_program_1month': '1 Month',
            'footer_program_1year': '1 Year',
            'footer_teams_title': 'Clubs',
            'footer_contact_title': 'Contact',
            'footer_address': 'Spain',
            'footer_rights': 'All rights reserved.',
            // Program Features 1 Week
            program_1week_feature0: "Accommodation and full board",
            program_1week_feature1: "5 days of elite training sessions",
            program_1week_feature2: "Professional coaching with ACB club staff",
            program_1week_feature3: "Tactical and technical assessment",
            program_1week_feature4: "Personalized development plan",
            program_1week_feature5: "Official club training kit",
            program_1week_feature6: "Video analysis session",
            program_1week_feature7: "Guided city tour",
            // Program Features 15 Days
            program_15days_feature0: "Accommodation and full board",
            program_15days_feature1: "10 days of intensive training sessions",
            program_15days_feature3: "Comprehensive skills evaluation",
            program_15days_feature4: "Personalized development plan",
            program_15days_feature5: "Strength and conditioning program",
            program_15days_feature6: "Nutrition and recovery workshops",
            program_15days_feature7: "Training matches with youth teams",
            program_15days_feature8: "Video analysis sessions",
            program_15days_feature9: "Full club training kit package",
            program_15days_feature10: "Scouting report and development pathway",
            program_15days_feature11: "Guided city tour",
            // Program Features 1 Month
            program_1month_feature0: "Accommodation and full board",
            program_1month_feature1: "20 days of professional-level training",
            program_1month_feature2: "Integration with the club's training structure",
            program_1month_feature4: "Comprehensive technical and tactical development",
            program_1month_feature5: "Professional fitness assessment and program",
            program_1month_feature6: "Personalized nutrition and recovery plan",
            program_1month_feature7: "Coaching sessions",
            program_1month_feature8: "Competitive matches with academy teams",
            program_1month_feature9: "Scout attendance at training matches",
            program_1month_feature10: "Professional scouting report",
            program_1month_feature11: "Potential recommendation to clubs/academies",
            program_1month_feature12: "Full club training and match kit",
            program_1month_feature13: "Guided city and surroundings tour",
            // Program Features 2 Months
            program_2months_feature0: "Accommodation and full board",
            program_2months_feature1: "40 days of professional-level training",
            program_2months_feature2: "Integration with the club's training structure",
            program_2months_feature4: "Comprehensive technical and tactical development",
            program_2months_feature5: "Professional fitness assessment and program",
            program_2months_feature6: "Personalized nutrition and recovery plan",
            program_2months_feature7: "Coaching sessions",
            program_2months_feature8: "Competitive matches with academy teams",
            program_2months_feature9: "Scout attendance at training matches",
            program_2months_feature10: "Professional scouting report",
            program_2months_feature11: "Potential recommendation to clubs/academies",
            program_2months_feature12: "Full club training and match kit",
            program_2months_feature13: "Guided city and surroundings tour",
            // Program Features 3 Months
            program_3months_feature0: "Accommodation and full board",
            program_3months_feature1: "60 days of professional-level training",
            program_3months_feature2: "Integration with the club's training structure",
            program_3months_feature4: "Comprehensive technical and tactical development",
            program_3months_feature5: "Professional fitness assessment and program",
            program_3months_feature6: "Personalized nutrition and recovery plan",
            program_3months_feature7: "Coaching sessions",
            program_3months_feature8: "Competitive matches with academy teams",
            program_3months_feature9: "Scout attendance at training matches",
            program_3months_feature10: "Professional scouting report",
            program_3months_feature11: "Potential recommendation to clubs/academies",
            program_3months_feature12: "Full club training and match kit",
            program_3months_feature13: "Guided city and surroundings tour",
            
            // Annual Program Features
            program_annual_feature0: "Accommodation and full board",
            program_annual_feature1: "240 days of professional-level training",
            program_annual_feature2: "Complete integration with the club's training structure",
            program_annual_feature3: "Comprehensive technical and tactical development",
            program_annual_feature4: "Professional fitness assessment and program",
            program_annual_feature5: "Personalized nutrition and recovery plan",
            program_annual_feature6: "Personalized coaching sessions",
            program_annual_feature7: "Competitive matches with academy teams",
            program_annual_feature8: "Scout attendance at training matches",
            program_annual_feature9: "Professional scouting report",
            program_annual_feature10: "Potential recommendation to clubs/academies",
            program_annual_feature11: "Full club training and match kit",
            program_annual_feature12: "Academic follow-up and educational support",
            program_annual_feature13: "Participation in official club competitions",
            program_annual_feature14: "Personalized mentorship with professional players",
            
            // Annual Program Requirements
            program_annual_requirements_title: "Program Requirements",
            program_annual_requirements_educational: "Educational Requirements",
            program_annual_requirements_documentation: "Documentation Requirements",
            program_annual_requirements_minors: "School-age minors:",
            program_annual_requirements_minors_desc: "Online modality in their country of origin",
            program_annual_requirements_adults: "Adults with completed secondary education:",
            program_annual_requirements_adults_desc: "Access to associated European universities",
            program_annual_requirements_passport: "Indispensable requirement:",
            program_annual_requirements_passport_desc: "Valid passport or European citizenship",
            
            program_1year_feature1: "Accommodation and full board"
        }
    };

    // Function to update language
    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update page title
        const pageTitle = document.querySelector('title[data-i18n]');
        if (pageTitle && translations[lang]['page_title']) {
            document.title = translations[lang]['page_title'];
        }
    }

    // Language switching event listeners
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            
            // Update active state
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Update content
            updateLanguage(lang);
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.phone || !data.age || !data.start_date || !data.position || !data.team || !data.program) {
                e.preventDefault();
                alert('Por favor completa todos los campos obligatorios.');
                return;
            }
            
            // Age validation (14-20 years)
            const age = parseInt(data.age);
            if (age < 14 || age > 20) {
                e.preventDefault();
                alert('La edad debe estar entre 14 y 20 años.');
                return;
            }
            
            // Start date validation (must be in the future)
            const startDate = new Date(data.start_date);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Reset time to start of day
            
            if (startDate < today) {
                e.preventDefault();
                alert('La fecha de inicio debe ser en el futuro.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
            submitBtn.disabled = true;
            
            // Allow form to submit to Formspree
            // The form will handle the submission automatically
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.program-card, .testimonial-card, .facility-card, .team-card, .about-content, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            header.classList.add('navbar-hidden');
        } else {
            // Scrolling up - show navbar
            header.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = scrollTop;
    });

    // Program card hover effects
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Team card hover effects
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth reveal animation for stats
    const stats = document.querySelectorAll('.stat h4');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, '')) || 0;
                const suffix = finalValue.replace(/[\d,.]/g, '');
                
                let currentValue = 0;
                const increment = numericValue / 50;
                
                if (numericValue > 0) {
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            currentValue = numericValue;
                            clearInterval(timer);
                        }
                        target.textContent = Math.floor(currentValue).toLocaleString('en-US') + suffix;
                    }, 30);
                } else {
                    target.textContent = finalValue;
                }
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Initialize tooltips for program features
    const programFeatures = document.querySelectorAll('.program-content li');
    programFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Mobile menu close on outside click
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mobile-menu-toggle') && !e.target.closest('.main-nav')) {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        }
    });

    // Set minimum date for start date field to today
    const startDateField = document.getElementById('start_date');
    if (startDateField) {
        const today = new Date().toISOString().split('T')[0];
        startDateField.setAttribute('min', today);
    }

    // Teams carousel controls (desktop) + swipe scroll (mobile)
    const teamsCarousel = document.querySelector('.teams-carousel');
    if (teamsCarousel) {
        const track = teamsCarousel.querySelector('.teams-track');
        const prevBtn = teamsCarousel.querySelector('.carousel-btn.prev');
        const nextBtn = teamsCarousel.querySelector('.carousel-btn.next');

        const getStep = () => {
            const firstCard = track?.querySelector('.team-card');
            if (!firstCard) return 320;
            const cardWidth = firstCard.getBoundingClientRect().width;
            const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 0;
            return Math.round(cardWidth + gap);
        };

        const updateCarouselButtons = () => {
            if (!track || !prevBtn || !nextBtn) return;
            const maxScrollLeft = track.scrollWidth - track.clientWidth;
            prevBtn.disabled = track.scrollLeft <= 2;
            nextBtn.disabled = track.scrollLeft >= maxScrollLeft - 2;
        };

        const scrollByStep = (dir) => {
            if (!track) return;
            track.scrollBy({ left: dir * getStep(), behavior: 'smooth' });
        };

        if (prevBtn) prevBtn.addEventListener('click', () => scrollByStep(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => scrollByStep(1));
        if (track) {
            track.addEventListener('scroll', updateCarouselButtons, { passive: true });
            window.addEventListener('resize', updateCarouselButtons);
            updateCarouselButtons();
        }
    }

    // Initialize the page with default language
    updateLanguage(currentLang);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', optimizedScrollHandler); 