const initialLike = 100;
const initialdisLikes = 20;

let likesCount = initialLike
let dislikeCount = initialdisLikes

// get all UI elements

const likesBtn = document.getElementById("likeBtn")
const dislikesBtn = document.getElementById("dislikeBtn")
const commentBox = document.getElementById("commentBox")
const submitBtn = document.getElementById("submit")
const resetBtn = document.getElementById("Reset")
const commentsList = document.getElementById("commentsList")

// Set initial valuues for the buttons
likesBtn.innerText = "👍 " + likesCount;
dislikesBtn.innerText = "👎 " + dislikeCount

// Handle like btn

likesBtn.addEventListener("click", function () {
    likesCount++;
    likesBtn.innerText = "👍 " + likesCount;
    setCookie();

})

// Handle dislike btn

dislikesBtn.addEventListener("click", function () {
    dislikeCount++;
    dislikesBtn.innerText = "👎 " + dislikeCount;
    setCookie();

})


// Handle submit a comment

submitBtn.addEventListener("click", function () {
    // create a <p>
    const pElem = document.createElement("p")
    pElem.innerText = commentBox.value.trim();
    commentsList.appendChild(pElem)
    commentBox.value = "";
    setCookie();
})


// Handle clear
resetBtn.addEventListener("click", function () {
    commentBox.value = "";
    document.cookie= "voted=true; path=/; expires=" + new Date(Date.now() - 1).toUTCString();
})

function setCookie() {
    const expOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted=true; path=/; expires="+ expOn.toUTCString();
    document.cookie = cookieString;
}

// check for cookies when the page is loading

window.onload = function() {
    if(document.cookie && document.cookie.indexOf("voted" > -1)) {
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        submitBtn.disabled = true;
        resetBtn.disabled = true;
    }
}