
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var calculate = document.getElementById('calculate');
var form = document.getElementById('formclass');
//all these is used to establish connection to the webpage



//an action is specified to submit all the possible approach is been applied on it

//('submit' is an reserved keyword here)
//function(event) is used to handel the default actions
form.addEventListener('submit', function (event) {
    if (!number1.value || !number2.value) {
            alert("enter values in field");
        }
    else {
        //as number1.values contain an string so to convert it into float we use parseFloat
       var num1 = parseFloat(number1.value);
       var num2 = parseFloat(number2.value);
       var ans = ((num1 / num2)*100);
        
        resultfield.innerText= "Answer = " + ans +"%";
        //as after submission or clicking the calculate text field whole our page gets refreshed and the output stays for few millisecond in order to avoid this we change the default values.
        
        event.preventDefault();
    }
    
});

