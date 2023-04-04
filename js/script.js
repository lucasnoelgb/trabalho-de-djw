var img = "pa.jpg";
var img2 = "pa2.jpg";
var img3 = "pa3.jpg";
var img4 = "pa4.jpg";
var img5 = "pa5.jpg";
var img6 = "pa6.jpg";
var img7 = "pa7.jpg";
var img8 = "pa8.jpg";
var img9 = "pa9.jpg";
var img10 = "pa10.jpg";



function trocar() {
    const imagem = document.getElementById("figuras");
    const trocar = Math.floor(Math.random() * 10) + 1;
    imagem.src = img/${trocar}.jpg;
    }
