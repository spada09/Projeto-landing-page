var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samatha")
var bruna = window.document.getElementById("bruna")
var setad = window.document.getElementById("seta-direita")
var setae = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setad.style = "display:none"
    setae.style = "display:flex"

}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setad.style = "display:flex"
    setae.style = "display:none"
}