console.log("Hello world")
let student_name="chaitanya"
console.log("student name is:"+student_name)
let student_age=20
let course_name="Python full stack"
console.log("student age is: " +student_age,",course name is:" +course_name)
let fee=10000
let discount=10
let discounted_fee=fee - (fee*discount/100)
console.log("discounted fee is:"+discounted_fee)
let age=18
age=20
if(age>=18)
{
    console.log("eligible for ADMISIION")
}
else{
    console.log("not eligibile for adisission")
}
for(let i=1; i<=5; i++)
{
    console.log("Iteration  numbers:" +i)
}
const pi=3.14
console.log("value of pi is:"+pi)
let student={
    name:"chaitanya",
    age:20,
    course:"python full stack",
    fee:10000
}
console.log("student details: ",student)
function greetstudent(name){
    console.log("hello " +name+ ",welcome to nriit learning management system")

greetstudent(student_name)
}

//write a function to square a number
function squareNumber(num) {
    return num*num ;
 }
x=squareNumber(5);
console.log("square of 5 is:",x)
//write a function to odd or even number
function Number(num) {
    if (num%2==0){
        return "even";
    }
    else {
        return "odd"
    }
}
console.log("check 9 is even or odd:",Number(9));
