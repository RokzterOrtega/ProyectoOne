/* funcion de encriptamiento */
function encryptText(inputText) {
    console.log("Input text before validation: ", inputText);
    if (!/^[a-z\s]+$/.test(inputText) || inputText.trim() === '') {
        showErrorAlert();
        return;
    }

    const conversions = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    return inputText.replace(/[aeiou]/g, match => conversions[match]);
}
/* funcion de desencriptamiento */
function decryptText(inputText) {
    console.log("Input text before validation: ", inputText);
    if (!/^[a-z\s]+$/.test(inputText) || inputText.trim() === '') {
        showErrorAlert();
        return;
    }

    const conversions = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"],
    ];

    for (let [search, replace] of conversions) {
        const regex = new RegExp(search, "g");
        inputText = inputText.replace(regex, replace);
    }
    return inputText;
}
/* evento de encriptamiento*/ 
function handleEncryption(event) {
    event.preventDefault();
    const inputText = document.getElementById("inputText").value.trim();
    const result = encryptText(inputText);
    if (result) { 
        showResult(result);
    }
}
/* evento de desencriptamiento  */
function handleDecryption(event) {
    event.preventDefault();
    const inputText = document.getElementById("inputText").value.trim();
    const result = decryptText(inputText);
    if (result) { 
        showResult(result);
    }
}
/* funcion para mostrar el encriptado */
function showResult(result) {
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.innerHTML = `<p>${result}</p>`;
    showCopyButton();
}

/** funcion de muestreo de error */
function showErrorAlert() {
    alert("El texto tiene caracteres no permitidos... \n" +
        "Únicamente se pueden introducir letras minúsculas... \n" +
        "No se permiten mayúsculas, acentos, números y otros caracteres..."
    );
}
