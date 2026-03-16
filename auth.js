const AUTH_KEY = "kryn_user";

function fakeGoogleAuth() {
  const user = { provider: "google", name: "Google User", email: "google.user@gmail.com", at: Date.now() };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  alert("Google authentication successful ✅");
  window.location.href = "index.html";
}

document.querySelectorAll("#signin-form, #signup-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = { provider: "email", at: Date.now() };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    alert("Authentication successful ✅");
    window.location.href = "index.html";
  });
});

const googleButton = document.querySelector("#google-auth");
if (googleButton) googleButton.addEventListener("click", fakeGoogleAuth);
