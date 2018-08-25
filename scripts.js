

//elso
let buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function (event) {
    let ertek = $("#rating").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek + 1;
    $("#rating").text(ertek);
});

let buttonElement2 = document.getElementById("btn2");
buttonElement2.addEventListener('click', function (event) {
    let ertek = $("#rating").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek - 1;
    $("#rating").text(ertek);
});

//masodik
let buttonElement3 = document.getElementById('btn3');

buttonElement3.addEventListener('click', function (event) {
    let ertek = $("#rating2").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek + 1;
    $("#rating2").text(ertek);
});

let buttonElement4 = document.getElementById("btn4");
buttonElement4.addEventListener('click', function (event) {
    let ertek = $("#rating2").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek - 1;
    $("#rating2").text(ertek);
});

//harmadik
let buttonElement5 = document.getElementById('btn5');

buttonElement5.addEventListener('click', function (event) {
    let ertek = $("#rating3").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek + 1;
    $("#rating3").text(ertek);
});

let buttonElement6 = document.getElementById("btn6");
buttonElement6.addEventListener('click', function (event) {
    let ertek = $("#rating3").html();
    ertek = parseInt(ertek, 10);
    ertek = ertek - 1;
    $("#rating3").text(ertek);
});