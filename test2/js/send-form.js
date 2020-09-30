$(document).ready(function() {
	var form = $('form');
	var action = form.attr('action');

	form.on('submit', function(event){

		event.preventDefault();

		var formData = {
			contactName: $('#firstname').val(),
			contactSurname: $('#surname').val(),
			contactEmail: $('#email').val(),
			userPass: $('#Password').val()
		};


		$.ajax({
			url: action,
			type: 'POST',
			data: formData,
			dataType: "JSON",
			error: function(request, txtStatus, errorThrown){
				console.log(request);
				console.log(txtStatus);
				console.log(errorThrown);

				$("#myModal").modal()
			},
			success: function(data){
				if(data.answer){
					form.html('Вы успешно зарегистрированы!');
				}else{
					$('#123').attr('style', 'display: block');
				}
			}
		});
	});
});