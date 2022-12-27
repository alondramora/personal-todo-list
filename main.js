let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
})

let formValidation = () => {
    if (input.value === "") { // if the input value is empty
        msg.innerHTML = "Post cannot be blank."; // error message
        console.log("failure");
    } else {    // if the input value is not empty
        console.log("success")
        msg.innerHTML = "";
    }
 };