
//let a=document;
//a=document.all
//console.log(a);//a is object
/*Array.from(a).forEach(function(element){          //forming array from a
    console.log(element)
})*/
//a=document.links[0];
/*aa=document.scripts //to see all the scripts tag of html on console. 
console.log(aa)
x="com"
let ab=document.links
function find(ab,x){
    if x in ab{
        console.log(x)
    }
}
console.log(ab)
*/
//let element=document.getElementById("first_one");
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;
//element.style.color='red';// to chnage color of that "first-one"
//element.innerText="raj is handsome" // to chnage text of that id
//element.innerHTML='<br>lets bang</br>';
//console.log(element)
//let sel=document.querySelector('#first_one'); //# id
//sel=document.querySelector('.child'); //. class
//let sel=document.querySelector('div');   //will return first div
//sel.style.color='green'
//let elems=document.getElementsByClassName('child')
//console.log(elems)
//let elems=document.getElementsByClassName('container')
//console.log(elems[0].getElementsByClassName('child'))
//console.log(elems)
/*let elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
//console.log(elems)
Array.from(elems).forEach(Element=>{
    console.log(Element)
}) */
/*
//elems=document.getElementsByTagName('div');
//let elems=document.getElementsByClassName('child')
elems=document.getElementsByTagName('form');
for(let index=0;index<elems.length;index++){
    const element=elems[index];
    console.log(element)
    element.style.color="red"
}
*/

/*
The innerText property returns just the text, without spacing and inner element tags.
The innerHTML property returns the text, including all spacing and inner element tags.
The textContent property returns the text with spacing, but without inner element tags.
*/
//let cont=document.querySelectorAll('.no');
/*let cont=document.querySelector(".container")
console.log(cont.childNodes);   //childnodes counts space(new line  as text)
console.log(cont.children); //will count only elements
let nodeName=cont.childNodes[1].nodeName;
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType) */

/*Nodetypes
1.element
2.Attribute
3.Text Node
8.Comment
9.document
10.docType       */
/*
let club=document.querySelector('div.container');
//console.log(club.children[1].childNodes[3].children)   // to traverse ffrom console to see whats there 
console.log(club.firstChild); // first child of container
console.log(firstElementChild);  //details of child element
console.log(firstElementChild.parentNode)  //will show parent node container
console.log(firstElementChild.nextSibling)
*/
//class,id,text created
/*let element=document.createElement('li');
element.className='child12';
let text=document.createTextNode('i m text node')
element.appendChild(text)
element.id="hoi_poi";
element.setAttribute('title','mytitle'); //to set attribute*/
//element.innerHTML='<b>this is created by raj</b>'; //for adding text
//element.innerText='<b>this is created by raj</b>'; //for adding text
//console.log(element);
//console.log(element);
/*
let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);*/

//replaced id,class,text
/*
let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is for elem2');//for adding text 
elem2.appendChild(tnode);
element.replaceChild(elem2);*/

//replaced with id defined in html
/*
let lkg=document.getElementById("myl");
lkg.replaceChild(element,document.getElementById("myl"));
lkg.removeChild(document.getElementById('myl'));
let pr=elem2.hasAttribute('elem2') // to check attribute available in elem2
elem2.removeAttribute('id'); // to remove attribute
console.log(pr);*/



//events
/*
document.getElementById("heading").addEventListener("click", function (e) {
    let eve;
    console.log("u have clicked");
    //eve = e.target;  //to see h1 haeding
    //eve=e.target.className; //to see name of class 
    eve=Array.from(e.target.classList); // to see classlist
    console.log(eve);
    eve=e.target.id;
    eve=e.offsetX;
    eve=e.offsetY;
    eve=e.clientX;
    eve=e.clientY

});*/
/*
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
function func1(e){
    console.log('This is click',e);
    e.preventDefault();//bydefalut click event,get submitted if u click anywhere if type=submit instaead of button.to avoid use preventdefault
}*/
/*
let btn=document.getElementById('btn');
btn.addEventListener('dblclick',func2);
function func2(e){
    console.log('This is double click',e);
    e.preventDefault();
}*/
/*
let btn=document.getElementById('btn');
btn.addEventListener('mousedown',func3);//mousedown event name
function func3(e){
   //document.body.style.backgroundColor='green';
   console.log('This is mouse down',e);
   e.preventDefault();
}*/
/*
document.querySelector('.container').addEventListener('mousemove',function(e){
    
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor='red';
    console.log('you triggered mouse move event');

})*/

