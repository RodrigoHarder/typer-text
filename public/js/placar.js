$("#placar-jogo").click(mostraPlacar);

function inserirPlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var numeroDePalavras = $("#contador-palavras").text();
    var numeroDeCaracteres = $("#contador-caracteres").text();
    var usuario = "Rodrigo";
    var linhaDePontuacao = novaLinhaDePontuacao(usuario, numeroDePalavras, numeroDeCaracteres);
    
    linhaDePontuacao.find(".btn").click(removeLinhaComPontuacao);

    corpoTabela.append(linhaDePontuacao);

    $(".placar").slideDown();
    scrollPlacar();
}

function novaLinhaDePontuacao(usuario, palavras, caracteres){
    var novaLinha = $("<tr>");
    var colunaUsuario = $("<td>").addClass("py-3").text(usuario);
    var colunaNumeroDePalavras = $("<td>").addClass("py-3").text(palavras);
    var colunaNumeroDeCaracteres = $("<td>").addClass("py-3").text(caracteres);
    var colunaRemover = $("<td>");
    var botao = $("<button>").addClass("btn btn-outline-primary");
    var icone = $("<i>").addClass("bi bi-trash");

    botao.append(icone);
    colunaRemover.append(botao);
    novaLinha.append(colunaUsuario);
    novaLinha.append(colunaNumeroDePalavras);
    novaLinha.append(colunaNumeroDeCaracteres);
    novaLinha.append(colunaRemover)

    return novaLinha;
}

function removeLinhaComPontuacao(){
    var elementoRemovido = $(this).parent().parent();
    elementoRemovido.fadeOut(1000);
    setTimeout(()=>{
        elementoRemovido.remove();
    }, 1000);
}

function mostraPlacar(){
    $(".placar").stop().slideToggle();
}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;
    $("html").animate({
        scrollTop: posicaoPlacar+'px'
    },500);
}