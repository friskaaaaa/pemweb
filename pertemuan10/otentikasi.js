// Definisikan username dan password yang valid
const usernameValid = "ahmad2017";
const passwordValid = "integrity";

// Tambahkan event listener pada tombol login
document.getElementById("btn-login").addEventListener("click", function(event) {
  // Cegah form dari melakukan submit secara default
  event.preventDefault();

  // Dapatkan nilai username dan password dari form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Lakukan pengecekan apakah username dan password sesuai
  if (username === usernameValid && password === passwordValid) {
    // Jika login sukses, tampilkan alert dan arahkan ke halaman baru
    alert("Login sukses!");
    window.location.href = "sukses.html";
  } else {
    // Jika login gagal, tampilkan alert
    alert("Login gagal! Silakan coba lagi.");
  }
});