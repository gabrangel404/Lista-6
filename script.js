function submit() {
    const position = document.getElementById("inputPosition").value;
    const name = document.getElementById("inputName").value.trim();
    const image = document.getElementById("inputImage").value;

    if (name === "" || image === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${image}" alt="Imagem de ${name}"><p><strong>${name}</strong></p>`;

    const container = document.getElementById(position)
    if (container) {
        container.appendChild(card);
    }

    document.getElementById("inputName").value = "";
    document.getElementById("inputImage").value = "";
}

