// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// // var day = today.getDay();

// var dateTime = date + " " + time;

// const d = new Date();
// let CodedDay = d.getDay();

const determineDayHours = () => {
  let day = "";
  let opensAt = 7;
  let closeAt = 2;
  var time =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

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

export { determineDayHours };
