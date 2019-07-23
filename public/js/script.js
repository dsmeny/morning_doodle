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

// User scrolled
let headTop = head.offsetTop;
function scrolled() {
  if (window.scrollY >= headTop) {
    document.body.style.paddingTop = 0.3 + "px";
    head.classList.add("sticky--header");
  } else {
    document.body.style.paddingTop = 0;
    head.classList.remove("sticky--header");
  }
}

window.addEventListener("scroll", scrolled);
