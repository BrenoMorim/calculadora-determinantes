const formularios = document.querySelectorAll("form");
formularios.forEach(formulario => {
    let limparFormulario = formulario.querySelector(".limpar");
    let spanDeterminante = formulario.querySelector("span#det");
    limparFormulario.addEventListener("click", (event) => {
    event.preventDefault();
    formulario.reset();
    spanDeterminante.textContent = "__";
    });
});