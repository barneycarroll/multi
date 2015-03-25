var slice = Array.prototype.slice;

module.exports = function multi(){
	var handlers = [];

	for( var i = 0, l = arguments.length; i < l; i++ ){
		if( arguments[ i ] instanceof Function ){
			handlers.push( arguments[ i ] );
		}
	}

	return function execute(){
		for ( var i = 0, l = handlers.length; i < l; i++ ){
			handlers[ i ].apply( this, slice.call( arguments ) );
		}
	};
};
