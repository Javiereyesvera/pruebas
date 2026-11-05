// Dynamic Project Data for Popup Modals
const projectsData = {
    jana: {
        title: "Productos Jana",
        category: "BRANDING / PIEZAS CORPORATIVAS / RRSS",
        description: "Desarrollo integral de diagramación, diseño y arte finalización para uso corporativo de los productos e iniciativas de la marca. Gestión visual adaptable para plataformas digitales (Instagram & WhatsApp Business).",
        client: "Productos Jana",
        year: "2021 — 2026",
        deliverables: "Manual de aplicación gráfica, piezas de redes sociales, empaques corporativos.",
        previewText: "MUESTRA DE DISEÑO CORPORATIVO Y PIEZAS DIGITALES — JANA"
    },
    simposio: {
        title: "III Simposio Internacional de Contactos Interlingüísticos",
        category: "IDENTIDAD EVENTOS / PIEZAS MULTILINGÜES / WEB",
        description: "Creación y gestión gráfica global del evento internacional. Elaboración de contenidos web, afiches y banners en tres idiomas (Español, Inglés y Francés), afiches individuales para ponentes centrales, programa resumen y libro completo del programa en PDF.",
        client: "Universidad del Valle (Escuela de Ciencias del Lenguaje)",
        year: "2022",
        deliverables: "Sitio web, banners oficiales, afiches multilingües, libro del programa PDF.",
        previewText: "SISTEMA DE DISEÑO TRILINGÜE — UNIVALLE"
    },
    posgrados: {
        title: "Identidad Posgrados Ciencias del Lenguaje",
        category: "BRANDING / MANUAL DE MARCA / EDITORIAL",
        description: "Diseño de la identidad visual de los programas de posgrado de la Escuela de Ciencias del Lenguaje. Creación del Manual de Identidad Visual y asignación de código cromático distintivo para la Maestría en Lingüística y Español y la Maestría en Estudios Interlingüísticos e Interculturales.",
        client: "Universidad del Valle",
        year: "2021 — 2022",
        deliverables: "Manual de Marca, paleta cromática, piezas para Feria Virtual.",
        previewText: "MANUAL DE IDENTIDAD Y CÓDIGO CROMÁTICO POSGRADOS"
    },
    psicologicamente: {
        title: "Plataforma Web Psicológicamente",
        category: "DISEÑO UX/UI / IMPLEMENTACIÓN WEB",
        description: "Diseño de interfaz de usuario (UI) y experiencia de usuario (UX) para el proyecto Psicológicamente. Asesoría técnica en arquitectura de la información y prototipado responsivo.",
        client: "Psicológicamente (Santiago de Cali)",
        year: "2021 — 2022",
        deliverables: "Prototipo interactivo, UI Kit, diseño responsivo.",
        previewText: "INTERFAZ WEB & UX - PSICOLÓGICAMENTE"
    },
    camaleon: {
        title: "Interfaz Tangible e Inclusiva (Proyecto CI21027)",
        category: "INVESTIGACIÓN UX / DISEÑO INCLUSIVO",
        description: "Participación en la investigación como diseñadora gráfica principal en la creación de una Interfaz Tangible para promover la educación inclusiva combinada entre usuarios videntes y no videntes. Aprobado por la Vicerrectoría de Investigaciones.",
        client: "Grupo de Investigación Camaleón (Univalle)",
        year: "2019 — 2020",
        deliverables: "Diseño de elementos tangibles, pruebas de usabilidad, interfaz de apoyo.",
        previewText: "PROTOTIPO DE INTERFAZ TANGIBLE E INCLUSIVA"
    },
    bibliotec: {
        title: "Fundación BiblioTEC",
        category: "ARTE FINALIZACIÓN / GESTIÓN WEB",
        description: "Diagramación y arte finalización de piezas gráficas para uso corporativo institucional y marcas aliadas. Gestión básica de redes sociales (FB & Twitter) y administración de contenidos de noticias en la web.",
        client: "Fundación BiblioTEC",
        year: "2022",
        deliverables: "Piezas editoriales, banners promocionales, gestión de portal de noticias.",
        previewText: "DISEÑO INSTITUCIONAL — BIBLIOTEC"
    }
};

// Smooth Parallax Scroll Effect on Typography
window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const parallaxElement = document.getElementById('parallaxBg');
    if (parallaxElement) {
        parallaxElement.style.transform = `translateX(${scrollVal * 0.15}px)`;
    }
});

// Portfolio Filter System
const filterButtons = document.querySelectorAll('.pill-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal Popup Control
function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-tag">${data.category}</span>
            <h2>${data.title}</h2>
        </div>
        
        <div class="modal-details-grid">
            <div>
                <strong>CLIENTE / INSTITUCIÓN</strong>
                <span>${data.client}</span>
            </div>
            <div>
                <strong>PERÍODO</strong>
                <span>${data.year}</span>
            </div>
        </div>

        <p class="modal-body-text">${data.description}</p>

        <div class="modal-preview-box">
            ${data.previewText}
        </div>
    `;

    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeModal(event) {
    if (event === null || event.target.classList.contains('modal-overlay')) {
        document.getElementById('projectModal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Unlock scroll
    }
}
