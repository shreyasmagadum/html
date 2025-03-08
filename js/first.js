
// console.log('external js');

// let b='10';
// console.log(a===b);

// console.log(123+'acs');

//declaration
//var name 
//initialisation
//name= "Abhishek"
//console.log(name);

//re-declaration
//var name 
//re-initialisation
//name='Shreyas'
//console.log(name);


//let
//let place 
//place="jabalpur"
//console.log(place);

//place="pune"
//console.log(place);

//const
//const age= 18;


//-----------------------------------------------------------//
// var name ="prajakta"
// console.log(name);

// {
//     //console.log(name);
//     var name ="shreyas"
//     console.log(name);
// }
// console.log(name);

// let place= "Nipani"
// console.log(place);
// {
//     console.log(place);
//     let place2="nagpur"
//     console.log(place2);
// }
// console.log(place);
// //-----------------------------------------------------------//

// //dats type
// //number
// let age = 18
// let height =5.5
// console.log(height);
// let income= 146874352487354687654;
// console.log(income);
// console.log(typeof age);

// //strings
// let name="abhi"
// console.log(name);
// let letter = "A"
// console.log(letter);
// let msg = "Hello Iam String Datatype"
// console.log(typeof msg);

// let a=10
// console.log(a);

// let isMarried=true
// console.log(typeof isMarried);

// let incomeOfMe=BigInt("87547474587427585444")
// console.log(typeof incomeOfMe);


// console.log("hello world");
// document.write("hello world");
// let num1=345
// let num2 =786
// document.writeln(num1+num2);
// document.writeln(num1+num2);

// document.writeln("HELLO");
// document.writeln("HELLO");

// document.writeln("HELLO","<br>");
// document.writeln("HELLO");

// prompt("Enter your OTP")

// confirm("Are You Sure ???")
// alert("Submitted Successfully")

// let product1=parseInt(promt("Enter The First Product"));
// let product2=parseInt(promt("Enter The Second Product"));
// let product3=parseInt(promt("Enter The Third Product"));
// let product4=parseInt(promt("Enter The Fourth Product"));
// let product5=parseInt(promt("Enter The Fift Product"));


// //condole.log(total);
// if(total==15000){
//     document.write(`congrats you got discount 15% ${product1+product2+product3+product4+product5} and now total amt is ${}`)
// }
// else{
//     document.write("Buy Some Products")
// }



// function task(a,b,c=1){
//     console.log(a+b+c);
//     }

// task(parseInt(prompt('enter a num 1')),parseInt(prompt('enter a num 2')))


// let prime = function(a){
//     c=0;
//     i=2;
//     while(i<=12){
//         if (a%i==0){
//             c=c+1;
//         }
//         i=i+1
//     }
//     if(c==1){
//         console.log('prime');
        
//     }
//     else{
//         console.log('not a prime');
        
//     }
// }
// prime(parseInt(prompt('enter a num 1')))


// function transport(va){
// switch(va){
//     case 'bike':
//         var dis=parseInt(prompt("distance"));
//         document.write(`cost for travel is ${dis*7}`);
//         break;
//     case 'auto':
//         var dis=parseInt(prompt("distance"));
//         document.write(`cost for travel is ${dis*10}`);
//         break;
//     case 'car':
//         var dis=parseInt(prompt("distance"));
//         document.write(`cost for travel is ${dis*25}`);
//         break;
//     case 'traveller':
//         var pas=parseInt(prompt("no of passenger"));
        
//         if(pas==15){
//             var dis=parseInt(prompt("distance"));
//             document.write(`cost for travel is ${dis*20}`);

//         }
//         else{
//             document.write(`not `);
//         }
        
//         break;
        
// }}
// transport((prompt("choose a vehical")))



// arrow fun

//Arrow Function
// let task=(a,b)=>{
//     console.log(a+b);
// }
// task(20,30)

// //in normal function its possible
// NameFun(90,90) ;
// function NameFun(x,y){
//     console.log(x+y);
    
// }
// NameFun(200,68)
// // In arrow function we cannotaccess before it
// task1(70,80)
// let task1=(a,b)=>{
//     console.log(a+b);
    
// }
// task1(70,30)

// let gender='female';
// let state="karnataka"
// function busSeva(){
//     if( gender=='female' && state=='karnataka'){
//         document.write('congrates !!! Enjoy your bus ride')
// }
// else{
//     document.write('not eligible')
// }
// }
// busSeva()

// function child(){
//     console.log('this is child');
//     }
// function parent(task){
//     console.log('this is parent');
    
// }
// parent(child)


// let arr=['rohit','pradeep','collin','harsha']
// arr.forEach(element=> { console.log(`hello ${element}`);});
// console.log(arr.map((val) => {console.log("hello "+val)}));
 



// function msg(t) {
//     return 'hello'+t;
    
// }
// function greet(val1,val2){
//     console.log(val1(t)+val2);
    
// }
// greet(msg,'pradeep')

// let myArray = [1, 2, 3, "hello", true];
// let emptyArray = [];


// let myArray1 = new Array(1, 2, 3, "hello", true); // Same as the literal above
// let emptyArray1 = new Array(); // Creates an empty array
// let arrayWithSize = new Array(5); // Creates an array with a *length* of 5 (empty slots)

// let myArray4 = Array.of(1, 2, 3); //Creates [1, 2, 3]
// let myArray2 = Array.of(5); // Creates [5]  (unlike `new Array(5))
// let myArray3 = Array.of(); // Creates []



// Array method


// let myArray1 = new Array(1, 2, 3, "hello", true);
// let myArray2 = new Array(1, 2, 3, "hello", true); 

// // push--it will add value it last index postion
// myArray1.push(5);

// //pop()--it can't accept value it remove last value
// myArray1.pop();

// //unshift--add an array element in starting index
// myArray1.unshift(123);

// //shift-- it remove the first value from array
// myArray1.shift();

// //slice-- to get the value from array
// myArray1.slice(2,4);

// //splice-- it used too remove and replace the element for array
// myArray1.splice(2,2,'gfd','nhgfd')

// //sort
// console.log(myArray1.sort());

// //reverse
// console.log(myArray1.reverse());

// //concat
// console.log(myArray1.concat(myArray2));

// //join---make value as string   
// console.log(myArray1.join());



// let num=[12,13,14,27,345];
// let newarr=num.filter((val)=>{
//     return val%2==0;
// })
// document.writeln(newarr);


// for(let i of num){
//     if(i%2==0){
//         console.log(i);
//         }
// }

// let names=['aliya','depika']
// let newarr1=names.filter((val)=>{
//     if(val[0]=='d')
//         return val
// })
// document.writeln(newarr1);

// let num2 = [10, 20, 49, 68, 55, 43, 32];

// let newarr1 = num2.filter((val) => {
//   if (val % 2 == 0) {
//     console.log(val/5);
    
//   }});

// document.writeln(newarr1);


// const n = [1, 2, 3, 4, 5];
// const s = n.filter(x => x % 2 === 0).map(x=> x ** 2);
// console.log(s);


// const users = [
//   { name: 'Alice', age: 30, country: 'United States' },
//   { name: 'Bob', age: 25, country: 'Canada' },
//   { name: 'Charlie', age: 35, country: 'United Kingdom' },
//   { name: 'Diana', age: 28, country: 'Australia' },
//   { name: 'Ethan', age: 22, country: 'New Zealand' }
// ]
// const names = users.map(user => user.name)
// console.log(names) // Output: (5) ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan']



//REDUCE

// let num=[10,20,30,40,50];
// let sum=num.reduce((acc,val)=>{ return acc+val},100)
// console.log(sum);

