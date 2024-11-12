const modal = document.getElementById('faqModal');
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');

        openModalBtn.onclick = () => {
            modal.style.display = 'flex';
        };

        closeModalBtn.onclick = () => {
            modal.style.display = 'none';
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        document.querySelectorAll('.faq-item h3').forEach(item => {
            item.addEventListener('click', () => {
                const pregunta = item.nextElementSibling;
                pregunta.style.display = pregunta.style.display === 'none' ? 'block' : 'none';
            });
        });

        function showAlert(event) {
            event.preventDefault(); 
            alert("Función aún no habilitada...");
        }