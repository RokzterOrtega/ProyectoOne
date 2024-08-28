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