// 13 solutions on codewith harry site
/*
let str="python";
let links=document.links;
console.links;
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str))
    {
        console.log(href);
    }
});
*/

//local storage in js
/*
localStorage.setItem('name','raj');
localStorage.setItem('name2','roshan');// add key-value  pair inside local storege
let impArray=['govi','onion','bhindi','tomato']//imparry will reflecct as string rather as array in local storage
localStorage.setItem('sabzi',impArray);// its string now
localStorage.setItem('sabzi',JSON.stringify(impArray));//takes object returns as string  now
//window.localStorage   on console
//localStorage.clear(); // clears the entire local storege
//localStorage.removeItem('sabzi');
//let name1=localStorage.getItem('name');
let name1=localStorage.getItem('sabzi') // retrieve item from local storege
vezi=JSON.parse(localStorage.getItem('sabzi')) //now converted to array from string.
console.log(vezi);*/


//session storage in js.session storage is removed once browser is closed but local storage remains
/*
sessionStorage.setItem('sname','sraj');
sessionStorage.setItem('sname2','sroshan');// add key-value  pair inside local storege
let impArray=['agovi','aonion','abhindi','atomato']//imparry will reflecct as string rather as array in local storage
sessionStorage.setItem('ssabzi',impArray);// its string now
sessionStorage.setItem('ssabzi',JSON.stringify(impArray));//takes object returns as string  now
*/
/*
//maths objects
z=Math.floor(-5.3)//6
z=Math.random(); // gives in range of 0-1.
x=100*z;


// date objects
let today=new Date;
let otherDate=new Date('8-4-2003 04:54:08');
otherDate=new Date ('jube 13 1976');
otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a=otherDate.getDay();
a=otherDate.getDate();

a=otherDate.getMinutes();
a=otherDate.getTime();
otherDate.setDate(23);
otherDate.setMinutes(1);
*/

/* solution to episode 21
you have to create div and inject into the page which contains heading. whenever someone clicks on div,it should be converted into editable item.
whenever user clicks away (blur).save the into local storage. 

let divElem = document.createElement('div');
let val=localStorage.getItem('text');
let text;
if(val==null){
    text=document.createTextNode('this is my element.click to edit it');
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);
divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin:34px; padding :23px;');
let container = document.querySelector('.container');
let first = document.getElementById('first_one');

//insert the element before with id first_one
container.insertBefore(divElem, first);
//divElem.appendChild(text);
console.log(divElem, container, first);

//add event listner to the divelm
divElem.addEventListener('click',function(){
    let noTextAreas=document.getElementsByClassName('textarea').length;//once clicked textarea is 1,else 0.
    if(noTextAreas==0){
        let html=elem.innerHTML;
        divElem.innerHTML=`<textarea class="textarea from-control" id="textarea" rows="3">${html}</textarea>`;
    }
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.nodeValue;
        localStorage.setItem('text',textarea.value)
    })
})
*/

//28 .new creates object with help of conustructure. object literals,constructor,object oriented javascript
/*
let car = {
    name: 'maruthi 800',
    topspeed: 89,
    run: function () {
        //console.log("car is running");
    }
}
//creating constructure for cars
function GeneralCar(givenname, givenspeed) {
    this.name = givenname;
    this.topspeed = givenspeed;
    this.run = function () {

        console.log(`${this.name} is running`);
      }
    this.analyze=function(){
        console.log(`tthis is slower by ${200-this.topspeed} km/h by mercedes`)
    }  
}
car1 = new GeneralCar('nissan', 180);
car2 = new GeneralCar('ford', 100);
console.log(car1.run());
console.log(car1.analyze());
*/

// 29 object protocols
/*
console.log("This is tutorial 28");
// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Rohan Das");
console.log(obj2);
 */

// 30 .prototype inheritence
/*const proto = {
    slogan: function () {
        return `this company is best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}
//this creates harry object 
let harry = Object.create(proto);
harry.name = "harry";
harry.role = "Programmer";
harry.changeName = "Harry2";
console.log(harry);

//this also creates harry object 
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName = "Harry2";
console.log(harry1);

//Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//slogan
Employee.prototype.slogan = function () {
    return `This company is the best. regards, ${this.name}`;
}
//create an object from constructor
let harryobj = new Employee("raj", 40000, 5);
console.log(harryobj.slogan())

//programmer
function Programmer(name,salary,experience,Language){
    Employee.call(this,name,salary,experience);
    this.Language=Language;
}
//Inherit the prototype
Programmer.prototype=Object.create(Employee.prototype);
//manually set the conustructor
Programmer.prototype.constructor=Programmer;

let rohan=new Programmer("rohan",2,1,"java");
console.log(rohan)
*/


