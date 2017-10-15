import {Component, OnInit} from '@angular/core';

import {PatientResponse} from './model/patientResponse';
import {ResponseService} from './services/response.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  patientResponses: PatientResponse[];

  constructor(private responseService: ResponseService) {
  }

  ngOnInit(): void {
    this.responseService.getResponse()
      .subscribe(responses => {
        this.patientResponses = responses;
      });
  }

}
