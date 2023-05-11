/*
//92a249fd8d6d45448be1fdbf876e67d3
console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '92a249fd8d6d45448be1fdbf876e67d3'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://cors.io/?https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}xhr.send()*/
/*string,null(typeof object),boolean,number,undefined(typeof undfined): primitive 
refrenced: array ,object lioterals,function(typeof object),Date
let myvar=String(34);
myvar.toString();
let stri=Number("3434");
tru-1,false-0;
let xy=parseFloat('34.098');
xy.toFixed(3):34.098
html="<h1>this is heading</h1>"+"<p1>this is m,y para</p1>";
html =html.concat(harry);

string properties
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));*/
/*
console.log(age==45? "Age is 45": "U r young")
switch (key) {
    case value:
        
        break;

    default:
        break;
}

for (let i = 0; i < 100; i++) {
    console.log(i);
       if (i == 90) {
           break;
       }
   }

   let i = 1, n = 100;
   while (i <= n) {
       console.log(i);
       i += 1;
   }


   let i = 1;
let n =100;
do {
    console.log(i);
    i++;
} while(i <= n);


arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

const myobj = {
    name: "SkillF",  
       game: function(){
        return "GTA";   
} } 
    console.log(myobj.game())
    
   a=alert('hello raj');
   a=prompt('this is me');
   a=confirm('dont kill me');
   a=window.document;
   console.log(a);

a=alert('hello raj');
a=prompt('this is me');
a=confirm('dont kill me');
a=window.document;
a=window.innerHeight;
a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = location.toString();
a = window.history;
a=history.go
console.log(a);

//DOM IS structural presentational of html,window is the DOM.
//window.document

a=document.body
a=document.forms[0]
console.log(a)
a=document.all  //will give all tags in html present
Array.from(a).forEach(function(element){
    console.log(element)

})
b=document.links
b=document.links[1].href
b=document.scripts
b=document.images
console.log(b)

let x=document.getElementById('first');
x=x.childNodes;   counts new lines,comment,element....newline as text
x=x.children;    counts only the element
x=x.childName;
x=x.parentNOde;
x.style.color="red";
x.innerText="birthday boy";
x.innerHTML="<b>love me</b>";
console.log(x)
console.log(x.innerHTML)
sel=document.querySelectorAll('.child');
elems=document.getElementsByClassName('red')
console.log(elems[0]);
elems=document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));
elems=document.getElementsByTagName('div');
console.log(elems);
Array.from(elems).forEach(function(element){
    console.log(element);

})

cont=document.querySelector('.container');
let nodeName=cont.childNodes[0];
console.log(nodeName);
let nodeName=cont.childNodes[0].nodeName;
console.log(nodeName);
let nodeType=cont.childNodes[0].nodeType;
console.log(nodeType);
Node types
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType */

/*let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild); it takes firstelemt considering as childNode
console.log(container.firstElementChild); //it takes firstelemt considering as children


let container = document.querySelector('div.container');
console.log(container.lastChild);
console.log(container.lastElementChild);



let container = document.querySelector('div.container');
console.log(container.children);
console.log(container.childElementCount); // Count of child elements
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);count of sibling with text   (childnodes)
console.log(container.firstElementChild.nextElementSibling); count of sibling without text
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);*/



// creating,removing,replacing
/*console.log('this is tut 16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);*/

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href 
//= "https://www.codewithharry.com"


//event & event object
/*console.log("This is tutorial 17 on events");

document.getElementById("first").addEventListener("click", function(e) {
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;  // to know where u clicked.
  variable = e.target.className; // to knowclassname where u clicked.
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href = '//codewithharry.com'
});
document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);

*/


/*local storage,session
localStorage.setItem('town','sasaram'); // to set data in localstorage
localStorage.setItem('name','raj');
localStorage.setItem('class','10');
console.log(window.localStorage);
abc=localStorage.getItem('name');// to get item from localstorage
console.log(abc);
localStorage.clear();  // to clear localstorage

let impArray = ['adrak', 'pyaz', 'bhindi'];
localStorage.setItem('Sabzi', JSON.stringify(impArray)); // to convert tostring

name1 = JSON.parse(localStorage.getItem('Sabzi')); // to convert to json
console.log(name1)

sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
*/


/* object literals,constructors,object oriented javascript

// Object Literal for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function() {
    console.log("car is running");
  }
};
// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} Is Running`);
  };
  this.analyze = function() {
    console.log(
      `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
    );
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);
*/

/*Object prototype..---when u make object literals,object prototypes r built in and comes with object literals. when constructors 
r made , object prototypes r in inside proto. dont change built in object prto. its advised to make constructor, then create own 
object prototypes.
let car = {
    name: "Maruti 800",
    topSpeed: 89,
    run: function() {
      console.log("car is running");
    }
  };
//console.log(car);

function calculate (newname,newspeed){
    this.name=newname;
    this.topSpeed=newspeed;
}
calculate.prototype.getName=function(){      //creating object proto trrough own constructor
    return this.name;
}
obj2=new calculate('Tesla',300);
console.log(obj2.name);
console.log(obj2); */


/*prototype inheritence
const proto ={
    slogan:function(){
        return 'i didnt like the movie';
    },
    changemovie:function(newMovie){
        this.name=newMovie;
    }
}
const objpro=Object.create(proto); //creating object prototype through object literals
objpro.name='raj';
objpro.age=29;
objpro.role='programmer';
objpro.changemovie("madhuri");
console.log(objpro);

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Harry", 345099, 87);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);
*/

//ES6 ,inheritence
/*
console.log("this is Tutorial31.js");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
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





























































































 


























































































    
































