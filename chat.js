
function enviar_mensagem() {
    const btn_enviar = document.querySelector("#enviar_mensagem")

    btn_enviar.addEventListener("click", () => {
        const div_mensagem = document.createElement("div")
        const mensagem = document.querySelector(".chat_box")
        const historico_msg = document.querySelector(".historico_msg")

        div_mensagem.innerText = mensagem.value;
        historico_msg.appendChild(div_mensagem);
        console.log(mensagem.value);
    })
}

enviar_mensagem();