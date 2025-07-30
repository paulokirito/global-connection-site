function navigate(page) {
  alert(`Você clicou para navegar até: ${page}. Em breve essa página estará disponível.`);
}

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Garante que só anima 1x
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});
// Smooth Scroll for Anchor Links

// Alternância entre Login e Cadastro
const btnLogin = document.getElementById("btnLogin");
const btnCadastro = document.getElementById("btnCadastro");
const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");

if (btnLogin && btnCadastro) {
  btnLogin.addEventListener("click", () => {
    btnLogin.classList.add("active");
    btnCadastro.classList.remove("active");
    formLogin.classList.add("active");
    formCadastro.classList.remove("active");
  });

  btnCadastro.addEventListener("click", () => {
    btnCadastro.classList.add("active");
    btnLogin.classList.remove("active");
    formCadastro.classList.add("active");
    formLogin.classList.remove("active");
  });
}

// Modal Login
function openModal() {
  document.getElementById("modalLogin").style.display = "block";
}

function closeModal() {
  document.getElementById("modalLogin").style.display = "none";
}

// Alternância Login/Cadastro
// (Removido: declaração duplicada de btnLogin, btnCadastro, formLogin, formCadastro e seus event listeners)

// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
