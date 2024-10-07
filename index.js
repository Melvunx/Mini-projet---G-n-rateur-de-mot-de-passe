const dataLowercase = "abcdefghijklmnopqrstuvxyz";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = ",?;./:!§£*µù%^\"'éèàç([)@){=}]#~&";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  const checkBoxes = [
    { checked: lowercase.checked, value: "lowercase" },
    { checked: uppercase.checked, value: "uppercase" },
    { checked: numbers.checked, value: "numbers" },
    { checked: symbols.checked, value: "symbols" },
  ];

  checkBoxes.forEach((box) => {
    if (box.checked) {
      switch (box.value) {
        case "lowercase":
          data.push(...dataLowercase);
          break;
        case "uppercase":
          data.push(...dataUppercase);
          break;
        case "numbers":
          data.push(...dataNumbers);
          break;
        case "symbols":
          data.push(...dataSymbols);
          break;
        default:
          break;
      }
    }
  });

  if (data.length === 0) {
    alert("Veuillez sélectionner une valeur !");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    //génère un caractère aléatoirement
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);
  // document.execCommand("copy");

  generateButton.textContent = "Mdp copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);
