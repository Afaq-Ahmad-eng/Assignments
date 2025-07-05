// We create calculate variable in this we will store the user birth day date
const calculate = document.getElementById("Calculate");


// we create a function to handle the calculation
function handleCalculation() {
    const birthDay = document.getElementById("dateOfBirthInput").value;
    
    const currentDate = new Date();
    const birthDayOfUser = new Date(birthDay);
    
    // Current Year and the birth day Year and asign to appropriate variable
    let currentYear =  currentDate.getFullYear();
    
    let birthDayYear = birthDayOfUser.getFullYear();
    
    // Current Month and the birth day Month and asign to appropriate variable
    let currentMonth = (currentDate.getMonth() + 1);
    
    let birthDayMonth = birthDayOfUser.getMonth() + 1;

    // Current Month and the birth day Month and asign to appropriate variable
    let birthDayDate = birthDayOfUser.getDate();
    
    let todayDate = currentDate.getDate();

  //  In the if block below, we check whether the birthday date can be subtracted from the current date. If yes, then the if block will execute; otherwise, the else block will execute.
   if(todayDate > birthDayDate){
     birthDayDate = todayDate - birthDayDate;
    }else{
      // If the birthday day is not subtractable from the current date, then we borrow a complete month from the current date and subtract the birth day from the adjusted date. We also subtract 1 from the current month.

     currentMonth = currentMonth - 1;

    //  In this if block, we check whether a month has 31 days. If yes, then the if block will execute; otherwise, the else block will run.

    if((currentMonth === 1 || birthDayMonth === 1) || (currentMonth === 3 || birthDayMonth === 3) || (currentMonth === 5 || birthDayMonth === 5) || (currentMonth === 7 || birthDayMonth === 7) || (currentMonth === 8 || birthDayMonth === 8) || (currentMonth === 10 || birthDayMonth === 10) || (currentMonth === 12 || birthDayMonth === 12)){

      // Here, we add 31 days to the current date and then subtract the birth day from that.
      birthDayDate = ((todayDate + 31) - birthDayDate);

      // This else if block will execute when the current month or the birth month is February (month 2 or "Feb").
    }else if(currentMonth === 2 || birthDayMonth === 2){
      
      // This if block checks whether the year is a leap year. If yes, then the if block will execute. 
      if(((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) || ((birthDayYear % 4 === 0 && birthDayYear % 100 !== 0) || birthDayYear % 400 === 0)){

        // Here, we add 29 days to the current date due to a leap year, and then subtract the birth day from that. 

          birthDayDate = ((todayDate + 29) - birthDayDate);

          // This else block executes when the year is not a leap year. In that case, we add 28 days to the current date and then subtract the birth day from that.

        }else{
        birthDayDate = ((todayDate + 28) - birthDayDate);
      }

      // This if block will execute when the month has 30 days. In that case, we add 30 days to the current date and then subtract the birth day from that.
    }else{
      birthDayDate = ((todayDate + 30) - birthDayDate);
    }
   }

   //In this if block, we check whether the birth month can be subtracted from the current month. If it can, the if block will execute; otherwise, the else block will run.
   if(currentMonth > birthDayMonth){
     birthDayMonth = currentMonth - birthDayMonth;
     birthDayYear = currentYear - birthDayYear;
   }else{
    // Here, we borrow one full year (12 months), add it to the current month, and then subtract the birth month from the updated current month. We also subtract 1 from the current year, and then subtract the birth year from the updated current year.
    currentYear = currentYear - 1;
    birthDayMonth = ((currentMonth + 12) - birthDayMonth);
    birthDayYear = currentYear - birthDayYear;
   }
    
  //  Here, we return currentDate, birthDayOfUser, birthDayYear, birthDayMonth, and birthDayDate. We return currentDate and birthDayOfUser as they are needed later in the code without any changes.
 return [currentDate, birthDayOfUser, birthDayYear, birthDayMonth, birthDayDate];
}

// The function below is responsible for creating and adding elements to the DOM. Within this function, we also call the handleCalculation function.
function handleNewElements(){
  let [currentDate, birthDayOfUser, birthDayYear, birthDayMonth, birthDayDate] = handleCalculation();


  let nextBirthDay = new Date(currentDate.getFullYear(), (birthDayOfUser.getMonth()), birthDayOfUser.getDate());
  

  let months = ((birthDayYear * 12) + birthDayMonth);
  let days =(((birthDayYear * 365.24219) + ((birthDayMonth / 12) * 365.24219)) + birthDayDate);
  
  // Below adjust weeks and days

  let remainDaysFromWeeks =(days % 7);

  let weeks = Math.floor(days / 7);

  // Below, we adjust the day: if the number of days is greater than 7, it is converted into week(s), and the remaining days are adjusted accordingly.
  let  weeksIfDaysGreaterThen7 = 0;
  let  daysRemainsWhichIsLessThan7 = 0;
  if(birthDayDate >= 7){
    weeksIfDaysGreaterThen7 = Math.floor(birthDayDate / 7);
    
    daysRemainsWhichIsLessThan7 = (birthDayDate % 7);
  }else{
    daysRemainsWhichIsLessThan7 = birthDayDate;
  }
  

  
  let userName = document.getElementById('inputForuserName').value;
  let heading = document.createElement('p');
  heading.innerHTML = `<h3>Age : </h3>

  ${userName} Your are old

  ${birthDayYear = (birthDayMonth === 12 ? birthDayYear + 1 : birthDayYear)} Years

  ${birthDayMonth = (birthDayMonth === 12 ? "" : birthDayMonth + " Months")}

  ${birthDayDate} Days <br> or ${months.toLocaleString()} Months

  ${weeksIfDaysGreaterThen7 = (weeksIfDaysGreaterThen7 < 1 ? "" : (weeksIfDaysGreaterThen7 > 1 ? weeksIfDaysGreaterThen7 + " Weeks" : weeksIfDaysGreaterThen7 + " Week"))}

  ${daysRemainsWhichIsLessThan7 = (daysRemainsWhichIsLessThan7 === 0 ? "" : (daysRemainsWhichIsLessThan7 > 1 ? daysRemainsWhichIsLessThan7 + " Days" : daysRemainsWhichIsLessThan7 + " Day"))} <br> or

  ${weeks.toLocaleString()} Weeks ${birthDayDate === 0 ? "" : Math.round(remainDaysFromWeeks) + " Days"}  <br>or

  ${Math.round(days).toLocaleString()} Days <br>or ${(Math.round(days) * 24).toLocaleString()} Hours <br>or

  ${((Math.round(days) * 24) * 60).toLocaleString()} Minutes <br>or ${(((Math.round(days) * 24) * 60) * 60).toLocaleString()}

  Seconds <div> Your Next Birth will be on 
  
  ${nextBirthDay = (nextBirthDay.getMonth() < (currentDate.getMonth() + 1) ? 

    (nextBirthDay.getMonth() + 1)
    
    +"-"+
    
    nextBirthDay.getDate() 
    
    +"-"+
    
    (nextBirthDay.getFullYear() + 1)
    
    :
    
    (birthDayOfUser.getMonth() + 1)
    
    +"-"+
    
    birthDayOfUser.getDate()
    
    +"-"+
    
    nextBirthDay.getFullYear()
  
  )}
    
    </div>`;
  let container = document.getElementById('containerForInfoShowing');
  container.innerHTML = "";
  container.appendChild(heading);
}

// We create an event listener to listen for a click on the Calculate button, and within this listener, we call the handleNewElements function.
calculate.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDay = document.getElementById("dateOfBirthInput").value;
  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;

  if (!datePattern.test(birthDay)) {
    alert("Invalid date format. Enter the date as MM/DD/YYYY (e.g., 09/20/2009).");
    return false; 
  }else{
    handleNewElements();
  }
});
