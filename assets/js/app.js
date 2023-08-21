// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const bioSummary = document.getElementById("bio-summary");
  const readMoreBtn = document.getElementById("read-more-btn");
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

  readMoreBtn.addEventListener("click", function () {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      readMoreBtn.textContent = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      readMoreBtn.textContent = "Read Less";
    }
  });
});
