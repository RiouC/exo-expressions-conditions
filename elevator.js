const chalk = require('chalk');


let currentFloor = -2;
let targetFloor = 7;


const alreadyFloor = (desiredFloor) => {
    console.log(chalk.hex('#DEADED').bold(`You are already on floor number ${desiredFloor}.`));
}

const arrived = (desiredFloor) => {
    console.log(chalk.green(`You are arrived to floor number ${desiredFloor}.`));
}


if (currentFloor >= -2 &&
    currentFloor <= 7  &&
    parseInt(currentFloor) == currentFloor) {
    console.log(chalk.yellow(`You were on floor number ${currentFloor}.`));

    switch (targetFloor) {
    case -2:
	(currentFloor === -2) ? alreadyFloor(-2) : arrived(-2);
	break;
    case -1:
	(currentFloor === -1) ? alreadyFloor(-1) : arrived(-1);
	break;
    case 0:
	(currentFloor === 0) ? alreadyFloor(0) : arrived(0);
	break;
    case 1:
	(currentFloor === 1) ? alreadyFloor(1) : arrived(1);
	break;
    case 2:
	(currentFloor === 2) ? alreadyFloor(2) : arrived(2);
	break;
    case 3:
	(currentFloor === 3) ? alreadyFloor(3) : arrived(3);
	break;
    case 4:
	(currentFloor === 4) ? alreadyFloor(4) : arrived(4);
	break;
    case 5:
	(currentFloor === 5) ? alreadyFloor(5) : arrived(5);
	break;
    case 6:
	(currentFloor === 6) ? alreadyFloor(6) : arrived(6);
	break;
    case 7:
	(currentFloor === 7) ? alreadyFloor(7) : arrived(7);
	break;
    default:
	console.log(chalk.red('Please retry with a correct floor'));
    }
} else {
    console.log(chalk.red('Please retry with a correct floor'));
}

