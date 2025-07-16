let box = document.querySelector(".box")
box.onclick = function(){
   let input = document.querySelector("input")
   let word = input.value;
   let result = document.querySelector(".result");

   if(word === ""){
      result.innerText = "";
      return;
   }

   let cleanedWord = word.toLowerCase().replace(/\s/g, "")

   let reversedWord = cleanedWord.split('').reverse().join('');
  
    
   if (cleanedWord === reversedWord){
      result.innerText = `Yes, ${word} is Palindrome`;
   }
   else{
      result.innerText = `No, ${word}  is not a Palindrom`;
   }
};














