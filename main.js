let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") { // if the input value is empty
        msg.innerHTML = "Post cannot be blank."; // error message
        console.log("failure");
    } else {    // if the input value is not empty
        console.log("success")
        msg.innerHTML = "";
        acceptData();
    }
};
 
// store data from input fields in an object called data

let data = {};

//we will collect data using this function and store it in our data object above
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);

    createPost();
};

// C: create
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
}

//U: update
let editPost = (e) => {

};

// D: delete
let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};