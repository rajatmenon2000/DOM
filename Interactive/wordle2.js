/*JavaScript function
implementing a wordle game*/

function wordle(target, guess) {
    let arr = [];
    if (target.length == 5 && guess.length == 5) {
        if (target.charAt(0) == guess.charAt(0)) {
            arr[0] = 2;
        }
        else if (target.includes(guess.charAt(0)) && target.charAt(0) != guess.charAt(0)) {
            arr[0] = 1;
        }
        else {
            arr[0] = 0;
        }
        if (target.charAt(1) == guess.charAt(1)) {
            arr[1] = 2;
        }
        else if (target.includes(guess.charAt(1)) && target.charAt(1) != guess.charAt(1)) {
            arr[1] = 1;
        }
        else {
            arr[1] = 0;
        }
        if (target.charAt(2) == guess.charAt(2)) {
            arr[2] = 2;
        }
        else if (target.includes(guess.charAt(2)) && target.charAt(2) != guess.charAt(2)) {
            arr[2] = 1;
        }
        else {
            arr[2] = 0;
        }
        if (target.charAt(3) == guess.charAt(3)) {
            arr[3] = 2;
        }
        else if (target.includes(guess.charAt(3)) && target.charAt(3) != guess.charAt(3)) {
            arr[3] = 1;
        }
        else {
            arr[3] = 0;
        }
        if (target.charAt(4) == guess.charAt(4)) {
            arr[4] = 2;
        }
        else if (target.includes(guess.charAt(4)) && target.charAt(4) != guess.charAt(4)) {
            arr[4] = 1;
        }
        else {
            arr[4] = 0;
        }
        console.log(arr);
    }

    else {
        result = "Both arguments must be length of 5 letters!";
        console.log(result);
    }
}
