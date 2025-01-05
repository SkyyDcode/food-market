window.onscroll = function() {
  const nav = document.getElementById("nav");
  if (window.scrollY > 50) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
