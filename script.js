function exibirImagem() {
    var imagemContainer = document.getElementById('imagemContainer');
    var imagem = document.createElement('img');
    imagem.src = 'galaxyssaur.jpg';
    

    imagemContainer.innerHTML = ''; // Limpa o conteúdo atual do container
    imagemContainer.appendChild(imagem); // Adiciona a imagem ao container

    var mensagem = document.createTextNode('GOSTOU DO NOSSO ASTROSSAURO???');
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
