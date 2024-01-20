import { left } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let name = variables.name === null ? "" : variables.name;
  let lastName = variables.lastName === null ? "" : variables.lastName;
  let role =
    variables.role === null ? "What's your profession?" : variables.role;
  let currentCity =
    variables.currentCity === null
      ? "What city are you in?"
      : variables.currentCity;
  let zodiacSign =
    variables.zodiacSign === null
      ? "What's your zodiac sign?"
      : variables.zodiacSign;
  let twitter = variables.twitter === null ? "twitter" : variables.twitter;
  let instagram = variables.instagram === null ? "insta" : variables.instagram;
  let github = variables.github === null ? "github" : variables.github;
  let linkedin = variables.linkedin === null ? "linkedin" : variables.linkedin;
  let socialMediaPosition =
    variables.position === socialMediaPosition
      ? "position-left"
      : "position-right";
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastName}</h1>
          <h2>${role}</h2>
          <h3>${currentCity}</h3>
          <h4>${zodiacSign}</h4>
          <ul class="${socialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://news.maryland.gov/dnr/wp-content/uploads/sites/2/2017/09/opossum.jpg",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/men/82.jpg",
    // social media bar position (left or right)
    position: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    currentCity: null,
    zodiacSign: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
