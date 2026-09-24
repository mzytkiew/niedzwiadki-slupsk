console.log("Niedźwiadki Słupsk — strona załadowana.");
// =========================
// LIGHTBOX — GALERIA
// =========================

document.addEventListener('DOMContentLoaded', () => {

    const collageItems = document.querySelectorAll('.collage-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxImage || !lightboxClose) {
        console.error('Nie znaleziono elementów lightboxa.');
        return;
    }

    collageItems.forEach(item => {

        item.addEventListener('click', () => {

            const fullImage = item.getAttribute('data-full');

            if (!fullImage) return;

            lightboxImage.src = fullImage;

            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');

            document.body.style.overflow = 'hidden';

        });

    });

    function closeLightbox() {

        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';

        setTimeout(() => {
            lightboxImage.src = '';
        }, 250);

    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    document.addEventListener('keydown', event => {

        if (
            event.key === 'Escape' &&
            lightbox.classList.contains('active')
        ) {
            closeLightbox();
        }

    });

});

console.log("Niedźwiadki Słupskie v2.0 — strona załadowana.");


// =========================
// LIGHTBOX — GALERIA
// =========================

document.addEventListener('DOMContentLoaded', () => {

    const collageItems = document.querySelectorAll('.collage-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');


    // Sprawdzenie, czy elementy lightboxa istnieją

    if (!lightbox || !lightboxImage || !lightboxClose) {
        console.error('Nie znaleziono elementów lightboxa.');
        return;
    }


    // Otwieranie zdjęcia

    collageItems.forEach(item => {

        item.addEventListener('click', () => {

            const fullImage = item.getAttribute('data-full');

            if (!fullImage) {
                return;
            }

            lightboxImage.src = fullImage;

            lightbox.classList.add('active');

            lightbox.setAttribute(
                'aria-hidden',
                'false'
            );

            document.body.style.overflow = 'hidden';

        });

    });


    // Zamykanie lightboxa

    function closeLightbox() {

        lightbox.classList.remove('active');

        lightbox.setAttribute(
            'aria-hidden',
            'true'
        );

        document.body.style.overflow = '';

        setTimeout(() => {
            lightboxImage.src = '';
        }, 250);

    }


    // Zamknięcie przyciskiem X

    lightboxClose.addEventListener(
        'click',
        closeLightbox
    );


    // Zamknięcie po kliknięciu w czarne tło

    lightbox.addEventListener('click', event => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // Zamknięcie klawiszem ESC

    document.addEventListener('keydown', event => {

        if (
            event.key === 'Escape' &&
            lightbox.classList.contains('active')
        ) {
            closeLightbox();
        }

    });

});

// =========================
// FORMULARZ KONTAKTOWY
// =========================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {

    contactForm.addEventListener('submit', async event => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector('.contact-submit');

        const originalButtonContent =
            submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML =
            '<span>WYSYŁANIE...</span>';

        formStatus.textContent = '';

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                contactForm.action,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            );

            if (response.ok) {

                formStatus.textContent =
                    'Dziękuję. Wiadomość została wysłana.';

                contactForm.reset();

            } else {

                formStatus.textContent =
                    'Nie udało się wysłać wiadomości. Spróbuj ponownie.';

            }

        } catch (error) {

            formStatus.textContent =
                'Wystąpił problem z połączeniem. Spróbuj ponownie.';

        }

        submitButton.disabled = false;
        submitButton.innerHTML =
            originalButtonContent;

    });

}

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('navigation-open');

        if (navigation.classList.contains('navigation-open')) {
            menuButton.textContent = 'ZAMKNIJ';
        } else {
            menuButton.textContent = 'MENU';
        }
    });

    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('navigation-open');
            menuButton.textContent = 'MENU';
        });
    });
}