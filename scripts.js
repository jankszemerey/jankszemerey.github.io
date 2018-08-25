

/*elso
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
});*/

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    savedPosts.forEach((post, index) => {
        let posztcim = $("<h3>").html(post.title);
        $("#comments").append(posztcim);
        let posztolo = $("<h5>").html(post.name);
        $("#comments").append(posztolo);
        let posztszoveg = $("<p>").html(post.text);
        $("#comments").append(posztszoveg);
    })
  });

//uj poszt mentése
let buttonElement0 = document.getElementById('submit');

buttonElement0.addEventListener('click', function (event) {
    event.preventDefault();
    
    fb.ref("posts").once('value').then(data => {
        let savedPosts = data.val();
        let xyz = savedPosts.length
        let cim = $("#field").val();
        let szoveg = $("#description").val();
        let felhasznaloNev = $("#userName").val();
        let path = "posts/" + xyz;
        let dataToSave = {
        title: cim,
        text: szoveg,
        name: felhasznaloNev
        };
        fb.ref(path).set(dataToSave);

            //uj poszt hozzáadása-megjelenítése


        let posztcim = $("<h3>").html(cim);
        $("#comments").append(posztcim);
        let posztolo = $("<h5>").html(felhasznaloNev)
        $("comments").append(posztolo);
        let posztszoveg = $("<p>").html(szoveg);
        $("#comments").append(posztszoveg);
        });
});





/*

//Exercise04

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
  };

let heading = $("<h1>").html(additionalBlock.title);
$("body").append(heading);
let paragraph = $("<p>").html(additionalBlock.text);
$("body").append(paragraph);
*/