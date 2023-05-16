function verifSenha(){

    var inputSenha = document.getElementById("senha");
    var inputConfSenha = document.getElementById("confirmaSenha");

    if(inputSenha.value == "" && inputConfSenha.value == ""){
        alert("Digite uma senha!");
    }
    else if(inputSenha.value == inputConfSenha.value){
        alert("Senha Verificada!")
    }
    else{
        alert("Senha Não Compatível!");
    }
}

