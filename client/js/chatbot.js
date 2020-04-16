let data = {
    email: "",
    messages: []
}

var interval



setTimeout(() => {
    $(".chatbot-div").show("slow");
    setTimeout(() => {
        $("#chat-here").append(`
        
            <div class="chat-bubble-bot">
            <p>Hola ¿En qué puedo ayudarte?</p>
            </div>
        
        `);
    }, 1000);
}, 3000);

function ValidateEmail_noalert(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}


//user sends chat
$("body").on("click", ".send_chat", async function(){

    $(this).attr("disabled", true);

    let user_text = $("#chatbot-textarea").val();

    //check if email
    await search_email_in_string(user_text);


    console.log(data);

    $("#chat-here").append(`
    
        <div class="chat-bubble-user" id="this">
        <p>${user_text}</p>
        </div>

    `)

    $("#chatbot-textarea").val("");





})


function search_email_in_string(string){
    let string_array = string.split(" ");
    let email_found = false;
    for(let i = 0; i < string_array.length; i++){
        let is_email = ValidateEmail_noalert(string_array[i]);
        if(is_email === true){
            email_found = true
            data.email = string_array[i]
        } else {}
    }

    if(email_found === false){
        data.messages.push(string);
        console.log(data)

        setTimeout(() => {

            $("#chat-here").append(`
            
                <div class="chat-bubble-bot">
                <p>Muy bien, por favor dime tu email para contactarte</p>
                </div>
            
            `);
    
            $("#chat-here").animate({ scrollTop: $(document).height()-$(window).height() });
            $(".send_chat").attr("disabled", false);
            console.log($(".send_chat"))
        }, 3000);
    } else if (email_found === true){
        setTimeout(() => {

            $("#chat-here").append(`
            
                <div class="chat-bubble-bot">
                <p>Gracias por tu email, te contactaremos enseguida!</p>
                </div>
            
            `);
    
            $("#chat-here").animate({ scrollTop: $(document).height()-$(window).height() });
    
        }, 3000);
    }
}

function check_if_data_is_complete(data){
    interval = setInterval(() => {
        if(!data){

        } else {
            if(data.email.length > 0 && data.messages.length > 0){
                console.log("Send ajax post request");
                clearInterval(interval);
            }
        }
   
    }, 1000);
}

check_if_data_is_complete(data);


$("body").on("click", ".close-chatbot", function(){

    $(".chatbot-div").remove();

})
