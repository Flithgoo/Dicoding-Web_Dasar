// menambahkan dan menghapus class 'show' saat terjadi intersection
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// menambahkan dan menghilangkan class show untuk dropdown button
document.addEventListener("DOMContentLoaded", () => {
  let dropdownButton = document.querySelector(".drop-down");
  let dropdownMenu = document.querySelector("nav ul");

  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
});

