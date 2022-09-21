const selectedClass = "selected-feature";
const featureItems = document.getElementsByClassName("features-item");

Array.from(featureItems).forEach((featureItem) => {
  featureItem.addEventListener("click", () => {
    select(featureItem);
  });
});

console.log(Array.from(featureItems));

function select(elem) {
  if (elem.classList.contains(selectedClass)) {
    return;
  }
  //remove selected class from the one that already has it
  const innerFeatureItems = document.getElementsByClassName("features-item");

  Array.from(innerFeatureItems)
    .find((featureItem) => featureItem.classList.contains(selectedClass))
    .classList.remove(selectedClass);
  console.log("i have removed the class");

  //add selected class to element
  elem.classList.add(selectedClass);
  console.log("i have added the class");
}
