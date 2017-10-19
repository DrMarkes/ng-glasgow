import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {DataService} from './data.service';
import {PatientResponse} from '../model/patient-response';
import {RESPONSES} from '../mock/response-mock';

@Injectable()
export class MockDataService extends DataService{

  private patientResponses: BehaviorSubject<PatientResponse[]>;
  private result: BehaviorSubject<Map<string, number>>;

  constructor() {
    super();
    this.patientResponses = new BehaviorSubject(RESPONSES);
    this.result = new BehaviorSubject(new Map<string, number>());
  }

  getResponse(): Observable<PatientResponse[]> {
    return this.patientResponses.asObservable();
  }

  setResult(result: Map<string, number>): void {
    this.result.next(result);
  }

  getResult(): Observable<Map<string, number>> {
    return this.result.asObservable();
  }
}
