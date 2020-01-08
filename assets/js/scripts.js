// Main Anagram finder Function
const anagramFind = () => {
	const w1 = document.getElementById("word1").value;
    const w2 = document.getElementById("word2").value;
    if(w1.length === w2.length){
    	// Making the words into lower case so that program remains not case sensitive.
	    loword1 = wordCaseLow(w1);
	    loword2 = wordCaseLow(w2);

	    // First splitting the words, the sorting them and joining them later.
	    loword1 = sortLetter(loword1);
	    loword2 = sortLetter(loword2);

	    if(loword1 == loword2){
            
	    	confirm("you have entered anagram words");
	    }else{
	    	confirm("words are not anagram");
	    }
    }else{
    	alert("Not same length word. please input same length words");
    }
}

// function anagramfind(){
//     const w1 = document.getElementById("word1").value;
//     const w2 = document.getElementById("word2").value;
//     if(w1.length === w2.length){
//     	// Making the words into lower case so that program remains not case sensitive.
// 	    loword1 = wordCaseLow(w1);
// 	    loword2 = wordCaseLow(w2);

// 	    // First splitting the words, the sorting them and joining them later.
// 	    loword1 = sortLetter(loword1);
// 	    loword2 = sortLetter(loword2);

// 	    if(loword1 == loword2){
            
// 	    	confirm("you have entered anagram words");
// 	    }else{
// 	    	confirm("words are not anagram");
// 	    }
//     }else{
//     	alert("Not same length word. please input same length words");
//     }

// }

// word lower case function to make the program case sensitive free
const wordCaseLow = word =>{
	return word.toLowerCase();
}

// Letter sorting function
const sortLetter = word =>{
	[...letter] = word;	
	let result = letter.sort().join("");
	return result;
}