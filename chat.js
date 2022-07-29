
function enviar_mensagem() {
    const btn_enviar = document.querySelector("#btn_enviar_mensagem")

    btn_enviar.addEventListener("click", () => {
        const div_mensagem = document.createElement("div")
        const btn_editar = document.createElement("input")
        const btn_excluir = document.createElement("input")
        btn_excluir.setAttribute("class", "btn_excluir_msg")
        btn_excluir.setAttribute("type", "button")
        btn_excluir.setAttribute("value", "Excluir")
        btn_excluir.setAttribute("onclick", "excluir_mensagem(this)")
        btn_editar.setAttribute("class", "btn_editar_msg")
        btn_editar.setAttribute("type", "button")
        btn_editar.setAttribute("value", "Editar")
        btn_editar.setAttribute("onclick", "editar_mensagem(this)")
        div_mensagem.setAttribute("class", "div_box")

        const mensagem = document.querySelector(".chat_box")
        const historico_msg = document.querySelector(".historico_msg")

        div_mensagem.innerText = mensagem.value;
        historico_msg.appendChild(div_mensagem);
        div_mensagem.appendChild(btn_editar)
        div_mensagem.appendChild(btn_excluir)
    })
}

function editar_mensagem(editavel) {
    const msg = document.querySelector(".chat_box")
    // const btn_editar = editavel
    editavel.parentElement.innerText = msg.value

    // const btn_editar = document.createElement("input")  //gambiarra master
    // const btn_excluir = document.createElement("input")
    // btn_excluir.setAttribute("class", "btn_excluir_msg")
    // btn_excluir.setAttribute("type", "button")
    // btn_excluir.setAttribute("value", "Excluir")
    // btn_excluir.setAttribute("onclick", "excluir_mensagem(this)")
    // btn_editar.setAttribute("class", "btn_editar_msg")
    // btn_editar.setAttribute("type", "button")
    // btn_editar.setAttribute("value", "Editar")
    // btn_editar.setAttribute("onclick", "editar_mensagem(this)")


}

function excluir_mensagem(elemento) {
    elemento.parentElement.remove()
}

enviar_mensagem();
editar_mensagem();
excluir_mensagem();