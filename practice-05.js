//show the current day name of the week and increase it as long as the user wants;

function getDayName() {
  const browserDate = new Date();

  let currentDay = browserDate.toLocaleDateString("EN", { weekday: "long" });

  let isNextDay = window.confirm(
    "Current day is: " + currentDay + "\nWould you like to see the next one?"
  );

  while (isNextDay) {
    switch (currentDay) {
      case "Sunday":
        currentDay = "Monday";
        break;

      case "Monday":
        currentDay = "Tuesday";
        break;

      case "Tuesday":
        currentDay = "Wednesday";
        break;

      case "Wednesday":
        currentDay = "Thursday";
        break;

      case "Thursday":
        currentDay = "Friday";
        break;

      case "Friday":
        currentDay = "Saturday";
        break;

      case "Saturday":
        currentDay = "Sunday";
        break;

      default:
        console.log("error");
    }

    isNextDay = window.confirm(
      "The next day is: " + currentDay + "\nWould you like to see the next one?"
    );
  }
}

getDayName();
