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

console.log(Array.from(featureItems));

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

//////

function display(elem) {
  if ((elem.innerHTML = "Speedy Searching")) {
    Array.from(featureSections)
      .find((featureSection) => featureSection.classList.contains(showSection))
      .classList.remove(showSection);

    //add selected class to element
    searchSection.classList.add(showSection);
  } else if ((elem.innerHTML = "Simple Bookmarking")) {
    Array.from(featureSections)
      .find((featureSection) => featureSection.classList.contains(showSection))
      .classList.remove(showSection);

    //add selected class to element
    bookmarkSection.classList.add(showSection);
  } else if ((elem.innerHTML = "Easy Sharing")) {
    Array.from(featureSections)
      .find((featureSection) => featureSection.classList.contains(showSection))
      .classList.remove(showSection);

    //add selected class to element
    shareSection.classList.add(showSection);
  }
}
