function leiaMais(){
    var pontos = document.getElementById('pontos');
    var maisTexto = document.getElementsByClassName('mais');
    var btnLeiaMais = document.getElementById('btnLeiaMais');

    /*if (maisTexto.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }*/

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
