import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../square/Cell";
import{CheckWinnerService} from "../../Services/check-winner.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public boardSize: number[] = [0, 0, 0];

  constructor(public checkWinnerService: CheckWinnerService) {

  }

  ngOnInit(): void {
  }

}
