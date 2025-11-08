document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menu-mobile');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.getElementById('overlay');
    const menuLinks = document.querySelectorAll('.menu-mobile-links a');
    
    // Abrir menu
    menuToggle.addEventListener('click', function() {
        menuMobile.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    });
    
    // Fechar menu
    function closeMenu() {
        menuMobile.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Fechar menu com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menuMobile.classList.contains('active')) {
            closeMenu();
        }
    });
    
});