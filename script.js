document.getElementById("year").textContent = new Date().getFullYear();

function mailtoSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("Portfolio contact");
  const body = encodeURIComponent(`From: ${email}\n\n${message}`);
  window.location.href = `mailto:you@email.com?subject=${subject}&body=${body}`;
  return false;
}