$(document).ready(function() {
	$('#form').submit(function(event) { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		event.preventDefault();
		var phone = $("#phone").val();
    	var email = $("#email").val();
		var message = $("#message").val();
		$.ajax({
			type: "POST",
			url: "send.php",
			data: {
				email: email,
				phone: phone,
				message: message
			}
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});