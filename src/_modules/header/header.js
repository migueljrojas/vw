'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    var productCategory = $('[data-category]');
    var productFilters = $('[data-filter]');
    var filterSelector = $('.home__products__filter-selector');
    var filterList = $('.home__products__filters');

    filterSelector.on('click', function(e){
        e.preventDefault();
        filterList.toggleClass('-open');
    });

    productFilters.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var targetFilter = $this.data('filter');

        console.log('hola');

        filterList.removeClass('-open');

        if (targetFilter === 'all') {
            productCategory.removeClass('-hidden');   
            productFilters.removeClass('-active');
            $('[data-filter="'+ targetFilter +'"]').addClass('-active');
            return;
        }

        productCategory.addClass('-hidden');
        productFilters.removeClass('-active');        
        $('[data-filter="'+ targetFilter +'"]').addClass('-active');

        productCategory.filter(function() {
            return $(this).data('category') === targetFilter;
        }).removeClass('-hidden');
    });
};

module.exports = Header;
