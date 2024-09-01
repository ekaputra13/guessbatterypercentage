document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    var name = document.getElementById("name").value;
    if (name) {
      localStorage.setItem("username", name);
      window.location.href = "index.html"; // Mengarahkan ke halaman utama
    }
  });
