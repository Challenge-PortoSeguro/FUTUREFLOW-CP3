//VALIDAR NOME
var firstName = document.getElementById("nome");
function validNome(){
    if(firstName.value != ""){
        if(firstName.value.length <= 5){
            alert("Nome precisa ter mais de 5 caracteres!");
        }
        else{
            alert("Nome Salvo!");
        }
    }
    else{
        alert("Preencha o nome!")
    }
};


//VALIDAÇÃO DE SOBRENOME
var lastName = document.getElementById("sobrenome");
function validSobrenome(){
    if(lastName.value != ""){
        if(lastName.value.length <= 5){
            alert("Sobrenome precisa ter mais de 5 caracteres!");
        }
        else{
            alert("Sobrenome Salvo!");
        }
    }
    else{
        alert("Preencha o Sobrenome!")
    }
};




function validEmail(){
    const inputEmail = document.getElementById("email");

    

}



// VALIDAR SENHA E CONFIRMAR SENHA
var inputSenha = document.getElementById("senha");
var inputConfSenha = document.getElementById("confirmaSenha");
inputSenha.setAttribute('maxlength', '8');
inputConfSenha.setAttribute('maxlength', '8');

function verifSenha(){
    if(inputSenha.value != "" && inputConfSenha.value != ""){

        if(inputSenha.value.length > 5 && inputConfSenha.value.length > 5){
            
            if(inputSenha.value.length > 8 || inputConfSenha.value.length > 8){
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



