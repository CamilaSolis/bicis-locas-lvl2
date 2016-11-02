function validateForm(){
	var valnom = document.getElementById("name");
	var valape = document.getElementById("lastname");
	var valemail = document.getElementById("input-email").value;
	var valpass = document.getElementById("input-password").value;
	var valbici= document.querySelector("select").value;

	//Nombre
	function nom(){
	if( valnom == null || valnom.length == 0 || /^\s+$/.test(valnom) ) {
		var container = document.getElementByClassName('name-container')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('¡¡No olvide ingresar su nombre!!');
		errorSpan.appendChild(nodoNom);
		contenido.appendChild(errorSpan);
		return false;
		
	}	
	else if (/^[A-Za-z]*$/.test(valnom) == false || valnom.substring(0,1) ==valnom.substring(0,1).toUpperCase() == false )  {  
		var container = document.getElementByClassName('name-container')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('Su nombre no puede tener numeros y debe comenzar con mayuscula');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	} 
	else { }
	}
	nom();

	//Apellido
	function apellido{
	if( valape == null || valape.length == 0 || /^\s+$/.test(valape) ) {
		var container = document.getElementByClassName('lastname-container')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('¡¡No olvide ingresar su apellido!!');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	}
	else if (/^[A-Za-z]*$/.test(valape) == false || valape.substring(0,1) == valape.substring(0,1).toUpperCase() == false )  {  
		var container = document.getElementByClassName('lastname-container')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('Su apellido no puede tener numeros y debe comenzar con mayuscula');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	} 
	else { }
		}
	apellido();


	//Email
	function email(){
	if( !(/\S+@\S+\.\S+/.test(valemail)) ) {
		var container = document.getElementByClassName('email-container')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('Correo no valido');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	}
	}
	email();

	//Password
	function password(){
	if( valpass == null || valpass.length < 6 || /^\s+$/.test(valpass)) {
		var container = document.getElementByClassName('form-group')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('Su password debe tener minimo 6 caracteres');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	}
	if (valpass==="password" || valpass==="123456" || valpass==="098754") {
		var container = document.getElementByClassName('form-group')[0];
		var errorSpan = document.createElement('span');
		var nodoNom = document.createTextNode('Su password no puede ser <password>, <123456> ni <098754>');
		errorSpan.appendChild(nodoNom);
		container.appendChild(errorSpan);
		return false;
	}
	}
	password();

	//Tipo de Bici
	if ( valbici == null||valbici == 0) {
        alert("Elija su tipo de bici");
    }


}