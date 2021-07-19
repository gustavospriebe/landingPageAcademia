const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobie-nav-close");

// Open Menu
mobileMenuToggle.addEventListener("click", function () {
  mobileMenu.classList.add("is-active");
});

// Local Storage Script
const form = document.getElementById("form");
let cadastrado = `<p>E-mail cadastrado.</p>`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;

  let dados = {
    name: name,
    email: email,
  };

  let convertData = JSON.stringify(dados);

  localStorage.setItem("dados", convertData);

  let carregado = document.getElementById("carregado");

  setTimeout(() => {
    carregado.innerHTML = cadastrado;
  }, 1000);
});

// Close Menu
mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('is-active');
});

