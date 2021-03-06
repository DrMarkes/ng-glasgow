import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PatientResponse} from '../../model/patient-response';
import {DataService} from '../../services/data.service';
import {Criteria} from '../../model/criteria';


@Component({
  selector: 'app-root',
  templateUrl: './response-container.component.html',
  styleUrls: ['./response-container.component.css']
})
export class ResponseContainerComponent implements OnInit {
  patientResponses: PatientResponse[];
  result = new Map<string, number>();

  constructor(private responseService: DataService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.responseService.getResponse()
      .subscribe(responses => {
        this.patientResponses = responses;
      });
  }

  setCriteria(criteria: Criteria) {
    let key = criteria.mark;
    this.result.set(key, criteria.score);
  }

  onClickResult() {
    this.responseService.setResult(this.result);
    this.router.navigate(['/result']);
  }

}
