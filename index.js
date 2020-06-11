module.exports = Phrase;

// Adds 'reverse' and 'blank' to all strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}
String.prototype.blank = function() {
	return !!this.match(/^\s*$/g);
}

//returns last element of an array:
Array.prototype.last = function() {
	return this.slice(-1);
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	// e.g. "Hello, world!" > "Helloworld"
	this.letters = function letters() {
		return (this.content.match(/[a-z]/gi) || [] ).join("");
		//Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
	}
			// this.letters = function letters() {
			// 	let theLetters = [];
			// 	const letterRegex = /[a-z]/i;
			// 	Array.from(this.content).forEach((character) => {
			// 		if (character.match(letterRegex)) {
			// 			theLetters.push(character);
			// 		}
			// 	});
			// 	return theLetters.join("");
			// }


	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		if (this.processedContent()) {
			return this.processedContent () === this.processedContent().reverse();
		} else {
			return false;
		}
	}
}
