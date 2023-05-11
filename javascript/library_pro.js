//store all the data to the localstore
//give another column as an option to delete the book
//add scrollbar to view
/* constructor*/
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
/* Display constructor */
function Display() {

}

//Add methods to dispaly prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>  
                       
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`  ;
    tableBody.innerHTML += uiString;
}
// to clear the form/screen  once it is submitted .
Display.prototype.clear = function () {
    let libraryform = document.getElementById('library-form');
    libraryform.reset();

}
//implement validate 
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type,displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>message</strong> ${displayMessage}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
    setTimeout(function(){
        message.innerHTML=''

    } ,2000);           
   
}



// Add submit event listner to libraryForm
let libraryform = document.getElementById('library-form');
libraryform.addEventListener('submit', libraryFormSubmit); //to listen when someboy clicks on submit
function libraryFormSubmit(e) {
    console.log('you have submitted the  library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('Fiction');
    let programing = document.getElementById('programing')
    let non_fiction = document.getElementById('non_fiction');

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;

    }
    else if (non_fiction.checked) {
        type = non_fiction.value;
    }
    let book = new Book(name, author, type);
    console.log(book)

    let display = new Display();
    //will validate show that all details should be entered before add.
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','you have submitted successfully')

    }
    else {
        display.show('error','soorry u cant add this book')
    }


    //  by defalut when form is submitted ,it reloads itself. to prevent reload below command//
    e.preventDefault();



}