import {Component, Input, OnInit} from '@angular/core';

import {PatientResponse} from '../../model/patientResponse';

@Component({
  selector: 'app-response-card',
  templateUrl: './response-card.component.html',
  styleUrls: ['./response-card.component.css']
})
export class ResponseCardComponent implements OnInit {
  @Input() response: PatientResponse;

  constructor() { }

  ngOnInit() {

  }

}
