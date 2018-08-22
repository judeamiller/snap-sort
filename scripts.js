function alphabetize() {
	let text = document.getElementById("star-par").textContent;

	//make an array of words based on empty spaces change all words to lowercase
	let words = text.split(" ");

	//alphabetize
	words.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	//remove the sensors
	let newWords= words.filter(a => a.toLowerCase() !=="sensors");


	//join the randomized words and insert new paragraph
	document.getElementById("star-par").textContent = newWords.join(" ");
}
