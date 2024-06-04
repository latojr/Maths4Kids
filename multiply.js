const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const myAudio = document.getElementById("myAudio");
const myAudio1 = document.getElementById("myAudio1");
let anwser = 0;

//function to generate the equation
function generate_equation(){
    let num1 = Math.floor(Math.random() * 20); // generate random numbers between 0-20
    let num2 = Math.floor(Math.random() * 20);
    let dummyAnwser1 = Math.floor(Math.random() * 20);  //generate random anwsers between 0-20
    let dummyAnwser2 = Math.floor(Math.random() * 20);
    let allAnwsers = [];                       // create array to store all anwsers
    let switchAnwsers = [];       

    anwser = num1 * num2;

    document.getElementById("num1").innerHTML = num1; // this two num are gonna be displayed on the screen
    document.getElementById("num2").innerHTML = num2;

    allAnwsers = [anwser, dummyAnwser1, dummyAnwser2];      
    // shuffles the array so the anwsers are always in a different index
    for(i = allAnwsers.length; i--;){
        switchAnwsers.push(allAnwsers.splice(Math.floor(Math.random() * (i +1)), 1)[0]);  //after shuffle we store them in an array called switch anwsers
    }

    option1.innerHTML = switchAnwsers[0]; // generate random anwsers from the switch anwsers array
    option2.innerHTML = switchAnwsers[1]
    option3.innerHTML = switchAnwsers[2];
    

}

/*add event listener to our 3 option if  one option has the right anwser, 
it calls in the function  but if wrong anwser we call on the audio and it
 provided a sound*/
option1.addEventListener("click", () => {
if (option1.innerHTML == anwser){
    generate_equation()
    myAudio1.play()
}
else{
    myAudio.play();
}
});



 option2.addEventListener("click", () => {
        if (option2.innerHTML == anwser){
            generate_equation()
            myAudio1.play()
        }
        else{
            myAudio.play();
        }
        });

 option3.addEventListener("click", () => {
    if (option3.innerHTML == anwser){
        generate_equation()
        myAudio1.play()
     }
     else{
         myAudio.play();
      }
      });

      generate_equation();