let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("score-home");
let guestScoreEl = document.getElementById("score-guest");

// Button elements
let point1HomeEl = document.getElementById("point-1-home");
let point2HomeEl = document.getElementById("point-2-home");
let point3HomeEl = document.getElementById("point-3-home");
let point1GuestEl = document.getElementById("point-1-guest");
let point2GuestEl = document.getElementById("point-2-guest");
let point3GuestEl = document.getElementById("point-3-guest");

// Button values (same for both teams)
const POINTS_1 = 1;
const POINTS_2 = 2;
const POINTS_3 = 3;

// Display initial scores
homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

// Single event listener function for all buttons
function addPoints(event) {
    const buttonId = event.target.id;
    
    // Determine points based on button ID
    let points;
    if (buttonId.includes("1")) points = POINTS_1;
    else if (buttonId.includes("2")) points = POINTS_2;
    else if (buttonId.includes("3")) points = POINTS_3;

    // Add points to the correct team
    if (buttonId.includes("home")) {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (buttonId.includes("guest")) {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
}

// Add the same listener to all buttons
point1HomeEl.addEventListener("click", addPoints);
point2HomeEl.addEventListener("click", addPoints);
point3HomeEl.addEventListener("click", addPoints);
point1GuestEl.addEventListener("click", addPoints);
point2GuestEl.addEventListener("click", addPoints);
point3GuestEl.addEventListener("click", addPoints);

