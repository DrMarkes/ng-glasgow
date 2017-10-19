import { Component, OnInit } from '@angular/core';

import {ResponseService} from '../../services/response.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result = new Map<string, number>();

  constructor(private responseService: ResponseService) { }

  ngOnInit() {
    this.getResult();
  }

  private getResult() {
    this.responseService.getResult().subscribe(result => {
      this.result = result;
    });
  }
}
