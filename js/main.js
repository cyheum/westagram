//section별로 관리 시스템 구현
const name = document.getElementById("yourName");

const sectionList = Array.from(document.getElementsByTagName("section"));

sectionList.forEach((section) => {
  //댓글 넣기 기능 구현

  const commentInput = section.getElementsByClassName("commentText")[0];
  const commentSubmitButton = section.getElementsByClassName(
    "commentButton"
  )[0];
  const commentList = section.getElementsByTagName("ul")[0];

  const submitComment = () => {
    if (commentInput.value === "") {
      return;
    }

    const wrapCommentLi = document.createElement("li");
    wrapCommentLi.innerHTML = `<a>${name.text}</a>${commentInput.value}<span class="commentIcons"><img class="commentHeart colorHeart" src="img/heart.png" alt="heart" /><span class="searchXBtn"></span></span>`;
    commentList.append(wrapCommentLi);
    commentInput.value = "";

    // 새로운 댓글 하트 버튼 활성화 구현

    const lastHeart = wrapCommentLi.getElementsByClassName("commentHeart")[0];

    let isLiked = false;
    lastHeart.addEventListener("click", function () {
      isLiked = !isLiked;
      updateHeartIcon(isLiked, lastHeart); //하트 컬러 부여 함수 호출
    });
  };

  commentSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    submitComment();
  });

  //enter로 댓글 넣기
  commentInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && commentInput.value !== "") {
      event.preventDefault();
      submitComment();
    }
  });

  //기존 좋아요 버튼 구현 및 좋아요 숫자 추가, 감소 기능 구현
  const heartBtnList = Array.from(section.getElementsByClassName("colorHeart"));
  let peopleCount = section.getElementsByClassName("peopleCount")[0];

  heartBtnList.forEach((heartBtn) => {
    let isLiked = false;
    heartBtn.addEventListener("click", function () {
      isLiked = !isLiked;
      updateHeartIcon(isLiked, heartBtn);

      const isBigHeart = this.classList.contains("bigHeart");
      if (isBigHeart) {
        peopleCount.textContent =
          Number(peopleCount.textContent) + (isLiked ? 1 : -1);
      }
    });
  });
});

// 하트 컬러 부여 함수 선언
function updateHeartIcon(isLiked, heartIcon) {
  heartIcon.src = isLiked ? "img/redheart.png" : "img/heart.png";
}
//댓글 3개이상이면 더보기 버튼 생성 및 높이 고정
//const comment = document.getElementsByTagName("ul"); 위에 선언

const commentList = document.getElementsByTagName;

// nav 검색 관련
const searchIcon = document.getElementsByClassName("searchIconBox")[0];
const navText = document.getElementsByClassName("navTextBar")[0];
const WrapNavText = document.getElementsByClassName("navTextBarCon")[0];
const searchIconText = document.getElementsByClassName("searchText")[0];

searchIcon.addEventListener("click", () => {
  WrapNavText.setAttribute("style", "z-index: 10;");
  navText.focus();
  if (navText.value.length > 0) {
    navText.select(); // 추가 : select() 메서드로 텍스트 전체 선택
  }
});

navText.addEventListener("focusout", () => {
  WrapNavText.setAttribute("style", "z-index: 0;");
  if (navText.value === "") {
    searchIconText.innerHTML = `검색`;
  } else {
    searchIconText.innerHTML = navText.value;
  }
});

// aside bar story 모두보기 구현
let isStoryBtnPush = false;
const storyAllBtn = document.getElementsByClassName("storyAll");
const story = document.getElementsByClassName("storyRecomWrap");

for (let i = 0; i < storyAllBtn.length; i++) {
  storyAllBtn[i].addEventListener("click", () => {
    ClickStoryAll(i);
  });
}

const ClickStoryAll = (num) => {
  if (!isStoryBtnPush) {
    story[num].setAttribute("style", "height: auto;");
    isStoryBtnPush = true;
  } else {
    story[num].setAttribute("style", "height: 225px");
    isStoryBtnPush = false;
  }
};

// 화면 사이즈 어느 지점(break point) 이하로 줄어들 시 우측 nav바 제거
const asideWrapNav = document.getElementsByClassName("asideWrap");
const wrapMain = document.getElementsByClassName("wrapMain");
const mediaQ = window.matchMedia("(max-width: 1024px)");

mediaQ.addListener((e) => {
  if (e.matches) {
    asideWrapNav[0].setAttribute("style", "display: none;");
    wrapMain[0].classList.add("changeMain");
  } else {
    asideWrapNav[0].setAttribute("style", "display: intial");
    wrapMain[0].classList.remove("changeMain");
  }
});

// 검색창 활성화 (아직 텍스트 value로 검색하는 기능은 구현 못함)
//const navText = document.getElementsByClassName("navTextBar")[0];
const SearchBox = document.getElementsByClassName("wrapSearchBox")[0];

navText.addEventListener("keyup", () => {
  toggleHiddenSearchBox();
});

navText.addEventListener("focusout", () => {
  SearchBox.classList.add("hiddenSearchBox");
});

navText.addEventListener("focusin", () => {
  toggleHiddenSearchBox();
});

function toggleHiddenSearchBox() {
  if (navText.value.length > 0) {
    SearchBox.classList.remove("hiddenSearchBox");
  } else {
    SearchBox.classList.add("hiddenSearchBox");
  }
}
