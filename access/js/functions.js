$('#login_bttn').click(function() {
	//Se verifica que el valor del campo este vacio
    //Se eliminan espacios en blanco con trim()
    if ($('#inputUsername3').val().trim() === '') {
        //alert('El campo esta vacio');
		swal("Oops...", "Field Username is empty!", "error");    
        $('#inputUsername3').focus();
        $('#inputUsername3').css({'background-color' : '#FFCFCF'});
    }else if ($('#inputPassword3').val().trim() === '') {
     	   //alert('El campo esta vacio');
     	   swal("Oops...", "Field Password is empty!", "error");
       		 $('#inputPassword3').focus();
       		 $('#inputPassword3').css({'background-color' : '#FFCFCF'});
    }else{
		$('#formlogin').attr("action", 'access.php');  
    	$('#formlogin').submit();
    }
});


// verificamos que sea escrito bien el mail
$('#checkmail_bttn').click(function() {
	//Se verifica que el valor del campo este vacio
    //Se eliminan espacios en blanco con trim()
    if ($('#inputUsermail').val().trim() === '') {
        //alert('El campo esta vacio'); 
        swal("Oops...", "Field Email is empty!", "error");       
        $('#inputUsermail').focus();
        $('#inputUsermail').css({'background-color' : '#FFCFCF'});
    }else if($("#inputUsermail").val().indexOf('@', 0) == -1 || $("#inputUsermail").val().indexOf('.', 0) == -1){
    	 	//alert('Email no valido');
    	 	swal("Oops...", "The Email is not valid!", "error");
    	 	$('#inputUsermail').focus();
        	$('#inputUsermail').css({'background-color' : '#FFCFCF'});
    }else{
    	$('#checkmail').attr("action", 'access.php');
    	$('#checkmail').submit();
    }
});

// verificamos que sea escrito bien el password
$('#resetPass_bttn').click(function() {
	//Se verifica que el valor del campo este vacio
    //Se eliminan espacios en blanco con trim()
     if ($('#inputPassword3').val().trim() === '') {
        //alert('El campo esta vacio');
        swal("Oops...", "Field Password is empty!", "error");        
        $('#inputPassword3').focus();
        $('#inputPassword3').css({'background-color' : '#FFCFCF'});
    }else if ($('#inputPassword32').val().trim() === '') {
     	   //alert('El campo esta vacio');
     	   swal("Oops...", "Field Re-type Password is empty!", "error");
       		 $('#inputPassword32').focus();
       		 $('#inputPassword32').css({'background-color' : '#FFCFCF'});
    }else{
    	if($('#inputPassword3').val() == $('#inputPassword32').val()){
    		$('#reset').attr("action", 'access.php');  
    		$('#reset').submit();
    	}else{
    		//alert('El Password no son iguales');
    		swal("Oops...", "Passwords are not the same!", "error");
    	}
		
    }
});

$('#register_bttn').click(function() {
    if ($('#name').val().trim() === '') {
        //alert('El campo esta vacio');
        //swal("Oops...", "Field Username is empty!", "error");    
        swal("Oops...", "El campo nombre esta vacio!", "error");    
        $('#name').focus();
        $('#name').css({'background-color' : '#FFCFCF'});
    }else if ($('#surname').val().trim() === '') {
            $('#name').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo apellido esta vacio!", "error");
             $('#surname').focus();
             $('#surname').css({'background-color' : '#FFCFCF'});
    }else if ($('#email').val().trim() === '') {
            $('#surname').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo correo esta vacio!", "error");
             $('#email').focus();
             $('#email').css({'background-color' : '#FFCFCF'});
    }else if ($('#telefono').val().trim() === '') {
            $('#email').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo telefono esta vacio!", "error");
             $('#telefono').focus();
             $('#telefono').css({'background-color' : '#FFCFCF'});
    }else if ($('#username').val().trim() === '') {
            $('#telefono').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo nombre de usuario esta vacio!", "error");
             $('#username').focus();
             $('#username').css({'background-color' : '#FFCFCF'});
    }else if ($('#password').val().trim() === '') {
            $('#username').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo contraseña esta vacio!", "error");
             $('#password').focus();
             $('#password').css({'background-color' : '#FFCFCF'});
    }else if ($('#password2').val().trim() === '') {
            $('#password').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo verifique contraseña esta vacio!", "error");
             $('#password2').focus();
             $('#password2').css({'background-color' : '#FFCFCF'});
    }else{
        $('#formregister').attr("action", 'access.php?ac=register');  
        $('#formregister').submit();
    } 
    
});

$('#forgot_bttn').click(function() {
    if ($('#email').val().trim() === '') {
           //alert('El campo esta vacio');
           swal("Oops...", "El campo correo esta vacio!", "error");
             $('#email').focus();
             $('#email').css({'background-color' : '#FFCFCF'});
    }else if ($('#email2').val().trim() === '') {
            $('#email').css({'background-color' : '#FFFFFF'});
           //alert('El campo esta vacio');
           swal("Oops...", "El campo confirme correo esta vacio!", "error");
             $('#email2').focus();
             $('#email2').css({'background-color' : '#FFCFCF'});
    }else{
        $('#formregister').attr("action", 'access.php?ac=forgot');  
        $('#formregister').submit();
    } 
    
});
