alert("Welcome to NRIIT learning managemet system")
let heading = document.getElementById("welcome");
heading.innerHTML="welcome future software engineers"
console.log("Heading element:",heading)
let msg=document.getElementById("message")
msg.innerHTML="javascript is fun"
console.log("message element:",msg)
function showmessage(){
    alert("welcome to NRIIT LEARNING MANAGEMENT SYSTEM")}
function changeHeading(){
    document.getElementById("welcome").innerHTML="welcome python fullstack developers"}
    let heading1=document.querySelector("#welcome");
    console.log("heading element:",heading)
    let button=document.getElementById("btnGreeting");
    button.addEventListener("click",function(){
        alert("welcome to javascript event handling")
    });
    let registerForm=document.getElementById("registerForm");
    registerForm.addEventListener("submit",function(event)){
        event.preventDefault();
        let name=document.getElementById("name").Value;
        let email=document.getElementById("email").Value;
        let password=document.getElementById("passwor").value;
        if(!name || !email || !password){alert("Please fill in all fields.");
            return;
        }
    alert("Registration succesful!");
}
//write a function to square a number
//write a function to odd or even number
functionsquareNumber(num){
    return num*num ;
}
x=squareNumber(5);
console.log('square of 5 is: $x')
