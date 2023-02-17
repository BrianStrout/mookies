let currentPos = 0;

const quoteUpdater = () => {
  console.log("quoteupdate fired");

  const updateTarget = document.getElementById("quoteUpdater");

  const quotes = [
    "Avocado and goat cheese toast insanely good. Caramel macchiato delicious (not a low grade syrupy drink). Highly recommend.",
    "Awesome coffee and pastries! Our cashier was so friendly and fun.",
    "Lovely afternoon coffee and apple crumble. Delicious. And super gracious service.",
  ];

  if (++currentPos >= quotes.length) currentPos = 0;

  updateTarget.innerHTML = quotes[currentPos];
};

export { quoteUpdater };
