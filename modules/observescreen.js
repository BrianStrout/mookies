const imgOptions = {};
const mainMenuOptions = document.querySelectorAll(".greet-tab");

const screenWatcher = new IntersectionObserver((entries, imageLooker) => {
  entries.forEach((entry) => {
    console.log(entry.target.classlist);
    if (!entry.isIntersecting) {
      console.log("call chet");
      setTimeout(() => {
        mainMenuOptions.forEach((tab) => {
          console.log(tab);
          tab.classList.remove("unintroduced-tableft");
          tab.classList.remove("unintroduced-tabdown");
          tab.classList.remove("unintroduced-tabright");
        });
      }, 2000);
    } else {
      return;
      // entry.target.firstChild.classList.remove("watered");

      imageLooker.unobserve(entry.target);
    }
  });
}, imgOptions);

export { screenWatcher };
