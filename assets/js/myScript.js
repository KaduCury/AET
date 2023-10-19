// Navbar Toggle Animation by Class
$(window).scroll(function(){
    if($(document).scrollTop() > 800){
      $('nav').addClass('animate');
    }else{
      $('nav').removeClass('animate');
    }
})

// Modal Engine
var modalOne = document.getElementById('dialog-one'); var openModalOne = document.getElementById('article-one'); var buttonCloseOne = document.getElementById('close-one');
openModalOne.onclick = function() {modalOne.showModal();}
buttonCloseOne.onclick = function() {modalOne.close();};

var modalTwo = document.getElementById('dialog-two'); var openModalTwo = document.getElementById('article-two'); var buttonCloseTwo = document.getElementById('close-two');
openModalTwo.onclick = function() {modalTwo.showModal();}
buttonCloseTwo.onclick = function() {modalTwo.close();};

var modalThree = document.getElementById('dialog-three'); var openModalThree = document.getElementById('article-three'); var buttonCloseThree = document.getElementById('close-three');
openModalThree.onclick = function() {modalThree.showModal();}
buttonCloseThree.onclick = function() {modalThree.close();};

var modalFour = document.getElementById('dialog-four'); var openModalFour = document.getElementById('article-four'); var buttonCloseFour = document.getElementById('close-four');
openModalFour.onclick = function() {modalFour.showModal();}
buttonCloseFour.onclick = function() {modalFour.close();};

var modalFive = document.getElementById('dialog-five'); var openModalFive = document.getElementById('article-five'); var buttonCloseFive = document.getElementById('close-five');
openModalFive.onclick = function() {modalFive.showModal();}
buttonCloseFive.onclick = function() {modalFive.close();};

var modalSix = document.getElementById('dialog-six'); var openModalSix = document.getElementById('article-six'); var buttonCloseSix = document.getElementById('close-six');
openModalSix.onclick = function() {modalSix.showModal();}
buttonCloseSix.onclick = function() {modalSix.close();};

var modalSeven = document.getElementById('dialog-seven'); var openModalSeven = document.getElementById('article-seven'); var buttonCloseSeven = document.getElementById('close-seven');
openModalSeven.onclick = function() {modalSeven.showModal();}
buttonCloseSeven.onclick = function() {modalSeven.close();};

// Leia Mais Engine
function leiaMais() {
  var pontos = document.getElementById('pontos');
  var maisTexto = document.getElementsByClassName('mais');
  var btnLeiaMais = document.getElementById('btnLeiaMais');

  if (pontos.style.display === 'none') {
      for (var i = 0; i < maisTexto.length; i++) {
          maisTexto[i].style.display = 'none';
      }
      pontos.style.display = 'inline';
      btnLeiaMais.textContent = 'Leia Mais';
  } else {
      for (var i = 0; i < maisTexto.length; i++) {
          maisTexto[i].style.display = 'inline';
      }
      pontos.style.display = 'none';
      btnLeiaMais.textContent = 'Leia Menos';
  }
}

// Mask Phone Number Engine
const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}
const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

// Form Engine
function formEngine(){							
  document.getElementById('formToWhatsApp').addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o envio do formulário padrão
      
      // Obtendo os valores do formulário
      var nome = document.getElementById('campoNome').value;
      var telefone = document.getElementById('campoTelefone').value;
      var marca = document.getElementById('campoMarca').value;
      var modelo = document.getElementById('campoModelo').value;
      var mensagem = document.getElementById('campoMensagem').value;
      
      // Criando a URL baseada nos dados
      var url = "";
      if (marca != "" && modelo != "") { 
          var url = 'https://wa.me//5514998170330?text=Olá!%20Meu%20nome%20é%20' + encodeURIComponent(nome) 
          + '%20e%20meu%20telefone%20é%20' + encodeURIComponent(telefone)
          + '.%0DTenho%20um%20carro%20da%20marca%20' + encodeURIComponent(marca) 
          + '%20e%20modelo%20' + encodeURIComponent(modelo)
          + '.%0D%0D' + encodeURIComponent(mensagem);
      } else if (marca != "" && modelo === "") {
          var url = 'https://wa.me//5514998170330?text=Olá!%20Meu%20nome%20é%20' + encodeURIComponent(nome) 
          + '%20e%20meu%20telefone%20é%20' + encodeURIComponent(telefone)
          + '.%0DTenho%20um%20carro%20da%20marca%20' + encodeURIComponent(marca)
          + '.%0D%0D' + encodeURIComponent(mensagem);
      } else if (marca === "" && modelo != "") {
          var url = 'https://wa.me//5514998170330?text=Olá!%20Meu%20nome%20é%20' + encodeURIComponent(nome) 
          + '%20e%20meu%20telefone%20é%20' + encodeURIComponent(telefone)
          + '.%0DTenho%20um%20carro%20da%20modelo%20' + encodeURIComponent(modelo)
          + '.%0D%0D' + encodeURIComponent(mensagem);
      } else {
          var url = 'https://wa.me//5514998170330?text=Olá!%20Meu%20nome%20é%20' + encodeURIComponent(nome) 
          + '%20e%20meu%20telefone%20é%20' + encodeURIComponent(telefone)
          + '.%0D%0D' + encodeURIComponent(mensagem);
      } 

      // Redirecionando para a URL criada
      window.open(url, '_blank');
  });
}

// Recaptcha Engine
grecaptcha.execute();