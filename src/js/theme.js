console.log(localStorage);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const checkBox = document.querySelector(".theme-switch__toggle");
  checkBox.addEventListener("change", onCheked);

  function chekLocalstorage() {
    if (localStorage.getItem("cheked") === "true") {
     checkBox.checked = true;
      document.body.classList.add("dark-theme");
    }
  }
        chekLocalstorage();


  
  function onCheked(event){
      const value = event.target.value;
      console.log(value);
      console.log(checkBox.checked);
      console.log(localStorage.getItem("cheked"));
    
         
      if (checkBox.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("Theme", "DARK");
      localStorage.setItem("cheked", "true");
      checkBox.checked = true;

        return;
      }

      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("Theme", "LIGHT");
      localStorage.setItem("cheked", "false");
     }
  
     