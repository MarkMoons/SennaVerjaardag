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
    location.href = ("./fout.html");
}

function opnieuw() {
    location.href = ("../index.html");
}

function goVraag2(){
    location.href = ("./vraag2.html");
}

function goVraag3(){
    location.href = ("./vraag3.html");
}

function goFinale(){
    location.href = ("./final.html");
}

function cadeau() {
    $("#textFinal").css('display') == 'none'
    $("#textFinal").hide();
    $("#divFinal").css('display') == 'none'
    $("#divFinal").show();
}