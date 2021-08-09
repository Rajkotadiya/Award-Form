const form = document.forms[0];
let AllData = new Array(); // for array of objects
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent defualt behavior of reloading on submitting
    const formData = new FormData(this); 
    var formAlldata = {}; // forming an object, which will be pushed into AllData array
    for (const formElement of formData) {
        let c = formElement[0]; // name field
        let d = formElement[1]; // User input
        formAlldata[c] = d; // Assigning new field in object
    }
    AllData.push(formAlldata)
    localStorage.setItem('DATA_FORM', JSON.stringify(AllData));  // Setting local storage
    let data = JSON.parse(localStorage.getItem('DATA_FORM')); // output will be array of objects
    $('.formOff')[0].reset(); // Will Clear all input fields after submitting
});

