function orderNow() {
  alert("תודה שבחרת בפיצה משולשים! התקשר עכשיו להזמנה ");
}

// פתיחה וסגירה של התפריט
function toggleMenu() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("active");
}

// סגירת התפריט אחרי לחיצה על קישור
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("nav-menu").classList.remove("active");
  });
});

// סגירה בלחיצה מחוץ לתפריט
document.addEventListener("click", function (event) {
  const nav = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
    nav.classList.remove("active");
  }
});

// script.js

// קבלת הכפתור
const scrollTopBtn = document.getElementById("scrollTopBtn");

// הצגת הכפתור כאשר הגולל > 100px
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// לחיצה על הכפתור - גלילה חלקה למעלה
scrollTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
