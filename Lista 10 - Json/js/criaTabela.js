function listarAlunos() {
    tabAlunos = JSON.parse(localStorage.getItem("tabAlunos"));
    tabela = document.getElementById("tabelaDeDados");
    if (!tabAlunos) alert("Não há alunos cadastrados");
    else {
        main = document.querySelector("main");

        for (i = 0; i < tabAlunos.alunos.length; i++) {
            linha = tabela.insertRow(-1);
            
            linha.insertCell(-1).innerHTML = tabAlunos.alunos[i].nome;

            linha.insertCell(-1).innerHTML = tabAlunos.alunos[i].ra;

            linha.insertCell(-1).innerHTML = tabAlunos.alunos[i].nota1Bim;

            linha.insertCell(-1).innerHTML = tabAlunos.alunos[i].nota2Bim;

            linha.insertCell(-1).innerHTML = tabAlunos.alunos[i].nota1Bim + tabAlunos.alunos[i].nota2Bim + " pts";
        }
    }
}
