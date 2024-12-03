function greetUser(name) {
    if (!name.trim()) {
        document.getElementById("output").innerText = "Please enter a valid name.";
        return;
    }
    document.getElementById("output").innerText =  `Hello, ${name}! Welcome! `;

}
document.getElementById("btnGreet").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    greetUser(name); 
});




document.getElementById("btnChangeMessage").addEventListener("click", function () {
    document.getElementById("message").innerText = "Hello, World!";
});

document.getElementById("btnAddNumbers").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    document.getElementById("result").innerText = `Sum: ${num1 + num2}`;
});

document.getElementById("btnUpdateTitle").addEventListener("click", function () {
    const newTitle = document.getElementById("inputTitle").value;
    document.getElementById("title").innerText = newTitle;
});

document.getElementById("btnCombineStrings").addEventListener("click", function () {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;
    document.getElementById("combinedText").innerText = str1 + " " + str2;
});

document.getElementById("btnChangeBackground").addEventListener("click", function () {
    document.getElementById("colorBox").style.backgroundColor = "blue";
});

