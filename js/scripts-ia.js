console.log('funcina esta monda')
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`No se encontró la sección con el ID: ${sectionId}`);
    }
}

