$(document).ready(() => {
	const sections = {
		dvlp: '#development',
		mrkt: '#marketing'
	};

	$('#development').hide();

	$('#dvlp, #mrkt').on('click', function () {
		const btnId = this.id;
		const targetSection = sections[btnId];
		const otherSection = btnId === 'dvlp' ? sections.mrkt : sections.dvlp;

		$(otherSection).slideUp('fast');
		$(targetSection).delay(350).slideDown('slow');

		$('#dvlp, #mrkt').removeClass('active');
		$(this).addClass('active');
	});
});