// Walidacja formularza kontaktowego
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // blokuje domyslne wyslanie

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email.includes("@")) {
      alert("Podaj poprawny adres e-mail!");
      return;
    }

    if (message.length < 50) {
      alert("Wiadomość musi mieć przynajmniej 50 znaków!");
      return;
    }

    // wszystko OK
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    form.reset(); // czysci formularz
  });
}

// aktualizacja licznika stron w czasie rzeczywistym
const messageField = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageField && charCount) {
  messageField.addEventListener("input", function () {
    const length = messageField.value.length;
    charCount.textContent = "${length} / 50 znaków";
  });
}

// powiekszanie zdjecia
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // powiekszony obraz
    const largeImg = document.createElement("img");
    largeImg.src = this.src;
    overlay.appendChild(largeImg);

    // dodanie overlay do body
    document.body.appendChild(overlay);

    // zablokowanie scrollowania strony
    document.body.classList.add("no-scroll");

    // klikniecie w overlay zamyka powiekszenie
    const closeOverlay = () => {
      overlay.remove();
      document.body.classList.remove("no-scroll"); // odblokowanie scrolla
    };

    overlay.addEventListener("click", closeOverlay);
    overlay.addEventListener("touchstart", closeOverlay);
  });
});

const toggleBtn = document.querySelector(".toggleGallery");
const galleryGrid = document.querySelector(".gallery-grid");

console.log(toggleBtn, galleryGrid); // sprawdź w konsoli

if (toggleBtn && galleryGrid) {
  toggleBtn.addEventListener("click", () => {
    galleryGrid.classList.toggle("hidden"); // dodaje lub usuwa klasę hidden

    // zmiana tekstu przycisku
    if (galleryGrid.classList.contains("hidden")) {
      toggleBtn.textContent = "Pokaż galerię";
    } else {
      toggleBtn.textContent = "Ukryj galerię";
    }
  });
}
