function showTab(tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => (tab.style.display = "none"));
  document.getElementById(tabName).style.display = "block";
}

// JavaScript for Active Link Highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust based on navbar height
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Highlight the corresponding nav link
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`.navbar a[href="#${section.id}"]`)
        .classList.add("active");
    }
  });
});

function onYouTubeIframeAPIReady() {
  // Initialize the player with the iframe video
  window.player = new YT.Player("prototypeVideo");
}
function showTab(tabId) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => (content.style.display = "none"));

  // Show selected tab content
  document.getElementById(tabId).style.display = "block";

  // Update active tab button
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
}
