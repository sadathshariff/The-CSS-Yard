const btn = document.querySelector(".btn-toggle");
const darkModeIcon = document.querySelector(".dark-icon");

const changeThemeColor = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    darkModeIcon.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    darkModeIcon.innerHTML = `<i class="fas fa-moon"></i>`;
  }
};
btn.addEventListener("click", changeThemeColor);
