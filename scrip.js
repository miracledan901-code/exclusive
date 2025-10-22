document.querySelectorAll('.dropdown > a').forEach(menu => {
  menu.addEventListener('click', e => {
    e.preventDefault();
    const dropdown = menu.nextElementSibling;
    dropdown.classList.toggle('show');
  });
});
