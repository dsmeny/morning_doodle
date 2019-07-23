const wrapper = document.querySelector(".wrapper");
const doodle = document.querySelector(".doodle__message");
const head = document.querySelector(".doodle__header");
// const sticky = document.querySelector(".sticky--header");

const db = {};

///////////
// EVENT LISTENERS
//////////

// OBSERVER
/***************/
const callback = () => {
  wrapper.style.height =
    Math.round(Math.floor(window.outerHeight * 1.5)) + "px";
};

const observer = new MutationObserver(callback);

observer.observe(wrapper, { subtree: true, childList: true });

// addEventListener
/***************/

// User Input handler
window.addEventListener("load", e => {
  doodle.focus();
});

// User keypress
doodle.addEventListener("keypress", function(e) {
  doodle.defaultValue = "";

  if (e.keyCode === 13) {
    let val = e.value;
    doodle.defaultValue = "";
    db.userInput = val;
  }
});

// User scroll
let scrollEvent = true;

const scrolled = e => {
  let scrollPosition = Math.round(e.currentTarget.scrollY);
  if (scrollPosition < 50) {
    head.classList.remove("sticky--header");
    init();
  } else if (scrollPosition > 50) {
    head.classList.add("sticky--header");
    scrollEvent = false;
    init();
    scrollEvent = true;
  }
};

function init() {
  console.log(scrollEvent);
  if (!scrollEvent) {
    window.removeEventListener("scroll", scrolled);
    if (scrollEvent) {
      window.addEventListener("scroll", scrolled);
    }
  }
}

window.addEventListener("scroll", scrolled);
