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

//1.2. Метод startNewGame должен инициализировать пустое игровое поле и сообщать о начале новой игры.
   
    startNewGame() {
        this.board = this.initBoard();
        console.log("New Game started");
    }

//1.3. Метод displayBoard должен выводить текущее состояние игрового поля.

    displayBoard() {
        console.log("current board state");
        for(let row of this.board){
            console.log(row.join(' '));
        }
        console.log('---------------------');
    }

    play(){
        this.startNewGame();
        
    }
}



// Шаг 2: Создание объекта Player
// 2.1. Создай класс Player с конструктором. В конструкторе определи свойство, которое будет представлять знак игрока (X или O).

class Player {
    constructor(symbol) {
        this.playerType = symbol;
    }

// 2.2. Метод makeMove должен принимать координаты (ряд и столбец) от игрока и вносить его знак на игровое поле.

    makeMove(row, col) {
        game.board[row][col] = this.playerType;
    }
// 2.3. Метод getMove должен запрашивать у игрока ввод координат для совершения хода.

    getMove() {
       const row = +prompt('Enter coordinates of row: ' );
       const col = +prompt('Enter coordinates of collumn: ');
       return {row, col};
    }
}




// Шаг 3: Взаимодействие между объектами Game и Player
// 3.1. Метод play в классе Game должен содержать основной цикл игры, в котором 
//      Bызываются методы makeMove и getMove для каждого игрока.
// 3.2. После каждого хода вызывай метод displayBoard для отображения текущего состояния игрового поля.
// 3.3. Проверяй выигрышные комбинации после каждого хода и объявляй победителя или ничью.
const game = new Game();
game.startNewGame();
game.displayBoard();
