const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  htmlEl.dataset.theme = currentTheme;
}

if (currentTheme === 'dark') {
  document.getElementById("dmCheck").checked = true;
}

const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
}


$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
      toggleTheme('dark')
      localStorage.setItem('theme', 'dark')
      console.log("Checkbox is checked.");
    }
    else if ($(this).prop("checked") == false) {
      toggleTheme('light')
      localStorage.setItem('theme', 'light')
      console.log("Checkbox is unchecked.");
    }
  });
});


// if (dmCheck === true) {
//   document.getElementById('dmLever').addEventListener('click', event => {
//     toggleTheme('light')
//     localStorage.setItem('theme', 'light')
//     console.log(dmCheck)
//     console.log(htmlEl.dataset.theme)
//   })
// } else if (dmCheck === false) {
//   document.getElementById('dmLever').addEventListener('click', event => {
//     toggleTheme('dark')
//     theme = htmlEl.dataset.theme
//     localStorage.setItem('theme', 'dark')
//     console.log(dmCheck)
//     console.log(htmlEl.dataset.theme)
//   })
// }

// document.getElementById('dmLever').addEventListener('click', event => {
//   if (htmlEl.dataset.theme === 'light') {
//     toggleTheme('dark')
//     theme = htmlEl.dataset.theme
//     localStorage.setItem('theme', theme);
//   }
//   if (htmlEl.dataset.theme === 'dark') {
//     toggleTheme('light')
//     theme = htmlEl.dataset.theme
//     localStorage.setItem('theme', theme);
//   }

// })