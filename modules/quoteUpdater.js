const quoteUpdater = () => {
  const updateTarget = document.getElementById("quoteUpdater");
  let currentPos = 0;
  const quotes = [
    "Avocado and goat cheese toast insanely good. Caramel macchiato delicious (not a low grade syrupy drink). Highly recommend.",
    "Awesome coffee and pastries! Our cashier was so friendly and fun.",
    "Lovely afternoon coffee and apple crumble. Delicious. And super gracious service.",
  ];

  if (++currentPos >= quotes.length) currentPos = 0;

  updateTarget.innerHTML = images[currentPos];
};

export { quoteUpdater };
