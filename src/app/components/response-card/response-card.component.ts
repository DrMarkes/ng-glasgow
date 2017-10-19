import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {PatientResponse} from '../../model/patient-response';
import {Criteria} from '../../model/criteria';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.css']
})
export class ResponseCardComponent implements OnInit {
  @Input() response: PatientResponse;
  @Output() onChangedCriteria = new EventEmitter<Criteria>();
  activeCriteria: Criteria;

  constructor() {
  }

  ngOnInit() {

  }

  setCriteria(criteria: Criteria) {
    this.activeCriteria = criteria;
    this.onChangedCriteria.emit(this.activeCriteria);

  }
}
