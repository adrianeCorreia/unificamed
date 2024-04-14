let chatInput = document.getElementById("chatInput");
let chatDisplay = document.getElementById('chatDisplay');
let enviaMsg = document.getElementById('enviaMsg');

Array.from(document.querySelectorAll('aside p')).forEach((menu, key)=>{
    menu.addEventListener('click', function () {
        console.log('clicou no menu: '+ key)
        document.querySelector('.selected').classList.remove('selected');
        this.classList.add('selected')
        console.log(this)
    });
})
chatInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        console.log('clicou no enter')
        newMessageUser(chatInput.value)
    }
});

enviaMsg.addEventListener('click', ()=>{
    newMessageUser(chatInput.value)
})

proxMsg()

function newMessageUser(text){
    let modeloMsg = document.getElementById('modeloRecebida').cloneNode(true);
    modeloMsg.innerText = text;
    modeloMsg.classList.remove('oculta')
    chatDisplay.appendChild(modeloMsg);
    chatInput.value = '';
    proxMsg()
}

let messagesIA = [
    'Boas-vindas a Unifica Med! O que eu posso fazer por você hoje?',
    'Qual o nome do (a) paciente?',
    'Qual a queixa principal do paciente?',
    'Qual a história familiar do paciente?',
    'Qual a história social do paciente?',
    'Quais medicamentos o paciente utiliza?',
    'O paciente possui alguma alergia?'
]

let posIaMessage = 0;
function newMessageIA(){
    if(messagesIA[posIaMessage]){
        let modeloMsg = document.getElementById('modeloEnviada').cloneNode(true);
        modeloMsg.innerText = messagesIA[posIaMessage];
        modeloMsg.classList.remove('oculta')
        chatDisplay.appendChild(modeloMsg);
        posIaMessage++;
    }
}
function proxMsg(){
    setTimeout(() => {
        newMessageIA()
    }, 1000);
}