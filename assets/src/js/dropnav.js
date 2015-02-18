(function($) {

	$(function() {
		var my_timeout = false;

		if( Modernizr.touch ) {
			return;
		}

		$('.navbar-desktop .nav li').mouseenter(function() {
			clearTimeout(my_timeout);
			var $this = $(this);
			var my_dropnav = $this.data('mydropnav');

			$('.dropnav').hide();

			var url = $this.attr('data-dropnav-source');
			if( !url ) {
				return;
			}


			if( !my_dropnav ) {
				var container = $('<div></div>')
						.addClass('dropnav')
						.html('<div class="container"><div class="row loading">&nbsp;</div></div>');

				var parent = $this.parents('.navbar-desktop');

				$('body').append(container);
				container.css({
					'margin': 0,
					'position': 'fixed',
					'left': parent.offset().left,
					'top': parent.offset().top + parent.height(),
					'width': parent.width(),
				});

				my_dropnav = container;

				my_dropnav.hide();

				$this.data('mydropnav', my_dropnav);

				$.get(url+'&d='+parseInt(Math.random()*99999999), function(data) {
					container.find('.row').removeClass('loading').empty();
					container.find('.row').append($(data));
				});

				my_dropnav.mouseenter(function() {
					clearTimeout(my_timeout);
				}).mouseleave(function() {
					my_timeout = setTimeout(function() {
						$('.dropnav').fadeOut();
					}, 500);
				});
			}

			my_dropnav.fadeIn();
		}).mouseleave(function() {
			clearTimeout(my_timeout);
			my_timeout = setTimeout(function() {
				$('.dropnav').hide();
			}, 500);
		});


	});

})(jQuery);