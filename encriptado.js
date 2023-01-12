function encriptar(){
	var texto =	document.querySelector("#texto-encriptar").value;
	var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	document.getElementById("frame5").style.display = "none";
	document.getElementById("muneco").style.display = "none";
	document.querySelector(".text-input-salida").innerHTML = textoCifrado;
	document.getElementById("msg").style.display = "";
	document.querySelector("#texto-encriptar").value = "";
	document.getElementById("btn-copiar").style.display = "";
}

function desencriptar(){
	var texto = document.querySelector("#texto-encriptar").value;
	var textoDescifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.getElementById("frame5").style.display = "none";
	document.getElementById("muneco").style.display = "none";
	document.querySelector(".text-input-salida").innerHTML = textoDescifrado;
	document.getElementById("msg").style.display = "";
	document.querySelector("#texto-encriptar").value = "";
	document.getElementById("btn-copiar").style.display = "";
}

function copiar(){
	var textoACopiar = document.getElementById("msg");
	textoACopiar.select();
	textoACopiar.setSelectionRange(0, 99999);
	document.execCommand("copy");
}


document.getElementById("msg").style.display = "none";
document.getElementById("btn-copiar").style.display = "none";
let btn1 = document.getElementById("btn-encriptar");
btn1.onclick = encriptar;

document.getElementById("msg").style.display = "none";
document.getElementById("btn-copiar").style.display = "none";
let btn2 = document.getElementById("btn-desencriptar");
btn2.onclick = desencriptar;

let btn3 = document.querySelector("#btn-copiar");
btn3.onclick = copiar;
