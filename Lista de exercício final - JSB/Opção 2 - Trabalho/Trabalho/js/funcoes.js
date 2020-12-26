// Sugestao de estrutura para utilizar na sua solucao
var g_veiculos = [
    [{ "ImagemCarro": "civic", "Fabricante": "Honda", "Nome": "Civic", "Potencia": "150 cv", "Garantia": "3 anos", "Consumo": "9,7km/l" },
    { "ImagemCarro": "corolla", "Fabricante": "Toyota", "Nome": "Corolla", "Potencia": "144 cv", "Garantia": "3 anos", "Consumo": "10,6 km/l" }],
    [{ "ImagemCarro": "troller", "Fabricante": "Ford", "Nome": "Troller", "Potencia": "200 cv", "Garantia": "3 anos", "Consumo": "7,7 km/l" },
    { "ImagemCarro": "wrangler", "Fabricante": "Jepp", "Nome": "Wrangler", "Potencia": "199 cv", "Garantia": "2 anos", "Consumo": "3,1km/l" }]];
// Exemplo de uso:
// g_veiculos[0][0].Fabricante -> exibe "Honda"
// g_veiculos[0][0].Nome       -> exibe "Civic"
// g_veiculos[0][1].Fabricante -> exibe "Toyota"
// g_veiculos[1][0].Fabricante -> exibe "Ford"
// g_veiculos[1][1].Potencia   -> exibe "199 cv"

function validaInformacoes() {
    txtNome = document.getElementById("txtNome").value;
    txtIdade = parseInt(document.getElementById("txtIdade").value);
    selectPassatempo = document.getElementById("selectPassatempo").value;
    if (txtNome == "") {
        alert("Campo nome está em branco")
    }
    else if (/^\s+/.test(txtNome)) {
        alert("Campo nome possui somente espaços")
    }
    else if (txtIdade < 1 && txtIdade > 130) {
        alert("Idade incorreta, insira uma idade entre 1 e 130 !")
    }
    else if (!(/^[0-9]+$/.test(txtIdade))) {
        alert("Campo idade está em formato incorreto ou em branco!")
    }
    else if (selectPassatempo == "a") {
        alert("Selecione uma opção de passatempo predileto!")
    }
    else {
        localStorage.setItem("nomeUsuario", txtNome);
        localStorage.setItem("idadeUsuario", txtIdade);
        localStorage.setItem("opcaoEscolhida", selectPassatempo);
        window.open('aguarde.html', '_self')
    }
}

function carregaProxPagina() {
    numero = Math.floor(Math.random() * 6) + 5;
    cronometro = setInterval(atualizaContador, 1000)
}
function atualizaContador() {
    if (numero == 0) {
        clearInterval(cronometro)
        window.open('verVeiculo.html', '_self')
    }
    else {
        if (numero > 0 && numero <= 3) {
            document.getElementById("tempoProcessamento").style.color = 'red';
        }
        document.getElementById("tempoProcessamento").innerHTML = `${numero--}`;
    }
}
function lerPerfil() {
    carroAtual = 0;
    cronometroCarrosel = setInterval(alteraDados, 2000);
    nomeCompleto = localStorage.getItem("nomeUsuario");
    document.getElementById("nomeUsuario").innerHTML = `${nomeCompleto},`
}
function alteraDados() {
    categoria = localStorage.getItem("opcaoEscolhida");
    categoria == 'b' ? numeroOpcao = 0 : numeroOpcao = 1
    carroAtual == 1 ? carroAtual = 0 : carroAtual++;
    document.getElementById("fotoVeiculo").src = `../img/${g_veiculos[numeroOpcao][carroAtual].ImagemCarro}.jpg`;
    document.getElementById("spanFabricante").innerHTML = `${g_veiculos[numeroOpcao][carroAtual].Fabricante}`
    document.getElementById("spanNome").innerHTML = `${g_veiculos[numeroOpcao][carroAtual].Nome}`
    document.getElementById("spanPotencia").innerHTML = `${g_veiculos[numeroOpcao][carroAtual].Potencia}`
    document.getElementById("spanGarantia").innerHTML = `${g_veiculos[numeroOpcao][carroAtual].Garantia}`
    document.getElementById("spanConsumo").innerHTML = `${g_veiculos[numeroOpcao][carroAtual].Consumo}`
}

function mudarPerfil() {
    window.open('index.html', '_self')
}

function carrega() {
    nomeInserido = localStorage.getItem("nomeUsuario");
    idadeInserida = localStorage.getItem("idadeUsuario");
    passatempoInserido = localStorage.getItem("opcaoEscolhida");
    document.getElementById("txtNome").value = nomeInserido;
    document.getElementById("txtIdade").value = idadeInserida;
    document.getElementById("selectPassatempo").value = passatempoInserido;
}







