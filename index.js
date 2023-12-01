// Шаг 1: Создание объекта Game
//1.1. Создай класс Game с конструктором. В конструкторе определи свойство, которое будет представлять 
//     игровое поле (например, двумерный массив 3x3 для крестиков-ноликов).

class Game {
    constructor() {
        this.board = this.initBoard()
        this.winner = null;
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
        this.winner = null;
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
// Шаг 3: Взаимодействие между объектами Game и Player
// 3.1. Метод play в классе Game должен содержать основной цикл игры, в котором 
//      Bызываются методы makeMove и getMove для каждого игрока.
// 3.2. После каждого хода вызывай метод displayBoard для отображения текущего состояния игрового поля.
// 3.3. Проверяй выигрышные комбинации после каждого хода и объявляй победителя или ничью.
    
    checkWinner() {
        const board = this.board;

        for(let i = 0; i < 3; i++){
            if(board[0][i] === board[1][i] && board[1][i] === board[2][i]) { //checking vertical lines
                return board[0][i];
            }
            if(board[i][0] === board[i][1] && board[i][1] === board[i][2]) { // checking horizontal lines
                return board[i][0];
            }
        }
        return null;
    }

    play(){
        this.startNewGame();
        while(this.winner === null) {
            let move1 = player1.getMove();
            player1.makeMove(move1);
            this.displayBoard();
            if(this.checkWinner()){
                this.winner = player1.playerType;
                console.log(`Player ${this.winner} win!!!`);
                return;
            };
            let move2 = player2.getMove();
            player2.makeMove(move2);
            this.displayBoard();
            if(this.checkWinner()){
                this.winner = player2.playerType;
                console.log(`Player ${this.winner} win!!!`);
                return;
            };
        }

    }
}



// Шаг 2: Создание объекта Player
// 2.1. Создай класс Player с конструктором. В конструкторе определи свойство, которое будет представлять знак игрока (X или O).

class Player {
    constructor(symbol, game) {
        this.playerType = symbol;
        this.game = game;
    }

// 2.2. Метод makeMove должен принимать координаты (ряд и столбец) от игрока и вносить его знак на игровое поле.

    makeMove({row, col}) {
        this.game.board[row][col] = this.playerType; // insert a player symbol to the game board (X or O)
    }
// 2.3. Метод getMove должен запрашивать у игрока ввод координат для совершения хода.

    getMove() {
       const row = parseInt(prompt('Enter coordinates of row: '));
       const col = parseInt(prompt('Enter coordinates of column:'));
       return {row, col};
    }
}





const game = new Game();
const player1 = new Player("X", game);
const player2 = new Player("O", game);
game.play();