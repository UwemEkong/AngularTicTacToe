import { Injectable } from '@angular/core';
import {Cell} from "../components/square/Cell";

@Injectable({
  providedIn: 'root'
})
export class CheckWinnerService {

  public horizontalWinner:Boolean = false;
  verticalWinner:Boolean = false;
  leftDiagWinner:Boolean = false;
  rightDiagWinner:Boolean = false;
  gameReset:Boolean = false;
  turn:string = "X";
  newGame:Boolean = false;
  public winnerMessage = "";

  public board:String[][] = [["","",""]
    ,["","",""],
    ["","",""]]

  checkWinner(): Boolean {

    this.horizontalWinner = this.checkHorizontalWinner();
    this.verticalWinner = this.checkVerticalWinner();
    this.leftDiagWinner = this.checkLeftDiagWinner();
    this.rightDiagWinner = this.checkRightDiagWinner();

    return this.horizontalWinner || this.verticalWinner || this.leftDiagWinner || this.rightDiagWinner;
  }

  constructor() { }

  checkHorizontalWinner(): Boolean {
    for (let i = 0; i < this.board.length; i++) {
     if (this.board[i][0] == this.turn && this.board[i][1] == this.turn && this.board[i][2] == this.turn ) {
        return true;
     }
    }
    return false;
  }

  checkVerticalWinner(): Boolean {
    for (let i = 0; i < this.board[0].length; i++) {
      if (this.board[0][i] == this.turn && this.board[1][i] == this.turn && this.board[2][i] == this.turn ) {
        return true;
      }
    }
    return false;
  }

  checkLeftDiagWinner(): Boolean {
   if (this.board[0][0] == this.turn && this.board[1][1] == this.turn && this.board[2][2]) {
      return true;
   }
    return false;
  }

  checkRightDiagWinner(): Boolean {
    if (this.board[0][2] == this.turn && this.board[1][1] == this.turn && this.board[2][0]) {
      return true;
    }
    return false;
  }

  updateTurn() {
    if (this.turn == "X") {
      this.turn = "O";
    } else {
      this.turn = "X"
    }
  }

  updateBoard(cell: Cell) {
    this.board[cell.row][cell.col] = this.turn;
    this.gameReset = false;
    this.updateWinner();
    this.newGame = false;
  }

  private updateWinner() {
    if (this.checkWinner()) {
      this.winnerMessage = (this.turn + "'s WON THE GAME!");
    }
  }

  resetGame() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        this.board[i][j] = "";
      }
    }
    this.winnerMessage = "";
    this.gameReset = true;
    this.newGame = true;
    this.turn = "X";
  }


}
