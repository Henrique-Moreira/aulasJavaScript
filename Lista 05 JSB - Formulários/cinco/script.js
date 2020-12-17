function verifica() {
    login = document.getElementById("login").value;
    if(login == "") alert("Informe o login!");
    else senhas();
}

function senhas() {
    senha = document.getElementById("senha").value;
    senhaConfirma = document.getElementById("confirmSenha").value;
    if(senha == senhaConfirma) alert("Todos os campos foram digitados corretamente")
    else {
        document.getElementById("senha").value = "";
        document.getElementById("confirmSenha").value = "";
        alert("As senhas não coincidem!")
    }
}