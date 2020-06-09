//Reverses a string
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
//Returns true for a palindrome, false otherwise
			// function palindrome(string) {
			// 	// return string.toLowerCase() === reverse(string.toLowerCase());
			// 	let processedContent = string.toLowerCase();
			// 	return processedContent === reverse(processedContent);
			// }

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

			// this.processor = function(string) {
			// 	return this.string.toLowerCase();
			// }

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}

	// Returns true if the phrase is a palindrome, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}

// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
// 	this.content = content;
// 	this.translation = translation;

// // Returns translation processed for palindrome testing.
// this.processedContent = function processedContent() {
// 	return this.processor(this.translation);
// 	}
// }

// TranslatedPhrase.prototype = new Phrase();