//31.ES6 CLASSES and inheritence
/*
class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
    slogan(){
        return `Im ${this.name} and this comapny is best`;        
    }
    joiningYear(){
        return 2020-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));
*/

//34. asynchronous programming means multiple things happen at same time. 3 ways to do async,callbacks,promises


// video-36. exercise 4 solution .
/* create class library and implement folloowing:constructor mus take the booklist as an argument,getbooklist(),
issuebook(bookname,user),returnbook (bookname)

class bookLibrary {
    constructor(booklist) {
        this.booklist = booklist;
        this.issuedbooks = {};
    }
    getbookslist() {
        this.booklist.forEach(element => {
            console.log(element)
        });
    }
    issuebooks(book, user) {
        if (this.issuedbooks[book] == undefined) {
            this.issuedbooks[book] = user;
        }
        else {
            console.log("this book is already issued")
        }
    }
    returnbook(book) {
        delete this.issuedbooks[book]
    }
}
books=new bookLibrary('lost','forever','death penalty');
*/

//37 video callback function
/*
console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 8000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 3000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();
*/

//video  39....promises..
// Promise: Best video on promises
// -resolve
// -reject
// -pending
/*
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})*/

//test for resolve ,reject
/*
const valentine = [
    { name: "vishaka", loves: "harry" },
    { name: "madhuri", loves: "raj" }
]

function Senior_seconday(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            valentine.push(student);
            console.log("girls may propose boys");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }

        }, 1000);
    })
}

function secondary() {
    setTimeout(function () {
        let str = "";
        valentine.forEach(function (student) {
            str += console.log(`${student.name} loves ${student.loves}`);
        });
        console.log("Students details have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", loves: "irfan" }
Senior_seconday(newStudent).then(secondary).catch(function () {
    console.log("proposal not accepted");
});
*/

// video 41.

/* ARROW FUNCTIONS

// Creating a regular function
// const harry = function (){
//     console.log("This is the best person ever")
// }

// Converting it to an arrow function
// const harry = ()=>{
//     console.log("This is the best person ever")
// }
// harry();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;

console.log(greet('Harry'))
*/

// video 42.
/*
console.log('This is my tutorial 42');

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content 
let content = document.getElementById("content");
*/
// function getData(){
//     console.log("Started getData")
//     url = "harry.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }
/*
function getData(){
    console.log("Started getData")
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.json();
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}*/

/*
function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}

//console.log("Before running getData")
//getData()
//console.log("After running getData")
postData()
*/

//VIDEO 43.. async/await
/*
console.log("This is tutorial 43");

async function harry() {
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

    // return "harry";
}

console.log("Before calling harry")
let a = harry();
console.log("After calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")
*/

//video 44 error handling.
/*
console.log("This is tutorial 44");

// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    null.console
    console.log("We are inside try block");
    
    functionHarry();
    
} catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("Finally we will run this")
}
*/

