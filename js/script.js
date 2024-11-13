document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('faqModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Reviso primero que openModalBtn y modal existen
    if (openModalBtn && modal) {
        openModalBtn.onclick = () => {
            modal.style.display = 'flex';
        };
    }

    if (closeModalBtn && modal) {
        closeModalBtn.onclick = () => {
            modal.style.display = 'none';
        };
    }

    // Cierra el modal
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Mostrar y ocultar respuestas en preguntas de FAQ
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.addEventListener('click', () => {
            const pregunta = item.nextElementSibling;
            pregunta.style.display = pregunta.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Agregar al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Función no disponible aún...');
        });
    });
});