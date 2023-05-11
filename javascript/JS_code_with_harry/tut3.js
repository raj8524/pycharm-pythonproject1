/* primitive data types [string,numbers,symbol,boolean,null,undefined](base) staorage is in stack 
where as reference data types[arrays,object literals,function,Dates] (object) is in heap*/

//arrays
arre=[5,7,8,'roll'];

/*let nullve=null;
console.log(typeof nullve);  it will show data type object but its primitive data type*/

//object literals
let marks={
    raj:67,
    subham:45,
    poonam:67
}
//Date
let date=new Date();
console.log(typeof date)
                             // string typecast
console.log(String(date)) //to typecast in string
console.log(date.toString)  //to typecast in string
let stri= Number("abc")  // to convert to numbert
console.log(String(date)) //to typecast in string
kbc=Number("456ads7") // (typeof kbc) will show NaN
let num= parseInt('34.098'); // 34
let num= Number('34.098'); // 34.098
console.log(num.toFixed(2))// 34.09 to see number of decimals after .
                           //string concat
const name1="harrying"
const gud="morning"
console.log(name1 + gud);
all=name1.concat(gud);
console.log(all.indexof('e')); // indexing  starts from front
console.log(all.lastIndexof('e')); //index of last e in the string 
console.log(all.charAt(r));
console.log(all.endsWith('g')); // returns true is string ends with g
console.log(all.includes('a')); //true
console.log(all.substring(1,5));// arry
console.log(all.slice(0,4));
console.log(all.split(" ")); // will be allry of words . will split from space ["gud","morning"]
console.log(all.replace('g','k')); // will replace 1st g with k
let printme=`hellow ${name1}
            <h1>u forgot to wish ${gud}
            <p>gud luck</P>`               //hellow  
document.body.innerHTML=printme   ;        // <h1> u forgot to wish morning</h1>
                                          //<p>gud luck</p>  

  // arrays
  marks=[10,35,68,49,45]
  let value1=marks.indexof(49);
  console.log(value1)
  marks.push(44)  //[10,35,68,49,45,44]
  marks.shift() //[35,68,49,45,44]   removes from front
  marks.splice(1,2) //[35,45,44]  from 1,deletes 2 element
 //object 
 let lists1={
     first="raj",
     last="gupta",
     result=[23,44,67,89],

 }
 console.log(lists1['first'])
 console.log(lists1.first)

 // if-else
 if (x!=="undefined"){
     console.log("its defined")
 }
 else{
    console.log("its not defined")
 }
age=45;
console.log(age==45 ? 'age is 45' : 'age is not 45');
//loops
for(let i=0;i<10;i++)
{
    console.log(i);
}

/*let k=0;
do{
    console.log(k+1);
    if(k===5){
        break;
    }
    k ++;

}while(k<10);  */

 /*  let arr2=[45,67,89,34,11];
    arr2.forEach(function(element,index,arr2){
        console.log(element);

    })        */ 

let obj2={
    first="raj",
    last="gupta",
    result=[23,44,67,89],
}
for(let key in obj2){
    console.log(`the ${key} of obj is ${obj2[key]}`)
}

//function
const myobj={
    first="raj",
    last="gupta",
    game: function(){
        return "GTA"
    }
}
console.log(myobj.game());
//let,const have block level scope
let a=window;
//console.log(a);
a=prompt('this is the prompt')
//console.log(a);
//a=confirm('r u sure u want to close ?.');
console.log(a);
a=Window.innerHeight;  // window is global
a=window.innerWidth
a=window.location
a=window.scrollX;
a=window.location.href='https://facebook.com' // will open facebook
console.log(a);
console.log("hellow its me");
console.table({name:'raj',marks:45});
console.warn("hurting error");
console.timeEnd('ur code took');





























