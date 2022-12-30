/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day1 ExercicesXP:Play A Guessing Game
 */

// PARTIE 1

//3-In the JS file, create a function called playTheGame() that takes no parameter.
let userInputNumber;
let compteurTour = 0;
function playTheGame() {
    //3-1- In the function, start by asking the user if they would like to play the game 
    let answer = confirm("Voulez-vous jouer au jeu ?");
    if (answer == false) {
        //3-1-1: If the answer is false, alert “No problem, Goodbye”.
        alert("Aucun problème, Au revoir.")
    } else {
        //3-1-2:If his answer is true, follow these steps

        //3-1-2-1: Ask the user to enter a number between 0 and 10
        //You then have to check the validity of the user’s number :
        //userInputNumber = prompt("Entrer un nombre en 0 et 10.");
        //if (checkNumberValidity(userInputNumber, true)) {
        checkNumberValidityBonus();
        //create a variable named computerNumber where the value is a random number between 0 and 10
        //Make sure that the number is rounded.
        let computerNumber = Math.round(Math.random() * 10);
        console.log("computerNumber: " + computerNumber);

        compareNumbers(Math.round(parseFloat(userInputNumber)), computerNumber);

        //}

    }
}

/**
 * Vérifie la validité d'un nombre saisi à l'ecran
 * en fonction de certaines contraintes
 * @param userInputNumber 
 * 
 * @returns true si tout est correcte et false sinon
 */
function checkNumberValidity(userInputNumber, alertRetour) {
    if (userInputNumber != null) {
        //If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
        if (isNaN(userInputNumber)) {
            if (alertRetour) alert("Désolé, ce n'est pas un nombre, Au revoir.")
        } else if (parseFloat(userInputNumber) < 0 || parseFloat(userInputNumber) > 10) {
            //If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
            if (alertRetour) alert("Désolé, le nombre est incorrecte, Au revoir.")
        } else {
            return true;
        }
    }
    return false;
}

function checkNumberValidityBonus() {
    do {
        userInputNumber = prompt("Entrer un nombre entre 0 et 10");

    } while (!checkNumberValidity(userInputNumber, false));
}

// Partie 2

//Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) 
//2- that takes 2 parameters : userNumber and computerNumber
/**
 * Check if the userNumber is the same as the computeNumber
 * @param userNumber 
 * @param computerNumber 
 */
function compareNumbers(userNumber, computerNumber) {
    compteurTour++;
    console.log("compteurTour " + compteurTour);
    //2-1: If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
    if (userNumber == computerNumber) {
        alert("GAGNÉ");
        compteurTour = 0;
    } else if (compteurTour == 3) {
        //II-4: If the user guessed more than 3 times, alert “out of chances” and exit the function.
        alert("Nombre d'essai dépassé!");
        compteurTour = 0;
    } else if (userNumber > computerNumber) {
        //2-2: If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again”
        userInputNumber = prompt("Votre nombre est plus grand que celui généré par l'ordinateur, \nVeuillez recommencer svp!");
        if (checkNumberValidity(userInputNumber, true)) {
            compareNumbers(userInputNumber, computerNumber);
        }
    } else {
        //2-3: If userNumber is lower than computerNumber, alert “Your number is lower then the computer’s, guess again”
        userInputNumber = prompt("Votre nombre est plus petit que celui généré par l'ordinateur, \nVeuillez recommencer svp!")
        if (checkNumberValidity(userInputNumber, true)) {
            compareNumbers(userInputNumber, computerNumber);
        }
    }

}