//video 45
/*
console.log("This is tutorial 45");

const myJson = `{
    "word": "example",
    "results": [
      {
        "definition": "a representative form or pattern",
        "partOfSpeech": "noun",
        "synonyms": [
          "model"
        ],
        "typeOf": [
          "representation",
          "internal representation",
          "mental representation"
        ],
        "hasTypes": [
          "prefiguration",
          "archetype",
          "epitome",
          "guide",
          "holotype",
          "image",
          "loadstar",
          "lodestar",
          "microcosm",
          "original",
          "paradigm",
          "pilot",
          "prototype",
          "template",
          "templet",
          "type specimen"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "I profited from his example"
        ]
      },
      {
        "definition": "something to be imitated",
        "partOfSpeech": "noun",
        "synonyms": [
          "exemplar",
          "good example",
          "model"
        ],
        "typeOf": [
          "ideal"
        ],
        "hasTypes": [
          "pacemaker",
          "pattern",
          "beauty",
          "prodigy",
          "beaut",
          "pacesetter"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ]
      },
      {
        "definition": "an occurrence of something",
        "partOfSpeech": "noun",
        "synonyms": [
          "case",
          "instance"
        ],
        "typeOf": [
          "happening",
          "natural event",
          "occurrence",
          "occurrent"
        ],
        "hasTypes": [
          "clip",
          "mortification",
          "piece",
          "time",
          "humiliation",
          "bit"
        ],
        "derivation": [
          "exemplify"
        ],
        "examples": [
          "but there is always the famous example of the Smiths"
        ]
      },
      {
        "definition": "an item of information that is typical of a class or group",
        "partOfSpeech": "noun",
        "synonyms": [
          "illustration",
          "instance",
          "representative"
        ],
        "typeOf": [
          "information"
        ],
        "hasTypes": [
          "excuse",
          "apology",
          "specimen",
          "case in point",
          "sample",
          "exception",
          "quintessence",
          "precedent"
        ],
        "derivation": [
          "exemplify",
          "exemplary"
        ],
        "examples": [
          "this patient provides a typical example of the syndrome",
          "there is an example on page 10"
        ]
      },
      {
        "definition": "punishment intended as a warning to others",
        "partOfSpeech": "noun",
        "synonyms": [
          "deterrent example",
          "lesson",
          "object lesson"
        ],
        "typeOf": [
          "monition",
          "admonition",
          "word of advice",
          "warning"
        ],
        "derivation": [
          "exemplary"
        ],
        "examples": [
          "they decided to make an example of him"
        ]
      },
      {
        "definition": "a task performed or problem solved in order to develop skill or understanding",
        "partOfSpeech": "noun",
        "synonyms": [
          "exercise"
        ],
        "typeOf": [
          "lesson"
        ],
        "examples": [
          "you must work the examples at the end of each chapter in the textbook"
        ]
      }
    ],
    "syllables": {
      "count": 3,
      "list": [
        "ex",
        "am",
        "ple"
      ]
    },
    "pronunciation": {
      "all": "ɪɡ'zæmpəl"
    },
    "frequency": 4.67
  }`;

const myObj = JSON.parse(myJson);
console.log('The object is  :', myObj);
console.log('The results in the object are  :', myObj['results']);

let meanings = document.getElementById('meanings')
meanings.addEventListener('click', ()=>{
    console.log('someone clicked meanings');
    populate();
})

function populate() {
    let results = myObj['results'];
    let html = "";
    results.forEach(element => {
        html += `<li class="list-group-item list-group-item-light">One of the definitions of example is ${element.definition} </li>`;
    });
    let defs = document.getElementById('defs');
    defs.innerHTML = html;
    
}
*/

//video 46.
/*
console.log("This is tutorial 46");
let reg = /harry/; // This is a regular expression literal in js
reg = /harry/g; // g means global
// reg = /harry/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result); ---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) ---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
// console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);
*/

// video 47
/*
console.log('This is tutorial 47');

let regex = /harrsdfgy/;
// Lets look into some metacharacter symbols
regex = /^harrdc/; // ^ means expression will match if string starts with
regex = /harry$/; // $ at the end of the string means "string ends with"
regex = /h.rry/; //matches any one character
regex = /h*rry/; //matches any 0 or more characters
regex = /ha?rryi?t/; //? after character means that character is optional
regex = /h\*rry/

let str = "h*rry means codewith"; // 

let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
*/


// video 48
/*
console.log("This is tutorial 48");
// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harrry bhai"
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
*/

//video 49
/*
console.log("This is tutorial 49");

// Character classes
let regex = /\war/;     //word character - _ or alphabet or numbers
regex = /\w+d1r/;       // \w+ means one or more word characters
regex = /\Wbhai/;       // Non word character
regex = /\W+bhai/;      // \W+ means more than one Non word character
regex = /number \d999/; // \d means digit
regex = /number \d+/;   // \d+ means more than one digit
regex = /\D999/;        // \D means non digit
regex = /\D+999/;       // \D+ means more than one non digit
regex = /\ska number/;  // Match whitespace character
regex = /\s+ka number/; // \s+ means match one or more than one whitespace characters
regex = /\Ska number/;  // Match non whitespace character
regex = /\S+ka number/; // Match one or more than one non whitespace character
regex = /4r5r\b/;  // word boundary

// Assertions
regex = /h(?=y)/;
regex = /h(?!y)/;
str = "harh7rd1r4r5ry%%$@bhai hdrryika number 899999harry9999";



let result = regex.exec(str);
console.log("The result from exec is ", result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
*/



































































































































































































































































































































































































































