(() => {
  // modules/int_obs_pageChange.js
  var page_Options = {
    threshold: 0.6
  };
  var guideText = document.getElementById("guide-text");
  var detectPage1 = new IntersectionObserver(function(entries, detectPage22) {
    entries.forEach((page) => {
      if (!page.isIntersecting) {
        return;
      } else {
        guideText.innerHTML = "Home";
      }
    });
  }, page_Options);
  var detectPage2 = new IntersectionObserver(function(entries, detectPage22) {
    entries.forEach((page) => {
      if (!page.isIntersecting) {
        return;
      } else {
        guideText.innerHTML = "Our Story";
      }
    });
  }, page_Options);
  var detectPage3 = new IntersectionObserver(function(entries, detectPage22) {
    entries.forEach((page) => {
      if (!page.isIntersecting) {
        return;
      } else {
        guideText.innerHTML = "See You Soon";
      }
    });
  }, page_Options);

  // modules/time.js
  var determineDayHours = () => {
    let day = "";
    let opensAt = 7;
    let closeAt = 2;
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 1:
        day = "Monday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 2:
        day = "Tuesday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 3:
        day = "Wednesday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 4:
        day = "Thursday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 5:
        day = "Friday";
        opensAt = 7;
        closeAt = 2;
        break;
      case 6:
        day = "Saturday";
        opensAt = 7;
        closeAt = 2;
    }
    let shopOpen = shopStatus(opensAt, closeAt);
    return { shopOpen, closeAt };
  };
  function shopStatus(open, close) {
    let roughHour = new Date().getHours();
    let roughClose;
    if (close == 2) {
      roughClose = 14;
    } else if (close == 1) {
      roughClose = 13;
    }
    if (roughHour >= open && roughHour < roughClose) {
      return true;
    } else {
      return false;
    }
  }

  // main.js
  var checkHours = determineDayHours();
  console.log(checkHours.shopOpen, checkHours.closeAt);
  var openOrClosed = document.getElementById("openOrClosed");
  var openUntil = document.getElementById("openUntil");
  if (checkHours.shopOpen === true) {
    openOrClosed.innerHTML = `open until ${checkHours.closeAt}?`;
  } else if (checkHours.shopOpen === false) {
    openOrClosed.innerHTML = "closed at the moment,<br> see you tomorrow!";
  }
  var chapter1 = document.querySelector(".chapter1");
  var chapter2 = document.querySelector(".chapter2");
  var chapter3 = document.querySelector(".chapter3");
  detectPage1.observe(chapter1);
  detectPage2.observe(chapter2);
  detectPage3.observe(chapter3);
  var expander = document.getElementById("expander");
  var daysAndHours = document.getElementById("daysAndHours");
  var toggleHours = () => {
    daysAndHours.classList.toggle("tuckedUp");
  };
  expander.addEventListener("click", () => {
    toggleHours();
  });
})();
