// Menyembunyikan konten jika pengguna belum login
if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
}

document.getElementById("guessButton").addEventListener("click", function () {
  navigator.getBattery().then(function (battery) {
    var actualLevel = battery.level * 100;
    document.getElementById("result").innerText =
      "Persentase Bateraimu adalah: " + actualLevel.toFixed(0) + "%";

    // Menampilkan kalimat dan tombol terima kasih setelah tebakan
    document.getElementById("thanksMessage").style.display = "block";
    document.getElementById("thankYouButton").style.display = "block";
  });
});

document
  .getElementById("thankYouButton")
  .addEventListener("click", function () {
    var username = localStorage.getItem("username");
    document.body.innerHTML =
      "<h1 style='text-align: center;'>Hehe Makasih Juga, " +
      username +
      " ^__^</h1>";
  });
