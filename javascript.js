function verifSenha(){

    var inputSenha = document.getElementById("senha");
    var inputConfSenha = document.getElementById("confirmaSenha");

    if(inputSenha.value != "" && inputConfSenha.value != ""){
        if(inputSenha.value.length > 5 && inputConfSenha.value.length > 5){
            
        }
        else{
            alert("Senha com menos de 6 caracteres!");
        }
    }
    else{
        alert("Senha Deve ser Preenchida!");
    }
}


