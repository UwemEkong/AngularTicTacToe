import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cell} from "./Cell";
import {CheckWinnerService} from "../../Services/check-winner.service";

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  public squareVal = "";
  @Input() turn: string;
  @Input() col = 0;
  @Input() row = 0;
  @Input() val = "";

  @Output() squareClickEvent = new EventEmitter<Cell>();

  constructor(public checkWinnerService: CheckWinnerService) {
    this.turn = "";
  }

  ngOnInit(): void {
  }



  updateVal() {
      this.squareClickEvent.emit(new Cell(this.row, this.col));
      this.squareVal = this.checkWinnerService.turn;
    }

  getVal(): string {
    if (this.checkWinnerService.newGame) {
      this.squareVal = ""
    }
    return this.squareVal;
  }
}

