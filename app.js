const day = prompt("Enter a day of the week:");

let task;

switch (day.toLowerCase()) {
    case "monday":
        task = "Finish your assignments.";
        break;
    case "tuesday":
        task = "Attend the team meeting.";
        break;
    case "wednesday":
        task = "Work on the project presentation.";
        break;
    case "thursday":
        task = "Submit the weekly report.";
        break;
    case "friday":
        task = "Review the week's progress.";
        break;
    case "saturday":
        task = "Relax and recharge.";
        break;
    case "sunday":
        task = "Plan for the upcoming week.";
        break;
    default:
        task = "Please enter a valid day of the week.";
}

// Log the task for that day to the console
console.log(`Your task for ${day} is: ${task}`);
