console.log("Hello world")
let student_name="Sahasra"
console.log("Student name is:"+student_name)
let student_age=20
console.log("Student age is:"+ student_age)
let course_name="Python Full Stack"
console.log("Course name is:"+course_name)
let fee=10000
let discount=10
let discounted_fee=fee-(fee*discount/100)
console.log("Discounted Fee is:"+ discounted_fee)

let age=18
if(age>=18){
    console.log("Eligible for admission")
}
else{
    console.log("Not eligible or admission")
}


for(let i=1; i<=5; i++){
    console.log("Iteration number:"+ i)
}


let student={
    name:"Sahasra",
    age:20,
    course:"python full stack",
    fee:10000
}
console.log("Student Details:",student)


function greetStudent(name){
    console.log("Hello" +" "+ name +" " +"Welcome to NRIIT Learing Management System")
}
greetStudent(student_name)

function square(num) {
    return num * num;
}

let n = 5;
console.log("Square =", square(n));

function OddorEven(num){
    if (num%2==0){
        return "even"
    }
    else{
        return "odd"
    }
}
let n1=17;
console.log("The number is",OddorEven(n1))