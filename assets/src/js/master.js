(function($) {
	$(function() {
        $(".accordion").on("shown", function(){
          $(this).find('i').removeClass("icon-plus");
          $(this).find('i').addClass("icon-minus");
        });
        $(".accordion").on("hidden", function(){
          $(this).find('i').removeClass("icon-minus");
          $(this).find('i').addClass("icon-plus");
        });

		if(window.innerWidth >= 500 ) {
			if( $('.fancybox-single').length ) {
				$('.fancybox-single').fancybox({
					topRatio	: 0.1,
					openEffect	: 'fade',
					closeEffect	: 'fade',
					afterShow: function() {
						setTimeout(function() {
							$.fancybox.update();
						},500);
					},
					helpers: {
						title: {
							type: 'outside'
						},
						thumbs : {
							width: 50,
							height: 50
						}
					}
				});
			}
			if( $('.fancybox-gallery').length ) {
				$('.fancybox-gallery').fancybox({
					topRatio	: 0.1,
					openEffect	: 'fade',
					closeEffect	: 'fade',
					afterShow: function() {
						setTimeout(function() {
							$.fancybox.update();
						},500);
					},
					helpers: {
						title: {
							type: 'outside'
						},
						thumbs : {
							width: 50,
							height: 50
						}
					}
				});
			}
		}
	});
})(jQuery);
