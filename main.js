document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const navLinks = document.querySelectorAll('nav a, #mobile-menu a');
            const form = document.getElementById('contact-form');
            const formFeedback = document.getElementById('form-feedback');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (!mobileMenu.classList.contains('hidden')) {
                         mobileMenu.classList.add('hidden');
                    }
                });
            });

            const sections = document.querySelectorAll('section');
            const headerNavLinks = document.querySelectorAll('#header nav a');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        headerNavLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                formFeedback.textContent = 'Obrigado pelo seu contato! Responderemos em breve.';
                formFeedback.className = 'mt-4 text-center text-green-600';
                form.reset();
                setTimeout(() => {
                    formFeedback.textContent = '';
                    formFeedback.className = 'mt-4 text-center';
                }, 5000);
            });
        });