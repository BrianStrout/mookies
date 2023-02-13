const test = (t1, t2) => {
  setTimeout(() => {
    console.log(t1);
  }, t2);

  console.log(t1, t2);
};

export { test };
