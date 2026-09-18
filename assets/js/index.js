//index.js

document.getElementById('left-button')?.addEventListener('click', () => {
  window.location.href = '/customer/new-booking.html';
});

document.getElementById('left-button-chat')?.addEventListener('click', () => {
  window.location.href = '/customer/AI-Booking.html';
});

document.getElementById('right-button')?.addEventListener('click', () => {
  sessionStorage.setItem('adminLogin', '1');
  window.location.href = '/admin-frontend/post-login.html';
});

// Hover effect logic for split landing page
const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left?.addEventListener("mouseenter", () => content?.classList.add("hover-left"));
left?.addEventListener("mouseleave", () => content?.classList.remove("hover-left"));

right?.addEventListener("mouseenter", () => content?.classList.add("hover-right"));
right?.addEventListener("mouseleave", () => content?.classList.remove("hover-right"));