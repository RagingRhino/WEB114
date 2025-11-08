// Dylan Gregory 10-07-2025

// Ask the user how many snacks they want
let snackCount = prompt("How many snacks do you want?");

if (snackCount === null) {
    console.log("No snacks requested. Exiting.");
} else {
    snackCount = Number(snackCount);
    totalSnacks = 0;

    for (let i = 1; i <= snackCount; i++) {
        let snack = prompt("Enter snack #" + i + " name:");

        if (snack === null) {
        console.log("Snack selection canceled. Exiting.");
        break;
        }

        console.log("Snack #" + i + ": " + snack + " given to customer");
        totalSnacks++;

        // Bonus every 2nd and 5th snack (only 1 for 10, 20, etc.)
        if (i % 2 === 0) {
            console.log("You got a bonus snack!");
            totalSnacks++;
        } else if (i % 5 === 0) {
            console.log("You got a special bonus snack!");
            totalSnacks++;
        }
    }

    console.log(`You were given a total of ${totalSnacks} snacks!`);
}