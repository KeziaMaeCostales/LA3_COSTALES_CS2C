// iterationMapping.js

// Prompt the user to input the Max Limit of the Loops
let maxLimit = 2;

// Convert the input to a number
maxLimit = Number(maxLimit);

// Initialize the counters
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // Calculate the added value
        let addedValue = i + j;

        // Log the current loop points and added value to the console
        console.log(`[${i}] [${j}] Added value is ${addedValue}`);

        // Break condition: stop if the added value exceeds 5 (for example)
        if (addedValue > 5) {
            console.log("Added value exceeded 5. Exiting loops.");
            break; // Exit the inner loop
        }
    }
}
