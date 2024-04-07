let playGame = true;

while (playGame) {

    let flag = 0
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 5;

    while (attempts > 0) {
        let guess = prompt("Угадайте число от 1 до 10. У вас осталось " + attempts + " попыток.");

        // Отмена
        if (guess === null) {
            alert("Игра окончена.");
            attempts = 0; // Завершаем игру
            break;
        }

        // Корректность
        if (isNaN(guess) || guess.trim() === "") {
            alert("Пожалуйста, введите числовое значение.");
            continue;
        }

        guess = parseInt(guess);

        if (guess === randomNumber) {
            attempts = 0;
            flag = 1
            break;
        } else if (guess < randomNumber) {
            alert("Загаданное число больше.");
        } else {
            alert("Загаданное число меньше.");
        }

        attempts--;
    }

    if (attempts === 0 && flag === 0) {
        // Если проиграл
        let playAgain = confirm("Вы проиграли. Хотите сыграть еще раз?");
        if (!playAgain) {
            playGame = false;
        }
    } else if (attempts === 0 && flag === 1){
        // Если выйграл
        let playAgain = confirm("Вы выйграли!!!. Хотите сыграть еще раз?");
        if (!playAgain) {
            playGame = false;
        }
    }
}
