function verifSenha(){

    var inputSenha = document.getElementById("senha");
    var inputConfSenha = document.getElementById("confirmaSenha");

    if(inputSenha.value != "" && inputConfSenha.value != ""){

        if(inputSenha.value.length > 5 && inputConfSenha.value.length > 5){

            if(inputSenha.value.length > 8 || inputConfSenha.value.length > 8){
                inputSenha.setAttribute("maxlength", 8);
                inputConfSenha.setAttribute("maxlength", 8);
                alert("Senha com mais de 8 caracteres!");
            }
            else if(inputSenha.value.length <= 8 && inputSenha.value == inputConfSenha.value){
                alert("Senha Cadastrada com Sucesso!")
            }
            else if(inputSenha.value != inputConfSenha.value){
                alert("Senhas Diferentes!");
            }
        }
        else{
            alert("Senha com menos de 6 caracteres!");
        }
    }
    else{
        alert("Senha Deve ser Preenchida!");
    }
}


