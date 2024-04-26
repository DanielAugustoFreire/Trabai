document.addEventListener("DOMContentLoaded", function(){

    var btnGravar = document.getElementById("SubButton");

    btnGravar.addEventListener("click", Logarse);

})

console.log(123123)


function Logarse() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email != "" && 
    password != "")
    {
        let obj = {
            email: email,
            password : password
        }

        fetch('/login/logado', {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(r => {
            return r.json();
        })
        .then(r=> {
            if(r.ok) {
                alert("Produto cadastrado!");
            }
            else{
                alert("Erro ao cadastrar produto");
            }
        })
        .catch(e => {
            console.log(e);
        })
    }
    else{
        alert("Preencha todos os campos corretamente!");
        return;
    }
}