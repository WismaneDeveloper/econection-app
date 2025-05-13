  document.addEventListener('DOMContentLoaded', function() {
            const stars = document.querySelectorAll('.rating-star');
            const ratingInput = document.getElementById('selected-rating');
            
            // Sistema de estrellas
            stars.forEach(star => {
                star.addEventListener('click', function() {
                    const rating = this.getAttribute('data-rating');
                    ratingInput.value = rating;
                    
                    stars.forEach((s, index) => {
                        if (index < rating) {
                            s.classList.add('active');
                        } else {
                            s.classList.remove('active');
                        }
                    });
                });
                
                star.addEventListener('mouseover', function() {
                    const hoverRating = this.getAttribute('data-rating');
                    stars.forEach((s, index) => {
                        if (index < hoverRating) {
                            s.style.color = 'var(--sun-yellow)';
                        }
                    });
                });
                
                star.addEventListener('mouseout', function() {
                    const currentRating = ratingInput.value;
                    stars.forEach((s, index) => {
                        if (currentRating == 0 || index >= currentRating) {
                            s.style.color = '#ddd';
                        }
                    });
                });
            });
            
            // Envío del formulario (ejemplo)
            document.getElementById('submit-review').addEventListener('click', function() {
                if (ratingInput.value == 0) {
                    alert('Por favor califica con estrellas');
                    return;
                }
                alert('¡Gracias por tu evaluación! Será enviada para análisis.');
                // Aquí iría la lógica AJAX para enviar a tu backend
            });
        });