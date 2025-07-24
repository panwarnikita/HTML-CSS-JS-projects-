let input1  = document.getElementById("amount");
let input2 = document.getElementById("percentage");
let button = document.querySelector(".button-container button");
let result = document.querySelector("#result");

button.addEventListener("click", function(){
    let amount = parseFloat(input1.value)
    let percentage = parseFloat(input2.value)

    if(amount && percentage){
        let tip =  (percentage/100)*amount
        let total = amount+tip
        result.textContent = "Total: " + (total.toFixed(2));
    }

    else{
        alert( "Please enter an appropriate value." )
    }
});




