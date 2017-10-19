import {Component, OnInit} from '@angular/core';

import {PatientResponse} from '../../model/patient-response';
import {ResponseService} from '../../services/response.service';
import {Criteria} from '../../model/criteria';
import {ResultGlasgow} from '../../model/result-glasgow';


@Component({
  selector: 'app-root',
  templateUrl: './response-container.component.html',
  styleUrls: ['./response-container.component.css']
})
export class ResponseContainerComponent implements OnInit {
  patientResponses: PatientResponse[];
  result: ResultGlasgow;

  constructor(private responseService: ResponseService) {
    this.result = new ResultGlasgow();
  }

  ngOnInit(): void {
    this.responseService.getResponse()
      .subscribe(responses => {
        this.patientResponses = responses;
      });
  }

  setCriteria(criteria: Criteria) {
    let key = criteria.mark;
    let score = criteria.score;
    switch (key) {
      case 'E':
        this.result.E = score;
        break;
      case 'V':
        this.result.V = score;
        break;
      case 'M':
        this.result.M = score;
        break;
    }

    console.log(this.result);
  }

}
