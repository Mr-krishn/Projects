const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("active");
    removeActiveClasses();
  });
});
// panels.forEach((panel) => {
//   panel.addEventListener("dblclick", () => {
//     // removeActiveClasses();
//     panel.classList.remove("active");
//   });
// });

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
