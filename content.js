const button = document.querySelector("#button");
const commentList = document.querySelector("#comment-list");

showComments();

function myFunction() {
    var username = document.getElementById("name").value; //getting value of input field
    var comment = document.getElementById("comment").value;
    let storage = localStorage.getItem("New Comments"); //getting localstorage

    if (storage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(storage);
    }

    listArr.push(
        //pushing or adding new value in array
        "<span>" +
        "<img src = 'user.png'/>" +
        name +
        "<br/>" +
        "</span>" +
        "<br>" +
        comment
    );
    localStorage.setItem("New Comments", JSON.stringify(listArr));

    showComments(); //calling showComments function
}

function showComments() {
    let storage = localStorage.getItem("New Comments");

    if (storage == null) {
        listArr = []; //create a blank array
    } else {
        listArr = JSON.parse(storage); //transforming json string into a js object
    }

    let liTag = "";

    listArr.forEach((element, index) => {
        liTag += ` <div class="people-comment-container">
                        <div>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div>
                            <h3>${index.username}</h3>
                            <p>${index.comment}</p>
                            <p><strong>3hrs ago </strong> </p>
                        </div>
                    </div>`;
    });

    commentList.innerHTML = liTag;
}