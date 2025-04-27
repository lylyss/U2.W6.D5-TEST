document.querySelector("#changeEmailModal form").addEventListener("submit", function (event) {
  event.preventDefault(); // Non ricaricare la pagina
  const newEmail = document.getElementById("newEmail").value;
  if (newEmail) {
    document.querySelector(".row .text-black p.fw-bold").textContent = newEmail;
    const modal = bootstrap.Modal.getInstance(document.getElementById("changeEmailModal"));
    modal.hide();
  }
});

// Cambia Password
document.querySelector("#changePasswordModal form").addEventListener("submit", function (event) {
  event.preventDefault();
  const newPassword = document.getElementById("newPassword").value;
  if (newPassword) {
    document.querySelector(".row .text-black p:nth-child(2)").textContent = "Password: " + "*".repeat(newPassword.length);
    const modal = bootstrap.Modal.getInstance(document.getElementById("changePasswordModal"));
    modal.hide();
  }
});

// Cambia Telefono
document.querySelector("#changePhoneModal form").addEventListener("submit", function (event) {
  event.preventDefault();
  const newPhone = document.getElementById("newPhone").value;
  if (newPhone) {
    document.querySelector(".row .text-black p:nth-child(3)").textContent = "Phone: " + newPhone;
    const modal = bootstrap.Modal.getInstance(document.getElementById("changePhoneModal"));
    modal.hide();
  }
});
