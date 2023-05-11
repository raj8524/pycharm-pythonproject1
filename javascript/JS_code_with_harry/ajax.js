console.log("ajax in a 1,full");
let fetchbtn =document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonClick);

function buttonClick(){
    console.log('you have clicked the fetchbtn');

    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1' , true);
    //xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employee/1' , true);

    //use this for post request
    xhr.open('POST', ' 	http://dummy.restapiexample.com/api/v1/create' , true);
    xhr.getResponseHeader('Content-type', 'application/json');


    //what to do on progress(optional)
    xhr.onprogress= function(){
        console.log('on progress');

    }
    //what to do when respose is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }
    //send the request
    params = `{"name":"test12","salary":"123","age":"23"}`;
    xhr.send(params);
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}






























