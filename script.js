//    function ativaLetra(elemento) {
//        const arrTexto = elemento.innerHTML.split(''); /*o split vai separar tudo o que
//                                                         tiver no elemento*/
//        elemento.innerHTML = ' '; /*vai ser vazio ou deixa separado*/
//        arrTexto.forEach((letra, i)=>{
//            setTimeout(()=>{
//                elemento.innerHTML += letra;
//            }, 100 * i);
//        });
//    }

//    const titulo = document.querySelector('.digitando');
//    ativaLetra(titulo)

document.addEventListener('DOMContentLoaded', function () {
    // Seu título
    var title = document.getElementById('.digitando');
  
    // Função para reiniciar a animação
    function restartAnimation() {
      title.style.animation = 'none';
      void title.offsetWidth; // Forçar uma reflow
      title.style.animation = null;
    }
  
    // Adiciona um ouvinte de evento para reiniciar a animação quando terminar
    title.addEventListener('animationiteration', function () {
      restartAnimation();
    });
  
    // Inicializa a animação
    restartAnimation();
  });
  
  function copiarTexto() {
    var elemento = document.querySelector("#copia");

    var range = document.createRange();
    range.selectNode(elemento);

    // Seleciona o texto
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Deseleciona o texto
    window.getSelection().removeAllRanges();

    // Exibe uma mensagem (opcional)
    alert("Texto copiado com sucesso!");
}
