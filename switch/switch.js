// Dylan Gregory 10/29/2025

// STEP 1 - Prompt user. Convert to lowercase. Trim whitespace
let favMonth = prompt("What is your favorite month?").toLowerCase().trim();

// STEP 7
if (/\d/.test(favMonth) || favMonth === "") {
    console.log("Please enter a valid month, not numbers!")
}
else {
    // STEP 2
    switch (favMonth) {
        case "january":
            console.log("Fun message about January");
        break;
        case "february":
            console.log("Fun message about February");
        break;
        case "march":
            console.log("Fun message about March");
        break;
        case "april":
            console.log("Fun message about April");
        break;
        case "may":
            console.log("Fun message about May");
        break;
        case "june":
            console.log("Fun message about June");
        break;
        case "july":
            console.log("Fun message about July");
        break;
        case "august":
            console.log("Fun message about August");
        break;
        case "september":
            console.log("Fun message about September");
        break;
        case "october":
            console.log("Fun message about October");
        break;
        case "november":
            console.log("Fun message about November");
        break;
        case "december":
            console.log("Fun message about December");
        break;
        default:
            console.log("Im not sure thats a month...");
    }

    //STEP 3
    if (favMonth === "january" || favMonth === "december" || favMonth === "february") {
        console.log("You love the winter months!");
    } else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
        console.log("You enjoy the summer months!");
    } else {
        console.log("Other months are interesting too!");
    }
}