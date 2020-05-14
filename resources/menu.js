var verificar = false;

function iniciar() {
	
	var logomenu = document.getElementById("logomenu");
	
	logomenu.addEventListener("click", mostrarMenu);
	
}

function mostrarMenu() {
	
	var menu = document.getElementById("menu");
	
	if(!verificar) {
	   
		menu.style.display = "grid";
		
		verificar = true;
		
	} else {
		
	   	menu.style.display = "none";
		
		verificar = false;
	}
	
}

window.addEventListener("load", iniciar);