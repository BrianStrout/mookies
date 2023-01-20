import {
  detectPage1,
  detectPage2,
  detectPage3,
} from "./modules/int_obs_pageChange.js";
import { determineDayHours } from "./modules/time.js";

let checkHours = determineDayHours();
console.log(checkHours.shopOpen, checkHours.closeAt);

const openOrClosed = document.getElementById("openOrClosed");
const openUntil = document.getElementById("openUntil");

if (checkHours.shopOpen === true) {
  openOrClosed.innerHTML = `open until ${checkHours.closeAt}?`;
} else if (checkHours.shopOpen === false) {
  openOrClosed.innerHTML = "closed at the moment,<br> see you tomorrow!";
}

const chapter1 = document.querySelector(".chapter1");
const chapter2 = document.querySelector(".chapter2");
const chapter3 = document.querySelector(".chapter3");

detectPage1.observe(chapter1);
detectPage2.observe(chapter2);
detectPage3.observe(chapter3);

const expander = document.getElementById("expander");
const daysAndHours = document.getElementById("daysAndHours");

const toggleHours = () => {
  daysAndHours.classList.toggle("tuckedUp");
  // console.log("f");
};

expander.addEventListener("click", () => {
  toggleHours();
});

// const axios = require("axios");

// const fetch_Users = () => {
//   axios
//     .get(
//       "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJlTz2W-MV44kRzZVgPbEM-KE&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyDYLTaE-mq4jZzSd8DXwWbpOvWsJHSQOaw"
//     )
//     .then((response) => {
//       console.log(response);
//       // console.log("func");

//       // const users = response.data.data;
//       // appendToDOM(users);
//     })
//     .catch((error) => console.error(error));
// };

// fetch_Users();

var config = {
  method: "get",
  url: "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJlTz2W-MV44kRzZVgPbEM-KE&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyDYLTaE-mq4jZzSd8DXwWbpOvWsJHSQOaw",
  headers: {},
};

// axios
//   .get(
//     "https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews"
//   )
//   .then((response) => {
//     data = response.text;
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// AIzaSyDYLTaE-mq4jZzSd8DXwWbpOvWsJHSQOaw

// var GoogleMyBusinessApi = "google_my_business_api";

// var api = new GoogleMyBusinessApi.AccountsApi();

// var opts = {
//   accessToken: "accessToken_example", // {String} OAuth access token.
//   alt: "json", // {String} Data format for response.
//   callback: "callback_example", // {String} JSONP
//   fields: "fields_example", // {String} Selector specifying which fields to include in a partial response.
//   key: "key_example", // {String} API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
//   oauthToken: "oauthToken_example", // {String} OAuth 2.0 token for the current user.
//   prettyPrint: true, // {Boolean} Returns response with indentations and line breaks.
//   quotaUser: "quotaUser_example", // {String} Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
//   uploadProtocol: "uploadProtocol_example", // {String} Upload protocol for media (e.g. \"raw\", \"multipart\").
//   uploadType: "uploadType_example", // {String} Legacy upload protocol for media (e.g. \"media\", \"multipart\").
//   body: new GoogleMyBusinessApi.Account(), // {Account}
//   primaryOwner: "primaryOwner_example", // {String} The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}/`.
// };
// api.mybusinessAccountsCreate(opts).then(
//   function (data) {
//     console.log("API called successfully. Returned data: " + data);
//   },
//   function (error) {
//     console.error(error);
//   }
// );

// Method: accounts.locations.reviews.list
// GET https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews

// works!
// const getUsers = () => {
//   axios
//     .get("https://reqres.in/api/users")
//     .then((response) => {
//       const users = response.data.data;
//       console.log(`GET users`, users);
//     })
//     .catch((error) => console.error(error));
// };
// getUsers();
