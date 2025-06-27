// We create calculate variable in this we will store the user birth day date
const calculate = document.getElementById("Calculate");

// we create a function to handle the calculation
function handleCalculation() {
    const birthDay = document.getElementById("dateOfBirthInput").value;
    const todayDate = new Date();
    const birthDayOfUser = new Date(birthDay);

    // From Here we got the Birth Day year
  let yearOfBirthDay = todayDate.getFullYear() - birthDayOfUser.getFullYear();

//   From here we got Birth day Month
 const monthOfBirthDay = (todayDate.getMonth() + 1) - (birthDayOfUser.getMonth() + 1);

  console.log(`Current Month =  ${todayDate.getMonth() + 1}`);
  console.log(`Birth day Month =  ${birthDayOfUser.getMonth() + 1}`);
  console.log(`Year =  ${yearOfBirthDay = (monthOfBirthDay < birthDayOfUser.getMonth() + 1 ? yearOfBirthDay - 1 : yearOfBirthDay)}`);
}

// We create a Event Listener to lisen when the calculate button is click
calculate.addEventListener("click", (e) => {
  e.preventDefault();
  handleCalculation();
});
