function triggerClick(event) {
  let targetElement = event.target;
  targetElement.classList.add("click");
  setTimeout(function(){
    targetElement.classList.remove("click");
  }, 500);
}