/* to add and to remove the responsive class whent the user click on the hamburger menu icon */
function myFunction() {
  var x = document.getElementById("topnavid");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

/* to addd the class dark-theme when the user enable the switch */
document.getElementById('switch').addEventListener('change', function() {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme')
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

// to make sure that when the dark theme is selected, it remains the same even when you refresh the page //
if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
}


// Marta Cuccurullo //
