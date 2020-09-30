function checkPassword (){
	var password = $('#Password').val();
	var password2 = $('#Password2').val();

	if (password != password2){
		$('#checkPass').html('Пароли не совпадают');
		$('#Password, #Password2').addClass('is-invalid');
		$('#Password, #Password2').removeClass('is-valid');
	}else{
		$('#checkPass').html('Пароли совпадают');
		$('#Password, #Password2').removeClass('is-invalid');
		$('#Password, #Password2').addClass('is-valid');
	}
}

$(document).ready(function() {
	$('#Password, #Password2').keyup(checkPassword);
});