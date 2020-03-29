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

//check which plan got clicked
$("body").on("click", "#plan_remoto_btn", function(){
    consulta.plan = "remoto";
})
$("body").on("click", "#plan_gold_btn", function(){
    consulta.plan = "gold";
})
$("body").on("click", "#plan_premium_btn", function(){
    consulta.plan = "premium";
})
$("body").on("click", "#plan_personalizado_btn", function(){
    consulta.plan = "personalizado";
})



$("body").on("keyup", function(){

    let nombre_value = $("#nombre").val();
    let email_value = $("#email").val();
    let empresa_value = $("#empresa").val();

    if(nombre_value.length > 0 && email_value.length >0 && empresa_value.length >0){
        $("#enviar").prop("disabled", false);
    } else {
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
        consulta.nombre = nombre_value;
        consulta.empresa = empresa_value;
        consulta.email = email_value;
        console.log("send form ",consulta)

        $.ajax({
            url: "/contact",
            method: "POST",
            data: consulta,
            success: function(res){
                console.log("cool");
                alert("Nos contactaremos con usted a la brevedad.")
                $("#exampleModalCenter").modal("hide");
            }
        })
    }

})