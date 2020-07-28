const commentText = document.getElementsByClassName("commentText");
const commentButton1 = document.getElementsByClassName("commentButton");
const comment = document.getElementsByTagName("ul");
const name = document.getElementById("yourName");
let isItColor = [];
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
  wrapCommentLi.appenrd(commentText[0].value);
  wrapCommentLi.append(wrapCommentImg);

  comment[0].append(wrapCommentLi);
  commentText[0].value = null;

  event.preventDefault();
});

let heartBtn = document.getElementsByClassName("colorHeart");

for (let i = 0; i < heartBtn.length; i++) {
  isItColor[i] = false;
  let value = heartBtn[i];

  value.addEventListener("click", function () {
    let isBigHeart = this.classList.contains("bigHeart");

    if (isBigHeart) {
      let article = this.parentNode.parentNode.parentNode;
      console.log(article);
      let peopleCount = article.getElementsByClassName("peopleCount")[0];
      console.log(peopleCount);

      let newPeopleCount;
      if (!isItColor[i]) {
        newPeopleCount = "외 1,399명";
      } else {
        newPeopleCount = "외 1,398명";
      }
      peopleCount.innerHTML = newPeopleCount;
    }

    if (!isItColor[i]) {
      this.src = "img/redheart.png";
      isItColor[i] = true;
    } else {
      this.src = "img/heart.png";
      isItColor[i] = false;
    }
  });
}

// normalheartBtn.addEventListener("click", function () {
//   heartBtn.src = "img/heart.png";
//   heartBtn.class = "iconStyle colorHeart";
// });
