const name1 = "Senna";
const name2 = "senna";

function checkName() {
    if(document.getElementById("nameInput").value === name1 || document.getElementById("nameInput").value === name2){
        location.href = ("./html/vraag1.html");
    } else {
        console.log("verkeerde naam pik")
    }
}

function foutAntwoord() {
    location.href = ("./html/fout.html");
}

function opnieuw() {
    location.href = ("../index.html");
}