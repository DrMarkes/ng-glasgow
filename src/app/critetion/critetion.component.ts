import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {CriteriesService} from "../services/criteries.service";
import {Criteries} from "../criteries";

@Component({
  selector: 'app-critetion',
  templateUrl: './critetion.component.html',
  styleUrls: ['./critetion.component.css']
})
export class CritetionComponent implements OnInit {
  @Input() title: string;
  @Output() onChangeScore = new EventEmitter();
  crits: Criteries[];
  score = 0;

  constructor(private critService: CriteriesService) { }

  ngOnInit() {
    this.crits = this.critService.getCriteries(this.title);
  }

  getScore(crit: Criteries) {
    this.score = crit.score;
    this.onChangeScore.emit(this.score);
  }
}
