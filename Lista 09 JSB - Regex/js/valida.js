function validar(tipo) {
    switch (tipo) {
    case "data":
        padrao = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[012])\/(\d{2}|\d{4})$/;
        IdInput = "txtData";
        IdImagem = "imgValidaData"
        break;
    case "cpf":
        padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        IdInput = "txtCPF";
        IdImagem = "imgValidaCPF"
        break;
    case "numMatricula":
    // IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy
        padrao = /^(iftm|IFTM)-\d{3}\/\d{3}-\w{2}$/;
        IdInput = "txtMatricula";
        IdImagem = "imgMatricula"
        break;
    case "codDisciplinaV1":
    //  MT-xx.xxx-IFTM
        padrao = /^[Mm][Tt]-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
        IdInput = "codDiscV1";
        IdImagem = "imgCDV1"
        break;
        case "codDisciplinaV2":
    //   MT-xx.xxx-IFTM
        padrao = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/;
        IdInput = "codDiscV2";
        IdImagem = "imgCDV2"
        break;
        case "codDisciplinaV3":
    //   MT-xx.xxx-IFTM
    padrao = /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]$/;
        IdInput = "codDiscV3";
        IdImagem = "imgCDV3"
        break;
    case "codDisciplinaV4":
    // MT-xx.xxx-IFTM Y
    padrao = /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm] (Uberlândia Centro|Uberlândia)$/;
        IdInput = "codDiscV4";
        IdImagem = "imgCDV4"
        break;
    case "nomeCampus":
    // IFTM campus Uberlândia ou IFTM campus Uberlândia Centro.
        padrao = /^(Uberlândia Centro|Uberlândia)$/;
        IdInput = "txtCampus";
        IdImagem = "imgCampus"
        break;
    case "telefoneV1":
    //  +yy(xx)xxxxx-xxxx
        padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        IdInput = "txtTelefoneV1";
        IdImagem = "imgTelV1"
        break;
    case "telefoneV2":
    //  (xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx 
        padrao = /^\((\d{2}|\d{3})\)\d{5}-\d{4}$/;
        IdInput = "txtTelefoneV2";
        IdImagem = "imgTelV2"
        break;
    case "altura":
    //  x,xz ou x.xz
        padrao = /^(1(\.|,)[3-9]|2(\.|,)[0-5])\d?$/;
        IdInput = "txtAltura";
        IdImagem = "imgAltura"
        break;
    case "faturamentoAnual":
    // de R$0,00 até R$999.999.999.999,99 
        padrao = /^R\$\d?\d?\d?\.?\d?\d?\d?\.?\d?\d?\d?\.?\d?\d?\d\,[0-9][0-9]?$/;
        IdInput = "txtFatAnual";
        IdImagem = "imgFatAnual"
        break;
    case "cronometro":
    //  HH:MM:SS:CC
        padrao = /^(1\d|2[0-3]):[0-5]\d:[0-5]\d:\d\d$/;
        IdInput = "txtCronometro";
        IdImagem = "imgCronometro"
        break;
    case "senha":
    //  X&W.Y.Z-U,V.T ou X&W.Y-U,V.T
    // 321a.&apMb.aei.Ab0-asf+_,/*.cq
        padrao = /^[\w.-_]{5,}&[a-pA-P]{1,}\.[aeiou]{1,}(\.[A-Za-z0-5]{0,})?-\D{1,},[^\w]{2}\.[^ab01]{1,}$/;
        IdInput = "txtSenha";
        IdImagem = "imgSenha"
        break;
    }
    valor = document.getElementById(IdInput).value.trim();
    (padrao.test(valor) ? document.getElementById(IdImagem).src = "img/ok.png" : document.getElementById(IdImagem).src = "img/not.png")
}