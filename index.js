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
        guideText.innerHTML = "Hungry?";
      }
    });
  }, page_Options);
  var detectPage2 = new IntersectionObserver(function(entries, detectPage22) {
    entries.forEach((page) => {
      if (!page.isIntersecting) {
        return;
      } else {
        guideText.innerHTML = "Locals Dig Us";
      }
    });
  }, page_Options);
  var detectPage3 = new IntersectionObserver(function(entries, detectPage22) {
    entries.forEach((page) => {
      if (!page.isIntersecting) {
        return;
      } else {
        guideText.innerHTML = "Our Story";
      }
    });
  }, page_Options);
  var detectPage4 = new IntersectionObserver(function(entries, detectPage22) {
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

  // modules/menus.js
  var hdmenu = `<ul class="menu-list"><li><div class="menu-list-item menu-header">Hot Drinks!</div><div class="menu-list-price-con"><div class="menu-list-price">12 Oz.</div><div class="menu-list-price">16 Oz.</div><div class="menu-list-price">20 Oz.</div></div></li><li><div class="menu-list-item">Drip Coffee</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Flavored Drip Coffee</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Latte</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Cappuccino</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Caramel Macchiato</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Chai Latte (w/ milk)</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Matcha Latte</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Hot Chocolate</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Tea</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Cortado</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Americano</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Single Espresso</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Double Espresso</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li></ul>							`;
  var cdmenu = `<ul class="menu-list"><li><div class="menu-list-item menu-header">Cold Drinks!</div><div class="menu-list-price-con"><div class="menu-list-price">12 Oz.</div><div class="menu-list-price">16 Oz.</div><div class="menu-list-price">20 Oz.</div></div></li><li><div class="menu-list-item">Flavored Drip Coffee</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Latte</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Caramel Macchiato</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Chai Latte (w/ milk)</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Matcha Latte</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Cold Brew</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Nitro Cold Brew</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Americano</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Unsweetened Black Tea</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Arnold Palmer</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Orange Juice</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Apple Juice</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Chocolate Milk</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Water</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"><div><div class="menu-list-price"></div></div></li></ul>							`;
  var pastriesmenu = "pastries!";
  var sandwichmenu = `<ul class="menu-list"><li><div class="menu-list-item menu-header">Sandwiches</div><div class="menu-list-price-con"><div class="menu-list-price">12 Oz.</div><div class="menu-list-price">16 Oz.</div><div class="menu-list-price">20 Oz.</div></div></li><li><div class="menu-list-item">Tuna Salad Sandwich</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Cranberry Walnut Chicken Salad Sandwich</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Turkey, Avocado, Arugula and Sriracha Mayo</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item">Turkey on Cranberry Pecan Bread</div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li><li><div class="menu-list-item"></div><div class="menu-list-price-con"><div class="menu-list-price"></div><div class="menu-list-price"></div><div class="menu-list-price"></div></div></li></ul>							`;

  // modules/menu-tab-changer.js
  var menuTabHotdrink = document.getElementById("menu-tab-hotdrink");
  var menuTabColddrink = document.getElementById("menu-tab-colddrink");
  var menuTabPastries = document.getElementById("menu-tab-pastries");
  var menuTabSandwiches = document.getElementById("menu-tab-sandwiches");
  var smMenuDisp = document.getElementById("sm-menu-disp");
  var updateMenuDisplay = (t) => {
    switch (t) {
      case "hot-drink":
        smMenuDisp.innerHTML = hdmenu;
        break;
      case "cold-drink":
        smMenuDisp.innerHTML = cdmenu;
        break;
      case "pastries":
        smMenuDisp.innerHTML = pastriesmenu;
        break;
      case "sandwiches":
        smMenuDisp.innerHTML = sandwichmenu;
        break;
    }
  };

  // main.js
  menuTabHotdrink.addEventListener("click", () => {
    updateMenuDisplay("hot-drink");
  });
  menuTabColddrink.addEventListener("click", () => {
    updateMenuDisplay("cold-drink");
  });
  menuTabPastries.addEventListener("click", () => {
    updateMenuDisplay("pastries");
  });
  menuTabSandwiches.addEventListener("click", () => {
    updateMenuDisplay("sandwiches");
  });
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
  var chapter4 = document.querySelector(".chapter4");
  detectPage1.observe(chapter1);
  detectPage2.observe(chapter2);
  detectPage3.observe(chapter3);
  detectPage4.observe(chapter4);
  var expander = document.getElementById("expander");
  var daysAndHours = document.getElementById("daysAndHours");
  var toggleHours = () => {
    daysAndHours.classList.toggle("tuckedUp");
  };
  expander.addEventListener("click", () => {
    toggleHours();
  });
})();
