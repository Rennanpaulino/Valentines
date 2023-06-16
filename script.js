function exibirImagem() {
    var imagemContainer = document.getElementById('imagemContainer');
    var imagem = document.createElement('img');
    imagem.src = 'galaxyssaur.jpg';
    

    imagemContainer.innerHTML = ''; // Limpa o conteúdo atual do container
    imagemContainer.appendChild(imagem); // Adiciona a imagem ao container
    
  }