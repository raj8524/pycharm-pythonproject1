 // 1.javascript console API
 console.log("kick me")
 //<document.write("raj's document save it for forever")
 console.warn("this is warning")
 console.error("this is an error")

 /*
 var num1=10;
 var num2=20;
 console.log(num1+num2);

 // data types in js
 var str1="raj love"
 var str2="ditched"
// oject data type
 var marks={
     ravi=56,
     harry=78,
 }
 console.log(marks)
 //boolean
 */
 /*
 var a=true;
 var b=false;
 console.log(a,b);
 var und;
 console.log(und); */

 var n=null;
 console.log(n);
 /* at very high level ,two types of data types in js
 1 primitive data types=undefined,null,number,string,boolean,symbol
 2.reference data types=arrays,objects
 */

 /*
var arr=[1,2,3,4,5]
//comparison operator
var x=10;
var y=9;
console.log(x>=y); */

//logical or         (|| means or )
//console.log(true || true)
//console.log(true || false)
//console.log(false || true)
//console.log(false|| false)


/*logical and        (&& means and )
//console.log(true && true)
//console.log(true && false)
//console.log(false && true)
//console.log(false && false)  */

/*logical not
console.log(!false);
console.log(!true); */

/*      function avg(a,b){
    c=(a+b)/2;
    return c
}
c1=avg(10,30);
console.log(c1);   */

// conditionals in javascript

/*  conditional statement
var age=4;
if(age>18){
    console.log('you r adult')}
else {
    console.log('you r teenage')
}
*/

/* for loop
var arr2=[40,5,6,8,20,1,0]
for (var i=0;i<arr2.length;i++){
    console.log(arr2[i])
}   */

/* for loop another way
arr.foreach(function(element)
{
    console.log(element)
})
*/
/*
const ac=0
let j=0;
while(j<arr2.length){
    console.log(arr2[j]);
    j++
}
let k=10;
do{
    console.log(arr2[k]);
    j++;

}
while(k<arr2.length);
*/
/*
let arr3=["xy","camera",45,null,true];
// console.log(arr3.length);
console.log(arr3.pop());
console.log(arr3.push("raj"));
console.log(arr3.shift());   //deletes first element
console.log(arr3.unshift("suhani"));

*/
/*
let mylove="raj is gud boy, raj is handsome";
console.log(mylove.length)
console.log(mylove.indexOf("is"))
console.log(mylove.lastIndexOf("is"))
console.log(mylove.replace("is","was"))
*/

// Document manipulation
/*
let elem=document.getElementById('click')
let elmclass=document.getElementsByClassName("container")
console.log(elmclass);
elmclass[0].style.background="yellow"   //to change color of oth element of the container class
elmclass[0].classList.add("bg-primary")
elmclass[0].classList.add("text-success")

console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elmclass[0].innerHTML);
console.log(elmclass[0].innerText);
*/
/*
tn=document.getElementsByTagName('div');
console.log(tn);
createdelement=document.createdelement('p');
createdelement.innertext="create this paragraph for me";
tn[0].appendchild(createdelement);
createdelement2=document.createdElement('b');
createdelement2.innertext="this is created bold";
tn[0].replacechild(createdelement2,createdElement);

*/

//selecting using querery

/*sel=document.querySelector('.container')
sel1=document.querySelectorAll('.container')
console.log(sel1)
*/

//events in js

    
/*function clicked(){
    console.log("it was clicked");
}
*/

firstcontainer.addEventListner('click',function(){
    console.log("click hua")
})





























 














































































































