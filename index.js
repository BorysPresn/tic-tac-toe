// Шаг 1: Создание объекта Game
//1.1. Создай класс Game с конструктором. В конструкторе определи свойство, которое будет представлять 
//     игровое поле (например, двумерный массив 3x3 для крестиков-ноликов).

class Game {
    constructor() {
        this.board = this.initBoard()
        
    }
    initBoard() {
        const board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        return board;
    }

    startNewGame() {
        this.board = this.initBoard();
        console.log("New Games started, field was reseted");
    }

    displayBoard() {
        console.log("current board state");
        for(let row of this.board){
            console.log(row.join(' '));
        }
        console.log('---------------------');
    }
}

const game = new Game();
game.startNewGame();
game.displayBoard();
//1.2. Метод startNewGame должен инициализировать пустое игровое поле и сообщать о начале новой игры.
//1.3. Метод displayBoard должен выводить текущее состояние игрового поля.