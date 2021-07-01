const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const collapsibleIcon = document.querySelectorAll(".collapsible--icon");
collapsibleIcon.forEach((item) =>
  item.addEventListener("click", function(){
    this.classList.toggle("fa-rotate-90")
  })
); 