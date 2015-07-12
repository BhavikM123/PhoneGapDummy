// Main viewmodel class
define(['knockout'], function(ko) {
    return function appViewModel() {
    	//alert('appview model')
        
        this.firstName = ko.observable('Bert');
        //alert('after observable')
        this.firstNameCaps = ko.pureComputed(function() {
        	//alert('cap');
            return this.firstName().toUpperCase();
        }, this);

       /*  this.firstNameCaps = function() {
         alert('cap');	
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };  */
    };
});