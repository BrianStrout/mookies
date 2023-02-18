import { quoteUpdater } from "./quoteUpdater.js";

const imgOptions = {};

const quoteWatcher = new IntersectionObserver((entries, quoteWatcher) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log("should be setting interval");
      setInterval(quoteUpdater, 2000);
      quoteWatcher.unobserve(entry);
      return;
    }
  });
}, imgOptions);

export { quoteWatcher };
