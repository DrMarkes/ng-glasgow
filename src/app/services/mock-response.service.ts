import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {ResponseService} from './response.service';
import {PatientResponse} from '../model/patientResponse';
import {RESPONSES} from '../mock/response-mock';

@Injectable()
export class MockResponseService extends ResponseService{
  private patientResponses: BehaviorSubject<PatientResponse[]>;

  constructor() {
    super();
  }

  getResponse(): Observable<PatientResponse[]> {
    this.patientResponses = new BehaviorSubject(RESPONSES);
    return this.patientResponses.asObservable();
  }

}
