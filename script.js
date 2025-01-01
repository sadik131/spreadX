
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


const toggleBtn = document.getElementById('check');
const sidebar = document.getElementById('sidebar');
const statusText = document.getElementById('status-text');
const menuItems = document.getElementById('menu-items');
const sm = document.getElementById('smLogo'); 
const lg = document.getElementById('lgLogo');


toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    console.log(toggleBtn.checked)
    sidebar.classList.remove('w-[8%]');
    sidebar.classList.add('w-[30%]');
    statusText.classList.remove('hidden');
    lg.classList.remove('hidden');
    sm.classList.add('hidden');
    
    const menuSpans = menuItems.querySelectorAll('span');
    menuSpans.forEach((span) => {
      span.classList.remove('hidden'); 
    });
  } else {
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
  console.log(sm)
});
