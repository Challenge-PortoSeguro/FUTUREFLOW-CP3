


//Verificação de confirmação de Senha
var botaoEntrar = document.getElementById("botao");
var inputSenha = document.getElementById("senha");
var inputConfSenha = document.getElementById("confirmaSenha");

botaoEntrar.addEventListener("click", ()=>{
    if(inputSenha.value == inputConfSenha.value){
        alert("Senha Validada!!!");
    }
    else{
        alert("Senha Não Compatível!!!");
    }
});
