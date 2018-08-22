function alphabetize() {
	let text = document.getElementById("star-par").textContent;

	//make an array of words based on empty spaces
	let words = text.toLowerCase().split(" ");

	words.sort();

	console.log(words);
		//join the randomized words and insert new paragraph
		document.getElementById("star-par").textContent = words.join(" ");
	};

