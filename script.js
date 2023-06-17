function exibirImagem() {
    var imagemContainer = document.getElementById('imagemContainer');
    var imagem = document.createElement('img');
    imagem.src = 'galaxyssaur.jpg';
    

    imagemContainer.innerHTML = ''; // Limpa o conteúdo atual do container
    imagemContainer.appendChild(imagem); // Adiciona a imagem ao container

    var mensagem = document.createTextNode('GOSTOU DO NOSSO ASTRONOSSAURO???');
    mensagemContainer.innerHTML = ''; // Limpa o conteúdo atual do container
    mensagemContainer.appendChild(mensagem); 
    
  }

var images = document.querySelectorAll('.carousel img');
var currentImageIndex = 0;

function showNextImage() {
  var currentImage = images[currentImageIndex];
  var nextImageIndex = (currentImageIndex + 1) % images.length;
  var nextImage = images[nextImageIndex];

  currentImage.classList.remove('active');
  nextImage.classList.add('next');

  setTimeout(function() {
    currentImage.style.opacity = '0';
    currentImage.classList.remove('next');
    nextImage.classList.add('active');
    currentImageIndex = nextImageIndex;
  }, 500);
}

setInterval(showNextImage, 3000);

var sons = [
  'audio1.m4a',
  'audio2.m4a',
  'audio3.m4a',
  'audio4.m4a',
  'audio5.m4a',
  'audio6.m4a',
  'audio7.m4a',
  'audio8.m4a',
  'audio9.m4a',
  'audio10.m4a'
];

function tocarSomAleatorio() {
  var somIndex = Math.floor(Math.random() * sons.length);
  var som = new Audio(sons[somIndex]);
  som.play();
}







