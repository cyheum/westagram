const commentText = document.getElementsByClassName("commentText");
const commentButton1 = document.getElementsByClassName("commentButton");
const comment = document.getElementsByTagName("ul");
const name = document.getElementById("yourName");
let isItColor = true;
let isHeartPush = true;

commentButton1[0].addEventListener("click", function () {
  let wrapCommentLi = document.createElement("li");
  let wrapCommentA = document.createElement("a");
  let wrapCommentImg = document.createElement("img");

  wrapCommentImg.setAttribute("class", "commentHeart colorHeart");
  wrapCommentImg.setAttribute("src", "img/heart.png");
  wrapCommentImg.setAttribute("alt", "heart");

  wrapCommentA.append(name.text);
  wrapCommentLi.append(wrapCommentA);
  wrapCommentLi.append(commentText[0].value);
  wrapCommentLi.append(wrapCommentImg);

  comment[0].append(wrapCommentLi);
  commentText[0].value = null;
  event.preventDefault();
});

let heartBtn = document.getElementsByClassName("colorHeart");

heartBtn[0].addEventListener("click", function () {
  if (!isItColor) {
    heartBtn[0].src = "img/redheart.png";
    isItColor = true;
  } else {
    heartBtn[0].src = "img/heart.png";
    isItColor = false;
  }
});

// normalheartBtn.addEventListener("click", function () {
//   heartBtn.src = "img/heart.png";
//   heartBtn.class = "iconStyle colorHeart";
// });
