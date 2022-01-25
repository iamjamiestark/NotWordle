// JavaScript Document

let wordList = ['wares',
    'mount',
    'crust',
    'brown',
    'smite',
    'knock',
    'throw',
    'tired',
    'windy',
    'bluff',
    'lying',
    'manic',
    'dream',
    'guide',
    'aloof',
    'there',
    'coral',
    'chill',
    'roost',
    'globe',
    'probe',
    'serve',
    'legal',
    'build',
    'board',
    'slide',
    'adult',
    'adore',
    'print',
    'foyer',
    'diced',
    'match',
    'folly',
    'bingo',
    'talon',
    'kayak',
    'smash',
    'leave',
    'swing',
    'steal',
    'cable',
    'abyss',
    'doubt',
    'climb',
    'pupil',
    'gland',
    'idiom',
    'amend',
    'frame',
    'upset',
    'dwarf',
    'heady',
    'eagle',
    'smart',
    'atlas',
    'sauna',
    'while',
    'tinge',
    'blush',
    'muddy',
    'stick',
    'dummy',
    'swift',
    'dummy',
    'flake',
    'actor',
    'tumor',
    'whine',
    'wrong',
    'welsh',
    'dazed',
    'filet',
    'cramp',
    'muddy',
    'spark',
    'award',
    'stain',
    'court',
    'swarm',
    'amber',
    'genie',
    'leper',
    'taker',
    'noble',
    'shove',
    'bayou',
    'vital',
    'matte',
    'drain',
    'medal',
    'curse']

let keyboard = [q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m];
let num = Math.floor(Math.random() * wordList.length)
let answer = wordList[num].toUpperCase();
let isCorrect = false;
let guess = [];
let attempts = 1;
let inputs = document.getElementsByClassName('char');

Array.from(inputs).forEach(function (chars) {
    chars.addEventListener("keyup", function (event) {
        if (chars.value.length) {
            if (document.activeElement.id != 'a' + attempts + 'c5') {
                chars.nextElementSibling.focus();
            }
        };
    })
});

Array.from(inputs).forEach(function (chars) {
    chars.addEventListener("keyup", function (event) {
        if (event.keyCode === 8 || event.keyCode === 37) {
            chars.previousElementSibling.focus();
        };
    })
});

const newAttempt = () => {
    guess = [];
    if (attempts < 6) {
        attempts++;
    }
    document.getElementById('a' + attempts + 'c1').focus();
};

const checkLetters = () => {

    for (i = 0; i < answer.length; i++) {
        for (j = 0; j < answer.length; j++) {
            if (answer[i] == guess[j]) {
                document.getElementById('a' + attempts + 'c' + (j + 1)).classList.add('containsLetter');
                document.getElementById(answer[i].toLowerCase()).classList.add('containsLetter');
                break
            }
        }
    }

    for (i = 0; i < answer.length; i++) {
        if (guess[i] == answer[i]) {
            document.getElementById('a' + attempts + 'c' + (i + 1)).classList.add('correctLetter');
            document.getElementById(answer[i].toLowerCase()).classList.add('correctLetter');
        }
    }

    for (i = 0; i < answer.length; i++) {
        if (document.getElementById(guess[i].toLowerCase()).classList.contains('correctLetter') || document.getElementById(guess[i].toLowerCase()).classList.contains('containsLetter')) {
            continue
        } else {
            document.getElementById(guess[i].toLowerCase()).classList.add('wrongLetter');
        }
    }

}



const checkAnswer = () => {

    for (i = 1; i <= 5; i++) {
        let char = document.getElementById('a' + attempts + 'c' + i).value;

        if (char.length != 0) {
            guess.push(char);
        } else {
            console.log("Missing character");
            document.getElementById('a' + attempts + 'c1').focus();
            return;
        }
    }

    checkLetters();

    if (guess.join('') == answer) {
        isCorrect = true;
        document.getElementById('game-finished').textContent = "Congratulations, you answered correctly!"
        console.log("Correct");
    } else {
        if (attempts < 6) {
            console.log("Wrong");
            newAttempt();
        } else {
            isCorrect = false;
            document.getElementById('game-finished').textContent = "Unlucky, the correct answer is " + answer;
        }
    }

};

const reloadPage = () => {
    location.reload();
}