// Walidacja formularza kontaktowego
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // blokuje domyślne wysłanie

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // walidacja e-mail
    if (!email.includes("@")) {
      alert("Podaj poprawny adres e-mail!");
      return;
    }

    // walidacja długości wiadomości
    if (message.length < 50) {
      alert("Wiadomość musi mieć przynajmniej 50 znaków!");
      return;
    }

    // jeśli wszystko OK
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
    form.reset(); // czyści formularz
  });
}

const messageField = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageField && charCount) {
  messageField.addEventListener("input", function () {
    const length = messageField.value.length;
    charCount.textContent = `${length} / 50 znaków`;
  });
}
