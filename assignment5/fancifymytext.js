// Makes the text 24pt
function makeBigger() {
    const textArea = document.getElementById("textarea");
    const boringButton = document.getElementById("r2");
    
    boringButton.checked = false;    
    //alert("Hello, world!");
    textArea.style.fontSize = "24px";
}

// Revert the text style to their initial values
function makeBoring() {
    const fancifyButton = document.getElementById("r1");
    const boringButton = document.getElementById("r2");
    const textArea = document.getElementById("textarea");

    if (boringButton.checked) {
        fancifyButton.checked = false;

        textArea.style.fontSize = "initial";
        textArea.style.fontWeight = "initial";
        textArea.style.color = "initial";
        textArea.style.textDecoration = "initial";
    }
}

// Make the text bold, blue and underlined
function makeFancy() {
    const fancifyButton = document.getElementById("r1");
    const boringButton = document.getElementById("r2");
    const textArea = document.getElementById("textarea");

    if (fancifyButton.checked) {
        boringButton.checked = false;

        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

// Moo after each sentence "."
function makeMoo() {
    const textArea = document.getElementById("textarea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (w in sentences)
        if (w != sentences.length - 1)
            sentences[w] += "-MOO.";

    textArea.value = sentences.join(" ");
}