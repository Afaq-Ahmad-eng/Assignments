// We create
const calculate = document.getElementById("Calculate");

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
