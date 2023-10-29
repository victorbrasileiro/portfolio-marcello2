function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split(''); /*o split vai separar tudo o que
                                                     tiver no elemento*/
    elemento.innerHTML = ' '; /*vai ser vazio ou deixa separado*/
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo);


