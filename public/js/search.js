document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.search-icon');
  const searchMenu = document.querySelector('.search-menu');
  const closeSearch = document.querySelector('.close-search');

  // Menampilkan input pencarian saat ikon search diklik
  searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    searchMenu.classList.toggle('hidden'); // Menampilkan atau menyembunyikan input pencarian
    searchMenu.classList.toggle('fade-in'); // Menambahkan kelas fade-in untuk animasi
    searchMenu.querySelector('input').focus(); // Fokus pada input saat ditampilkan

    // Mengatur posisi di bawah navbar
    const navbarHeight = document.getElementById('nav').offsetHeight;
    searchMenu.style.top = `${navbarHeight + 16}px`; // Set posisi di bawah navbar
  });

  // Menutup input pencarian saat tombol close diklik
  closeSearch.addEventListener('click', (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    searchMenu.classList.remove('fade-in'); // Menghapus kelas fade-in
    searchMenu.classList.add('fade-out'); // Menambahkan kelas fade-out untuk animasi

    // Menunggu animasi selesai sebelum menyembunyikan elemen
    setTimeout(() => {
      searchMenu.classList.add('hidden'); // Menyembunyikan input pencarian
      searchMenu.classList.remove('fade-out'); // Menghapus kelas fade-out
    }, 300); // Durasi animasi harus sama dengan durasi CSS
  });

  // Menutup input pencarian saat mengklik di luar elemen pencarian
  document.addEventListener('click', (event) => {
    if (!searchMenu.contains(event.target) && !searchIcon.contains(event.target)) {
      searchMenu.classList.add('fade-out'); // Menambahkan kelas fade-out untuk animasi

      // Menunggu animasi selesai sebelum menyembunyikan elemen
      setTimeout(() => {
        searchMenu.classList.add('hidden'); // Menyembunyikan input pencarian
        searchMenu.classList.remove('fade-out'); // Menghapus kelas fade-out
      }, 300); // Durasi animasi harus sama dengan durasi CSS
    }
  });
});
