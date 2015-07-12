//alert('js loaded');
require(['knockout', 'appViewModel'], function(ko, appViewModel) {
	//alert('init js');
    ko.applyBindings(new appViewModel());
});