document.getElementById("prebtn").addEventListener("click", function (event1) {
  event1.preventDefault();
  document.getElementById("display").classList.toggle("hidden");
});

document.getElementById("about").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("About").scrollIntoView({ behavior: "smooth" });
  console.log("aboutme");
});
