var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';
if(confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")){
   window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}else {//do nothing. This will fire if cancel is clicked.
}
const listPara = document.getElementsByTagName ( "p" );

const listhead = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

function changeBackground(){
	document.body.style.background = "magenta";
	for ( var i = 0; i < listPara.length; i++)
{
listPara[i].style.fontFamily = "Papyrus";
listPara[i].style.color = "blue";
}
for (var i = 0; i < listhead.length; i++)
{
	listhead[i].style.color = "red";
	listhead[i].style.fontFamily = "Comic sans ms";
	}
}
