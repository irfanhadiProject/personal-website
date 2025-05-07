window.onscroll = function () {
  stickHeader();
};

var header = document.querySelector('header'); // Pilih elemen header
var sticky = header.offsetTop; // Dapatkan posisi awal dari header

function stickHeader() {
  if (window.scrollY > sticky) {
    header.classList.add('sticky'); // Tambahkan kelas sticky ketika scroll
  } else {
    header.classList.remove('sticky'); // Hapus kelas sticky ketika kembali ke posisi awal
  }
}
