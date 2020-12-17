function cadastrar() {
    nomeForm = document.getElementById("txtNome").value;
    raForm = document.getElementById("txtRA").value;
    txtNota1bimForm = parseFloat(document.getElementById("txtNota1bim").value);
    txtNota2bimForm = parseFloat(document.getElementById("txtNota2bim").value);

    aluno = { nome: nomeForm, ra: raForm, nota1Bim: txtNota1bimForm, nota2Bim: txtNota2bimForm };

    tabAlunos = JSON.parse(localStorage.getItem("tabAlunos"));
    if (!tabAlunos) tabAlunos = { alunos: [] }
    tabAlunos.alunos.push(aluno);

    localStorage.setItem("tabAlunos", JSON.stringify(tabAlunos));

    alert("Cadastro efetuado com sucesso!!!")
    console.log(aluno)
}