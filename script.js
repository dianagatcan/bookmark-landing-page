const selectedClass = "selected-feature";
const featureItems = document.getElementsByClassName("features-item");

const showSection = "show";
const featureSections = document.getElementsByClassName("tab");
const bookmarkSection = document.getElementById("bookmark");
const searchSection = document.getElementById("search");
const shareSection = document.getElementById("share");

Array.from(featureItems).forEach((featureItem) => {
  featureItem.addEventListener("click", () => {
    select(featureItem);
    display(featureItem);
  });
});

function select(elem) {
  if (elem.classList.contains(selectedClass)) {
    return;
  }

  Array.from(featureItems)
    .find((featureItem) => featureItem.classList.contains(selectedClass))
    .classList.remove(selectedClass);

  //add selected class to element
  elem.classList.add(selectedClass);
}

function display(elem) {
  if (elem.innerHTML === "Speedy Searching") {
    removeClass(featureSections);
    searchSection.classList.add(showSection);
  } else if (elem.innerHTML === "Simple Bookmarking") {
    removeClass(featureSections);
    bookmarkSection.classList.add(showSection);
  } else if (elem.innerHTML === "Easy Sharing") {
    removeClass(featureSections);
    shareSection.classList.add(showSection);
  }
}

function removeClass(arr) {
  Array.from(arr)
    .find((elem) => elem.classList.contains(showSection))
    .classList.remove(showSection);
}

const summaryArray = Array.from(document.getElementsByTagName("summary"));
const arrowArray = Array.from(document.getElementsByTagName("svg"));

summaryArray.forEach((summary) => {
  summary.addEventListener("click", () => {
    rotate(summary);
  });
});

const rotate = function (elem) {
  if (elem.classList.contains("rotate" && "arrow")) {
    elem.classList.remove("rotate", "arrow");
  } else {
    elem.classList.add("rotate", "arrow");
  }
};
