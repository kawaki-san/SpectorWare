let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

var checkbox = document.querySelector("input[name=theme]");

var theme;
if (localStorage.getItem("data-theme")) {
  theme = localStorage.getItem("data-theme");
  trans();
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    document.getElementById("switch").checked = true;
  } else {
    document.getElementById("switch").checked = false;
  }
} else {
  theme = "light";
  localStorage.setItem("data-theme", theme);
  document.getElementById("switch").checked = false;
}
checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    theme = "dark";
    localStorage.setItem("data-theme", theme);
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    theme = "light";
    localStorage.setItem("data-theme", theme);
  }
});
