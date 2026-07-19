function startChat(){

document

.querySelector(".chat")

.scrollIntoView({

behavior:"smooth"

});

}

function sendMessage(){

let input=document.getElementById("userInput");

let message=input.value;

if(message==="") return;

let messages=document.getElementById("messages");

messages.innerHTML+=`

<div class="user">${message}</div>

`;

setTimeout(()=>{

messages.innerHTML+=`

<div class="shadow">

Je suis encore en développement 😊.

Bientôt je pourrai répondre grâce à une véritable intelligence artificielle.

</div>

`;

messages.scrollTop=messages.scrollHeight;

},700);

input.value=""
