let consulta = {
    plan: false,
    nombre: false,
    email: false,
    empresa: false
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("Has ingresado un email no valido")
    return (false)
}

function ValidateName(name)
{
    if (/^[a-zA-Z ]+$/.test(name)){
        return(true)
    }
    alert("Error, por favor verifica los datos ingresados")
}


$("body").on("keyup", function(){

    console.log("keypress...");

    let nombre_value = $("#nombre").val();
    let email_value = $("#email").val();
    let empresa_value = $("#empresa").val();

    if(nombre_value.length > 0 && email_value.length >0 && empresa_value.length >0){
        console.log("Activate button")
        $("#enviar").prop("disabled", false);
    } else {
        console.log("Not")
        $("#enviar").prop("disabled", true);
    }

})

$("body").on("click", "#enviar", function(){
    let nombre_value = $("#nombre").val();
    let email_value = $("#email").val();
    let empresa_value = $("#empresa").val();
    
    //regex validate
    let val_email = ValidateEmail(email_value);
    let val_nombre = ValidateName(nombre_value);
    let val_empresa = ValidateName(empresa_value);

    if(val_email === true && val_nombre === true && val_empresa === true){
        console.log("send form");
        
    }

})