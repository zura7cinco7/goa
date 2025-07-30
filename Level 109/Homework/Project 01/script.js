let Img = document.getElementById('img1');
const imagesArry = ['./CSS HTML JAVASCRIPT.png','./CSS.png','HTML.jpg','./JS.avif'];
let index = 0;
function slider(Index) {
    if(index + Index >= 0 && index + Index < 4){
        index += Index;
        Img.src = imagesArry[index];
    }
}