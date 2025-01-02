
// date picker
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datePicker");
  // Reference the image and input field
  const calendarIcon = document.getElementById("calendarIcon");
  const datePickerInput = flatpickr("#datePicker", {
    dateFormat: "m-d-Y", // Set desired format

    // Event triggered when a date is selected
    onChange: function () {
      calendarIcon.style.display = "none";
      input.classList.remove("pb-5");
     
    },
  });

  // Add event listener to the entire div to open Flatpickr
  const container = document.getElementById("dateContainer");
  container.addEventListener("click", function () {
    datePickerInput.open();
  });
});

// custom checkbox
document.addEventListener('DOMContentLoaded', () => {
  const selectAllCheckbox = document.getElementById('select-all');
  const rowCheckboxes = document.querySelectorAll('.row-checkbox');

  selectAllCheckbox.addEventListener('change', () => {
    const isChecked = selectAllCheckbox.checked;
    rowCheckboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
      // Optionally toggle the custom checkbox UI
      const customCheckbox = checkbox.nextElementSibling.querySelector('.fa-check');
      if (isChecked) {
        customCheckbox.classList.remove('hidden');
      } else {
        customCheckbox.classList.add('hidden');
      }
    });
  });

  // Update header checkbox state if any row checkbox is toggled
  rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const allChecked = Array.from(rowCheckboxes).every(cb => cb.checked);
      selectAllCheckbox.checked = allChecked;
    });
  });
});


// navbar
const toggleBtn = document.getElementById('check');
const sidebar = document.getElementById('sidebar');
const statusText = document.getElementById('status-text');
const menuItems = document.getElementById('menu-items');
const collapes = document.getElementById('collapes');
const arrow = document.getElementById('arrow');
const sm = document.getElementById('smLogo'); 
const lg = document.getElementById('lgLogo');


toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    sidebar.classList.remove('w-[8%]');
    sidebar.classList.add('w-[30%]');
    statusText.classList.remove('hidden');
    lg.classList.remove('hidden');
    menuItems.classList.add('mt-12');
    collapes.classList.remove('hidden');
    arrow.classList.remove('rotate-180');
    sm.classList.add('hidden');
    
    const menuSpans = menuItems.querySelectorAll('span');
    menuSpans.forEach((span) => {
      span.classList.remove('hidden'); 
    });
  } else {
    arrow.classList.add('rotate-180');
    menuItems.classList.remove('mt-12');
    collapes.classList.add('hidden');
    sm.classList.remove('hidden');
    lg.classList.add('hidden');
    sidebar.classList.remove('w-[30%]');
    sidebar.classList.add('w-[8%]');
    statusText.classList.add('hidden');
    const menuSpans = menuItems.querySelectorAll('span');
    menuSpans.forEach((span) => {
      span.classList.add('hidden'); 
    });
  }
});

// dropdown
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('hidden');
}