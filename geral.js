 /* Menu expancivel !!!*/

var dropdown = document.querySelectorAll('li.dropdown');

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function() {
    this.classList.toggle('open');
    var dropdownContent = this.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
}
