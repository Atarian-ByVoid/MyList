var customSelect = document.querySelector('.custom-select');
var selectItems = document.querySelector('.select-items');

customSelect.addEventListener('click', function() {
  selectItems.classList.toggle('open');
});

selectItems.addEventListener('click', function(event) {
  var selectedOption = event.target.textContent;
  document.querySelector('.select-selected').textContent = selectedOption;
  selectItems.classList.remove('open');
});
