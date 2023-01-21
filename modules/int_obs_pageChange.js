const page_Options = {
  threshold: 0.6,
};

const guideText = document.getElementById("guide-text");

const detectPage1 = new IntersectionObserver(function (entries, detectPage2) {
  entries.forEach((page) => {
    if (!page.isIntersecting) {
      return;
    } else {
      guideText.innerHTML = "Hungry?";
    }
  });
}, page_Options);

const detectPage2 = new IntersectionObserver(function (entries, detectPage2) {
  entries.forEach((page) => {
    if (!page.isIntersecting) {
      return;
    } else {
      guideText.innerHTML = "Locals Dig Us";
    }
  });
}, page_Options);

const detectPage3 = new IntersectionObserver(function (entries, detectPage2) {
  entries.forEach((page) => {
    if (!page.isIntersecting) {
      return;
    } else {
      guideText.innerHTML = "Our Story";
    }
  });
}, page_Options);

const detectPage4 = new IntersectionObserver(function (entries, detectPage2) {
  entries.forEach((page) => {
    if (!page.isIntersecting) {
      return;
    } else {
      guideText.innerHTML = "See You Soon";
    }
  });
}, page_Options);

export { detectPage1, detectPage2, detectPage3, detectPage4 };
