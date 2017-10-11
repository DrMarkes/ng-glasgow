import {Component, OnInit} from '@angular/core';

import {Response} from "../response";
import {ResponseService} from "../services/response.service";

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.css']
})
export class ResponseCardComponent implements OnInit {
  responses: Response[];
  EScore = 0;
  VScore = 0;
  MScore = 0;
  total: number;

  constructor(private res: ResponseService) { }

  ngOnInit() {
    this.responses = this.res.getResponse();
  }

  getScore($event: number, resTitle: string) {
    switch (resTitle) {
      case 'E': this.EScore = $event; break;
      case 'V': this.VScore = $event; break;
      case 'M': this.MScore = $event;
    }
    this.countScore();
  }

  countScore() {
    this.total = this.EScore + this.VScore + this.MScore;
  }

}
