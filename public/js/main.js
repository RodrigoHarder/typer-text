var campoDeTexto = $("#campo-digitacao");
var tempoInicial = $("#tempo-digitacao").text();
var reiniciarJogo = $("#reiniciar-jogo");

$(function(){
    atualizarTamanhoDaFrase();
    iniciarContadores();
    iniciarCronometro();
    marcadoresColoridosNasBordas();
    reiniciarJogo.click(jogarNovamente);
})

function iniciarContadores(){
    campoDeTexto.on("input", ()=>{
        var conteudo = campoDeTexto.val();
        var quantidadeDePalavrasDigitadas = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(quantidadeDePalavrasDigitadas);
        var quantidadeDeCaracteresDigitados = conteudo.replace(/\s/g, '').length;
        $("#contador-caracteres").text(quantidadeDeCaracteresDigitados);
    })
}

function iniciarCronometro(){
    campoDeTexto.one("focus", ()=>{
        var tempoRestante = $("#tempo-digitacao").text();
        var cronometroId = setInterval(()=>{
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            reiniciarJogo.attr("disabled", true);
            if(tempoRestante<1){
                clearInterval(cronometroId);
                finalizarJogo();
                inserirPlacar();
            }  
        }, 1000)
    })
}

function finalizarJogo(){
    campoDeTexto.attr("disabled", true);
    reiniciarJogo.attr("disabled", false);
    campoDeTexto.toggleClass("bg-secondary");
}

function jogarNovamente(){
    campoDeTexto.attr("disabled", false);
    campoDeTexto.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    iniciarCronometro();
    campoDeTexto.toggleClass("bg-secondary");
    
    campoDeTexto.removeClass("border-4 border-danger");
    campoDeTexto.removeClass("border-4 border-success"); 
}

function marcadoresColoridosNasBordas(){
    campoDeTexto.on("input", ()=>{
        var frase = $(".frase").text();
        var digitado = campoDeTexto.val();
        if(frase.startsWith(digitado)){
            campoDeTexto.addClass("border-4 border-success");
            campoDeTexto.removeClass("border-danger");
        }else{
            campoDeTexto.addClass("border-4 border-danger");
            campoDeTexto.removeClass("border-success");
        }
    })
}




