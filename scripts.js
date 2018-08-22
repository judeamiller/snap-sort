function alphabetize() {
	let text = document.getElementById("star-par").textContent;

	//make an array of words based on empty spaces change all words to lowercase
	let words = text.toLowerCase().split(" ");

	//remove the sensors
	let newWords= words.filter(a => a !=="sensors");

	newWords.sort();

	console.log(newWords);
		//join the randomized words and insert new paragraph
		document.getElementById("star-par").textContent = newWords.join(" ");
}
