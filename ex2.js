function commenter() {
    message_comentaire = document.getElementById("message_comentaire")
    textes = document.getElementById("messages")

    div_commentaire = document.createElement("div")
    message = document.createElement("p")
    span_repondre = document.createElement("span")
    input_reponse = document.createElement("input")
    button_reponse = document.createElement("button")
    div_reponses = document.createElement("div")
    hr = document.createElement("hr")

    div_commentaire.className = "commentaire-container"
    message.className = "comentaire"
    span_repondre.innerHTML="Repondre"
    span_repondre.id= "span_repondre" 
    input_reponse.type = "text"
    input_reponse.id = "input"
    input_reponse.className = "input"
    input_reponse.placeholder = "reponse"
    button_reponse.className = "btn btn-primary mt-2"
    button_reponse.id = "button_reponse"
    button_reponse.innerHTML = "Repondre"
    div_reponses.className = "reponses"

    message.innerHTML = message_comentaire.value
    message.appendChild(span_repondre)
    div_commentaire.appendChild(message)
    div_commentaire.appendChild(div_reponses)
    div_commentaire.appendChild(input_reponse)
    div_commentaire.appendChild(button_reponse)
    div_commentaire.appendChild(hr)


    textes.appendChild(div_commentaire)
    message_comentaire.value = ""

    span_repondre.addEventListener("click",()=>{
        input_reponse.style.display = "block"
        button_reponse.style.display = "block"
    })

    button_reponse.addEventListener("click", ()=>{
        reponse = document.createElement("p")
        reponse.className = "reponse"
        reponse.innerHTML = input_reponse.value
        div_reponses.appendChild(reponse)
        input_reponse.value = ""
        input_reponse.style.display = "none"
        button_reponse.style.display = "none"
    })

}