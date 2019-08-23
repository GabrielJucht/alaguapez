function echeck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   return false;
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   return false;
		}
		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    return false;
		}
		 if (str.indexOf(at,(lat+1))!=-1){
		    return false;
		 }
		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    return false;
		 }
		 if (str.indexOf(dot,(lat+2))==-1){
		    return false;
		 }
		 if (str.indexOf(" ")!=-1){
		    return false;
		 }
 		 return true;
}

function ValidateEmail(emailID){
	if ((emailID.value==null)||(emailID.value=="")){
		emailID.focus()
		return false;
	}
	if (echeck(emailID.value)==false){
		emailID.value=""
		emailID.focus()
		return false;
	}
	return true;
}
 
function validarFormContacto()  {
 	var nombre = document.getElementById("nombre");
	var local = document.getElementById("local");
	var email = document.getElementById("email");
	var mensaje = document.getElementById("mensaje");

	var mensaje="";
	var exito=true;
		
	if (nombre.value==""){
		exito = false;
		mensaje+= "Ingresa tu nombre.\r\n";
	}
	
	if (direccion.value==""){
		exito = false;
		mensaje+= "Ingresa tu direccion.\r\n";
	}
	
	if (telefono.value==""){
		exito = false;
		mensaje+= "Ingresa tu telefono.\r\n";
	}
	
	if (asunto.value==""){
		exito = false;
		mensaje+= "Ingresa tu asunto.\r\n";
	}
	
	if (email.value==""){
		exito = false;
		mensaje+= "Ingresa tu email.\r\n";
	}
	
	if (consulta.value==""){
		exito = false;
		mensaje+= "Ingresa tu consulta.\r\n";
	}
	
	if (exito==false)
	{
		alert(mensaje);
		return false;
	}else{		
		document.getElementById("mensajexito").style.display="block";
		return true;
	}
}
