// ========== SCRIPTORIUM - Página de Usuario ==========
// Lógica para navegar entre secciones de perfil

const navItems = document.querySelectorAll('.profile-nav .nav-item');
const sections = document.querySelectorAll('.profile-section');

function setActiveSection(targetId) {
    sections.forEach(section => {
        section.classList.toggle('hidden', section.id !== targetId);
    });

    navItems.forEach(button => {
        const isActive = button.dataset.section === targetId;
        button.classList.toggle('active', isActive);
    });
}

navItems.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.section;
        if (targetSection) {
            setActiveSection(targetSection);
        }
    });
});

setActiveSection('infoSection');

console.log('Scriptorium Perfil cargado');
