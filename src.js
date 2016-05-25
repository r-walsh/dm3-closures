var text = document.getElementById( "text" );
var button = document.getElementById( "make-req" );

button.addEventListener( "click", function() {
	text.innerHTML = "Loading...";
	makeHttpReq();
} );

function makeHttpReq() {
	setTimeout( function() {
		text.innerHTML = "Request completed!";
	}, 1000) ;
}
//
// function makeGreeter( name ) {
//
// 	return function( date ) {
// 		var greeting = "Hi, " + name + " it is " + date;
// 		console.log( greeting );
// 	}
// }
//
// var greetMatt = makeGreeter( "Matt" );
// var greetJoseph = makeGreeter( "Joseph", "May 26th" );
//
// greetMatt( "May 25th" );
// greetJoseph();

/*
 make the following code work
 three(times(five())) // 15
 three(times( 5 ));







 five(plus(three())) // 8
 */


function times( number ) {
	return function( num ) {
		return number * num;
	}
}


function three( plus ) {
	if ( !plus ) {
		return 3;
	}

	return plus( 3 );
}

function five( plus ) {
	if ( !plus ) {
		return 5;
	}

	return plus( 5 );
}


function plus( numOne ) {
	return function innerPlus( numTwo ) {
		return numOne + numTwo;
	}
}

console.log(
	three(
		plus( // innerPlus definition
			five() // 5
		)
	)
);




function sum( numOne, numTwo ) {
	if ( numTwo ) {
		return numOne + numTwo;
	}
	return function( innerNumTwo ) {
		return numOne + innerNumTwo;
	}
}

sum(2, 3); // 5
sum(2)(3); // 5

var referenceSaved = sum( 2 );

referenceSaved( 3 );