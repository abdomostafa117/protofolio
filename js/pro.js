// Navbar Hide on Top
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

// Tabs for Education & Courses
const tabs = document.querySelectorAll(".tab-link");
const contents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-item");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    items.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Lightbox
const images = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
let scale = 1;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  scale = 1;
  lightboxImg.style.transform = `scale(${scale})`;
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

lightboxImg.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (e.deltaY < 0) { scale += 0.1; } else { scale = Math.max(1, scale - 0.1); }
  lightboxImg.style.transform = `scale(${scale})`;
});

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});