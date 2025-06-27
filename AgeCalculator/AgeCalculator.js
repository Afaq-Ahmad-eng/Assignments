// We create calculate variable in this we will store the user birth day date
const calculate = document.getElementById("Calculate");

// We create a Event Listener to lisen when the calculate button is click
calculate.addEventListener("click", (e) => {
  e.preventDefault();
  const birthDay = document.getElementById("dateOfBirthInput").value;

  const todayDate = new Date();
  const birthDayOfUser = new Date(birthDay);
  const age = todayDate.getFullYear() - birthDayOfUser.getFullYear();

  console.log(`Birth Day Date ${birthDay}`);
  console.log(`Today Date ${todayDate.getFullYear()}`);
  console.log(`Age =  ${age}`);
});
