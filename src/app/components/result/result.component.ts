import {Component, OnInit} from '@angular/core';

import {ResponseService} from '../../services/response.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result = new Map<string, number>();
  total = 0;
  description: string;

  constructor(private responseService: ResponseService) {
  }

  ngOnInit() {
    this.getResult();
    this.countTotal();
    this.setDescription();
  }

  private getResult() {
    this.responseService.getResult().subscribe(result => {
      this.result = result;
    });
  }

  countTotal() {
    this.result.forEach(value => {
      this.total += value;
    });
  }

  setDescription() {
    switch (this.total) {
      case 3:
        this.description = 'запредельная кома, смерть мозга';
        break;
      case 4:
        this.description = 'запредельная кома, смерть мозга';
        break;
      case 5:
        this.description = 'глубокая кома';
        break;
      case 6:
        this.description = 'глубокая кома';
        break;
      case 7:
        this.description = 'умеренная кома';
        break;
      case 8:
        this.description = 'умеренная кома';
        break;
      case 9:
        this.description = 'сопор';
        break;
      case 10:
        this.description = 'сопор';
        break;
      case 11:
        this.description = 'сопор';
        break;
      case 12:
        this.description = 'глубокое оглушение';
        break;
      case 13:
        this.description = 'умеренное оглушение';
        break;
      case 14:
        this.description = 'легкое оглушение';
        break;
      case 15:
        this.description = 'сознание ясное';
        break;
    }
  }
}
