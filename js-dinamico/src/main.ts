
// casting (AS):
const campoNome = document.getElementById("campoNome") as HTMLInputElement;

// Query selector (generics - input element):
const campoEmail= document.querySelector<HTMLInputElement>("#campoEmail")

// Query selector (generics - element):
const paragrafo = document.querySelector(".minhaSessao p")
const campoConcorda = document.querySelector<HTMLInputElement>("#campoConcorda");
const form = document.querySelector("form");

if(campoNome && paragrafo) {
  campoNome.onblur = function() {
    const valorDigitado = campoNome.value
    paragrafo.textContent = "Olá, " + valorDigitado;
  }
}

if(campoEmail) {
  campoEmail.onblur = function() {
    const valorDigitado = campoEmail.value

    if(!valorDigitado.includes('@')){
      alert("Insira um e-mail válido")
    } else {
      console.log(valorDigitado)
    }
  }
}

if (form) {
  form.onsubmit = function() {
    if (campoConcorda && !campoConcorda.checked) {
      alert("Você deve concordar com os termos e condições.");
    }
  };
}

