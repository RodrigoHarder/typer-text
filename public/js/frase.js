$("#trocar-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $.get("http://localhost:3000/frases",function(data){
        var frase = $(".frase");
        var numeroAleatorio = Math.floor(Math.random()*data.length);
        frase.text(data[numeroAleatorio].texto);
        atualizarTamanhoDaFrase();
        atualizaTempoDaFrase(data[numeroAleatorio].tempo);
    }) ;
}

function atualizarTamanhoDaFrase(){
    var frase = $(".frase").text();
    var numeroDePalavras = frase.split(" ").length;
    var tamanhoDaFrase = $("#tamanho-frase");
    tamanhoDaFrase.text(numeroDePalavras);
}

function atualizaTempoDaFrase(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}