const SomeInputs = document.querySelectorAll("input");

for (let i = 0; i < 5; i++){
    SomeInputs[i].addEventListener('blur', (evento)=>{
        
        if(evento.target.id == "nome" || evento.target.id == "sobrenome" || evento.target.id == "email" || evento.target.id == "senha" || evento.target.id == "confirmaSenha"){
            verifMin(SomeInputs[i].value.length);
        }

        if(evento.target.id == "email"){
            verifEmail(SomeInputs[i].value);
        }

        if(evento.target.id == "senha" || evento.target.id == "confirmaSenha"){
            verifSenha(SomeInputs[i].value.length);
        }
    });
}


function verifMin(inputNull){
    if (inputNull == 0){
        alert("Campo Nulo!");
    }
    else if(inputNull < 5){
        alert("Conteúdo menor que 5 caracteres!");
    }
}


function verifEmail(valor){
    if(valor.length > 4){
        if(valor.includes("@")){
            alert("Email valido");
        }
        else{
            alert("email invalido");
        }
    }
}


// VALIDAR SENHA E CONFIRMAR SENHA
var inputSenha = document.getElementById("senha");
var inputConfSenha = document.getElementById("confirmaSenha");
inputSenha.setAttribute('maxlength', '8');
inputConfSenha.setAttribute('maxlength', '8');

function verifSenha(password){
    if(password > 5){
        if(inputSenha.value == inputConfSenha.value){
            alert("Senha Cadastrada com Sucesso!");
        }
        else{
            alert("Senhas Diferentes!");
        }
    }
    else{
        alert("Senha com menos de 6 caracteres!");
    }
}

function offMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}
